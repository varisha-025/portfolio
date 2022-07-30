import React, { useState } from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import sendEmail from '../../server/utils/sendEmail';

const Contact = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmailToMe(e) {
    e.preventDefault();

    const formData = {};
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    })
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })
    console.log(formData, "kiiim")
  };

  return (
    <div id='contact' className='w-full lg:h-screen pt-20'>
      <div className='max-w-[1240px] m-auto px-6 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#EEBBC3] px-7'>
          Contact
        </p>
        <h2 className='py-4 px-6 text-4xl text-[#b8c1ec] md:text-3xl'>Get In Touch </h2>
        <div className='grid md:grid-cols-5 gap-6 my-2 py-4'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full  bg-[#fffffe] shadow-gray-400 rounded-xl pt-8'>
            <div className='lg:p-4 h-full '>

              <div className=''>
                <h2 className='py-2 my-3 text-center text-3xl'>Varisha Rashid</h2>
                <p className='text-2xl tracking-wide  text-center'>Full-Stack Web Developer</p>
                <p className='py-4 mx-4 ml-6 text-lg text-center'>
                  I&apos;m currently looking for full-time Web Development(preferably backend) internship opportunities! If you know of any positions available, please feel free to leave me a message.
                </p>
              </div>
              <div>
                <div className='flex pt-36 mx-2 pb-10 text-center items-center justify-center'>
                  <div className='mx-3'>
                    <Link href={"https://www.linkedin.com/in/varisha-rashid-5a8848198/"}><i className="fa fa-linkedin fa-3x" style={{ "cursor": "pointer" }}></i></Link>
                  </div>

                  <div className='mx-3'>
                    <Link href={"https://github.com/varisha-025"} ><FaGithub style={{ "height": "38px", "width": "44px", "cursor": "pointer" }} /></Link>

                  </div>
                  <div className='mx-3'>
                    <Link href={"https://leetcode.com/varisha25/"}><SiLeetcode style={{ "height": "39px", "width": "46px", "cursor": "pointer" }} /></Link>
                  </div>

                  <div className='mx-3 pt-2'>
                    <Link href={"mailto:varisharashid01@gmail.com"}><FontAwesomeIcon icon={faEnvelope} style={{ "height": "37px", "width": "46px", "cursor": "pointer" }} /></Link>
                  </div>
                  <div className='mx-3 ml-4'>
                    <Link href="https://stackoverflow.com/users/15527533/varisha15" ><i className="fa fa-stack-overflow fa-2x" style={{ "cursor": "pointer" }}></i></Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-fit bg-[#fffffe] shadow-gray-400 rounded-xl lg:p-4'>


            <div className="max-w-md mx-auto py-14">
              <div className="max-w-md mx-auto">
                <div className="text-center mb-14">
                  <h1 className="text-4xl font-semibold text-gray-700 ">Let&apos;s Connect</h1>
                  <p className="py-4 text-gray-500 ">Send me a message</p>
                </div>
                <div className="m-7">
                  <form onSubmit={sendEmailToMe} >
                    <div className="mb-6">
                      <label htmlFor="email" className="block mb-2 text-sm  ">Email Address</label>
                      <input type="email" name="email" id="email" placeholder="you@company.com" value={email}
                        onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring  focus:border-[#b8c1ec] dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        <label htmlFor="message" className="text-sm ">Message</label>
                      </div>
                      <textarea type="message" name="message" id="message" value={message}
                        onChange={(e) => setMessage(e.target.value)} placeholder="Your message" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring  focus:border-[#b8c1ec]  dark:text-white dark:placeholder-gray-500 dark:border-gray-600  dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6 flex justify-center ">
                      <button type="submit" className="w-24 px-2 py-3 focus:ring-2  shadow-gray-400 rounded-xl uppercase bg-gradient-to-r bg-[#EEBBC3] hover:scale-110 ease-in duration-300 hover:text-[#232946] text-white">Send</button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-sm  shadow-gray-400 p-4 bg-[#EEBBC3] cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='hover:text-[#232946] text-[#fffffe]' size={30} />
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Contact;
