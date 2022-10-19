import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quos assumenda modi, accusamus voluptatibus cupiditate eum nisi obcaecati aliquid, magni earum quod itaque deleniti expedita. Fugiat esse sequi adipisci perferendis, tempora magnam assumenda odit facilis labore veritatis maiores id omnis possimus. Obcaecati aliquam impedit adipisci id omnis vel doloremque quidem.</p>
            <br/>
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero perspiciatis dolores nihil sint quas nobis corrupti! Officia, assumenda? Ullam, aliquam illo rem facilis ut voluptate minus impedit incidunt qui quia quas, itaque blanditiis? Doloremque animi iusto commodi ipsam amet itaque dolor non maiores, tempora enim dicta dolorum voluptate reprehenderit delectus.
            </p>
        </div>
    </div>
  )
}

export default About