import { about } from '../../info'
import './About.css'
import profilePicture from '../../assets/pp-no-bg.png'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about'>
      <div className='picture'>
        <img className='profilePicture' src={profilePicture} alt="profile" />
        <div className='shape'></div>
      </div>
      <div className='text'>
        <div className='name'>
          <span className='name'>{name}</span><span className='point'>.</span>
        </div>
        <div className='job'>
          {role}
        </div>
        <div className='desc'>{description}
        </div>

        <div className='links'>
          <button>
            <a href={resume}>Download CV</a>
          </button>
          <a
            href={social.github}
            className='link'
          >
            <span id='github'>GitHub</span>
          </a>
          <a
            href={social.linkedin}
            className='link'
          >
            <span id='linkedin'>LinkedIn</span>
          </a>
        </div>
        
      </div>

    </div>
  )
}

export default About
