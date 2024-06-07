import React, { useState } from 'react';
import axios from 'axios';
import { FiArrowLeft, FiTool } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface Vehicle {
    make: string;
    model: string;
    year: string;
    vin: string;
    color: string;
    registrationCard: File | null;
}

const VehicleForm: React.FC = () => {
    const [vehicle, setVehicle] = useState<Vehicle>({ make: '', model: '', year: '', vin: '', color: '', registrationCard: null });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleVehicleChange = (field: keyof Vehicle, value: string | File | null) => {
        setVehicle({ ...vehicle, [field]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!vehicle.make || !vehicle.model || !vehicle.year || !vehicle.vin || !vehicle.color || !vehicle.registrationCard) {
            setError('Please fill in all fields and ensure the registration card is uploaded');
            return;
        }

        try {
            setIsLoading(true);
            const formData = new FormData();
            formData.append('make', vehicle.make);
            formData.append('model', vehicle.model);
            formData.append('year', vehicle.year);
            formData.append('vin', vehicle.vin);
            formData.append('color', vehicle.color);
            formData.append('registrationCard', vehicle.registrationCard as Blob);

            const response = await axios.post('http://example.com/api/vehicle', formData, {
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
        <section>
            <form onSubmit={handleSubmit} className='container flex flex-col mx-auto space-y-12 mb-12 px-4'>
                <p className={error ? "text-red-500" : "text-green-500"} aria-live="assertive">{error}</p>

                <div className=''>
                    {/* back button goes here */}
                    <FiArrowLeft className='w-4 h-4 relative *:top-10 *:left-10' />
                    {/* title of the form is passed here */}
                    <div className='flex flex-col px-12 md:items-center justify-center'>
                        <Link to="/guarantor" className='bg-green-700 w-24 h-32 rounded-lg '>
                            <FiTool className='text-white w-16 h-20 m-auto mt-10 cursor-pointer' />
                        </Link>
                        <h1 className='text-2xl font-bold'>Vehicle Details</h1>
                        <p className='text-gray-500'>Please fill out the form below</p>
                        <div className='w-[196px] mt-2  bg-gray-300 h-[4px] rounded-md overflow-hidden'>
                            <div className='bg-green-500 h-full' style={{ width: `${90}%` }}></div>
                        </div>
                    </div>
 
                </div>

                <div className='border-[1px] shadow-md rounded-md grid grid-cols-6 gap-4 col-span-full lg:col-span-3 p-6'>
                    <div className="col-span-6 sm:col-span-3 mb-2">
                        <label>
                            <span className="text-sm text-gray-600">Make
                                <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="text"
                            name="make"
                            placeholder="Make"
                            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={vehicle.make}
                            onChange={(e) => handleVehicleChange('make', e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3 mb-2">
                        <label>
                            <span className="text-sm text-gray-600">Model
                                <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="text"
                            name="model"
                            placeholder="Model"
                            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={vehicle.model}
                            onChange={(e) => handleVehicleChange('model', e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3 mb-2">
                        <label>
                            <span className="text-sm text-gray-600">Year
                                <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="text"
                            name="year"
                            placeholder="Year"
                            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={vehicle.year}
                            onChange={(e) => handleVehicleChange('year', e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3 mb-2">
                        <label>
                            <span className="text-sm text-gray-600">VIN Number
                                <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="text"
                            name="vin"
                            placeholder="VIN Number"
                            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={vehicle.vin}
                            onChange={(e) => handleVehicleChange('vin', e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-span-6 mb-2">
                        <label>
                            <span className="text-sm text-gray-600">Color
                                <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="text"
                            name="color"
                            placeholder="Color"
                            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={vehicle.color}
                            onChange={(e) => handleVehicleChange('color', e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-span-6 mb-2">
                        <label>
                            <span className="text-sm text-gray-600">Registration Card (Image/PDF)
                                <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="file"
                            name="registrationCard"
                            accept="image/*,application/pdf"
                            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            onChange={(e) => handleVehicleChange('registrationCard', e.target.files?.[0] || null)}
                            required
                        />
                    </div>
                </div>

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

export default VehicleForm;
