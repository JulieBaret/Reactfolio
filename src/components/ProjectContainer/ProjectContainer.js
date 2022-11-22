import uniqid from 'uniqid'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  return (
    // <!-- Section: Design Block -->
    <section class="mb-5 text-gray-800 text-center md:text-left">

      {/* <div class="block rounded-lg shadow-lg bg-white"> */}
      <div class="flex flex-wrap items-center">
        <div class="grow-0 shrink-0 basis-auto block lg:flex w-full md:w-4/12">
          <img src={project.picture}
            class="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg" alt={project.name} />
        </div>
        <div class="grow-0 shrink-0 basis-auto w-full md:w-8/12">
          <div class="px-6 py-12 md:px-12">
            <h2 class="text-2xl font-bold mb-4">
              <span class="text-red-400">{project.name} </span>
              <span class="text-red-300">{project.type}</span>
            </h2>

            <p class="mb-3 text-md font-regular text-neutral-500 md:text-lg">{project.pitch}</p>
            <p class="font-light text-neutral-400 mb-6">{project.description}</p>
            {project.stack && (
              <ul className='stack'>
                {project.stack.map((item) => (
                  <li key={uniqid()} className='stack-item'>
                    <span class="bg-neutral-100 text-neutral-500 text-sm font-medium mr-2 px-3 py-2 rounded-full">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <a
              class="inline-flex items-center rounded-full bg-neutral-700 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              <span
                class="inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium hover:bg-transparent"
              >
                Repo
                <svg
                  class="ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>



              </span>
            </a>
            {project.demo !== undefined ? <a
              class="ml-2 inline-flex items-center rounded-full bg-gradient-to-r text-red-500 from-red-500 to-red-400 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <span
                class="inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium hover:bg-transparent"
              >
                Demo
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                </svg>



              </span>
            </a> : null}
          </div>
        </div>
      </div>
      {/* </div> */}

    </section>
    // <!-- Section: Design Block -->

  )
};

export default ProjectContainer
