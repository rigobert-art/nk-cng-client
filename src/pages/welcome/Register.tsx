import React, { useEffect, useRef, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { useAuth } from '../../context/AuthProvider';
import { FiUserCheck, FiUserX } from 'react-icons/fi';
import { FaCircleInfo } from 'react-icons/fa6';
// import { registerUser } from '../../controllers/userController';

const USERNAME_REGEX = /^[a-zA-Z0-9._-]{4,20}$/; // 4-20 characters, no spaces, alphanumeric and allowed special characters (., _, -)
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Valid email format (e.g., example@gmail.com)
const PHONE_REGEX = /^[0-9]{10,14}$/; // Valid phone number format (e.g., +255755481857 for Tanzanian phone numbers)
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]).{8,24}$/; // Password requirements: 8-24 characters, at least one uppercase, one lowercase, one number, and one special character

const Login = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [phone, setPhone] = useState(0);
    const [validPhone, setValidPhone] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const navigate = useNavigate();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        usernameRef.current?.focus();
        phoneRef.current?.focus();
        emailRef.current?.focus();
    }, [])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd])

    useEffect(() => {
        setError('');
    }, [email, username, phone, password, matchPwd])


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const v1 = USERNAME_REGEX.test(username);
        const v2 = PWD_REGEX.test(password);
        const v3 = PHONE_REGEX.test(phone.toString()); // Converted to string to avoid NaN
        const v4 = EMAIL_REGEX.test(email);
        if (!v1 || !v2 || !v3 || !v4) {
            setError("Invalid Entry");
            return;
        }

        e.preventDefault();
        try {
            setIsLoading(true);
            // store user on UserDB.json and set token to local storage(login)
            // const response = await registerUser({
            //     username,
            //     phone,
            //     email,
            //     password,
            // });

            // if (response.error) {
            //     setError(response.error);
            //     setIsLoading(false);
            //     return;
            // }else {
            //     setSuccess(true);
            //     setIsLoading(false);
            //     setError('');
            //     setTimeout(() => {
            //         setSuccess(false);
            //     }, 3000);
            // }

            //get response from server

            // console.log(registerUser({
            //     username,
            //     phone,
            //     email,
            //     password,
            // }))

            login({
                token: "",
                id: "",
                username: "",
                phone: "",
                email: "",
            });

            navigate('/home');
        } catch (error) {
            setError('An unexpected error occurred');
            console.error('Error during registration:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className='max-w-md font-serif mx-auto h-screen flex flex-col items-center justify-center px-4'>
            {/* <div>
            <img src={require("../../assets/logo.png")} alt='logo' className='w-32 h-32 absolute left-4 top-4 object-cover' />
        </div> */}
            <p ref={errRef} className={error ? "error" : "offscreen"} aria-live="assertive">{error}</p>

            <div className='mb-6 text-3xl font-bold'>
                <h1>Register to Loan Portal</h1>
            </div>



            <form onSubmit={handleSubmit} className='w-full mb-4 px-2'>
                <div className="mb-2">
                    <label>
                        <span className="text-sm text-gray-600">Email
                            <FiUserCheck className={validEmail ? "ml-2 text-green-500" : "hidden"} />
                            <FiUserX className={!validEmail || !email ? "hidden" : "text-red-500 ml-2"} />
                        </span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        autoComplete="off"
                        ref={emailRef}
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="emailnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <p id="emailnote" className={emailFocus && email && !validEmail ? "font-sm border-2 bg-black text-white p-1 relative bottom-[-10px]" : "absolute left-[-9999px]"}>
                        <FaCircleInfo className="inline-block mr-1" />
                        Must be a valid email address.
                    </p>
                </div>

                <div className="mb-2">
                    <label>
                        <span className="text-sm text-gray-600">Phone Number
                            <FiUserCheck className={validPhone ? "text-green-500 ml-2" : "hidden"} />
                            <FiUserX className={!validPhone || !phone ? "hidden" : "text-red-500 ml-2"} />
                        </span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete='off'
                        ref={phoneRef}
                        aria-invalid={validPhone ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setPhoneFocus(true)}
                        onBlur={() => setPhoneFocus(false)}
                        placeholder="+255723424234"
                        className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={phone}
                        onChange={(e) => setPhone(parseInt(e.target.value, 10) || 0)}
                        required
                    />
                    <p id="uidnote" className={phoneFocus && phone && !validPhone ? "font-sm border-2 bg-black text-white p-1 relative bottom-[-10px]" : "absolute left-[-9999px]"}>
                        <FaCircleInfo className="inline-block mr-1" />
                        Must be a valid phone number.
                    </p>
                </div>

                <div className="mb-2">
                    <label>
                        <span className="text-sm text-gray-600">Username
                            <FiUserCheck className={validUsername ? "text-green-500 ml-2" : "hidden"} />
                            <FiUserX className={!validUsername || !username ? "hidden" : "invalid"} />
                        </span>
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        autoComplete='off'
                        ref={usernameRef}
                        aria-invalid={validUsername ? "false" : "true"}
                        aria-describedby="usernamenote"
                        onFocus={() => setUsernameFocus(true)}
                        onBlur={() => setUsernameFocus(false)}
                        placeholder="Enter your username"
                        className="px-4 py-2 text-black text-sm border-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <p id="usernamenote" className={usernameFocus && !validUsername ? "font-sm border-2 bg-black text-white p-1 relative bottom-[-10px]" : "absolute left-[-9999px]"}>
                        <FaCircleInfo className="inline-block mr-1" />
                        Must be between 4 and 16 characters.
                    </p>
                </div>

                <div className="mb-2">
                    <label>
                        <span className="text-sm text-gray-600">Password
                            <FiUserCheck className={validPwd ? "text-green-500 ml-2" : "hidden"} />
                            <FiUserX className={!validPwd || !password ? "hidden" : "text-red-500 ml-2"} />
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
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allow special character: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>
                </div>

                <div className="mb-2">
                    <label>
                        <span className="text-sm text-gray-600">Confirm Password
                            <FiUserCheck className={validMatch && matchPwd ? "text-green-500 ml-2": "hidden"} />
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

                {/* {error && <p className='text-red-500 mb-2'>{error}</p>} */}
                <button
                    type='submit'
                    className='w-full items-center bg-[#72c053] text-white lg:w-[400px] py-2 rounded-md text-lg font-bold shadow-lg'
                    disabled={!validEmail|| !validPhone || !validUsername || !validPwd || !validMatch ? true : false}
                >
                    {isLoading ? 'Loading...' : 'Log In'}
                </button>

            </form >

            <div className='flex flex-col mt-6 text-blue-600 justify-center items-center'>
                <p className='mb-2'>Or</p>
                <button type='button' className='flex w-full justify-center border lg:w-[400px] py-2 px-8 rounded-md mb-4'>
                    <FcGoogle size="22px" />
                    <p className=' px-2 font-bold'>Signup with Google </p>

                </button>

            </div>



        </section >
    )
}

export default Login