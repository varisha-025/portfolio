import Link from 'next/link';
import React from 'react';
import gmailIcon from '../public/assets/mail.png'
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Image from 'next/image';

const Main = () => {
  return (
    <div id='home' className='w-screen h-screen text-center pt-28 mb-12'>
      <div className='max-w-[1240px] w-full h-full mx-auto py-2 flex justify-center items-center'>
        <div className='py-14'>
          <p className='uppercase text-sm tracking-widest pt-32 text-gray-600 '>
            LET&apos;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&apos;m <span className='text-[#5651e5]'> Varisha Rashid</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Full Stack Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto text-lg'>
            I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time, I like working on open source projects.
          </p>
          <div className='flex items-center justify-center py-12'>

            <div className='mx-3'>
            <Link href={"https://www.linkedin.com/in/varisha-rashid-5a8848198/"}><i className="fa fa-linkedin fa-2x" style={{ "cursor": "pointer" }}></i></Link>
            </div>
            
            <div className='mx-3'>
              <Link href={"https://github.com/varisha-025"}><FaGithub style={{ "height": "38px", "width": "44px", "cursor": "pointer" }} /></Link>
              
            </div>
            <div className='mx-3'>
              <Link href={"https://leetcode.com/varisha25/"}><SiLeetcode style={{ "height": "37px", "width": "46px", "cursor": "pointer" }} /></Link>

            </div>

            <div className='mx-3 pt-2'>
              <Link href={"mailto:varisharashid01@gmail.com"}><Image src={gmailIcon} style={{ "height": "44px", "width": "50px", "cursor": "pointer" }} /></Link>
             
            </div>
            <div className='mx-3'>
              <Link href="https://stackoverflow.com/users/15527533/varisha15" ><i className="fa fa-stack-overflow fa-2x" style={{"cursor": "pointer" }}></i></Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
