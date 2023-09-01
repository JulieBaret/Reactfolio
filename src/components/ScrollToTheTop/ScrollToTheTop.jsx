/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';

function ScrollToTheTop({ children , scrollPosition }) {
    const [displayIcon, setDisplayIcon] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > scrollPosition) {
                setDisplayIcon(true);
            } else {
                setDisplayIcon(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    const elementStyle =  css`
    position: fixed;
    bottom: 3em;
    right: 48.5vw;
    background-color: transparent;
    z-index: 50;

    @media (max-width: 900px) {
            right: 45vw;
        }
    `

    return (
        <div>
            {displayIcon &&
            <div css={elementStyle}>
            <a href='#top'>
                {children}
            </a>
            </div>
        }
        </div>
    );
}

export default ScrollToTheTop;
