import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <div className='flex flex-col text-center gap-y-12 justify-center item-center'>
        <h1 className='mt-40 font-bold text-3xl'>Page NotFound</h1>
        <div>
              <Link to="/" className='bg-green-700 px-4 py-2 rounded-md shadow-md text-white'>Go back</Link>
        </div>
        
    </div>
  )
}

export default NoPage