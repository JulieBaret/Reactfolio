import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
          <li>
            <a
              href='#projects'>
              projects
            </a>
          </li>
          <li>
            <a
              href='#bio'>
              bio
            </a>
          </li>
          <li>
            <a
              href='#contact'>
              contact
            </a>
          </li>
      </ul>
    </nav>
  )
}

export default Navbar
