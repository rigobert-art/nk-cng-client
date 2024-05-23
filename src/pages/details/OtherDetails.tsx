import React, { useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Dialog from '../../components/Model'

interface OtherDetailsFormProps {
    setActive: React.Dispatch<React.SetStateAction<'personal' | 'other' | 'require'>>;
}

// upload image of 
//   1. Original vehicle registration card
//   2. Copy of NIDA Identification Card
//   3. Identification letter from local government
//   4. Identification letter of guarantor (mdhamini) from local government
//   5. Identification letter of guarantor (mdhamini) with permanent contract from government or private sector.
//   6. Copy of NIDA of guarantor (mdhamini)

interface OtherDetailsFormProps {
    setActive: React.Dispatch<React.SetStateAction<'personal' | 'other' | 'require'>>;
}

const OtherDetailsForm: React.FC<OtherDetailsFormProps> = ({ setActive }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);
    const navigate = useNavigate();

    const [files, setFiles] = useState<{ [key: string]: File | null }>({
        nationalId: null, // imageType: "national_id"
        registration: null, // imageType: "registration"
        localGovLetter: null, // imageType: "local_gov_letter"
        guarantorLetter: null, // imageType: "guarantor_letter"
        guarantorContract: null, // imageType: "guarantor_contract"
        guarantorNida: null, // imageType: "guarantor_nida"
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileKey: string) => {
        if (e.target.files && e.target.files[0]) {
            setFiles(prevFiles => ({
                ...prevFiles,
                [fileKey]: e.target.files![0],
            }));
        }
    };

    const handleImageSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const formData = new FormData();
            for (const key in files) {
                if (files[key]) {
                    formData.append('file', files[key] as Blob);
                    formData.append('formId', ""); // Replace with actual form ID
                    formData.append('imageType', key);

                    await axios.post('http://13.60.77.227:4000/api/v1/image/upload', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                }
            }
            setDialogOpen(true);
            
        } catch (err) {
            setError('An error occurred while uploading files');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    const renderFileUpload = (fileKey: string, label: string) => (
        <div className="col-span-full h-40 rounded-lg border-2 border-dashed flex items-center justify-center">
            
                {files[fileKey] ? (
                    <img src={URL.createObjectURL(files[fileKey] as File)} alt="" className="w-full h-full p-4 mx-auto rounded" />
                ) : (
                    <label htmlFor={fileKey} className="cursor-pointer text-center p-4 md:p-8">
                    <FiUploadCloud stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mx-auto" />
                      <p className="mt-3 text-gray-700 max-w-xs mx-auto">Click to <span className="font-medium text-indigo-600">{label}</span> or drag and drop your file here</p>
                    </label>
                )}
              
            
            <input id={fileKey} type="file" onChange={(e) => handleFileChange(e, fileKey)} className="hidden" />
        </div>
    );

    const handleAccept = () => {
        navigate('/home');
    };

    const handleCancel = () => {
        setActive('personal');
    };

    return (
        <>
        <form onSubmit={handleImageSubmit} className="container flex flex-col mx-auto space-y-12 px-4 mb-12">
            <div className="grid grid-cols-4 gap-6 rounded-md shadow-sm bg-gray-50">
                <div className="space-y-2 col-span-full lg:col-span-1 text-center mb-2">
                    <h1 className="mb-2 font-bold text-lg">Upload your attachment here</h1>
                    <p className="break-words text-medium">You can upload relevant documents here</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 p-6">
                    {renderFileUpload('nationalId', 'Upload your National ID')}
                    {renderFileUpload('registration', 'Upload your Vehicle Registration Card')}
                    {renderFileUpload('localGovLetter', 'Upload your Identification Letter from Local Government')}
                    {renderFileUpload('guarantorLetter', 'Upload your Guarantor Letter from Local Government')}
                    {renderFileUpload('guarantorContract', 'Upload your Guarantor Contract')}
                    {renderFileUpload('guarantorNida', 'Upload your Guarantor NIDA ID')}
                </div>
            </div>
            <button type="submit" className="relative w-full bg-green-800 px-4 py-2 rounded-lg text-white font-bold">
                Next
            </button>
        </form>
        <Dialog
            isOpen={dialogOpen}
            onClose={() => setDialogOpen(false)}
            onAccept={handleAccept}
            onCancel={handleCancel}
      />
      </>
    );
};

export default OtherDetailsForm;