
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { projects } from '../info'
import ProjectContainer from './ProjectContainer/ProjectContainer'

const Projects = () => {
  if (!projects.length) return null
  
  const projectContainerStyle = css`
  display: flex;
  flex-direction: column;
  width: 90vw;
  align-self: center;
  margin-top: 10em;
  `

  return (


    <section id='projects' className='mb-0' css={projectContainerStyle}>
      <div className='text-4xl font-extrabold text-red lg:text-5xl 2xl:text-6xl'>Réalisations</div>

      <div>
        {projects.map((project) => (
          <ProjectContainer project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
