import React, { useState, useRef } from 'react';
import { FaCircleInfo } from 'react-icons/fa6';
import axios from 'axios';

interface Guarantor {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    nationalIdFront?: File | null;
    nationalIdBack?: File | null;
    letterFile?: File | null;
}

const MthaminiForm: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLParagraphElement>(null);

    const [guarantors, setGuarantors] = useState<Guarantor[]>([{ firstName: '', lastName: '', email: '', phone: '', nationalIdFront: null, nationalIdBack: null, letterFile: null }]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGuarantorChange = (index: number, field: keyof Guarantor, value: string | File | null) => {
        const updatedGuarantors = [...guarantors];
        updatedGuarantors[index] = { ...updatedGuarantors[index], [field]: value };
        setGuarantors(updatedGuarantors);
    };

    const addGuarantor = () => {
        setGuarantors([...guarantors, { firstName: '', lastName: '', email: '', phone: '', nationalIdFront: null, nationalIdBack: null, letterFile: null }]);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const hasEmptyField = guarantors.some(guarantor =>
            !guarantor.firstName || !guarantor.lastName || !guarantor.email || !guarantor.phone || !guarantor.nationalIdFront || !guarantor.nationalIdBack || !guarantor.letterFile
        );

        if (hasEmptyField) {
            setError('Please fill in all fields for each guarantor and ensure all files are uploaded');
            return;
        }

        try {
            setIsLoading(true);
            const formData = new FormData();
            guarantors.forEach((guarantor, index) => {
                formData.append(`guarantors[${index}][firstName]`, guarantor.firstName);
                formData.append(`guarantors[${index}][lastName]`, guarantor.lastName);
                formData.append(`guarantors[${index}][email]`, guarantor.email);
                formData.append(`guarantors[${index}][phone]`, guarantor.phone);
                formData.append(`guarantors[${index}][nationalIdFront]`, guarantor.nationalIdFront as Blob);
                formData.append(`guarantors[${index}][nationalIdBack]`, guarantor.nationalIdBack as Blob);
                formData.append(`guarantors[${index}][letterFile]`, guarantor.letterFile as Blob);
            });

            const response = await axios.post('http://example.com/api/guarantors', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data.status === 'error') {
                setError(response.data.message);
                setIsLoading(false);
                return;
            }

            // Handle successful submission (e.g., navigate to a different page)
        } catch (err) {
            setError('An unexpected error occurred');
            console.error('Error during form submission:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="container mx-auto p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
                <p ref={errRef} className={error ? "text-red-500" : "text-green-500"} aria-live="assertive">{error}</p>

                <div className="space-y-2 col-span-full lg:col-span-1 text-center mb-12 mt-24">
                    <h1 className="mb-2 font-bold text-lg">Loan request form</h1>
                    <p className="text-medium">Fill maximum of 3 guarantor</p>
                </div>

                {guarantors.map((guarantor, index) => (
                    <div key={index} className="bg-white rounded-md shadow-md p-6 space-y-6">
                        <h2 className="text-lg font-semibold">guarantor {index + 1}</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor={`firstName_${index}`} className="block text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    id={`firstName_${index}`}
                                    name={`firstName_${index}`}
                                    placeholder="First Name"
                                    autoComplete="off"
                                    className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                    value={guarantor.firstName}
                                    onChange={(e) => handleGuarantorChange(index, 'firstName', e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor={`lastName_${index}`} className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    id={`lastName_${index}`}
                                    name={`lastName_${index}`}
                                    placeholder="Last Name"
                                    autoComplete="off"
                                    className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                    value={guarantor.lastName}
                                    onChange={(e) => handleGuarantorChange(index, 'lastName', e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor={`email_${index}`} className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id={`email_${index}`}
                                name={`email_${index}`}
                                placeholder="Email"
                                autoComplete="off"
                                className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                value={guarantor.email}
                                onChange={(e) => handleGuarantorChange(index, 'email', e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor={`phone_${index}`} className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="tel"
                                id={`phone_${index}`}
                                name={`phone_${index}`}
                                placeholder="Phone Number"
                                autoComplete="off"
                                className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                value={guarantor.phone}
                                onChange={(e) => handleGuarantorChange(index, 'phone', e.target.value)}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor={`nationalIdFront_${index}`} className="block text-sm font-medium text-gray-700">National ID Front</label>
                                <input
                                    type="file"
                                    id={`nationalIdFront_${index}`}
                                    name={`nationalIdFront_${index}`}
                                    accept="image/*"
                                    className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                    onChange={(e) => handleGuarantorChange(index, 'nationalIdFront', e.target.files?.[0] || null)}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor={`nationalIdBack_${index}`} className="block text-sm font-medium text-gray-700">National ID Back</label>
                                <input
                                    type="file"
                                    id={`nationalIdBack_${index}`}
                                    name={`nationalIdBack_${index}`}
                                    accept="image/*"
                                    className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                    onChange={(e) => handleGuarantorChange(index, 'nationalIdBack', e.target.files?.[0] || null)}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor={`letterFile_${index}`} className="block text-sm font-medium text-gray-700">Upload Letter (PDF)</label>
                            <input
                                type="file"
                                id={`letterFile_${index}`}
                                name={`letterFile_${index}`}
                                accept="application/pdf"
                                className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={(e) => handleGuarantorChange(index, 'letterFile', e.target.files?.[0] || null)}
                                required
                            />
                        </div>
                    </div>
                ))}

                <button
                    type='button'
                    onClick={addGuarantor}
                    className='w-full bg-green-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500'
                >
                    Add Another Guarantor
                </button>

                <button
                    type='submit'
                    className='w-full bg-green-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500'
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
            </form>
        </section>
    );
}

export default MthaminiForm;