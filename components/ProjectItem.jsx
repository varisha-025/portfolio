import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-gray-400 rounded-xl p-3 group hover:bg-gradient-to-r from-[#EEBBC3] to-[#b8c1ec]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[45%] left-[45%] translate-x-[-45%] translate-y-[-45%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2  text-lg text-white text-center'>{tech}</p>
          <div className="py-3 text-center">
        <Link href={projectUrl} >
            <a className='text-center rounded-md bg-white text-gray-700 font-bold py-3 px-3 text-md cursor-pointer'>More Info</a>
        </Link>
          </div>
    </div>
 </div>
  )
}

export default ProjectItem