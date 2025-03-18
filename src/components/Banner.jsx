import React from 'react'
import { Link } from 'react-router-dom'

import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className=' bg-[rgb(137,80,80)] px-4 py-32 mx-auto flex items-center justify-center'>
        <div className='text-white text-center'>
            <h1 className='lg:text-7xl text-5xl leading-snug font-bold mb-5'>Welcome to BlogDeck</h1>
            <p className='text-gray-100 lg:w-3/5 mx-auto mb-5'>Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. We offer everything you need to get started.</p>

            {/* btn here */}
            <div>
                <Link to="/" className='inline-flex items-center py-1 font-medium hover:text-orange-500'>Learn more <FaArrowRight className='mt-1 ml-2'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Banner