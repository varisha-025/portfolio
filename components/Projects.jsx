import React from 'react';
import fakenewsImg from '../public/assets/projects/fakenews.png';
import dictionaryImg from '../public/assets/projects/dictionary.jpeg'
import kayaImg from '../public/assets/projects/kaya.jpeg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full pt-32'>
      <div className='max-w-[1240px] mx-auto py-16'>
        <p className='text-xl tracking-widest uppercase text-[#EEBBC3] px-6'>
          Projects
        </p>
        <h2 className='py-4 px-6 text-4xl text-[#B8C1EC] md:text-3xl'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8 py-6'>
          <ProjectItem
            title='Fake News Detector'
            backgroundImg={fakenewsImg}
            projectUrl='/fakenews'
            tech="Django, Sklearn, Heroku"
          />
          <ProjectItem
            title='Kaya Product Landing Page'
            backgroundImg={kayaImg}
            projectUrl='/kaya'
            tech="Javascript, CSS, Netlify"
          />
          <ProjectItem
            title='Dictionary App'
            backgroundImg={dictionaryImg}
            projectUrl='/dictionary'
            tech="Javascript, CSS, HTML"
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
