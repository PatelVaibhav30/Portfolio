import React from 'react'

function About() {
  return (
    <div name='about' className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            {/* <p className='text-xl mt-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quos assumenda modi, accusamus voluptatibus cupiditate eum nisi obcaecati aliquid, magni earum quod itaque deleniti expedita. Fugiat esse sequi adipisci perferendis, tempora magnam assumenda odit facilis labore veritatis maiores id omnis possimus. Obcaecati aliquam impedit adipisci id omnis vel doloremque quidem.</p>
            <br/> */}
            <p className='text-xl'>
                I'm an university student pursuing B-Tech in Computer Science and Engineering. Since childhood I was facinated by computers and curiosity to learn new technologies. diverting curiosity and eagerness towards willingness to learn them made me a person, who likes to build things using those technologies. 
            </p>
        </div>
    </div>
  )
}

export default About