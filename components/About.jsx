import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          {/* <p className='py-2 text-gray-600'>// I am not your normal developer</p> */}
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam velit vitae fugiat sunt in ut, aut cum, hic, quas nihil illo recusandae consequatur officiis fugit animi doloremque esse dolor!
          </p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia soluta obcaecati, velit minima deserunt nesciunt quae unde totam quidem dolor, repellendus rerum, laborum quaerat! Eius aperiam quod delectus minima quidem.
          </p>
          {/* <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p> */}
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <img className='rounded-xl' src="https://drive.google.com/file/d/1b9AuFyxRpi0r7qV6uxLvnLT9I7XV0206/view?usp=sharing" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
