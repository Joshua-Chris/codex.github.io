import React, {useState} from 'react'
import { HiChevronRight, HiArrowRight } from 'react-icons/hi'

const Hero = () => {
  const [btnAngle, setBtnAngle] = useState(false)
  const mouseOver = () => setBtnAngle(!btnAngle)
  return (
    <div className='bg-gray-900 text-white'>
        <div className="w-full h-[90vh] p-5 flex flex-col justify-center items-center">
            <h1 className='text-5xl lg:text-7xl text-center font-extrabold max-w-3xl md:max-w-5xl'>A Torrent of fast cloud developer environments</h1>
            <h1 className='py-8 text-lg md:text-xl text-center text-gray-400 max-w-sm md:max-w-2xl'>CodeX brings to light blazing fast cloud developer environments.</h1>
            <button onMouseOver={mouseOver} onMouseOut={mouseOver}>Get Started 
                {!btnAngle ? <HiChevronRight size={25} className='pl-1' /> : <HiArrowRight size={22} className='pl-1'/>}
            </button>
        </div>
    </div>
  )
}

export default Hero