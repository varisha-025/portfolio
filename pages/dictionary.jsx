import Image from 'next/image';
import React from 'react';
import dictionaryImg from '../public/assets/projects/dictionary.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Icons.module.css'

const fakenews = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[35vh] lg:h-[40vh] bg-[#ecf0f3]/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={dictionaryImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 pt-3 text-4xl text-[#292828]'>Dictionary App</h2>
          <h3 className='text-[#292828]'>Javascript/ HTML/ CSS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4 mt-8'>
          <p className='uppercase text-xl tracking-widest text-[#eebbc3] py-4'>Project</p>
          <h2 className='text-[#b8c1ec]'>Overview</h2>
          <p className='py-3 text-lg text-white'>
            Dictionary website using dictionary API which fetches the definition of the word entered along with its pronuniciation in the form an audio.
          </p>
          <Link href={"https://varisha-025.github.io/Dictionary_App/"}><button className='px-5 py-2 mt-4 mr-8 shadow-gray-400 rounded-xl uppercase hover:scale-110 ease-in duration-300 hover:text-[#232946] bg-[#eebbc3] text-white'>Demo</button></Link>
          <Link href={"https://github.com/varisha-025/Dictionary_App"}><button className='px-5 py-2 mt-4 shadow-gray-400 hover:scale-110 ease-in duration-300 hover:text-[#232946] rounded-xl uppercase bg-[#eebbc3] text-white'>Code</button></Link>
        </div>
        <div className='col-span-4 md:col-span-1 bg-[#fffffe] shadow-gray-400 mt-8 rounded-xl p-4'>
          <div className='p-2 '>
            <h3 className='text-center font-bold pb-2'>Technologies</h3>
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
                <RiRadioButtonFill className='pr-1' /> Github Pages
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Dictionary API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Bootstrap
              </p>
            </div>
          </div>
        </div>
        <div className='pb-10'>
          {/* <FontAwesomeIcon icon={faArrowLeft} className={styles.whitecol} /> */}
          <Link href='/#projects'><span className=' underline text-white cursor-pointer '>Go Back</span></Link>
        </div>
      </div>
    </div>
  );
};

export default fakenews;
