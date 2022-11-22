import React from 'react';
import './Timeline.css';

const Timeline = () => {
    return (
        <section className="section timeline">
        <div className="timeline">
            <ol class="border-l-2 border-red-400">
                <li>
                    <div class="flex flex-start items-center">
                        <div class="bg-red-400 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                        <h4 class="text-gray-800 font-semibold text-xl -mt-2">Ada Tech School</h4>
                    </div>
                    <div class="ml-6 mb-6 pb-6">
                        <p class="text-red-400 hover:text-red-300 focus:text-red-400 duration-300 transition ease-in-out text-sm">Mai 2022 - Mars 2024</p>
                        <p class="inline-block bg-red-300 text-white font-bold text-md leading-tight uppercase">Développeur concepteur d'application</p>
                        <p class="text-gray-700 mt-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </li>
            </ol>
        </div>
        </section>
    );
};

export default Timeline;