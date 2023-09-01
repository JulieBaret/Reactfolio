import React from 'react';
import { useEffect } from 'react';
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
                    class="ml-2 h-5 w-5"
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


//   /* Resume Button */
//   .red-button-border {
//     @apply inline-flex items-center rounded-full transition-colors bg-gradient-to-r text-red from-red to-middle-pink p-[2px] hover:text-white;
//   }

//   .red-button-text {
//     @apply inline-flex rounded-full bg-white px-6 py-3 text-sm 2xl:text-lg font-medium hover:bg-transparent;
//   }

// .black-button-border {
//     @apply inline-flex items-center rounded-full transition-colors bg-black text-black p-[2px] mr-2 hover:text-white;
//   }

//   .black-button-text {
//     @apply inline-flex rounded-full 2xl:text-lg bg-white px-6 py-3 text-sm font-medium hover:bg-transparent;
//   }

 {/* CV */}
//  <span className='links'>
//  <a
//    className='red-button-border'
//    href='baret-julie-resume.pdf'
//    target='_blank'
//    rel='noreferrer'
//  >
//    <span
//      className='red-button-text'
//    >
//      Resume
//      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class='button-logo'>
//        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
//      </svg>

//    </span>
//  </a>
// </span>

