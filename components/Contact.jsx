import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import linkedinIcon from '../public/assets/linkedin.png'
import gmailIcon from '../public/assets/gmail.png'
import stackoverflowIcon from '../public/assets/stackoverflow.png'
import { SiLeetcode } from 'react-icons/si';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
// import styles from "../styles/Icons.module.css"

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch </h2>
        <div className='grid md:grid-cols-5 gap-6 my-2'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                {/* <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src='#'
                  alt='/'
                /> */}
              </div>
              <div className='pl-4'>
                <h2 className='py-2 my-3'>Varisha Rashid</h2>
                <p className='text-xl tracking-wide uppercase text-[#5651e5]'>Full-Stack Web Developer</p>
                <p className='py-4 text-lg'>
                  Although I&apos;m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!
                </p>
              </div>
              <div>
                <div className='flex pt-32 mx-2  text-center items-center justify-center'>

                  <div className='mr-4 ml-2'>

                    <Link href={"https://www.linkedin.com/in/varisha-rashid-5a8848198/"}><Image src={linkedinIcon} width={"44px"} height={"44px"} style={{ "cursor": "pointer" }} /></Link>


                  </div>
                  <div className='mx-2'>
                    <Link href={"https://github.com/varisha-025"}><FaGithub style={{ "height": "44px", "width": "50px", "cursor": "pointer" }} /></Link>
                  </div>
                  <div className='mx-3'>
                    <Link href={"https://leetcode.com/varisha25/"}><SiLeetcode style={{ "height": "44px", "width": "50px", "cursor": "pointer" }} /></Link>

                  </div>

                  <div className='mx-3'>
                    <Link href={"mailto:varisharashid01@gmail.com"}><Image src={gmailIcon} width={"44px"} height={"44px"} style={{ "cursor": "pointer" }} /></Link>
                  </div>
                  <div className='mx-3'>
                    <Link href={"https://stackoverflow.com/users/15527533/varisha15"}><Image src={stackoverflowIcon} width={"44px"} height={"44px"} style={{ "cursor": "pointer" }} /></Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-fit shadow-xl shadow-gray-400 rounded-xl lg:p-4'>


            <div className="max-w-md mx-auto py-14">
              <div className="max-w-md mx-auto">
                <div className="text-center mb-20">
                  <h1 className=" text-4xl font-semibold text-gray-700 ">Lets Connect</h1>
                  <p className="py-5 text-gray-500 ">Send me a message</p>
                </div>
                <div className="m-7">
                  <form action="mailto:varisharashid01@gmail.com" method="post" encType="multipart/form-data"
                    name="EmailForm">
                    <div className="mb-6">
                      <label htmlFor="email" className="block mb-2 text-sm text-gray-600 ">Email Address</label>
                      <input type="email" name="email" id="email" placeholder="you@company.com" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-500  dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        <label htmlFor="message" className="text-sm text-gray-600 ">Message</label>

                      </div>
                      <textarea type="message" name="message" id="message" placeholder="Your message" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-500  dark:text-white dark:placeholder-gray-500 dark:border-gray-600  dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6 flex justify-center ">

                      <button className="w-24 px-2 py-3 focus:ring-2 ring-indigo-600 bg-indigo-200">Send</button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />

            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Contact;
