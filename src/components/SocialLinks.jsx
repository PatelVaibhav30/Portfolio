import React from 'react'
import * as BsIcon from 'react-icons/bs'

function SocialLinks() {
    const links = [
        {
            id:1,
            child:(
                <>LinkedIn <BsIcon.BsLinkedin size={30}/></>
            ),
            href:'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>Github <BsIcon.BsGithub size={30}/></>
            ),
            href:'https://github.com',
        },
        {
            id:3,
            child:(
                <>Mail <BsIcon.BsMailbox2 size={30}/></>
            ),
            href:'mailto:foo@gmail.com',
        },
        {
            id:1,
            child:(
                <>Resume <BsIcon.BsFillPersonLinesFill size={30}/></>
            ),
            href:'./Vaibhav_Patel_Resume.pdf',
            style: 'rounded-br-md',
            download:true
        }
    ]


  return (
      <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href, style, download})=>(
            <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 '+''+style}>
                <a href={href} download={download} target='_blank' rel="noreferrer" className='flex justify-between items-center w-full text-white'>
                    {child}
                </a>
            </li>
            ))}

        </ul>
      </div>
      )
}

export default SocialLinks