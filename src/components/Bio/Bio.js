import React from 'react';
import { bio } from '../../info'
import workingPicture from '../../assets/working.png'
import './Bio.css'

const Bio = () => {
    const { text } = bio
    return (
        <section id='bio' className='section bio'>
            <h2 className='section__title'>À propos de moi</h2>
            <div className='bio'>
                <div className='working'>
                    <img id='working' src={workingPicture} alt="me working"/>
                </div>
                <div className='text'>
                {text}
                </div>
            </div>
            
        </section>
        
    );
};

export default Bio;