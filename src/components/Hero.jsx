import React from 'react'
import bgImg from "/background.png"

const Hero = () => {
  return (
    <div className='flex h-screen'>
        <img src={bgImg} alt='Background' className='w-full h-full object-cover opacity-70 -z-50'></img>
    </div>
  )
}

export default Hero