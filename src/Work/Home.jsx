import React from 'react'

const Home = () => {
  return (
    <div className='bg-blue-950 text-white p-16 flex flex-col gap-14 max-sm:p-10 max-sm:flex max-sm:gap-10'>
        <section className='flex items-center flex-col gap-2'>
            <h1 className='text-[25px] max-sm:text-[16px] max-sm:flex max-sm:items-center max-sm:justify-center'>Join our exclusive membership to recieve the latest news and trends</h1>
            <p className='text-[20px] max-sm:text-[14px]'>You can subscribe anytime.</p>
        </section>
        <section className='flex items-center justify-center gap-5'>
            <input className='h-9 rounded-lg outline-none p-5 text-black' type="email" name="" id="" placeholder='Enter Your Email' />
            <button className='bg-blue-600 w-[110px] h-10 rounded-md text-[17px] p-1'>Subscribe</button>
        </section>
        <section className='flex justify-around max-sm:flex-col max-sm:gap-10 max-sm:justify-center max-sm:items-center'>
            <div className='list-none max-sm:items-center max-sm:flex max-sm:flex-col'>
                <h1 className='text-[22px] mb-3 max-sm:mb-0'>About</h1>
                <li>How it works</li>
                <li>Testimonies</li>
                <li>Career</li>
                <li>Investors</li>
                <li>Terms of Services</li>
            </div>
            <div className='list-none max-sm:items-center max-sm:flex max-sm:flex-col'>
                <h1 className='text-[22px] mb-3 max-sm:mb-0'>Contact Us</h1>
                <li>Contact</li>
                <li>Support</li>
                <li>Destinations</li>
                <li>Sponsorship</li>
            </div>
            <div className='list-none max-sm:items-center max-sm:flex max-sm:flex-col'>
                <h1 className='text-[22px] mb-3 max-sm:mb-0'>Videos</h1>
                <li>Submit Videos</li>
                <li>Ambassadors</li>
                <li>Agency</li>
                <li>Influecer</li>
            </div>
            <div className='list-none max-sm:mb-0 max-sm:items-center max-sm:flex max-sm:flex-col'>
                <h1 className='text-[22px] mb-3 max-sm:mb-0'>Social Media</h1>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>youtube</li>
                <li>Twitter</li>
            </div>
        </section>
    </div>
  )
}

export default Home