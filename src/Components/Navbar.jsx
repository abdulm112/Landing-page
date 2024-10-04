import React from 'react'
import mos from '../Image/letter-u.png'
const Navbar = () => {
  return (
    <div>
        <nav className='bg-blue-950 text-white flex items-center justify-around max-sm:flex max-sm:items-center max-sm:justify-center'>
            <div className='flex gap-2 max-sm:flex max-sm:items-center max-sm:justify-center'>
            <img className='w-11' src={mos} alt="" />
            <h1 className='text-[40px]'>ULTRA</h1>
            </div>
            <div className='flex'>
                <ul className='flex gap-10 max-sm:hidden'>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Products</li>
                    <li>Pricing</li>

                    <button className='bg-blue-600 w-[90px] h-9 rounded-md text-[17px] p-1'>Sign Up</button>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar