import { useState } from "react";
import './Header.css'

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="flex items-center justify-end py-10">

            <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-neutral-400"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-neutral-400"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-neutral-400"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-neutral-400"
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
                        <ul className="flex flex-col items-center justify-between min-h-[250px] font-normal text-neutral-400">
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
                    </div>
                </section>

                <ul className="DESKTOP-MENU hidden space-x-8 lg:flex font-normal text-neutral-400">
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
