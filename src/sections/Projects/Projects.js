
import { projects } from '../../info'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (


    <section id='projects' className='section projects'>
      <div className='title'>Réalisations</div>

      <div className='projects-container'>
        {projects.map((project) => (
          <ProjectContainer project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
