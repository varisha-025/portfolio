import Link from 'next/link';
import React from 'react';
import linkedinIcon from '../public/assets/linkedin.png'
import gmailIcon from '../public/assets/gmail.png'
import stackoverflowIcon from '../public/assets/stackoverflow.png'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Image from 'next/image';

const Main = () => {
  return (
    <div id='home' className='w-screen h-screen text-center pt-28'>
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
            I&apos;m a full stack web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I&apos;m focused on building responsive full stack web applications while
            learning other technologies as blockchain.
          </p>
          <div className='flex items-center justify-center py-12'>

            <div className='mx-3'>

              <Link href={"https://www.linkedin.com/in/varisha-rashid-5a8848198/"}><Image src={linkedinIcon} style={{"cursor":"pointer"}}/></Link>
            </div>
            <div className='mx-3'>
              <Link href={"https://github.com/varisha-025"}><FaGithub style={{ "height": "44px", "width": "50px" ,"cursor":"pointer" }} /></Link>
            </div>
            <div className='mx-3'>
              <Link href={"https://leetcode.com/varisha25/"}><SiLeetcode style={{ "height": "44px", "width": "50px","cursor":"pointer"  }} /></Link>

            </div>

            <div className='mx-3'>
              <Link href={"mailto:varisharashid01@gmail.com"}><Image src={gmailIcon} style={{"cursor":"pointer"}}/></Link>
            </div>
            <div className='mx-3'>
              <Link href={"https://stackoverflow.com/users/15527533/varisha15"}><Image src={stackoverflowIcon} style={{"cursor":"pointer"}}/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
