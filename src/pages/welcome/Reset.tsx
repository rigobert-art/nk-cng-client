import React from 'react'
import { Link } from 'react-router-dom'

const Reset = () => {
    return (
        <section className='w-full h-screen flex flex-col items-center justify-center px-4 font-serif'>

            <div className='mb-6 text-3xl font-bold'>
                <h1>Enter your email to reset password</h1>
            </div>

            <form className='flex flex-col mb-6 gap-y-3 w-full lg:w-[400px]'>
                <input
                    type='text'
                    placeholder="Email"
                    className='px-4 py-4 items-start text-black text-sm border-2 rounded-md' />
            </form>

            <button type='submit' className='items-center bg-red-800 text-white w-full lg:w-[400px] py-2 rounded-md text-lg font-bold shadow-lg '>
                Send
            </button>

            <Link to="/login" className='mt-8 text-blue-600 justify-center items-center'> Cancel </Link>
            

        </section>
    )
}

export default Reset