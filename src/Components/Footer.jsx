import React from 'react'
import moss from '../Image/letter-u.png'
import facebook from '../Image/facebook.png'
import x from '../Image/twitter.png'
import ig from '../Image/instagram.png'
const Footer = () => {
  return (
    <div>
        <footer className='flex items-center justify-around bg-blue-950 text-white max-sm:flex max-sm:flex-col max-sm:gap-5'>
            <div className='flex'>
            <img className='w-11' src={moss} alt="" />
            <h1 className='text-[40px]'>ULTRA</h1>
            </div>
            <div>
                <h1>ULTRA  &copy; 2023 by Abdulmujeeb</h1>
            </div>
            <div className='flex gap-5' >
                <img className='w-10' src={facebook} alt="" />
                <img className='w-10' src={x} alt="" />
                <img className='w-10' src={ig} alt="" />
            </div>
        </footer>
    </div>
  )
}

export default Footer