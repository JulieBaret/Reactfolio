/** @jsxImportSource @emotion/react */
import { useState, useCallback } from 'react';
import { css } from '@emotion/react';

const elementStyle = css`
display: hidden;
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
background-color: white;
z-index: 20;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`

const HamburgerMenu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    const handleClick = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev)
    }, []);

    return (
        <nav>
            <section className="flex lg:hidden">

                {/* Mobile Icon */}
                <div
                    className="space-y-2"
                    onClick={handleClick}
                >
                    <span className='block h-0.5 w-8 animate-pulse bg-pink'></span>
                    <span className='block h-0.5 w-8 animate-pulse bg-pink'></span>
                    <span className='block h-0.5 w-8 animate-pulse bg-pink'></span>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen &&
                <>
                <div css={elementStyle}>
                    {/* Mobile close button */}
                    <div
                        className='absolute top-0 right-0 px-10 py-10'
                        onClick={closeMenu}
                    >
                        <svg
                            className='h-8 w-8 animate-pulse text-pink'
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

                    {/* Mobile List */}
                    <ul className='flex flex-col items-center justify-between min-h-[250px] text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red to-middle-pink'>
                        <li>
                            <a href="#projects" onClick={closeMenu}>Projects</a>
                        </li>
                        <li>
                            <a href="#bio" onClick={closeMenu}>Biography</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={closeMenu}>Contact</a>
                        </li>
                    </ul>
                </div>
                </>
                }

            </section>

            {/* Desktop */}
            <ul className="hidden space-x-8 lg:flex font-normal 2xl:text-lg text-dark-grey text-right">
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#bio">Biography</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default HamburgerMenu;