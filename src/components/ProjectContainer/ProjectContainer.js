import uniqid from 'uniqid'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  return (
  <div className='project'>
    <p className='type'>{project.type}</p>
    <h3>{project.name}</h3>
    <div className='preview'>
      <img src={project.picture} alt={project.name}/>
    </div>
    <p>{project.description}</p>
    {project.stack && (
      <ul className='stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.repo && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        GitHub
      </a>
    )}

    {project.demo && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        Demo
      </a>
    )}
  </div>
)};

export default ProjectContainer
