import React, { useContext } from 'react'
import { SectionTitle } from '../components/SectionTitle'
import img from '../assets/abou.png'
import { DataContext } from '../context';

export const About = () => {
  const data = useContext(DataContext);
  const { links } = data;

  return (
    <section id='about'>
    <div className='py-10'>
        <SectionTitle title={"ABOUT ME"} description={"Here you will find more information about me, and my hobbies"} />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-20'>

        <div className='mb-4 flex justify-center items-center text-center'>
          <div>
            <img src={img} alt="about" className='w-[60vh]'/>
          </div>
        </div>
        <div className='mr-10 m-10 justify-center items-center '>
        <p className='mb-4'>
        I’m a <span className='font-semibold'>Full Stack developer</span> who loves creating intuitive, user-friendly applications. With expertise in both front-end and back-end technologies. I enjoy solving complex problems and am always eager to learn new technologies.
        </p>
        <p className='mb-4'>
        Outside of coding, I’m passionate about exploring new technologies and keeping up with the latest industry trends. I’m also an avid reader of business and science fiction novels, which fuel my imagination and creativity. In my spare time, I enjoy playing chess, a game that sharpens my problem-solving skills. Watching Podcast and more.....
        </p>
        <p className='mb-4'>
          I'm currently working as a <span className='font-semibold'>Web Developer</span> at <span className='font-semibold'>Eqaim Technology</span>, where I'm responsible for building cutting-edge applications using React, Node.js, and MongoDB.
        </p>
        <p className='mb-4'>
        I'm <span className='font-semibold'>open to Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span className='font-semibold'>contact me</span>.
        </p>
        {links.map((link) => (
          <div key={link._id}>
        <a target="_blank" href={link.linkedin} className="relative inline-block px-4 py-2 mx-4 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">Lindedin</span>
        </a>
        <a target="_blank" href={link.twitter} className="relative inline-block px-4 py-2 font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">Twitter</span>
        </a>
        </div>
        ))};
        </div>
        </div>
    </div>

    </section>
  )
} 
