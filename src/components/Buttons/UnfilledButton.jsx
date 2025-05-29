import React from 'react';
import clsx from 'clsx';
import { titleToLogo } from '../utils';

const UnfilledButton = ({ title, color, transitionColor, url, filledLogo, gradient }) => {
    const baseClass = "inline-flex items-center rounded-full transition-colors p-[2px] hover:text-white";
    const colorClass = gradient
        ? clsx(`bg-gradient-to-r from-${color} to-${transitionColor} text-${color}`)
        : clsx(`bg-${color} text-${color}`);
    const style = clsx(baseClass, colorClass);
    return (
        <span>
            <a
                className={style}
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
                    strokeWidth="2"
                    stroke="currentColor"
                    dangerouslySetInnerHTML={{ __html: titleToLogo[title] }}>
                </svg>
                }
            </span>
            </a>
        </span>
    );
};

export default UnfilledButton;