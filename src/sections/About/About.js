import { about } from '../../info'
import './About.css'
import profilePicture from '../../assets/pp-no-bg.png'

const About = () => {
  const { name, description, social } = about

  return (
    <div className='about'>
      <div className='profile-container'>
        <img className='profile' src={profilePicture} alt="profile" />
        <div className='shape'></div>
      </div>
      <div className='about-container'>
        <span className='name'>{name}</span><span className='point'>.</span>
        <div className='job-container'>
          <span className='job-gradiant'>Software</span><span className='job-gradiant-bg'>Developer</span>
        </div>

        <div className='pitch-container'>
          <div className='pitch'>{description}</div>
        </div>

        <div className='links-container'>
          {/* CV */}
          <span className='links'>
            <a
              className='red-button-border'
              href='baret-julie-resume.pdf'
              target='_blank'
              rel='noreferrer'
            >
              <span
                className='red-button-text'
              >
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class='button-logo'>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>

              </span>
            </a>
          </span>

          {/* GitHub */}
          <span className='links'>
            <a
              className='black-button'
              href={social.github}
              target='_blank'
              rel='noreferrer'
            >
              GitHub

              <svg
                className='button-logo'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
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
          <span className='links'>
            <a
              className='blue-button'
              href={social.linkedin}
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
              <svg
                className='button-logo'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
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
