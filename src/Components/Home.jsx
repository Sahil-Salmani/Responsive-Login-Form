import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='bg-[#F8F5F0] h-[calc(100vh-80px)] flex justify-center items-center'>
      <h1 className='text-3xl font-bold '>Home</h1>
    </div>
  </>
  )
}

export default Home
