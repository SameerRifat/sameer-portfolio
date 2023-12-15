import React from 'react'


const SectionHeading = ({title, subtitle}) => {
    return (
        <>
            <p className='text-center font-semibold text-purple-500'>{subtitle}</p>
            <h2 className="text-3xl font-medium mb-5 text-center">{title}</h2>
        </>
    )
}

export default SectionHeading