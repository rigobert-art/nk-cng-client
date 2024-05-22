import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';

interface OtherDetailsFormProps {
    setActive: React.Dispatch<React.SetStateAction<'personal' | 'other' | 'require'>>;
}

const OtherDetailsForm: React.FC<OtherDetailsFormProps> = ({ setActive }) => {
    return (
        <form className='container flex flex-col mx-auto space-y-12 px-4 mb-12'>
            <div className="grid grid-cols-4 gap-6 rounded-md shadow-sm dark:bg-gray-50">
                <div className="space-y-2 col-span-full lg:col-span-1 text-center mb-2">
                    <h1 className='mb-2 font-bold text-lg'>Upload your attachment here</h1>
                    <p className='break-words text-medium'>You can upload relevant documents here</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 p-6">
                    <div className="col-span-full h-40 rounded-lg border-2 border-dashed flex items-center justify-center">
                        <label htmlFor="file" className="cursor-pointer text-center p-4 md:p-8">
                            <FiUploadCloud stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mx-auto" />
                            <p className="mt-3 text-gray-700 max-w-xs mx-auto">Click to <span className="font-medium text-indigo-600">Upload your file</span> or drag and drop your file here</p>
                        </label>
                        <input id="file" type="file" className="hidden" />
                    </div>
                    <div className="col-span-full h-40 rounded-lg border-2 border-dashed flex items-center justify-center">
                        <label htmlFor="file" className="cursor-pointer text-center p-4 md:p-8">
                            <FiUploadCloud stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mx-auto" />
                            <p className="mt-3 text-gray-700 max-w-xs mx-auto">Click to <span className="font-medium text-indigo-600">Upload your file</span> or drag and drop your file here</p>
                        </label>
                        <input id="file" type="file" className="hidden" />
                    </div>
                    <div className="col-span-full h-40 rounded-lg border-2 border-dashed flex items-center justify-center">
                        <label htmlFor="file" className="cursor-pointer text-center p-4 md:p-8">
                            <FiUploadCloud stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mx-auto" />
                            <p className="mt-3 text-gray-700 max-w-xs mx-auto">Click to <span className="font-medium text-indigo-600">Upload your file</span> or drag and drop your file here</p>
                        </label>
                        <input id="file" type="file" className="hidden" />
                    </div>
                </div>
            </div>
            <button type="button" onClick={() => setActive('other')} className="relative w-full bg-green-800 px-4 py-2 rounded-lg text-white font-bold">Next</button>
        </form>
    );
};

export default OtherDetailsForm;