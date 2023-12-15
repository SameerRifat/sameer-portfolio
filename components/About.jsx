import Image from 'next/image';
import React from 'react';
// import { FaRegUser } from "react-icons/fa";
// import { MdOutlinePhoneEnabled } from "react-icons/md";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { IoAirplaneOutline } from "react-icons/io5";
// import { MdSportsCricket } from "react-icons/md";
// import { GiLindenLeaf } from "react-icons/gi";
// import { IoMdBook } from "react-icons/io";
// import { IoGameControllerOutline } from "react-icons/io5";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import SportsCricketOutlinedIcon from '@mui/icons-material/SportsCricketOutlined';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';

const About = () => {
    return (
        <section className=''>
            <svg
                id="wave"
                // style={{ transform: 'rotate(0deg)', transition: '0.3s', marginTop: -80 }}
                className='rotate-0 transition-all delay-[0.3s] mt-0 sm:-mt-[40px] lg:-mt-[80px]'
                viewBox="0 0 1440 290"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                        <stop stopColor="rgba(255, 255, 255, 1)" offset="0%" />
                        <stop stopColor="rgba(168, 85, 247, 1)" offset="100%" />
                    </linearGradient>
                </defs>
                <path
                    style={{ transform: 'translate(0, 0px)', opacity: 1 }}
                    fill="url(#sw-gradient-0)"
                    d="M0,174L60,159.5C120,145,240,116,360,125.7C480,135,600,184,720,193.3C840,203,960,174,1080,145C1200,116,1320,87,1440,91.8C1560,97,1680,135,1800,125.7C1920,116,2040,58,2160,33.8C2280,10,2400,19,2520,62.8C2640,106,2760,184,2880,183.7C3000,184,3120,106,3240,106.3C3360,106,3480,184,3600,203C3720,222,3840,184,3960,178.8C4080,174,4200,203,4320,207.8C4440,213,4560,193,4680,193.3C4800,193,4920,213,5040,198.2C5160,184,5280,135,5400,130.5C5520,126,5640,164,5760,164.3C5880,164,6000,126,6120,116C6240,106,6360,126,6480,111.2C6600,97,6720,48,6840,24.2C6960,0,7080,0,7200,43.5C7320,87,7440,174,7560,203C7680,232,7800,203,7920,169.2C8040,135,8160,97,8280,67.7C8400,39,8520,19,8580,9.7L8640,0L8640,290L8580,290C8520,290,8400,290,8280,290C8160,290,8040,290,7920,290C7800,290,7680,290,7560,290C7440,290,7320,290,7200,290C7080,290,6960,290,6840,290C6720,290,6600,290,6480,290C6360,290,6240,290,6120,290C6000,290,5880,290,5760,290C5640,290,5520,290,5400,290C5280,290,5160,290,5040,290C4920,290,4800,290,4680,290C4560,290,4440,290,4320,290C4200,290,4080,290,3960,290C3840,290,3720,290,3600,290C3480,290,3360,290,3240,290C3120,290,3000,290,2880,290C2760,290,2640,290,2520,290C2400,290,2280,290,2160,290C2040,290,1920,290,1800,290C1680,290,1560,290,1440,290C1320,290,1200,290,1080,290C960,290,840,290,720,290C600,290,480,290,360,290C240,290,120,290,60,290L0,290Z"
                ></path>
            </svg>

            <div className='bg-white py-10'>
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
                    <div className="flex justify-center items-center">
                        <div className='relative'>
                            <div className='border-2 border-yellow-500 shadow-[-15px_-10px_0px_0px_rgba(234,179,8,0.3)] xxs:shadow-[-25px_-20px_0px_0px_rgba(234,179,8,0.3)] xs:shadow-[-40px_-30px_0px_0px_rgba(234,179,8,0.3)]'>
                                <Image
                                    src='/assets/p2.jpg'
                                    width={280}
                                    height={280}
                                    quality="95"
                                    priority={true}
                                    className='max-w-[280px] w-[100px] xxs:w-[120px] xs:w-[150px] sm:w-[200px] md:w-[280px]'
                                />
                            </div>
                            <div className="corner-border top-left border-2 xs:border-4 border-purple-500"></div>
                            <div className="corner-border bottom-right border-2 xs:border-4 border-purple-500"></div>
                        </div>
                    </div>

                    <div className="text-center sm:text-left">
                        <h5 className='text-sm xs:text-lg font-medium xxs:font-semibold text-purple-500'>My Intro</h5>
                        <h2 className='font-semibold sm:font-bold text-lg xxs:text-2xl sm:text-3xl'>About Me</h2>
                        <p className='text-gray-600 text-xs xxs:text-sm sm:text-[15px]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed qui a maiores neque facilis labore eaque adipisci tempore itaque omnis illum odio, quisquam fugit debitis suscipit dicta? Sequi dolore hic cumque qui dolorum voluptas quam alias consequatur id reiciendis quisquam nulla fugit repudiandae, reprehenderit facilis ipsum, quod dolores labore, quaerat nemo eaque dolorem aspernatur.
                        </p>
                        <table class="table-auto w-full mt-7 hidden sm:flex">
                            <tbody>
                                <tr className=''>
                                    <td className='flex items-center gap-1.5 text-sm xs:text-base p-0'> <PersonOutlineOutlinedIcon className='text-purple-500' fontSize='small' /> <span className='font-medium xs:font-semibold'>Name</span></td>
                                    <td className='px-1 xs:px-5'>:</td>
                                    <td className='text-gray-600 text-xs xs:text-sm sm:text-[15px]'>Sameer Rifat</td>
                                </tr>
                                <tr className=''>
                                    <td className='flex items-center gap-1.5 text-sm xs:text-base p-0 '> <LocalPhoneOutlinedIcon className='text-purple-500' fontSize='small' /> <span className='font-medium xs:font-semibold'>Phone</span></td>
                                    <td className='px-1 xs:px-5'>:</td>
                                    <td className='text-gray-600 text-xs xs:text-sm sm:text-[15px]'>0341-7082407</td>
                                </tr>
                                <tr className=''>
                                    <td className='flex items-center gap-1.5 text-sm xs:text-base p-0 '> <MailOutlinedIcon className='text-purple-500' fontSize='small' /> <span className='font-medium xs:font-semibold'>Email</span></td>
                                    <td className='px-1 xs:px-5'>:</td>
                                    <td className='text-gray-600 text-xs xs:text-sm sm:text-[15px]'>sameerrifatbrw789@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='w-full mt-7 text-center flex flex-col items-center gap-y-4 sm:hidden'>
                            <div>
                                <span className='flex items-center gap-1.5 text-sm xs:text-base p-0'> <PersonOutlineOutlinedIcon className='text-purple-500' fontSize='small' /> <span className='font-medium xs:font-semibold'>Name:</span></span>
                                <span className='text-gray-600 text-xs xs:text-sm sm:text-[15px]'>Sameer Rifat</span>
                            </div>
                            <div>
                                <span className='flex items-center gap-1.5 text-sm xs:text-base p-0 '> <LocalPhoneOutlinedIcon className='text-purple-500' fontSize='small' /> <span className='font-medium xs:font-semibold'>Phone:</span></span>
                                <span className='text-gray-600 text-xs xs:text-sm sm:text-[15px]'>0341-7082407</span>
                            </div>
                            <div className='text-center'>
                                <span className='flex items-center justify-center gap-1.5 text-sm xs:text-base p-0 '> <MailOutlinedIcon className='text-purple-500' fontSize='small' /> <span className='font-medium xs:font-semibold'>Email:</span></span>
                                <span className='text-gray-600 text-xs xs:text-sm sm:text-[15px]'>sameerrifatbrw789@gmail.com</span>
                            </div>
                        </div>
                        <div className='mt-8 sm:mt-7'>
                            <h4 className='font-medium sm:font-semibold text-sm sm:text-base block'>My Interests</h4>
                            <div className='flex items-center justify-center sm:justify-start gap-x-10 gap-y-4 flex-wrap sm:flex-nowrap mt-2'>
                                <div className='flex items-center gap-1.5'>
                                    <SportsCricketOutlinedIcon className='text-purple-500' fontSize='small' />
                                    <span className='text-gray-700'>Cricket</span>
                                </div>
                                <div className='flex items-center gap-1.5'>
                                    <FlightOutlinedIcon className='text-purple-500' fontSize='small' />
                                    <span className='text-gray-700'>Travel</span>
                                </div>
                                <div className='flex items-center gap-1.5'>
                                    <EnergySavingsLeafOutlinedIcon className='text-purple-500' fontSize='small' />
                                    <span className='text-gray-700'>Gardening</span>
                                </div>
                                <div className='flex items-center gap-1.5'>
                                    <SportsEsportsOutlinedIcon className='text-purple-500' fontSize='small' />
                                    <span className='text-gray-700'>Gaming</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <svg
                id="wave"
                // style={{ transform: 'rotate(180deg)', transition: '0.3s', marginBottom: -80 }}
                className='rotate-180 transition-all delay-[0.3s] mb-0 sm:-mb-[40px] lg:-mb-[80px]'
                viewBox="0 0 1440 290"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                        <stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop>
                        <stop stop-color="rgba(168, 85, 247, 1)" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <path
                    style={{ transform: 'translate(0, 0px)', opacity: 1 }}
                    fill="url(#sw-gradient-0)"
                    d="M0,174L60,159.5C120,145,240,116,360,125.7C480,135,600,184,720,193.3C840,203,960,174,1080,145C1200,116,1320,87,1440,91.8C1560,97,1680,135,1800,125.7C1920,116,2040,58,2160,33.8C2280,10,2400,19,2520,62.8C2640,106,2760,184,2880,183.7C3000,184,3120,106,3240,106.3C3360,106,3480,184,3600,203C3720,222,3840,184,3960,178.8C4080,174,4200,203,4320,207.8C4440,213,4560,193,4680,193.3C4800,193,4920,213,5040,198.2C5160,184,5280,135,5400,130.5C5520,126,5640,164,5760,164.3C5880,164,6000,126,6120,116C6240,106,6360,126,6480,111.2C6600,97,6720,48,6840,24.2C6960,0,7080,0,7200,43.5C7320,87,7440,174,7560,203C7680,232,7800,203,7920,169.2C8040,135,8160,97,8280,67.7C8400,39,8520,19,8580,9.7L8640,0L8640,290L8580,290C8520,290,8400,290,8280,290C8160,290,8040,290,7920,290C7800,290,7680,290,7560,290C7440,290,7320,290,7200,290C7080,290,6960,290,6840,290C6720,290,6600,290,6480,290C6360,290,6240,290,6120,290C6000,290,5880,290,5760,290C5640,290,5520,290,5400,290C5280,290,5160,290,5040,290C4920,290,4800,290,4680,290C4560,290,4440,290,4320,290C4200,290,4080,290,3960,290C3840,290,3720,290,3600,290C3480,290,3360,290,3240,290C3120,290,3000,290,2880,290C2760,290,2640,290,2520,290C2400,290,2280,290,2160,290C2040,290,1920,290,1800,290C1680,290,1560,290,1440,290C1320,290,1200,290,1080,290C960,290,840,290,720,290C600,290,480,290,360,290C240,290,120,290,60,290L0,290Z">
                </path>
            </svg>
        </section>
    );
};

export default About;
