import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import myImg from '../public/assets/projects/mypic.jpg';
import styles from "../styles/Button.module.css"
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-10'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I Am</h2>

          <p className='py-2 text-gray-600 text-xl'>
            Hello! My name is Varisha and I enjoy creating things that live on the internet. My interest in web development started back in 2020 and since then it has been my favourite. I have always been someone who has both a creative and a logical side.
          </p>
          <p className='py-2 text-gray-600 text-xl'>
            Fast-forward to today, and I have had the privilege of working at a start-up as a full stack intern and have contributed in open source through Girlscript Summer of Code(GSSoC). My main focus these days is building accessible, inclusive apps for learning and strenghtening my resume.
          </p>
          <Link href={"#projects"} ><button className=' my-7 py-3 px-4 cursor-pointer text-lg text-gray hover:text-indigo-800 font-semibold'>View my work!</button></Link>

          
        </div>
        <div className='w-full shadow-gray-400  flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>

          <Image

            src={myImg}
            alt="Picture of the author"
            width={260}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
