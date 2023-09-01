import React from 'react';
import './Timeline.css';
import { experience } from '../../info'
import uniqid from 'uniqid'

const Timeline = () => {
    const data = experience
    return (
        <section className='section-timeline'>
            <div className='timeline'>
                <div className='title'>Parcours</div>
                <ol className='timeline-line'>
                    {data.map((exp) => (
                        <li key={uniqid()}>
                            <div class="flex flex-start items-center">
                                <div className='timeline-point'></div>
                                <div className='timeline-title'>{exp.what}</div>
                            </div>
                            <div className='timeline-container'>
                                <p className='timeline-where'>{exp.where}</p>
                                <p className='timeline-date'>{exp.when}</p>
                                
                                {/* <p class="text-neutral-500 mt-2 mb-4">{exp.more}</p> */}
                                <ul class=''>
                                    {exp.more.map((item) => (
                                        <li key={uniqid()}>
                                            <p className='timeline-what'>› {item}</p>
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
                            <div className='timeline-point'></div>
                            <div className='timeline-title'>Baccalauréat scientifique</div>
                        </div>
                        <div className='timeline-container'>
                            <p className='timeline-date'>2011</p>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default Timeline;