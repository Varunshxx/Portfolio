import { GithubIcon, Linkedin, LinkedinIcon, Mail, TwitterIcon } from 'lucide-react'
import React, { useContext } from 'react'
import { DataContext } from '../context';

export const Footer = () => {
  const data = useContext(DataContext);
  const { links } = data;

  return (
    <section id='contact'>
    <footer className='bg-gray-100 text-gray-600 py-8'>
        <div className='flex justify-center text-center gap-4'>
        <h1 className='text-2xl font-bold mb-3'>Contact Me</h1>
        </div>
         {links.map((link) => (
          <div className='flex justify-center text-center gap-3' key={link._id}>
            <a className='text-center p-3 border-black bg-black text-white rounded-xl border-2 hover:bg-gray-100 hover:text-black' target="_blank" href={link.email}>
              <Mail />
            </a>
            <a className='text-center p-3 border-black bg-black text-white rounded-xl border-2 hover:bg-gray-100 hover:text-black' target="_blank" href={link.github}>
              <GithubIcon />
            </a>
            <a className='text-center p-3 border-black bg-black text-white rounded-xl border-2 hover:bg-gray-100 hover:text-black' target="_blank" href={link.linkedin}>
              <LinkedinIcon />
            </a>
            <a className='text-center p-3 border-black bg-black text-white rounded-xl border-2 hover:bg-gray-100 hover:text-black' target="_blank" href={link.twitter}>
              <TwitterIcon />
            </a>
          </div>
      ))}
        <div className='mt-10  text-center'>
        <p>&copy; 2024 Varun Sharma. All rights reserved.</p>
        </div>
    </footer>
    </section>
  )
}
