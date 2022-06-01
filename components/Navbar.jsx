import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { SiLeetcode } from 'react-icons/si';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#ecf0f3');
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/property' ||
      router.asPath === '/crypto' ||
      router.asPath === '/netflix' ||
      router.asPath === '/twitch'
    ) {
      setNavBg('white');
      setLinkColor('black');
    } else {
      setNavBg('#2A2A2A');
      setLinkColor('#ecf0f3');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100]'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-end items-center w-full h-full px-14 2xl:px-16'>
        
         <div> 
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-md uppercase  hover:text-indigo-600 font-semibold'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-md uppercase hover:text-indigo-600 font-semibold'>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-md uppercase hover:text-indigo-600 font-semibold'>Skills</li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-md uppercase hover:text-indigo-600 font-semibold'>
                Projects
              </li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-md uppercase hover:text-indigo-600 font-semibold'>
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden text-white'>
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
      
      <div
        className={
          nav ? 'md:hidden fixed right-0 top-0 w-full h-screen bg-white/70' : ''
        }
      >
        <div
          className={
            nav
              ? ' fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed right-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-end'>
              
              <div
                onClick={handleNav}
                className="p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
           
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='flex py-20'>

            {/* <div className='mx-3'> */}

              {/* <Link href={"https://www.linkedin.com/in/varisha-rashid-5a8848198/"}><img src="https://img.icons8.com/color/48/000000/linkedin.png" style={{"height": "30px", "width": "35px","cursor":"pointer"}}/></Link>
            </div>
            <div className='mx-3'>
              <Link href={"https://github.com/varisha-025"}><FaGithub style={{ "height": "30px", "width": "35px" ,"cursor":"pointer" }} /></Link>
            </div>
            <div className='mx-3'>
              <Link href={"https://leetcode.com/varisha25/"}><SiLeetcode style={{ "height": "30px", "width": "35px","cursor":"pointer"  }} /></Link>

            </div>

            <div className='mx-3'>
              <Link href={"mailto:varisharashid01@gmail.com"}><img src="https://img.icons8.com/color/48/000000/gmail-new.png" style={{"height": "30px", "width": "35px","cursor":"pointer"}}/></Link>
            </div>
            <div className='mx-3'>
              <Link href={"https://stackoverflow.com/users/15527533/varisha15"}><img src="https://img.icons8.com/color/48/000000/stackoverflow.png" style={{"height": "30px", "width": "35px","cursor":"pointer"}}/></Link>
            </div> */}
        
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Navbar;
