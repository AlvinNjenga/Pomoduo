import React from 'react';
import Navbar from './components/navbar';
import Timer from './components/timer';
import Social from './components/social';

export default function PomodoroSection(): JSX.Element {
    return (
        <div className='flex flex-1 flex-col items-center'>
            <Navbar />
            <Timer />
            <Social /> 
        </div>
    )
}