import React from 'react'
import SectionHeading from './SectionHeading'
// import { IoSchool } from "react-icons/io5";
// import { MdBusinessCenter } from "react-icons/md";
// import { SlCalender } from "react-icons/sl";

import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import CalendarMonthOutlinedIcon  from '@mui/icons-material/CalendarMonthOutlined';

const Experience = () => {
    return (
        <>
            <SectionHeading title="Awesome Journey" subtitle="My Qualification" />
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-y-10 mt-10">
                <div className=''>
                    <div className=' w-fit mx-0 md:mx-auto'>
                        <div className='flex items-center gap-2'>
                            <SchoolOutlinedIcon className='text-2xl w-8 h-8' fontSize='large'/>
                            <h2 className='text-lg sm:text-2xl font-semibold'>Education</h2>
                        </div>
                        <div className='pt-5 flex flex-col gap-5 pl-1.5'>
                            <div className='flex gap-5'>
                                <div className=''>
                                    <span className="exp-icon"></span>
                                </div>
                                <div>
                                    <h4 className='font-medium text-l leading-3'>Masters of Business Administration</h4>
                                    <p className='text-sm my-2'>Business</p>
                                    <p className='text-purple-500 text-xs flex items-center gap-1 leading-3'><CalendarMonthOutlinedIcon fontSize='small' /> 2011 - 2014</p>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className=''>
                                    <span className="exp-icon"></span>
                                </div>
                                <div>
                                    <h4 className='font-medium text-l leading-3'>Masters of Business Administration</h4>
                                    <p className='text-sm my-2'>Business</p>
                                    <p className='text-purple-500 text-xs flex items-center gap-1 leading-3'><CalendarMonthOutlinedIcon fontSize='small'  /> 2011 - 2014</p>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className=''>
                                    <span className="exp-icon"></span>
                                </div>
                                <div>
                                    <h4 className='font-medium text-l leading-3'>Masters of Business Administration</h4>
                                    <p className='text-sm my-2'>Business</p>
                                    <p className='text-purple-500 text-xs flex items-center gap-1 leading-3'><CalendarMonthOutlinedIcon fontSize='small'  /> 2011 - 2014</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className=' w-fit mx-0 md:mx-auto'>
                        <div className='flex items-center gap-2'>
                            <BusinessCenterOutlinedIcon className='text-2xl w-8 h-8' fontSize='large' />
                            <h2 className='text-lg sm:text-2xl font-semibold'>Experience</h2>
                        </div>
                        <div className='pt-5 flex flex-col gap-5 pl-1.5'>
                            <div className='flex gap-5'>
                                <div className=''>
                                    <span className="exp-icon"></span>
                                </div>
                                <div>
                                    <h4 className='font-medium text-l leading-3'>Masters of Business Administration</h4>
                                    <p className='text-sm my-2'>Business</p>
                                    <p className='text-purple-500 text-xs flex items-center gap-1 leading-3'><CalendarMonthOutlinedIcon fontSize='small'  /> 2011 - 2014</p>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className=''>
                                    <span className="exp-icon"></span>
                                </div>
                                <div>
                                    <h4 className='font-medium text-l leading-3'>Masters of Business Administration</h4>
                                    <p className='text-sm my-2'>Business</p>
                                    <p className='text-purple-500 text-xs flex items-center gap-1 leading-3'><CalendarMonthOutlinedIcon fontSize='small'  /> 2011 - 2014</p>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className=''>
                                    <span className="exp-icon"></span>
                                </div>
                                <div>
                                    <h4 className='font-medium text-l leading-3'>Masters of Business Administration</h4>
                                    <p className='text-sm my-2'>Business</p>
                                    <p className='text-purple-500 text-xs flex items-center gap-1 leading-3'><CalendarMonthOutlinedIcon fontSize='small'  /> 2011 - 2014</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience