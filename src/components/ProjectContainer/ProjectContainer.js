import uniqid from 'uniqid'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  return (
    <div>

      <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
          alt="Office"
          src={project.picture}
          class="h-56 w-full object-cover"
        />

        <div class="bg-white p-4 sm:p-6">
          <time datetime="2022-10-10" class="block text-xs text-gray-500">
            10th Oct 2022
          </time>

            <h3 class="mt-0.5 text-lg text-gray-900">
              {project.name}
            </h3>
          <h2 className='type'>{project.type}</h2>

          <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            {project.description}
          </p>
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
      </article>


      {/* <p className='type'>{project.type}</p>
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
    )} */}
    </div>

  )
};

export default ProjectContainer
