import React from 'react';
import { bio } from '../info'
import workingPicture from '../assets/working.png'

const Biography = () => {
    return (
        <section className='flex w-[90vw] self-center'>
            <div className='mt-16 mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:h-screen lg:grid-cols-2'>
                    <div className='relative z-10 lg:py-16'>
                        <div className='relative h-64 sm:h-80 lg:h-4/5' id="bio">
                            <img
                                alt="working"
                                src={workingPicture}
                                className='absolute inset-0 h-full w-full object-cover'
                            />
                        </div>
                    </div>

                    {/* Background */}
                    <div className='relative flex items-center bg-light-grey'>

                        {/* Left background */}
                        <span
                            className='hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-light-grey'
                        ></span>

                        <div className='p-8 sm:p-16 lg:p-24'>
                        <h2 className='text-4xl 2xl:text-6xl font-extrabold text-red md:text-5xl mb-4'>WhoAmI</h2>
                        <p className='text-sm md:text-base 2xl:text-lg text-dark-grey mb-6'>{bio.paraph1}</p>
                        <p className='text-sm md:text-base 2xl:text-lg text-dark-grey mb-6'>{bio.paraph2}</p>
                        
                        <p className='font-medium text-very-dark-grey leading-6 text-base 2xl:text-xl md:text-lg'>{bio.paraph3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Biography;