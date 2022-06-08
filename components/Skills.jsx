import React from 'react';
import SkillItem from './SkillItem';
import reactIcon from '../public/assets/skills/react.png'
import nextjsIcon from '../public/assets/skills/nextjs.png'
import expressjsIcon from '../public/assets/skills/expressjs.jpeg'
import nodejsIcon from '../public/assets/skills/node-js.png'
import djangoIcon from '../public/assets/skills/django.png'
import mongodbIcon from '../public/assets/skills/mongodb.png'
import githubIcon from '../public/assets/skills/github.png'
import htmlIcon from '../public/assets/skills/html.png'
import jqueryIcon from '../public/assets/skills/jquery.png'
import mysqlIcon from '../public/assets/skills/mysql.png'
import drfIcon from '../public/assets/skills/drf.png'
import jsIcon from '../public/assets/skills/javascript.png'
import tailwindIcon from '../public/assets/skills/tailwind.png'


const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] px-6'>
          Skills
        </p>
        <h2 className='py-4 px-6'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <SkillItem src={reactIcon} name="React.js" />
          <SkillItem src={nextjsIcon} name="Next.js" />
          <SkillItem src={expressjsIcon} name="Express.js" />
          <SkillItem src={nodejsIcon} name="Node.js" />
          <SkillItem src={drfIcon} name="Django REST framework" />
          <SkillItem src={djangoIcon} name="Django" />
          <SkillItem src={mongodbIcon} name="MongoDB" />
          <SkillItem src={mysqlIcon} name="MySQL" />
          <SkillItem src={jqueryIcon} name="JQuery" />
          <SkillItem src={githubIcon} name="Github" />
          <SkillItem src={jsIcon} name="JavaScript" />
          <SkillItem src={htmlIcon} name="HTML" />
          <SkillItem src={tailwindIcon} name="Tailwind CSS" />

        </div>
      </div>
    </div>
  );
};

export default Skills;
