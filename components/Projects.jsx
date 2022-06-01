import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import fakenewsImg from '../public/assets/projects/fakenews.png';
import dictionaryImg from '../public/assets/projects/dictionary.jpeg'
import kayaImg from '../public/assets/projects/kaya.jpeg'
// import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I have Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Fake News Detector'
            backgroundImg={fakenewsImg}
            projectUrl='/fakenews'
            tech="Django, Sklearn, Heroku"
          /> 
          <ProjectItem
            title='Dictionary App'
            backgroundImg={dictionaryImg}
            projectUrl='/dictionary'
            tech="Javascript, CSS, HTML"
          />
          <ProjectItem
            title='Product Landing Page'
            backgroundImg={kayaImg}
            projectUrl='/kaya'
            tech="Javascript, CSS, HTML"
          /> 
          {/* <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
