import React, { useEffect, useRef, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiUserCheck, FiUserX } from 'react-icons/fi';
import { FaCircleInfo } from 'react-icons/fa6';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]).{8,24}$/;

const RegisterPage: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [emailFocus, setEmailFocus] = useState(false);

    const [phone, setPhone] = useState('');
    const [phoneFocus, setPhoneFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const navigate = useNavigate();
    // const { login } = useAuth();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd]);

    useEffect(() => {
        setError('');
    }, [email, phone, password, matchPwd]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const v1 = PWD_REGEX.test(password);

        if (!v1) {
            setError("Invalid Entry");
            return;
        }

        try {
            setIsLoading(true);
            const response = await axios.post('http://192.168.100.131:4000/api/v1/user/register', {
                phone,
                email,
                password,
            });

            console.log(phone, email, password);
            console.log(response.data);

            if (response.data.status === 'error') {
                setError(response.data.message);
                setIsLoading(false);
                return;
            }

            // login({
            //     token: response.data.token,
            //     id: response.data.id,
            //     phone: response.data.phone,
            //     email: response.data.email,
            // });

            navigate('/login');
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                // Error from the server
                setError(err.response.data.message || 'An unexpected error occurred');
            } else {
                // Other errors (network issues, etc.)
                setError('An unexpected error occurred');
            }
            console.error('Error during registration:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className='max-w-md font-serif mx-auto h-screen flex flex-col items-center justify-center px-4'>
            <div>
                <img src={require("../../assets/logo.png")} alt='logo' className='w-32 h-32 absolute left-4 top-4 object-cover' />
            </div>

         
            <p ref={errRef} className={error ? "text-red-500" : "text-green-500"} aria-live="assertive">{error}</p>

            <div className='mb-6 text-3xl font-bold'>
                <h1>Create Account!</h1>
            </div>

            <form onSubmit={handleSubmit} className='w-full mb-4 px-2'>
                <div className="mb-2">
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
                        aria-describedby="emailnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <p id="emailnote" className={emailFocus && email ? "font-sm border-2 bg-black text-white p-1 relative bottom-[-10px]" : "absolute left-[-9999px]"}>
                        <FaCircleInfo className="inline-block mr-1" />
                        Must be a valid email address.
                    </p>
                </div>

                <div className="mb-2">
                    <label>
                        <span className="text-sm text-gray-600">Phone Number(TZ)
                            <span className="text-red-500">*</span>
                        </span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete='off'
                        ref={phoneRef}
                        aria-describedby="uidnote"
                        onFocus={() => setPhoneFocus(true)}
                        onBlur={() => setPhoneFocus(false)}
                        placeholder="+255723424234"
                        className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <p id="uidnote" className={phoneFocus && phone ? "font-sm border-2 bg-black text-white p-1 relative bottom-[-10px]" : "absolute left-[-9999px]"}>
                        <FaCircleInfo className="inline-block mr-1" />
                        Must be a valid phone number.
                    </p>
                </div>

                <div className="mb-2">
                    <label>
                        <span className="text-sm text-gray-600">Password
                            <FiUserCheck className={validPwd ? "text-green-500 ml-2" : "hidden"} />
                            <FiUserX className={!validPwd || !password ? "text-red-500 ml-2" : "hidden"} />
                        </span>
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    <p id="pwdnote" className={pwdFocus && !validPwd ? "font-sm border-2 bg-black text-white p-1 relative bottom-[-10px]" : "absolute left-[-9999px]"}>
                        <FaCircleInfo className="inline-block mr-1" />
                        Must be between 8 and 24 characters.<br />
                        Must include uppercase and lowercase letters, a number, and a special character.<br />
                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>
                </div>

                <div className="mb-2">
                    <label>
                        <span className="text-sm text-gray-600">Confirm Password
                            <FiUserCheck className={validMatch && matchPwd ? "text-green-500 ml-2" : "hidden"} />
                            <FiUserX className={validMatch || !matchPwd ? "hidden" : "text-red-500 ml-2"} />
                        </span>
                    </label>
                    <input
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        placeholder="Please confirm your password"
                        className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={matchPwd}
                        onChange={(e) => setMatchPwd(e.target.value)}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                    <p id="confirmnote" className={matchFocus && !validMatch ? "font-sm border-2 bg-black text-white p-1 relative bottom-[-10px]" : "absolute left-[-9999px]"}>
                        <FaCircleInfo className="inline-block mr-1" />
                        Must match the first password input field.
                    </p>
                </div>

                <button
                    type='submit'
                    className='w-full items-center bg-[#72c053] text-white lg:w-[400px] py-2 rounded-md text-lg font-bold shadow-lg'
                    // disabled={!validEmail || !validPhone || !validUsername || !validPwd || !validMatch || isLoading}
                >
                    {isLoading ? 'Loading...' : 'Sign Up'}
                </button>
            </form>

            <div className='flex flex-col mt-6 text-blue-600 justify-center items-center'>
                <p className='mb-2'>Or</p>
                <button type='button' className='flex w-full justify-center border lg:w-[400px] py-2 px-8 rounded-md mb-4'>
                    <FcGoogle size="22px" />
                    <p className=' px-2 font-bold'>Signup with Google </p>
                </button>
            </div>
        </section>
    );
}

export default RegisterPage;
