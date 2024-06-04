import React, { useEffect, useRef, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaCircleInfo } from 'react-icons/fa6';
import validator from 'validator';

const PersonalForm: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [emailFocus, setEmailFocus] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, setLastName] = useState('');
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [phone, setPhone] = useState('');
    const [phoneFocus, setPhoneFocus] = useState(false);

    const [ward, setWard] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [loanType, setLoanType] = useState('Maendeleo Bank Loan');
    const [cylinderSize, setCylinderSize] = useState('');

    const [nationalId, setNationalId] = useState('');
    const [frontId, setFrontId] = useState<File | null>(null);
    const [backId, setBackId] = useState<File | null>(null);

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setError('');
    }, [email, phone, firstName, lastName, nationalId, frontId, backId]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validator.isEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        if (!validator.isMobilePhone(phone, 'any')) {
            setError('Please enter a valid phone number');
            return;
        }

        if (!nationalId || !frontId || !backId) {
            setError('Please fill in all required fields and upload the necessary files');
            return;
        }

        const formData = new FormData();
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('ward', ward);
        formData.append('city', city);
        formData.append('postalCode', postalCode);
        formData.append('loanType', loanType);
        formData.append('cylinderSize', cylinderSize);
        formData.append('nationalId', nationalId);
        formData.append('frontId', frontId);
        formData.append('backId', backId);
    //     console.log(
    //         phone, email, firstName, lastName, ward, city, postalCode, loanType, cylinderSize,
    //  nationalId, frontId, backId
    //     )

        try {
            setIsLoading(true);
            const response = await axios.post('http://13.60.77.227:4000/api/v1/form/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data.status === 'error') {
                setError(response.data.message);
                setIsLoading(false);
                return;
            }

            navigate('/verify');
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                setError(err.response.data.message || 'An unexpected error occurred');
            } else {
                setError('An unexpected error occurred');
            }
            console.error('Error during registration:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section>
            <form onSubmit={handleSubmit} className='container flex flex-col mx-auto space-y-12 mb-12 px-4'>
                <p ref={errRef} className={error ? "text-red-500" : "text-green-500"} aria-live="assertive">{error}</p>

                <div className="space-y-2 col-span-full lg:col-span-1 text-center mb-12 mt-24">
                    <h1 className="mb-2 font-bold text-lg">Loan request form</h1>
                    <p className="text-medium">Fill out this loan form and </p>
                </div>

                <div className='grid grid-cols-6 gap-4 col-span-full lg:col-span-3 p-6'>
                    <div className="col-span-6 sm:col-span-3 mb-2">
                        <label>
                            <span className="text-sm text-gray-600">First Name
                                <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            placeholder="First Name"
                            autoComplete="off"
                            ref={emailRef}
                            aria-describedby="first-name-error"
                            onFocus={() => setFirstNameFocus(true)}
                            onBlur={() => setFirstNameFocus(false)}
                            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3 mb-2">
                        <label>
                            <span className="text-sm text-gray-600">Last Name
                                <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            placeholder="Last Name"
                            autoComplete="off"
                            ref={emailRef}
                            aria-describedby="last-name-error"
                            onFocus={() => setLastNameFocus(true)}
                            onBlur={() => setLastNameFocus(false)}
                            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-span-6 mb-2">
                        <label>
                            <span className="text-sm text-gray-600">Email
                                <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            autoComplete="off"
                            ref={emailRef}
                            aria-describedby="email-error"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <p id="email-error" className={emailFocus && email ? "font-sm border-2 bg-black text-white p-1 relative bottom-[-10px]" : "absolute left-[-9999px]"}>
                            <FaCircleInfo className="inline-block mr-1" />
                            Must be a valid email address.
                        </p>
                    </div>

                    <div className="col-span-6 mb-2">
                        <label>
                            <span className="text-sm text-gray-600">Phone Number (+255)
                                <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            autoComplete='off'
                            ref={emailRef}
                            aria-describedby="phone-note"
                            onFocus={() => setPhoneFocus(true)}
                            onBlur={() => setPhoneFocus(false)}
                            placeholder="+255723424234"
                            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <p id="phone-note" className={phoneFocus && phone ? "font-sm border-2 bg-black text-white p-1 relative bottom-[-10px]" : "absolute left-[-9999px]"}>
                            <FaCircleInfo className="inline-block mr-1" />
                            Must be a valid phone number.
                        </p>
                    </div>

                    <div className="col-span-6 mb-2">
                        <label>
                            <span className="text-sm text-gray-600">National ID Number
                                <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="text"
                            id="national_id"
                            name="national_id"
                            autoComplete='off'
                            ref={emailRef}
                            aria-describedby="national-id-error"
                            onFocus={() => setPhoneFocus(true)}
                            onBlur={() => setPhoneFocus(false)}
                            placeholder="National ID Number"
                            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={nationalId}
                            onChange={(e) => setNationalId(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3 mb-2">
                        <label>
                            <span className="text-sm text-gray-600">Upload Front Side of National ID
                                <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="file"
                            id="front_id"
                            name="front_id"
                            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setFrontId(e.target.files ? e.target.files[0] : null)}
                            required
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3 mb-2">
                        <label>
                            <span className="text-sm text-gray-600">Upload Back Side of National ID
                                <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="file"
                            id="back_id"
                            name="back_id"
                            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setBackId(e.target.files ? e.target.files[0] : null)}
                            required
                        />
                    </div>

                    <div className="col-span-6 mb-2">
                        <label>
                            <span className="text-sm text-gray-600">Ward
                                <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="text"
                            id="ward"
                            name="ward"
                            autoComplete='off'
                            ref={emailRef}
                            aria-describedby="ward-note"
                            onFocus={() => setPhoneFocus(true)}
                            onBlur={() => setPhoneFocus(false)}
                            placeholder="Ward"
                            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={ward}
                            onChange={(e) => setWard(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-span-6 mb-2">
                        <label>
                            <span className="text-sm text-gray-600">City
                                <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            autoComplete='off'
                            ref={emailRef}
                            aria-describedby="city-note"
                            onFocus={() => setPhoneFocus(true)}
                            onBlur={() => setPhoneFocus(false)}
                            placeholder="City"
                            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-span-6 mb-2">
                        <label>
                            <span className="text-sm text-gray-600">Postal Code/ZIP
                                <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="text"
                            id="postal"
                            name="postal"
                            autoComplete='off'
                            ref={emailRef}
                            aria-describedby="postal-note"
                            onFocus={() => setPhoneFocus(true)}
                            onBlur={() => setPhoneFocus(false)}
                            placeholder="Postal Code"
                            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-4 mb-2">
                        <label>
                            <span className="text-base font-bold text-gray-800">Loan Type</span>
                        </label>
                        <select
                            id="loanType"
                            name="loanType"
                            autoComplete='off'
                            className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={loanType}
                            onChange={(e) => setLoanType(e.target.value)}
                            required
                        >
                            <option>Maendeleo Bank Loan</option>
                            <option>NK CNG Automotive Loan</option>
                        </select>
                    </div>

                    <div className="col-span-6 sm:col-span-4 mb-2">
                        <label>
                            <span className="text-base font-bold text-gray-800">Cylinder Size</span>
                        </label>
                        <ul className="mt-3 ml-6 space-y-3">
                            {
                                ["7Kg CNG Cylinder", "11Kg CNG Cylinder", "15Kg CNG Cylinder", "17Kg CNG Cylinder"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-x-2.5">
                                        <input type="radio" name="cylinderSize" value={item} className="form-radio border-gray-400 text-indigo-600 focus:ring-indigo-600 duration-150" onChange={(e) => setCylinderSize(e.target.value)} />
                                        <label className="text-sm text-gray-700 font-medium">
                                            {item}
                                        </label>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <button
                    type='submit'
                    className='w-full items-center bg-[#72c053] text-white lg:w-[400px] py-2 rounded-md text-lg font-bold shadow-lg'
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : 'Continue'}
                </button>
            </form>
        </section>
    );
}

export default PersonalForm;
