import clsx from 'clsx';
import React from 'react';
import { titleToLogo } from '../utils';

const FilledButton = ({ title, color = 'black', url }) => {
    const colorClasses = {
        blue: 'bg-blue border-blue hover:text-blue',
        black: 'bg-black border-black hover:text-black',
    };
    const colorClass = colorClasses[color];
    const baseClass = "inline-flex 2xl:text-lg items-center rounded-full border-2 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white";
    const style = clsx(baseClass, colorClass);

    return (
        <span>
            <a
                className={style}
                href={url}
                target="_blank"
                rel="noreferrer"
            >
                <p>{title}</p>
                <svg
                    className="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{ __html: titleToLogo[title] }}
                ></svg>
            </a>
        </span>
    );
};

export default FilledButton;