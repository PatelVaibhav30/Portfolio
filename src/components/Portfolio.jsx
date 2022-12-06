import React from 'react'
// import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
// import installNode from '../assets/portfolio/installNode.jpg'
// import navbar from '../assets/portfolio/navbar.jpg'
import travel from '../assets/portfolio/travel.jpg'
import teslaClone from '../assets/portfolio/teslaClone.jpg'
import Todo from '../assets/portfolio/todo.jpg'


function Portfolio() {

    const portfolios = [
        // {
        //     id:1,
        //     src:arrayDestruct
        // },
        // {
        //     id:2,
        //     src:installNode
        // },
        // {
        //     id:3,
        //     src:navbar
        // },
        {
            id:4,
            src:travel,
            demoHref:'https://deluxe-lollipop-8f3a60.netlify.app',
            codeHref:'https://github.com/PatelVaibhav30/Travelling-site'
        },
        {
            id:5,
            src:teslaClone,
            demoHref:'https://tesla-clone-471aa.web.app',
            codeHref:'https://github.com/PatelVaibhav30/Tesla-clone-ReactJs'
        },
        {
            id:6,
            src:Todo,
            demoHref: 'https://unrivaled-selkie-cd1763.netlify.app',
            codeHref: 'https://github.com/PatelVaibhav30/CRUD-Application-Todo-App-'
            
        }
    ]



    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-3'>Check this out</p>
                </div>

                

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolios.map(({id, src, codeHref, demoHref})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex item-center justify-center'>
                            {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button> */}
                            <a href={demoHref} target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                            <a href={codeHref} target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                            {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button> */}
                        </div>
                    </div>
                    ))
                }
                </div>
            </div>
        </div >

    )
}

export default Portfolio