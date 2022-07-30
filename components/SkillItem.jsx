import React from 'react'
import Image from 'next/image';

const SkillItem = ({src,name}) => {
  return (
    <>
        <div className='p-6 shadow-xl bg-[#fffffe] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={src}
                  width='76px'
                  height='70px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center text-lg'>
                <h3>{name}</h3>
              </div>
            </div>
          </div>
    </>
  )
}

export default SkillItem