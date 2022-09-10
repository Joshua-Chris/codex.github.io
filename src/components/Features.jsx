import React from 'react'
import feature1 from '../assets/featurea.png'

const Features = () => {
  return (
    <div className='w-full md:h-screen grid sm:grid-cols-1 md:grid-cols-2 place-items-center p-20'>
            <div>
                <h1 className='text-4xl lg:text-5xl font-bold md:max-w-5xl'>CodeX Multi-dimensional features</h1>
                <h1 className='py-4 text-md md:text-md text-gray-400 md:max-w-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque laboriosam earum possimus iure nihil nisi quisquam, tempora facere dolores id, excepturi illum perferendis repellat, culpa sapiente distinctio nam commodi accusamus neque eaque! Eaque ipsam beatae tenetur architecto, nostrum sint impedit dolores nam neque ex placeat voluptatum quos excepturi ipsum.</h1>
            </div>
            <div>
                <img src={feature1} alt="feature-one" className='w-30 md:w-100'/>
            </div>
    </div>
  )
}

export default Features