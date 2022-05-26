import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
// import styles from "../styles/Icons.module.css"
const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch </h2>
        <div className='grid lg:grid-cols-5 gap-8 my-2'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                {/* <img
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src='#'
                  alt='/'
                /> */}
              </div>
              <div>
                <h2 className='py-2 my-6'>Varisha Rashid</h2>
                <p className='font-semibold text-xl'>Full-Stack Web Developer</p>
                <p className='py-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ex fugiat consequuntur illo repudiandae error accusamus esse porro? Rem delectus eligendi iure consequatur error laudantium voluptas, atque eveniet molestias soluta?
                </p>
              </div>
              <div>
                <div className='flex items-bottom py-6 mx-3'>

                  <div className='mx-3'>

                    <Link href={"https://www.linkedin.com/in/varisha-rashid-5a8848198/"}><img src="https://img.icons8.com/color/48/000000/linkedin.png" style={{ "cursor": "pointer" }} /></Link>
                  </div>
                  <div className='mx-3'>
                    <Link href={"https://github.com/varisha-025"}><FaGithub style={{ "height": "44px", "width": "50px", "cursor": "pointer" }} /></Link>
                  </div>
                  <div className='mx-3'>
                    <Link href={"https://leetcode.com/varisha25/"}><SiLeetcode style={{ "height": "44px", "width": "50px", "cursor": "pointer" }} /></Link>

                  </div>

                  <div className='mx-3'>
                    <Link href={"mailto:varisharashid01@gmail.com"}><img src="https://img.icons8.com/color/48/000000/gmail-new.png" style={{ "cursor": "pointer" }} /></Link>
                  </div>
                  <div className='mx-3'>
                    <Link href={"https://stackoverflow.com/users/15527533/varisha15"}><img src="https://img.icons8.com/color/48/000000/stackoverflow.png" style={{ "cursor": "pointer" }} /></Link>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>


            <div class="max-w-md mx-auto my-40">
              <div class="max-w-md mx-auto">
                <div class="text-center mb-20">
                  <h1 class=" text-4xl font-semibold text-gray-700 ">LET'S CONNECT</h1>
                  <p class="py-3 text-gray-500 ">Send me a message</p>
                </div>
                <div class="m-7">
                  <form action="">
                    <div class="mb-6">
                      <label for="email" class="block mb-2 text-sm text-gray-600 ">Email Address</label>
                      <input type="email" name="email" id="email" placeholder="you@company.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-500  dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:border-gray-500" />
                    </div>
                    <div class="mb-6">
                      <div class="flex justify-between mb-2">
                        <label for="password" class="text-sm text-gray-600 ">Message</label>
                        
                      </div>
                      <textarea type="message" name="message" id="message" placeholder="Your message" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-500  dark:text-white dark:placeholder-gray-500 dark:border-gray-600  dark:focus:border-gray-500" />
                    </div>
                    <div class="mb-6 flex justify-center ">
                      
                      <button class=" w-24 px-2 py-4 focus:ring-2 ring-indigo-600 bg-indigo-200">Send</button>
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
