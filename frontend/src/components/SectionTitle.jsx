import React from 'react'

export const SectionTitle = ({ title , description }) => {
  return (
    <div className='flex justify-center items-center flex-col text-center gap-5'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <div className='w-8 h-[8px] bg-purple-700 rounded'>
        </div>
        <p className='text-1xl'>{description}</p>
    </div>
  )
}
