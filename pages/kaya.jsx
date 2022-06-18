import Image from 'next/image';
import React from 'react';
import kayaImg from '../public/assets/projects/kaya.jpeg'

import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const fakenews = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={kayaImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Kaya Product Landing Page</h2>
          <h3>Javascript/ CSS/ Netlify</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5] py-4'>Project</p>
          <h2>Overview</h2>
          <p className='py-3'>
          The product landing page of Kaya Product showcases its features and its superiority over other hands free speakers. It was the Africa&apos;s first hands-free speaker which gained popularity quickly.
          </p>
          <p className='py-3'>
          It was build by me under the basic track of Hack the Web Hackathon, organised by The Programming Club(TPC), at IIITDM Jabalpur and it won the first prize.
          </p>
          <Link href={"https://kayalandingpage.netlify.app/"}><button className='px-5 py-2 mt-4 mr-8'>Demo</button></Link>
          <Link href={"https://github.com/varisha-025/kaya_product"}><button className='px-5 py-2 mt-4'>Code</button></Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Bootstrap
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> AOS library
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Netlify
              </p>
              
            </div>
          </div>
        </div>
        <div className='pb-10'>
        <Link href='/#projects'><span className=' underline cursor-pointer '>Go Back</span></Link>
        </div>
      </div>
    </div>
  );
};

export default fakenews;
