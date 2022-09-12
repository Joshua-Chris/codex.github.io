import React from 'react'

const Feature = ({ props }) => {
  return (
    <div className='w-full md:h-fit grid sm:grid-cols-1 md:grid-cols-2 place-items-center p-20'>
            <div>
                <h1 className='text-4xl lg:text-5xl font-bold md:max-w-5xl'>{props.header}</h1>
                <h1 className='py-4 text-md md:text-md text-gray-400 md:max-w-2xl'>{props.textContent}</h1>
            </div>
            <div>
                <img src={props.imgUrl} alt="Our features" className='w-30 md:w-[25rem]'/>
            </div>
    </div>
  )
}

export default Feature