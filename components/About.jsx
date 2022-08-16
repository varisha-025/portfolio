import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import myImg from '../public/assets/projects/mypic.jpeg';


const About = () => {
  return (
    <div id='about' className='w-screen md:h-screen flex items-center pt-20 mx-3 px-6'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#EEBBC3] '>About</p>
          <h2 className='py-4 text-4xl md:text-3xl text-[#B8C1EC]'>Who I Am</h2>

          <p className='pt-5 text-[#fffffe] text-xl'>
            Hello! My name is Varisha and I enjoy creating things that live on the internet.

            The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I&apos;ve had the privilege of working at a start-up <Link href="#">CRSP CONNECT</Link> as a full stack intern in 2021. I have contributed in Open Source through GirlScript Summer of Code(GSSoC) in 2022. I&apos;m an active member of BitByte's Development Wing and an organisation known as Women Who Code.
          </p>
          <p className="pt-4 text-[#fffffe] text-xl">

            In addition to that, I like joining communities, mentoring new developers, and supporting organizations to promote diversity in tech. When I&apos;m not programming, I focus on my hobbies which are: playing badminton, doodling, meeting people and growing my network.
          </p>
        </div>
        <div className='w-full shadow-gray-400  flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>

          <Image

            src={myImg}
            alt="My image"
            width={280}
            height={400}
            style={{ borderRadius: "15px", boxShadow: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
