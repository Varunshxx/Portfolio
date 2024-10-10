import { useContext } from 'react';
import { SectionTitle } from '../components/SectionTitle'
import { DataContext } from '../context';

export const About2 = () => {
  const data = useContext(DataContext);
  const { experience, education } = data;

  return (
    <div className='py-10'>
        <SectionTitle title={"Experience & Education"} description={"Here you will find more information about Work and Education"} />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-20'>

        <div className='items-center justify-center p-3 border-black rounded-xl shadow-sm shadow-black '>
          <h3 className='text-3xl font-semibold items-center text-start mb-7'>Work Experience</h3>
          {experience.map((e) => (
            <div key={e._id}>
              <h4 className='font-semibold text-2xl'>{e.position}</h4>
              <p className='font-bold text-gray-500'>{e.company}</p>
              <p className='text-gray-500 mb-2'>{e.duration}</p>
              <p className='text-gray-500 mb-2'>{e.desc}</p>
            </div>
          ))}
        </div>
        <div className='items-center justify-center p-3 border-black rounded-xl shadow-sm shadow-black '>
          <h3 className='text-3xl font-semibold items-center text-start mb-7'>Education</h3>
            {education.map((e) => (
              <div key={e._id}>
              <h4 className='font-semibold text-2xl'>{e.degree}</h4>
              <p className='font-bold text-gray-500'>{e.institution}</p>
              <p className='text-gray-500 mb-2'>{e.duration}</p>
              </div>
            ))}
        </div>
        </div>
    </div>
  )
}


