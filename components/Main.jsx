import Link from 'next/link';
import React from 'react';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I'm <span className='text-[#5651e5]'> Varisha Rashid</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Full Stack Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I’m a full stack web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive full stack web applications while
            learning other technologies as blockchain.
          </p>
          <div className='flex items-center justify-center py-12'>

            <div className='mx-3'>

              <Link href={"https://www.linkedin.com/in/varisha-rashid-5a8848198/"}><img src="https://img.icons8.com/color/48/000000/linkedin.png" style={{"cursor":"pointer"}}/></Link>
            </div>
            <div className='mx-3'>
              <Link href={"https://github.com/varisha-025"}><FaGithub style={{ "height": "44px", "width": "50px" ,"cursor":"pointer" }} /></Link>
            </div>
            <div className='mx-3'>
              <Link href={"https://leetcode.com/varisha25/"}><SiLeetcode style={{ "height": "44px", "width": "50px","cursor":"pointer"  }} /></Link>

            </div>

            <div className='mx-3'>
              <Link href={"mailto:varisharashid01@gmail.com"}><img src="https://img.icons8.com/color/48/000000/gmail-new.png" style={{"cursor":"pointer"}}/></Link>
            </div>
            <div className='mx-3'>
              <Link href={"https://stackoverflow.com/users/15527533/varisha15"}><img src="https://img.icons8.com/color/48/000000/stackoverflow.png" style={{"cursor":"pointer"}}/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
