import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
      router.asPath === '/kaya' ||
      router.asPath === '/fakenews' ||
      router.asPath === '/dictionary'
    ) {
      setNavBg('#292828');
      setLinkColor('#B8C1EC');
    } else {
      setNavBg('#232946');
      setLinkColor('#FFFFFE');
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
      }>

      <div className='flex items-center justify-end w-full h-full px-14 2xl:px-16'>


        <div >
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>

            <Link href='/'>
              <li className='ml-10 text-md uppercase hover:text-[#b8c1ec] font-semibold'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-md uppercase hover:text-[#b8c1ec] font-semibold'>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-md uppercase hover:text-[#b8c1ec] font-semibold'>Skills</li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-md uppercase hover:text-[#b8c1ec] font-semibold'>
                Projects
              </li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-md uppercase hover:text-[#b8c1ec] font-semibold'>
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden text-white'>
            <AiOutlineMenu size={30} />
          </div>
        </div>


        <div
          className={
            nav ? 'md:hidden fixed right-0 top-0 w-full h-screen bg-[#eebbc3]/70' : ''
          }
        >
          <div
            className={
              nav
                ? ' fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#b8c1ec] p-10 ease-in duration-500'
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
                  <li onClick={() => setNav(false)} className='py-4 text-[#232946] hover:text-white ml-4 text-sm'>
                    Home
                  </li>
                </Link>
                <Link href='/#about'>
                  <li onClick={() => setNav(false)} className='py-4 text-[#232946] hover:text-white ml-4 text-sm'>
                    About
                  </li>
                </Link>
                <Link href='/#skills'>
                  <li onClick={() => setNav(false)} className='py-4 text-[#232946] hover:text-white ml-4 text-sm'>
                    Skills
                  </li>
                </Link>
                <Link href='/#projects'>
                  <li onClick={() => setNav(false)} className='py-4 text-[#232946] hover:text-white ml-4 text-sm'>
                    Projects
                  </li>
                </Link>
                <Link href='/#contact'>
                  <li onClick={() => setNav(false)} className='py-4 text-[#232946] hover:text-white ml-4 text-sm'>
                    Contact
                  </li>
                </Link>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
