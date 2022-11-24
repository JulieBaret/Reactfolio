
import { projects } from '../../info'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (


    <section id='projects' className='section'>
      <h2 class="text-4xl font-extrabold text-red-400 md:text-5xl mb-4">Réalisations</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
