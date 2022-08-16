import Link from 'next/link';
import React from 'react';

const Main = () => {
  return (
    <div id='home' className='w-screen h-screen text-center pt-28 mb-12'>
      <div className='max-w-[1240px] w-full h-full mx-auto py-2 flex justify-center items-center'>
        <div className='pt-14 pb-12'>
          <p className='uppercase text-sm tracking-widest pt-32 text-white '>
            LET&apos;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-white px-8'>
            Hi, I&apos;m <span className='text-[#EEBBC3] md:max-w-lg py-2'> Varisha Rashid</span>
          </h1>
          <h1 className='py-2 text-white pb-8'>A Full Stack Web Developer</h1>
          <p className='py-4 text-white max-w-[70%] m-auto text-lg'>
            I&apos;m most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time, I like working on open source projects.
          </p>
          <div className='flex items-center text-center justify-center '>
            <Link href={"#contact"} ><button className='my-11 py-3 mr-7 md:mr-6 px-4 cursor-pointer text-lg shadow-gray-400 rounded-xl uppercase hover:text-[#232946] bg-[#EEBBC3] text-white hover:scale-110 ease-in duration-300'>Contact Me</button></Link>
            <Link href="https://drive.google.com/file/d/1Gnn8qmKCXTtXkVMl3XOrpEMfF9QBd7lB/view?usp=sharing" ><button className='my-11 py-3 px-4 ml-7 hover:text-[#232946] md:ml-2 cursor-pointer text-lg shadow-gray-400 rounded-xl uppercase bg-[#EEBBC3] hover:scale-110 ease-in duration-300 text-white'>Resume</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
