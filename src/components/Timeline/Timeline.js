import React from 'react';
import './Timeline.css';
import { experience } from '../../info'
import uniqid from 'uniqid'

const Timeline = () => {
    const data = experience
    return (
        <section className="section timeline">
            <div className="timeline">
            <h2 class="text-4xl font-extrabold text-red-400 md:text-5xl mb-4">Parcours</h2>
                <ol class="border-l-2 border-red-400 mt-2">
                    {data.map((exp) => (
                        <li key={uniqid()}>
                            <div class="flex flex-start items-center">
                                <div class="bg-red-400 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                                <h4 class="text-gray-800 font-semibold text-lg -mt-2">{exp.what}</h4>
                            </div>
                            <div class="ml-6 mb-2 pb-6">
                                <p class="text-red-400 hover:text-red-300 focus:text-red-400 duration-300 transition ease-in-out text-sm">{exp.when}</p>
                                <p class="inline-block bg-red-300 text-white font-bold text-md leading-tight uppercase">{exp.where}</p>
                                {/* <p class="text-neutral-500 mt-2 mb-4">{exp.more}</p> */}
                                <ul class=''>
                                    {exp.more.map((item) => (
                                        <li key={uniqid()}>
                                            <p class="text-neutral-500 mt-2 text-sm">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ol>
                <ol class="border-l-2 border-transparent">
                    <li>
                        <div class="flex flex-start items-center">
                            <div class="bg-red-400 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                            <h4 class="text-gray-800 font-semibold text-lg -mt-2">Baccalauréat scientifique</h4>
                        </div>
                        <div class="ml-6 mb-6 pb-6">
                            <p class="text-red-400 hover:text-red-300 focus:text-red-400 duration-300 transition ease-in-out text-sm">2011</p>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default Timeline;