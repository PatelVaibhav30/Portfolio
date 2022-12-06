import React from 'react'
import css from '../assets/css.png'
import github from '../assets/github.png'
import bootstrap from '../assets/bootstrap.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import flutter from '../assets/flutter.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import materialui from '../assets/materialui.png'

function Experience() {

  const techs = [
    {
      id:1,
      src: html,
      title: 'HTML',
      style:'shadow-orange-500'
    },
    {
      id:2,
      src: css,
      title: 'CSS',
      style:'shadow-blue-500'
    },
    {
      id:3,
      src: javascript,
      title: 'JavaScript',
      style:'shadow-yellow-500'
    },
    {
      id:4,
      src: reactImage,
      title: 'React',
      style:'shadow-sky-500'
    },
    {
      id:5,
      src: tailwind,
      title: 'Tailwind',
      style:'shadow-purple-500'
    },
    {
      id:6,
      src: flutter,
      title: 'Flutter',
      style:'shadow-blue-700'
    },
    {
      id:7,
      src: bootstrap,
      title: 'Bootstrap 5',
      style:'shadow-purple-700'
    },
    {
      id:8,
      src: github,
      title: 'Github',
      style:'shadow-gray-500'
    },
    {
      id:9,
      src: materialui,
      title: 'MaterialUI',
      style:'shadow-blue-400'
    }
  ]


  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center p-4 w-full h-full text-white'>
        <div className='pb-8'>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are the technologies which I've worked on</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {
            techs.map(({id, src, title, style})=>(
          <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" className='w-20 mx-auto'/>
            <p className='mt-4'>{title}</p>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Experience