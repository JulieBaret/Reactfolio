import { useState } from "react";
import './Header.css'

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="flex justify-end py-10 px-10">

            <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className='hamburger-line'></span>
                        <span className='hamburger-line'></span>
                        <span className='hamburger-line'></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className='hamburger-close-container'
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className='hamburger-close'
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className='hamburger-menu-list'>
                            <li className='hamburger-menu-item'>
                                <a href="#projects" onClick={() => setIsNavOpen(false)}>Projets</a>
                            </li>
                            <li>
                                <a href="#bio" onClick={() => setIsNavOpen(false)}>Bio</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={() => setIsNavOpen(false)}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <ul className="DESKTOP-MENU hidden space-x-8 lg:flex font-normal 2xl:text-lg text-dark-grey">
                    <li>
                        <a href="#projects">Projets</a>
                    </li>
                    <li>
                        <a href="#bio">Bio</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
