import React from 'react';
import { titleToLogo } from '../utils';

const Button = ({ title, color, transitionColor, url, filledLogo, gradient }) => {

    return (
        <span className='mr-[1em] group'>
            <a
                className={gradient ? `inline-flex items-center rounded-full transition-colors bg-gradient-to-r text-${color} from-${color} to-${transitionColor} p-[2px] hover:text-white` : `inline-flex items-center rounded-full transition-colors bg-${color} text-${color} p-[2px] mr-2 hover:text-white`}
                href={url}
                target='_blank'
                rel='noreferrer'
            >
            <span className='inline-flex rounded-full bg-white px-6 py-3 text-sm 2xl:text-lg font-medium hover:bg-transparent'>
                {title}
                {filledLogo ? 
                <svg 
                    className="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{ __html: titleToLogo[title] }}>
                </svg> :
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 ml-2`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    dangerouslySetInnerHTML={{ __html: titleToLogo[title] }}>
                </svg>
                }
            </span>
            </a>
        </span>
    );
};

export default Button;