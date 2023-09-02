/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { about } from '../info';
import ProfilePicture from '../components/ProfilePicture';
import UnfilledButton from '../components/Buttons/UnfilledButton';
import FilledButton from '../components/Buttons/FilledButton';

const About = () => {
  const { name, description, social } = about

  const containerStyle = css`
  @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      justify-content: flex-start;
      height: 100%;
  }
  `
  const pointStyle = css`
  @media (max-width: 768px) {
    font-weight: 900;
    font-size: 2rem;
  }
  `

  const gradiantContainerStyle = css`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  `

  const briefStyle = css`
  max-width: 450px;
  @media (max-width: 768px) {
    padding-left: 2em;
    padding-right: 2em;
  }
  `

  return (

    <div css={containerStyle} className='flex justify-evenly items-center self-center h-[70vh] w-[90vw] md:mt-6 2xl:mt-16'>
      <ProfilePicture picture={'/assets/pp-no-bg.png'} />
      <div>
        <span className='mb-3 text-4xl font-extrabold text-black md:text-5xl md:mb-4 2xl:text-6xl;'>{name}</span>
        <span css={pointStyle} className='text-red text-5xl 2xl:text-6xl font-extrabold'>.</span>
        <div css={gradiantContainerStyle} className='text-5xl font-extrabold md:text-5xl lg:text-6xl 2xl:text-7xl mb-4 2xl:leading-snug;'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-red to-middle-pink'>Software</span>
          <span className='md:ml-3 bg-gradient-to-r from-red to-middle-pink text-white'>Developer</span>
        </div>
        <div css={briefStyle} className='2xl:max-w-xl'>
          <div className='mb-4 text-dark-grey md:text-lg md:mb-6 2xl:text-2xl'>{description}</div>
        </div>
        <div className='flex flex-col justify-start md:flex-row gap-3 md-gap-0'>
          <UnfilledButton title="Resume" url="assets/baret-julie-resume.pdf" color="red" transitionColor="middle-pink" gradient={true} />
          <FilledButton title="Github" color="black" url={social.github} />
          <FilledButton title="Linkedin" color="blue" url={social.linkedin} filledLogo={true} />
        </div>
      </div>
    </div>

  )
}

export default About
