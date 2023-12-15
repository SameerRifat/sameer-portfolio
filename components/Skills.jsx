import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion';

// const skills = [
//     { name: 'HTML', level: 75, className: 'html' },
//     { name: 'CSS', level: 90, className: 'css' },
//     { name: 'JavaScript', level: 50, className: 'js' },
//     { name: 'React.js', level: 85, className: 'react' },
//     { name: 'HTML', level: 75, className: 'html' },
//     { name: 'CSS', level: 90, className: 'css' },
//     { name: 'JavaScript', level: 50, className: 'js' },
//     { name: 'React.js', level: 85, className: 'react' },
// ];

const SkillBar = ({ skill }) => {
    return (
        <div>
            <div className='flex justify-between items-center pr-2 mb-0.5'>
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
            </div>
            <div className='w-[100%] h-4 bg-white rounded-md relative shadow-lg'>
                <motion.div
                    style={{ width: `${skill.level}%` }}
                    className={`absolute w-[100%] h-[100%] bg-gradient-to-br from-purple-500 to-pink-500 rounded-md transition-all`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                        duration: 3
                    }}
                ></motion.div>
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section className='bg-purple-200 pt-10 pb-14 my-20 '>
            <SectionHeading title='My Experties Area' subtitle='Why choose me' />
            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-20'>
                    {/* <div className='border-4 border-red-500'> */}
                    {skillsData.map((skill, ind) => {
                        return <React.Fragment key={ind}>
                            <SkillBar skill={skill} />
                        </React.Fragment>
                    })}
                    {/* </div> */}
                    {/* <div className='border-4 border-red-500'></div> */}
                </div>
                {/* <ul className="flex flex-wrap gap-4 justify-center text-gray-800">
                    {skillsData.map((skill, index) => (
                        <li
                            key={index}
                            className="bg-white bg-opacity-80 shadow-sm backdrop-blur-[3rem] border border-purple-500/[0.1] px-5 py-3 rounded-lg dark:bg-white/10 dark:text-white/80"

                        >
                            {skill}
                        </li>
                    ))}
                </ul> */}
            </div>
        </section>
    )
}

export default Skills