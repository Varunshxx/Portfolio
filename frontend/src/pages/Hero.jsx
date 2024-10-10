import React, { useContext } from 'react'
import resume from '../assets/MyResume.pdf'
import { DataContext } from '../context';
export const Hero = () => {

  const data = useContext(DataContext);
  const { links } = data;

  return (
    <section id='home'>
    <div className=' flex justify-center items-center flex-col text-center py-48 gap-2 bg-[url(https://img.freepik.com/premium-photo/diagram-complex-lines-words-word-center-picture_1034303-526462.jpg?w=1380)] bg-cover bg-center px-[30px]'>
        <h1 className='font-semibold'>Hi, I'm</h1>
        <h1 className='text-5xl font-semibold'>VARUN SHARMA</h1>
        <h2 className='text-3xl font-semibold mb-5'>Web Developer</h2>
        <p className='w-2/3 mb-5 font-semibold'>
        I'm a passionate web developer specializing in both front-end and back-end technologies. I enjoy transforming ideas into interactive, user-friendly web applications that make a difference. Let's collaborate and create something extraordinary!
        </p>
        {links.map((link) => (
          <div key={link._id}>
        <a target="_blank" href={link.resume} className="relative inline-block px-4 py-2 font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">DOWNLOAD CV</span>
        </a>
        </div>
        ))}
    </div>
    </section>
  )
}
