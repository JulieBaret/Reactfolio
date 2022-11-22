import React from 'react';
import { bio } from '../../info'
import workingPicture from '../../assets/working.png'
import './Bio.css'

const Bio = () => {
    return (
        <section>
            <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div class="relative z-10 lg:py-16">
                        <div class="relative h-64 sm:h-80 lg:h-full" id="bio">
                            <img
                                alt="House"
                                src={workingPicture}
                                class="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div class="relative flex items-center bg-neutral-100">
                        <span
                            class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-neutral-100"
                        ></span>

                        <div class="p-8 sm:p-16 lg:p-24">
                        <h2 class="text-4xl font-extrabold text-red-400 md:text-5xl mb-4">WhoAmI</h2>
                        <p class="text-gray-500 text-justify mb-6">{bio.paraph1}</p>
                        <p class="text-gray-500 text-justify mb-6">{bio.paraph2}</p>
                        
                        <p class="font-medium text-gray-500 text-justify mb-6">{bio.paraph3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        // <section>
        //     <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        //         <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        //             <div class="relative z-10 lg:py-16">
        //                 <div class="relative h-64 sm:h-80 lg:h-full">
        //                     <img
        //                         alt="House"
        //                         src={workingPicture}
        //                         class="absolute inset-0 h-50% w-full object-cover"
        //                     />
        //                 </div>
        //             </div>

        //             <div class="relative flex items-center bg-gray-100">
        //                 <span
        //                     class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"
        //                 ></span>

        //                 <div class="p-8 sm:p-16 lg:p-24">
        //                 <h2 class="text-4xl font-extrabold text-red-400 md:text-5xl mb-4">WhoAmI</h2>


        //                 <p class="font-light text-gray-500 mb-6">{text}</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        // <section id='bio' className='section bio'>
        //     <h2 className='section__title'>À propos de moi</h2>
        //     <div className='bio'>
        //         <div className='working'>
        //             <img id='working' src={workingPicture} alt="me working"/>
        //         </div>
        //         <div className='text'>
        //         {text}
        //         </div>
        //     </div>

        // </section>

    );
};

export default Bio;