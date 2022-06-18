import Image from 'next/image';
import React from 'react';

import fakenewsImg from '../public/assets/projects/fakenews.png';

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
          src={fakenewsImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Fake News Detector App</h2>
          <h3>Django/ Sklearn/ Heroku</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5] py-4'>Project</p>
          <h2>Overview</h2>
          <p className='py-3'>
           
          This website is an ML model created using Sklearn and NLP, integrated with Django, hosted on Heroku. It predicts whether the given news headline or news URL is fake or not. The dataset we used is the one available in kaggle with some Asian news web scraped from the internet using the trafilatura library.
          </p>
          <p className='py-3'>
          It was a group project build under an event , Dev Drive, organised by The Programming Club(TPC), at IIITDM Jabalpur.
          </p>
          <Link href={"https://newsdetectionapp.herokuapp.com/"}><button className='px-5 py-2 mt-4 mr-8'>Demo</button></Link>
          <Link href={"https://github.com/varisha-025/fake-news-app"}><button className='px-5 py-2 mt-4'>Code</button></Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <h3 className='text-center font-black pb-2'>Technologies</h3>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Django
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Sklearn
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Heroku
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> News API
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
