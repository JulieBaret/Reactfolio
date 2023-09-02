import React from 'react';
import { titleToLogo } from '../utils';

const FilledButton = ({ title, color, url }) => {

    return (
        <span>
            <a
                className={`inline-flex 2xl:text-lg items-center rounded-full border-2 border-${color} bg-${color} px-5 py-3 text-sm font-medium text-white transition-colors hover:text-${color} hover:bg-transparent`}
                href={url}
                target='_blank'
                rel='noreferrer'
            >
                <p>{title}</p>
                <svg
                    className={`w-5 h-5 ml-2`}
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    dangerouslySetInnerHTML={{ __html: titleToLogo[title] }}>
                </svg>
            </a>
        </span>
    );
};

export default FilledButton;