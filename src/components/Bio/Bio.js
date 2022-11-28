import React from 'react';
import { bio } from '../../info'
import workingPicture from '../../assets/working.png'
import './Bio.css'

const Bio = () => {
    return (
        <section className='section bio'>
            <hr className='separation'></hr>
            <div className='bio-border'>
                <div className='bio-container'>
                    <div className='bio-picture-border'>
                        <div className='bio-picture-container' id="bio">
                            <img
                                alt="House"
                                src={workingPicture}
                                className='bio-picture'
                            />
                        </div>
                    </div>

                    <div className='bg-bio'>
                        <span
                            className='bg-left-bio'
                        ></span>

                        <div className='bio-text-container'>
                        <h2 className='bio-title'>WhoAmI</h2>
                        <p className='project-description'>{bio.paraph1}</p>
                        <p className='project-description'>{bio.paraph2}</p>
                        
                        <p className='pitch'>{bio.paraph3}</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
    );
};

export default Bio;