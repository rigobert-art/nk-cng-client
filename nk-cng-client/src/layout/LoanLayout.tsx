import React from 'react'
import { FiArrowLeft, FiUser } from 'react-icons/fi'
import { Outlet } from 'react-router-dom'

const LoanLayout = () => {
  return (
    <main>
        
   
       
        {/* progress bar goes here */}
        <div>
            <Outlet/>
        </div>
    </main>
  )
}

export default LoanLayout