import React,{ useState, } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthProvider';

interface PersonalDetailsFormProps {
    setActive: React.Dispatch<React.SetStateAction<'personal' | 'other' | 'require'>>;
}

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({ setActive }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        nationalId: '',
        zip: '',
        region: '',
        file: null as File | null
    });
    const [error, setError] = useState('');

    const { user } = useAuth();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, files } = e.target;
        if (files) {
            setFormData({ ...formData, file: files[0] });
        } else {
            setFormData({ ...formData, [id]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!formData.file) {
            setError('Please upload a photo.');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:4000/api/v1/form/create/', {
                userId: user?.id,
                ...formData,
                file: undefined  // Exclude file from this request
            });

            await handlePhotoUpload(response.data._id);
            setActive('other');
        } catch (err) {
            handleError(err);
        } finally {
            setLoading(false);
        }
    }

    const handlePhotoUpload = async (formId: string) => {
        if (!formData.file) return;

        const uploadData = new FormData();
        uploadData.append('file', formData.file);
        uploadData.append('imageType', 'passport');
        uploadData.append('formId', formId);

        try {
            await axios.post('http://13.60.77.227:4000/api/v1/form/upload', uploadData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setActive('other');
        } catch (err) {
            handleError(err);
        }
    };

    const handleError = (err: any) => {
        if (axios.isAxiosError(err) && err.response) {
            setError(err.response.data.message || 'An unexpected error occurred');
        } else {
            setError('An unexpected error occurred');
        }
        console.error('Error during submission:', err);
    };

    const inputClass = "w-full rounded-md border px-4 py-2 focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-green-600 border-gray-300";

    return (
        <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12 mb-12 px-4">
            <div className="grid grid-cols-4 gap-6 rounded-md shadow-sm bg-gray-50">
                <div className="space-y-2 col-span-full lg:col-span-1 text-center mb-2">
                    <h1 className="mb-2 font-bold text-lg">Add your personal Details</h1>
                    <p className="text-medium">You can update your personal details after account creation</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 p-6">
                    {[
                        { label: "First name", id: "firstName", type: "text", required: true },
                        { label: "Last name", id: "lastName", type: "text", required: true },
                        { label: "Email", id: "email", type: "email", required: true },
                        { label: "Phone", id: "phone", type: "tel", required: true },
                        { label: "Address", id: "address", type: "text", required: true },
                        { label: "National ID", id: "nationalId", type: "text" },
                        { label: "Region", id: "region", type: "text" },
                        { label: "ZIP / Postal", id: "zip", type: "number" }
                    ].map(({ label, id, type, required }) => (
                        <div key={id} className={`col-span-full ${["firstName", "lastName", "email", "phone"].includes(id) ? "sm:col-span-3" : "sm:col-span-2"}`}>
                            <label htmlFor={id} className="text-sm">
                                {label} {required && <span className="text-red-500">*</span>}
                            </label>
                            <input
                                id={id}
                                type={type}
                                value={formData[id as keyof typeof formData] as string}
                                onChange={handleChange}
                                required={required}
                                className={inputClass}
                                disabled={loading}
                            />
                        </div>
                    ))}
                    <div className="col-span-full">
                        <label htmlFor="photo" className="text-sm">Photo</label>
                        <div className="flex items-center space-x-2">
                            {formData.file ? (
                                <img src={URL.createObjectURL(formData.file)} alt="uploaded" className="w-10 h-10 rounded-full bg-gray-300" />
                            ) : (
                                <img src="https://source.unsplash.com/30x30/?random" alt="placeholder" className="w-10 h-10 rounded-full bg-gray-300" />
                            )}
                            <input
                                id="photo"
                                type="file"
                                accept="image/*"
                                onChange={handleChange}
                                className="px-4 py-2 border rounded-md border-gray-300"
                                disabled={loading}
                            />
                        </div>
                    </div>
                    {error && <div className="col-span-full text-red-500">{error}</div>}
                    <div className="col-span-full mt-8">
                        <button
                            type="submit"
                            className={`relative w-full px-4 py-2 rounded-lg text-white font-bold ${loading ? 'bg-gray-400' : 'bg-green-800'}`}
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Next'}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PersonalDetailsForm;
