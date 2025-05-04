/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { css } from '@emotion/react';

const elementStyle = css`
    position: fixed;
    bottom: 3.5em;
    right: 48.5vw;
    background-color: transparent;
    z-index: 50;

    @media (max-width: 900px) {
        right: 47vw;
    }
`

const ScrollToTheTop = ({ children, scrollPosition }) => {
    const [displayIcon, setDisplayIcon] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setDisplayIcon(window.pageYOffset > scrollPosition)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

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
