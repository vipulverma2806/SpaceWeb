import React from 'react'
import wave2 from "../assets/wave2.gif"
import moon from "../assets/moonSurface.png"
const Services = () => {
  return (
    <div className='relative'>
        <img src={moon} className='z-10 relative'/>
        <div className='absolute top-3 z-11 w-full bg-gradient-to-b from-transparent from-10% to-black to-40% h-48'></div>
        <img src={wave2} className='z-10 relative'
        
        />Services</div>
  )
}

export default Services