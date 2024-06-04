import React, { useEffect, useState } from 'react'
import { FaCircleInfo } from 'react-icons/fa6';
import { FiUserCheck, FiUserX } from 'react-icons/fi';
import { useNavigate, Navigate } from 'react-router-dom';

import { useAppContext } from '../../context/AppProvider';import axios from 'axios';
import { useAuth } from '../../context/AuthProvider';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]).{8,24}$/;

const Password = () => {
    const [password, setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const { isLoading, setIsError, setIsLoading,  isError } = useAppContext();
    const { user } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const v1 = PWD_REGEX.test(password);

        if (!v1) {
            // setIsError('error');
            return;
        }

        try {
            setIsLoading(true);
            const response = await axios.post('', {
                // user.id,
                password,
            });


            // if (response.data.status === 'error') {
            //     setError(response.data.message);
            //     setIsLoading(false);
            //     return;
            // }

            // navigate('/verify');
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                // Error from the server
                // setError(err.response.data.message || 'An unexpected error occurred');
            } else {
                // Other errors (network issues, etc.)
                // setError('An unexpected error occurred');
            }
            console.error('Error during registration:', err);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
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
                    aria-describedby="confirm-note"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />
                <p id="confirm
                    note" className={matchFocus && !validMatch ? "font-sm border-2 bg-black text-white p-1 relative bottom-[-10px]" : "absolute left-[-9999px]"}>
                    <FaCircleInfo className="inline-block mr-1" />
                    Must match the first password input field.
                </p>
            </div>
        </form>
    )
}

export default Password