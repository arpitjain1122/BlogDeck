import React from 'react'
import Banner from '../components/Banner'
import BlogPage from '../components/BlogPage'

export const Home = () => {
  return (
    <div>
      <Banner />
      {/* products */}
      <div className='max-w-7xl mx-auto'>
        <BlogPage />
      </div>
    </div>
  )
}
