import Image from 'next/image';
import React from 'react';

import fakenewsImg from '../public/assets/projects/fakenews.png';

import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const fakenews = () => {
  return (
    <div className='w-full '>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-[#ecf0f3]/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={fakenewsImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 sm:px-10'>
          <h2 className='py-2 pt-3 text-4xl text-[#292828]'>Fake News Detector App</h2>
          <h3 className='text-[#292828]'>Django/ Sklearn/ Heroku</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 sm:px-16'>
        <div className='col-span-4 mt-8'>
          <p className='uppercase text-xl tracking-widest text-[#eebbc3] py-4'>Project</p>
          <h2 className='text-[#b8c1ec]'>Overview</h2>
          <p className='py-3 text-lg text-white'>
          This website is an ML model created using Sklearn and NLP, integrated with Django, hosted on Heroku. It predicts whether the given news headline or news URL is fake or not. The dataset we used is the one available in kaggle with some Asian news web scraped from the internet using the trafilatura library.
          </p>
          <p className='py-3 text-lg text-white'>
          It was a group project build under an event, Dev Drive, organised by The Programming Club(TPC), at IIITDM Jabalpur.
          </p>
          <Link href={"https://newsdetectionapp.herokuapp.com/"}><button className='px-5 py-2 mt-4 mr-8 shadow-gray-400 rounded-xl uppercase hover:scale-110 ease-in duration-300 hover:text-[#232946] bg-[#eebbc3] text-white'>Demo</button></Link>
          <Link href={"https://github.com/varisha-025/fake-news-app"}><button className='px-5 py-2 mt-4 mr-8 shadow-gray-400 rounded-xl uppercase hover:scale-110 ease-in duration-300 hover:text-[#232946] bg-[#eebbc3] text-white'>Code</button></Link>
        </div>
        <div className='col-span-4 md:col-span-1 bg-[#fffffe] mt-8 shadow-sm shadow-gray-400 rounded-xl p-4'>
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
        <Link href='/#projects'><span className='text-white underline cursor-pointer hover:text-[#b8c1ec]'>Go Back</span></Link>
        </div>
      </div>
    </div>
  );
};

export default fakenews;
