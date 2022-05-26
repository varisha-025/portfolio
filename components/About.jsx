import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import myImg from '../public/assets/projects/mypic.jpeg';
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-10'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          {/* <p className='py-2 text-gray-600'>// I am not your normal developer</p> */}
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam velit vitae fugiat sunt in ut, aut cum, hic, quas nihil illo recusandae consequatur officiis fugit animi doloremque esse dolor!
          </p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia soluta obcaecati, velit minima deserunt nesciunt quae unde totam quidem dolor, repellendus rerum, laborum quaerat! Eius aperiam quod delectus minima quidem.
          </p>
          <Link href={"#projects"} ><p className='py-2 cursor-pointer text-xl text-gray hover:text-indigo-800 font-semibold'>Check out my latest projects</p></Link>
        </div>
        <div className='w-full shadow-gray-400  flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            
            <Image
    
      src={myImg}
      alt="Picture of the author"
      width={280}
      height={420}
    />
        </div>
      </div>
    </div>
  );
};

export default About;
