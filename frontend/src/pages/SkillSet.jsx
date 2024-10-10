import { useContext } from 'react';
import { SectionTitle } from '../components/SectionTitle'
import { DataContext } from '../context';

export const SkillSet = () => {
  const data = useContext(DataContext);
  const { skills } = data;

  return (
    <div>
      <SectionTitle title={"MY SKILLS"} description={"Here you will find more information about my current skills mostly in terms of programming and technology"} />
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3 my-20 text-center'>
        <div className='p-2'>
          <span className='text-2xl font-semibold'>Front-end</span>
          <ul className='flex justify-center items-center flex-col text-center mt-3'>
            {skills.map((skill) => (
              <li className='w-36 py-2 mb-2 border-black rounded-xl border-2 hover:bg-black hover:text-white' key={skill._id}>{skill.frontend}</li>
            ))}
          </ul>
        </div>
        <div className='p-2'>
          <span className='text-2xl font-semibold'>Back-end</span>
          <ul className='flex justify-center items-center flex-col text-center mt-3'>
            {skills.map((skill) => (
              <li className='w-36 py-2 mb-2 border-black rounded-xl border-2 hover:bg-black hover:text-white' key={skill._id}>{skill.backend}</li>
            ))}
          </ul>
        </div>
        <div className='p-2'>
          <span className='text-2xl font-semibold'>Others</span>
          <ul className='flex justify-center items-center flex-col text-center mt-3'>
            {skills.map((skill) => (
              <li className='w-36 py-2 mb-2 border-black rounded-xl border-2 hover:bg-black hover:text-white' key={skill._id}>{skill.others}</li>
            ))}
          </ul>
          </div>
          </div>
          </div>
  )
}
