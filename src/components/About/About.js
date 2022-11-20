import { about } from '../../info'
import './About.css'
import profilePicture from '../../assets/pp-no-bg.png'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about'>
      <div>
        <img className='profilePicture' src={profilePicture} alt="profile" />
        <div className='shape'></div>
      </div>
      <div className='about-content'>
        <div className='name'>
          {name}<span className='point'>.</span>
        </div>
        <div className='job'>{role}</div>
        <div className='desc'>{description}</div>

        <div className='about-links'>
          {/* CV */}
          <span className="about-link">
            <a
              class="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              href={resume}
            >
              <span
                class="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent"
              >
                Resume
              </span>
            </a>
          </span>
          
          {/* GitHub */}
          <span className="about-link">
            <a
              class="inline-flex items-center rounded-full border-2 border-[#171515] bg-[#171515] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75"
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
