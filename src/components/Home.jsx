import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import * as HiIcon from 'react-icons/hi'
import { Link } from 'react-scroll'
function Home() {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 md:h-screen'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl px-4 font-bold text-white'>I'm a Student</h2>
                <p className='text-gray-300 text-bold text-3xl py-4 max-w-md'>
                    Ready. Steady. <span className='font-bold text-red-500'>Build</span>
                </p>

                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-tr from-cyan-100 to-blue-500 cursor-pointer'>
                        Portfolio<span className='group-hover:rotate-90 duration-300'><HiIcon.HiArrowRight size={25} className='ml-1'/></span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home