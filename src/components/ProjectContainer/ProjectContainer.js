// import uniqid from 'uniqid'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  return (
    // <!-- Section: Design Block -->
    <section class="mb-5 text-gray-800 text-center md:text-left">

      <div class="block rounded-lg shadow-lg bg-white">
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

              <p class="mb-3 text-md font-regular text-gray-500 md:text-lg">{project.pitch}</p>
              <p class="font-light text-gray-500 mb-6">{project.description}</p>
              <button type="button"
                class="inline-block px-7 py-3 bg-red-400 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true" data-mdb-ripple-color="light">Learn more</button>
            </div>
          </div>
        </div>
      </div>

    </section>
    // <!-- Section: Design Block -->

  )
};

export default ProjectContainer
