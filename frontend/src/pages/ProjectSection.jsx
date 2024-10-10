import { useContext } from 'react';
import { SectionTitle } from '../components/SectionTitle'
import { DataContext } from '../context';

export const ProjectSection = () => {

  const data = useContext(DataContext);
  const { projects } = data;

  return (
    
    <div id='projects'>
      <SectionTitle title={"PROJECTS"} description={"Here you will find some of the personal projects"} />
      <div className='flex flex-wrap justify-center gap-6 text-center my-20'>
        {projects.map((project) => (
        <div key={project._id} className="w-full sm:w-[48%] lg:w-[30%] bg-white rounded-lg shadow-sm shadow-black overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a href={project.url} target="_blank" className="relative inline-block px-4 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">Github</span>
            </a>
        </div>
      </div>
  ))}
</div>

    </div>
  )
}
