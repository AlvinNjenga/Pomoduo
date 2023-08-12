import React from 'react';

export default function Timer(): JSX.Element {
    return (
        <div id="timer-container" className='max-w-screen-sm px-3 w-full flex justify-center'>
            <div id="timer" className='max-w-[480px] bg-light-highlight pt-5 pb-8 mb-5 w-full rounded-md flex-col items-center justify-center'>
                <div id="button-wrapper" className='inline-flex justify-center items-center w-full'>
                    {/* TODO: font-bold and background-dark-highlight are for selected buttons */}
                    <button className='flex align-middle border-none m-0 rounded-md font-mono text-base h-7 cursor-pointer bg-dark-highlight text-white font-bold px-3'>
                        POMODORO
                    </button>
                    <button className='flex align-middle border-none m-0 rounded-md font-mono text-base h-7 cursor-pointer text-white pt-[2px] px-3'>
                        SHORT BREAK
                    </button>
                    <button className='flex align-middle border-none m-0 rounded-md font-mono text-base h-7 cursor-pointer text-white pt-[2px] px-3'>
                        LONG BREAK
                    </button>
                </div>
                <div id="timer-string" className='text-9xl text-center mt-5 font-bold text-white'>
                    25:00
                </div>
                <div className='w-full flex justify-center'>
                    {/* TODO: Add transitions. */}
                    <button className='text-matte-red cursor-pointer border-none mt-7 rounded-[4px] text-2xl h-14 font-bold w-48 bg-white'>
                        START
                    </button>
                </div>
            </div>
        </div>
    )
}