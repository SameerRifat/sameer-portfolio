import Image from 'next/image'
import React from 'react'

import { PiHandWavingFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const Hero = () => {
    return (
        <section className='container grid grid-cols-1 gap-20 lg:gap-0 lg:grid-cols-2 min-h-[80vh] border-4 border-red-500'>
            <div className='flex items-center justify-center text-center lg:text-start order-2 lg:order-1'>
                <div className='border-4 border-blue-500'>
                    <span className=' flex items-center justify-center lg:justify-start gap-2 text-base lg:text-lg'>
                        <Image
                            src='/assets/hand.png'
                            width={30}
                            height={30}
                            quality="95"
                            priority={true}
                        />
                        <span>Hi!, I'am Sameer Rifat</span>
                    </span>
                    <h1 className='text-4xl font-extrabold my-4'>MERN Stack Developer</h1>
                    <span className="font-bold">full-stack developer</span> with{" "}
                    <span className="font-bold">2 years</span> of experience. I enjoy
                    building <span className="italic">sites & apps</span>. My focus is{" "}
                    <span className="underline">React (Next.js)</span>.

                    <div
                        className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center font-medium"
                    >
                        <Link
                            href="#contact"
                            className="group bg-gray-900 text-white w-52 py-3 rounded-md flex items-center justify-center gap-2
                                        outline-none hover:scale-110 focus:scale-110 hover:bg-gray-950 active:scale-105 transition-all"
                            // onClick={() => {
                            //     setActiveSection("Contact");
                            //     setTimeOfLastClick(Date.now());
                            // }}
                        >
                            Contact me here{" "}
                            <FaArrowRight className="opacity-70 group-hover:translate-x-1 transition-all" />
                        </Link>

                        <a
                            href="/CV.pdf"
                            download
                            className="group border border-white/80 shadow-xl w-52 py-3 rounded-md flex items-center justify-center gap-2 
                                        outline-none hover:scale-110 focus:scale-110 active:scale-[1] transition-all cursor-pointer dark:bg-white/10
                                        "
                        >
                            Download Resume{" "}
                            <MdOutlineFileDownload className="text-xl opacity-90 group-hover:translate-y-1 transition-all" />
                        </a>

                        <a
                            className="bg-white p-4 rounded-full flex items-center justify-between gap-2 border border-black/10 cursor-pointer text-gray-900
                                        outline-none hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all dark:bg-white/10 dark:text-white/60"
                            href="https://linkedin.com"
                            target="_blank"
                        >
                            <FaLinkedin className="text-xl" />
                        </a>

                        <a
                            className="bg-white p-4 rounded-full flex items-center justify-between gap-2 border border-black/10 cursor-pointer text-gray-900
                                        outline-none hover:scale-[1.15] focus:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all dark:bg-white/10 dark:text-white/60"
                            href="https://github.com"
                            target="_blank"
                        >
                            <FaGithub className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center relative order-1 lg:order-2 border-4 border-yellow-500 pl-6'>
                <div className='relative w-[100px] xs:w-[180px] sm:w-[200px] md:w-[240px] h-[100px] xs:h-[180px] sm:h-[200px] md:h-[240px] bg-gradient-to-br from-yellow-500 via-yellow-300 to-yellow-500 rotate-45 rounded-[1rem] xs:rounded-[1.7rem] sm:rounded-[2.3rem] md:rounded-[3rem] -z-50 clip'>
                    <Image
                        src='/assets/profile.png'
                        width={280}
                        height={280}
                        className='absolute xs:-top-[65px] sm:-top-[72px] md:-top-[90px] -translate-x-[1.6rem] sm:-translate-x-[25px] md:-translate-x-9 -rotate-45 w-[210px] sm:w-[230px] md:w-[280px] max-w-[300px] rounded-[3rem]'
                        quality="95"
                        priority={true}
                    />
                    <div
                        className='bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 absolute -left-14 bottom-16 rotate-[-90deg] w-20 h-5 rounded-sm'
                    >
                    </div>
                    {/* <div
                        className='bg-blue-500 absolute w-28 h-5 rotate-[-90deg] top-20 right-20 z-10'
                    >

                    </div> */}
                </div>
                <div className='bg-yellow-500 w-[100px] xs:w-[180px] sm:w-[200px] md:w-[240px] h-[100px] xs:h-[180px] sm:h-[200px] md:h-[240px] absolute rotate-45 left-1/2 top-1/2 -translate-x-[65%] -translate-y-[53%] lg:-translate-y-[55%] rounded-[3rem] opacity-30 -z-[60] blur-[2px]'>

                </div>
                <div className='w-[180px] sm:w-[200px] lg:w-[240px] h-[180px] sm:h-[200px] md:h-[240px] absolute rotate-45 left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-[3rem]'>
                    <div
                        className='bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 absolute w-20 h-5 rounded-sm rotate-[-90deg] top-16 -right-[83px] lg:-right-[63px] z-30'
                    >
                    </div>
                    <div className='bg-white w-12 h-12 rounded-xl absolute -top-[3rem] right-[3.4rem] lg:right-[4.75rem] -rotate-45 bg-opacity-60 backdrop-blur-[1rem] p-2 flex justify-center items-center'>
                        <Image
                            src='/assets/react.png'
                            width={40}
                            height={40}
                            quality="95"
                            priority={true}
                        />
                    </div>
                    <div className='bg-white w-16 h-8 rounded-md absolute bottom-[5rem] -right-[3.7rem] -rotate-45 bg-opacity-60 backdrop-blur-[1rem] p-2 flex justify-center items-center'>
                        {/* <Image
                            src='/assets/tailwind.png'
                            width={40}
                            height={40}
                        /> */}
                        <span className='text-[10px] text-green-400 font-semibold tracking-wide flex items-center'><span className='tracking-tighter text-green-400'>{`</>`}</span>Coding</span>
                    </div>
                    <div className='bg-white w-12 h-12 rounded-xl absolute -bottom-[10px] -right-[2rem] -rotate-45 bg-opacity-60 backdrop-blur-[1rem] p-2 flex justify-center items-center'>
                        <Image
                            src='/assets/tailwind.png'
                            width={40}
                            height={40}
                            quality="95"
                            priority={true}
                        />

                    </div>
                    <div className='bg-white w-12 h-12 rounded-xl absolute -bottom-[35px] left-[6.5rem] -rotate-45 bg-opacity-60 backdrop-blur-[1rem] p-2 flex justify-center items-center'>
                        <Image
                            src='/assets/js.png'
                            width={40}
                            height={40}
                            quality="95"
                            priority={true}
                        />

                    </div>
                    <div className='bg-white w-12 h-12 rounded-xl absolute -bottom-[20px] -left-[0rem] -rotate-45 bg-opacity-60 backdrop-blur-[1rem] p-2 flex justify-center items-center'>
                        <Image
                            src='/assets/node.png'
                            width={40}
                            height={40}
                            quality="95"
                            priority={true}
                        />
                    </div>

                    <div className='bg-white w-auto h-8 rounded-md absolute bottom-[6rem] -left-[8rem] -rotate-45 bg-opacity-60 backdrop-blur-[1rem] p-1 px-2 flex items-center gap-1'>
                        <Image
                            src='/assets/next.png'
                            width={15}
                            height={15}
                            quality="95"
                            priority={true}
                        />
                        <span className='text-[10px] text-gray-800 font-semibold tracking-wide flex items-center'>Next.js</span>
                    </div>
                    <div className='bg-white w-auto h-8 rounded-md absolute bottom-1 -left-[7rem] -rotate-45 bg-opacity-60 backdrop-blur-[1rem] p-1 px-2 flex items-center gap-0.5'>
                        <Image
                            src='/assets/ts.svg'
                            width={15}
                            height={15}
                            quality="95"
                            priority={true}
                            className='rounded-sm'
                        />
                        <span className='text-[9px] text-blue-600 font-semibold tracking-wide flex items-center'>TypeScript</span>
                    </div>
                </div>
                <div className='w-[210px] h-[210px] sm:w-[230px] sm:h-[230px] md:w-[270px] md:h-[270px] border-r-2 border-b-[3px] border-dashed border-yellow-300 absolute rotate-45 left-1/2 top-1/2 -translate-x-[46%] -translate-y-[50%] rounded-[3rem] -z-50'>

                </div>
                {/* <div className='relative w-60 h-[260px]'>
                    <div className='w-full h-full bg-red-500 rotate-45 overflow-hidden rounded-[3rem] -z-50'>
                    </div>
                    <Image
                        src='/assets/profile.png'
                        width={250}
                        height={300}
                        className='absolute left-[55%] bottom-5 -translate-x-1/2'
                        
                    />
                </div> */}
            </div>
        </section>
    )
}

export default Hero