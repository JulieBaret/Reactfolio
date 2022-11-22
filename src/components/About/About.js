import { about } from '../../info'
import './About.css'
import profilePicture from '../../assets/pp-no-bg.png'

const About = () => {
  const { name, description, social } = about

  return (
    <div className='about'>
      <div>
        <img className='profilePicture' src={profilePicture} alt="profile" />
        <div className='shape'></div>
      </div>
      <div className='about-content'>
        <div className='name'>
          <span class="text-4xl font-extrabold text-neutral-700 md:text-5xl mb-4">{name}</span><span className='point'>.</span>
        </div>
        <div><h1 class="mb-4 text-3xl font-extrabold md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300">Software </span><span class="bg-gradient-to-r from-red-400 to-red-300 text-neutral-50">Developer</span></h1>
        {/* <div>
        <svg fill="red" stroke="blue" stroke-width="2">
          <text>Engineer</text>
        </svg>
          </div> */}
        
        </div>
        <div className='desc'>
          <p class="mb-6 text-md font-medium text-neutral-500 md:text-lg">{description}</p></div>

        <div className='about-links'>
          {/* CV */}
          <span className="about-link">
            <a
              class="inline-flex items-center rounded-full bg-gradient-to-r text-red-400 from-red-400 to-red-300 p-[2px] hover:text-neutral-50 focus:outline-none focus:ring active:text-opacity-75"
              href='baret-julie-resume.pdf'
              target="_blank"
            >
              <span
                class="inline-flex rounded-full bg-neutral-50 px-8 py-3 text-sm font-medium hover:bg-transparent"
              >
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 ml-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>


                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="ml-1.5 h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg> */}
              </span>
            </a>
          </span>

          {/* GitHub */}
          <span className="about-link">
            <a
              class="inline-flex items-center rounded-full border-2 border-neutral-700 bg-neutral-700 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-neutral-700 focus:outline-none focus:ring active:opacity-75"
              href={social.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub

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
            </a>
          </span>

          {/* LinkedIn */}
          <span className="about-link">
            <a
              class="inline-flex items-center rounded-full border-2 border-[#0077b5] bg-[#0077b5] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#0077b5] focus:outline-none focus:ring active:opacity-75"
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <svg
                class="ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                />
              </svg>
            </a>
          </span>



        </div>
      </div>
    </div>
  )
}

export default About
