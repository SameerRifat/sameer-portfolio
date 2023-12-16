"use client"

import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { useScroll, motion, useTransform } from "framer-motion";
import ProjectDetail from './ProjectDetail'


const Projects = () => {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    // const [proj, setProj] = useState({ url: '' });
    const [proj, setProj] = useState({ imageUrl: '', videoUrl: '' });

    const handleClickOpen = (scrollType, item) => () => {
        console.log('item: ', item)
        setOpen(true);
        setScroll(scrollType);
        // setProj({ url: item.url })
        // setProj({ imageUrl: item.imageUrl, videoUrl: item.videoUrl, url: item.url })
        setProj({ imageUrl: item.imageUrl, url: item.url })
    };
    // console.log('Proj: ', proj)

    const handleClose = () => {
        setOpen(false);
        setProj(null)
    };

    return (
        <>
            <section className='container'>
                <SectionHeading title="Recent Works Hello" subtitle="My Portfolio" />
                <div className='flex justify-center'>
                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
                        {projectsData.map((item, ind) => {
                            // const { title, description, tags } = item
                            const { title, description, tags, imageUrl, bannerUrl } = item
                            return (
                                <div
                                    onClick={handleClickOpen("body", item)}
                                    className="group cursor-pointer bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 dark:even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20"
                                >
                                    <Image
                                        // src="/echoCartPoster.png"
                                        src={bannerUrl}
                                        alt="Project I worked on"
                                        quality={95}
                                        width={835}
                                        height={523}
                                        className="block sm:hidden w-full h-auto"
                                    />
                                    <div className="h-full pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col">
                                        <h3 className="text-2xl font-semibold">{title}</h3>
                                        <p className="mt-2 leading-relaxed text-gray-700 sm:mt-auto dark:text-white/60">
                                            {description}
                                        </p>
                                        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                                            {tags.map((tag, index) => (
                                                <li
                                                    key={index}
                                                    className="bg-gray-200 bg-opacity-70 backdrop-blur-[1rem] shadow-sm px-3 py-1 text-[0.7rem] uppercase tracking-wider text-gray-800 rounded-full dark:text-white/60"
                                                >
                                                    {tag}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Image
                                        // src="/echoCartPoster.png"
                                        src={bannerUrl}
                                        alt="Project I worked on"
                                        quality={95}
                                        width={835}
                                        height={523}
                                        className="absolute hidden sm:block bottom-0 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
                                            group-hover:-translate-x-3 
                                            group-hover:translate-y-3
                                            group-hover:-rotate-2
                                            group-hover:scale-[1.04]
                                            "
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <ProjectDetail open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} scroll={scroll} proj={proj} />
        </>
    )
}

export default Projects
