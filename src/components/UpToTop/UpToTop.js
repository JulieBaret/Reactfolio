import React, { useEffect, useState } from 'react'
import './UpToTop.css'

const UpToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 200 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <div className='scroll-top'>
      <a href='#top'>
        Up
      </a>
    </div>
  ) : null
}

export default UpToTop
