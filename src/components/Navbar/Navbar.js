import './Navbar.css'

const Navbar = () => {
  return (
    <nav
      aria-label="Site Nav"
      class="mx-auto flex max-w-3xl items-center justify-between p-4"
    >
      <a
        href="/"
        class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"
      >
        <span class="sr-only">Julie Baret</span>
        
      </a>

      <ul class="flex items-center gap-2 text-sm font-medium text-gray-500">
        <li class="hidden lg:block">
          <a class="rounded-lg px-3 py-2" href="#projects"> Projects </a>
        </li>

        <li><a class="rounded-lg px-3 py-2" href="#bio"> Who Am I </a></li>

        <li>
          <a
            class="inline-flex items-center rounded-lg px-3 py-2"
            href=""
            target="_blank"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>

    // <nav className='navbar'>
    //   <ul>
    //       <li>
    //         <a
    //           href='#projects'>
    //           projects
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href='#bio'>
    //           bio
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href='#contact'>
    //           contact
    //         </a>
    //       </li>
    //   </ul>
    // </nav>
  )
}

export default Navbar
