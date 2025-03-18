import React from 'react'
import BlogPage from '../components/BlogPage'

export const Blogs = () => {
  return (
    <div >
      <div className='py-40 bg-[rgb(137,80,80)] text-center px-4'>
        <h1 className='lg:text-7xl text-5xl text-white leading-snug font-bold mb-5'>Blog Page</h1>
      </div>

      {/* products */}
      <div className='max-w-7xl mx-auto'>
      <BlogPage/>
      </div>
    </div>
  )
}
