import Image from 'next/image';
import React from 'react';
import SkillItem from './SkillItem';
import reactIcon from '../public/assets/skills/react.png'

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
          <SkillItem src="/../public/assets/skills/nextjs.png" name="Next.js" />
          <SkillItem src="/../public/assets/skills/expressjs.jpeg" name="Express.js" />
          <SkillItem src="/../public/assets/skills/node-js.png" name="Node.js" />

          <SkillItem src="/../public/assets/skills/django.png" name="Django" />
          <SkillItem src="/../public/assets/skills/mongodb.png" name="MongoDB" />
          <SkillItem src="/../public/assets/skills/mysql.png" name="MySQL" />
          <SkillItem src="/../public/assets/skills/jquery.gif" name="JQuery" />

          <SkillItem src="/../public/assets/skills/github.png" name="Github" />

          <SkillItem src="/../public/assets/skills/javascript.png" name="JavaScript" />
          <SkillItem src="/../public/assets/skills/html.png" name="HTML" />
          <SkillItem src="/../public/assets/skills/css.png" name="CSS" />

        </div>
      </div>
    </div>
  );
};

export default Skills;
