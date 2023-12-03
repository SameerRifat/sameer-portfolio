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
        <section className='w-[90%] mx-auto grid grid-cols-1 gap-10 lg:gap-0 xl:grid-cols-2 min-h-[80vh]'>
            <div className='flex items-center justify-center text-center lg:text-start order-2 xl:order-1'>
                <div className=''>
                    <span className='flex items-center justify-center lg:justify-start gap-2 text-base lg:text-lg'>
                        <Image
                            src='/assets/hand.png'
                            width={30}
                            height={30}
                            quality="95"
                            priority={true}
                            className='w-[18px] xxs:w-[20] xs:w-[25px] max-w-[30px]'
                        />
                        <span className='text-[14px] xs:text-base'>Hi!, I'am Sameer Rifat</span>
                    </span>
                    <h1 className='text-3xl xs:text-4xl font-bold xs:font-extrabold my-2 xs:my-3 sm:my-4'>MERN Stack Developer</h1>
                    <p className='text-xs xxs:text-[14px] xs:text-base'>
                        <span className="font-bold">full-stack developer</span> with{" "}
                        <span className="font-bold">2 years</span> of experience. I enjoy
                        building <span className="italic">sites & apps</span>. My focus is{" "}
                        <span className="underline">React (Next.js)</span>.
                    </p>

                    <div
                        className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center font-medium"
                    >
                        <Link
                            href="#contact"
                            className="group bg-gray-900 text-white w-full xxs:w-52 py-3 rounded-md shadow-xl flex items-center justify-center gap-2 text-[14px] xs:text-base
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
                            className="group border border-white/80 shadow-xl w-full xxs:w-52 py-3 rounded-md flex items-center justify-center gap-2 text-[14px] xs:text-base
                                        outline-none hover:scale-110 focus:scale-110 active:scale-[1] transition-all cursor-pointer dark:bg-white/10
                                        "
                        >
                            Download Resume{" "}
                            <MdOutlineFileDownload className="text-xl opacity-90 group-hover:translate-y-1 transition-all" />
                        </a>

                        <a
                            className="border-white/80 shadow-xl p-4 rounded-full flex items-center justify-between gap-2 border cursor-pointer text-gray-900
                                        outline-none hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all dark:bg-white/10 dark:text-white/60"
                            href="https://linkedin.com"
                            target="_blank"
                        >
                            <FaLinkedin className="text-xl" />
                        </a>

                        <a
                            className="border-white/80 shadow-xl p-4 rounded-full flex items-center justify-between gap-2 border cursor-pointer text-gray-900
                                        outline-none hover:scale-[1.15] focus:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all dark:bg-white/10 dark:text-white/60"
                            href="https://github.com"
                            target="_blank"
                        >
                            <FaGithub className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center relative order-1 xl:order-2 = pl-6 pb-5'>
                <div className='relative w-[80px] xxs:w-[130px] xs:w-[160px] sm:w-[200px] md:w-[240px] h-[80px] xxs:h-[130px] xs:h-[160px] sm:h-[200px] md:h-[240px] bg-gradient-to-br from-yellow-500 via-yellow-300 to-yellow-500 rotate-45 rounded-[1rem] xs:rounded-[1.7rem] sm:rounded-[2.3rem] md:rounded-[3rem] -z-50 clip'>
                    <Image
                        src='/assets/profile.png'
                        width={280}
                        height={280}
                        className='absolute -top-[19px] xxs:-top-[32px] xs:-top-[45px] sm:-top-[72px] md:-top-[90px] -translate-x-[4px] xxs:-translate-x-[0px] xs:-translate-x-[5px] sm:-translate-x-[25px] md:-translate-x-9 -rotate-45 w-[85px] xxs:w-[140px] xs:w-[175px] sm:w-[230px] md:w-[280px] max-w-[300px] rounded-[3rem]'
                        quality="95"
                        priority={true}
                    />
                    <div
                        className='bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 absolute -left-[20px] xxs:-left-[32px] xs:-left-[36px] sm:-left-[46px] md:-left-14 bottom-[25px] xxs:bottom-[35px] xs:bottom-[45px] sm:bottom-[55px] md:bottom-16 rotate-[-90deg] w-[28px] xxs:w-[45px] xs:w-[50px] sm:w-16 md:w-20 h-[7px] xxs:h-[10px] xs:h-[12px] sm:h-4 md:h-5 rounded-sm'
                    >
                    </div>
                    {/* <div
                        className='bg-blue-500 absolute w-28 h-5 rotate-[-90deg] top-20 right-20 z-10'
                    >

                    </div> */}
                </div>
                <div className='bg-yellow-500 w-[75px] xxs:w-[125px] xs:w-[160px] sm:w-[200px] md:w-[240px] h-[75px] xxs:h-[125px] xs:h-[160px] sm:h-[200px] md:h-[240px] absolute rotate-45 left-1/2 top-1/2 -translate-x-[65%] -translate-y-[65%] xs:-translate-y-[60%] lg:-translate-y-[60%] rounded-[1rem] xs:rounded-[1.7rem] sm:rounded-[2.3rem] md:rounded-[3rem] opacity-30 -z-[60] blur-[2px]'>

                </div>
                <div className='flex w-[180px] sm:w-[200px] lg:w-[240px] h-[180px] sm:h-[200px] md:h-[240px] absolute rotate-45 left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-[3rem]'>
                    <div
                        className='bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 absolute w-[28px] xxs:w-[45px] xs:w-[50px] sm:w-16 md:w-20 h-[7px] xxs:h-[10px] xs:h-[12px] sm:h-4 md:h-5 rounded-sm rotate-[-90deg] right-[29px] xxs:-right-[8px] xs:-right-[27px] sm:-right-[46px] md:-right-[77px] lg:-right-14 top-[57px] xxs:top-[45px] xs:top-[45px] sm:top-[55px] md:top-16 z-30'
                    >
                    </div>
                    <div className='icon top-[18px] xxs:-top-[0.9rem] xs:-top-[2rem] sm:-top-[3.5rem] right-[3.8rem] xxs:right-[2.8rem] xs:right-[2rem] sm:right-[3rem] lg:right-[4rem] '>
                        <Image
                            src='/assets/react.png'
                            width={40}
                            height={40}
                            quality="95"
                            priority={true}
                            className='icon_image'
                        />
                    </div>
                    <div className='icon2 hidden bottom-[5rem] -right-[3.7rem]'>
                        <span className='text-[10px] text-green-400 font-semibold tracking-wide hidden items-center'><span className='tracking-tighter text-green-400'>{`</>`}</span>Coding</span>
                    </div>
                    <div className='icon bottom-[55px] xxs:bottom-[25px] xs:bottom-2 sm:-bottom-[4px] md:bottom-1 right-[34px] xxs:right-[2px] xs:-right-[20px] sm:-right-[31px] md:-right-[35px] lg:-right-[1rem] '>
                        <Image
                            src='/assets/tailwind.png'
                            width={40}
                            height={40}
                            quality="95"
                            priority={true}
                            className='icon_image'
                        />

                    </div>
                    <div className='icon bottom-[40px] xxs:bottom-[4px] xs:-bottom-[20px] sm:-bottom-[35px] left-[5rem] sm:left-[5.7rem] lg:left-[6.5rem] '>
                        <Image
                            src='/assets/js.png'
                            width={40}
                            height={40}
                            quality="95"
                            priority={true}
                            className='icon_image'
                        />

                    </div>
                    <div className='icon bottom-[45px] xxs:bottom-[15px] xs:-bottom-[5px] sm:-bottom-[20px] md:-bottom-[20px] lg:-bottom-[20px] left-[40px] xxs:left-[15px] xs:-left-[0px] sm:-left-[15px] md:-left-[30px] lg:-left-[0rem] '>
                        <Image
                            src='/assets/node.png'
                            width={40}
                            height={40}
                            quality="95"
                            priority={true}
                            className='icon_image'
                        />
                    </div>

                    <div className='icon2 hidden xxs:flex xxs:bottom-[6rem] xs:bottom-[5rem] sm:bottom-[5.5rem] md:bottom-[7.5rem] xxs:-left-[5rem] xs:-left-[6.5rem] sm:-left-[8.5rem] md:-left-[9.6rem] lg:-left-[8rem]'>
                        <Image
                            src='/assets/next.png'
                            width={15}
                            height={15}
                            quality="95"
                            priority={true}
                            className=''
                        />
                        <span className='text-[10px] text-gray-800 font-semibold tracking-wide items-center'>Next.js</span>
                    </div>
                    <div className='icon2 hidden xxs:flex xxs:bottom-6 xs:bottom-2 sm:bottom-1 md:bottom-[10px] lg:bottom-1  xxs:-left-[4.8rem] xs:-left-[6.5rem] sm:-left-[7rem] md:-left-[8.5rem] lg:-left-[7rem]'>
                        <Image
                            src='/assets/ts.svg'
                            width={15}
                            height={15}
                            quality="95"
                            priority={true}
                            className='rounded-sm'
                        />
                        <span className='text-[9px] text-blue-600 font-semibold tracking-wide items-center'>TypeScript</span>
                    </div>
                </div>
                <div className='w-[85px] h-[85px] xxs:w-[135px] xxs:h-[135px] xs:w-[175px] xs:h-[175px] sm:w-[210px] sm:h-[210px] md:w-[260px] md:h-[260px] border-r-2 border-b-[3px] border-dashed border-yellow-300 absolute rotate-45 left-1/2 top-1/2 -translate-x-[42%] xs:-translate-x-[45%] -translate-y-[50%] rounded-[1rem] xs:rounded-[1.7rem] sm:rounded-[2.3rem] md:rounded-[3rem] -z-50'>

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