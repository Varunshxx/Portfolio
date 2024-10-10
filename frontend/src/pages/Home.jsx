import React from 'react'
import Header  from '../components/Header'
import { Hero } from './Hero'
import { About } from './About'
import { SkillSet } from './SkillSet'
import { ProjectSection } from './ProjectSection'
import { About2 } from './About2'
import { Footer } from './Footer'

const Home = () => {
  
  return (
    <div>
      <Header />
      <Hero />
      <div className='px-[35px]'>
       <About />
       <About2 />
       <SkillSet/>
       <ProjectSection />
      </div>
       <Footer />
    </div>
  )
}

export default Home;