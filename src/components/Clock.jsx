import React, { useState, useEffect, useRef } from 'react'
import { FaPause, FaPlay } from "react-icons/fa";
import { BiReset } from "react-icons/bi";

import { useStateContext } from "../context/contextProvider";

const Clock = () => {
    const { sessionLength, breakLength, setSessionLength, setBreakLength } = useStateContext()
    const [isPaused, setIsPaused] = useState(true)
    const [mode, setMode] = useState('break')
    const [secondsLeft, setSecondsLeft] = useState(0)

    const secondsLeftRef = useRef(secondsLeft)
    const isPausedRef = useRef(isPaused)
    const modeRef = useRef(mode)


    function switchMode() {
        const nextMode = modeRef.current === 'session' ? 'break' : 'session';
        const nextSeconds = (nextMode === 'session' ? sessionLength : breakLength) * 60
        setMode(nextMode)
        modeRef.current = nextMode

        setSecondsLeft(nextSeconds)
        secondsLeftRef.current = nextSeconds
    }

    function tick() {
        secondsLeftRef.current--
        setSecondsLeft(secondsLeftRef.current)
    }


    function initTimer() {
        setSecondsLeft(sessionLength * 60)
    }

    useEffect(() => {
        initTimer()

        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return;
            }
            if (secondsLeftRef.current === 0) {
                return switchMode()
            }

            tick()

        }, 1000);

        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sessionLength, breakLength, setBreakLength, setSessionLength])

    const minutes = Math.floor(secondsLeft / 60)
    let seconds = secondsLeft % 60

    if (seconds < 10) seconds = '0' + seconds

    return (
        <div className='flex flex-col items-center justify-center m-10 text-white text-4xl'>
            <h1 className='font-black mb-4'>Pomodoro Timer</h1>
            <div className='border-4 border-green-700 p-16 rounded-full'>
                <p>{mode === 'session' ? 'Session Time' : 'Break Time'}</p>
                <div className='text-white text-7xl font-black m-6'>
                    <span>{minutes + ':' + seconds}</span>
                </div>
            </div>
            <div>
                {
                    isPaused ? <button
                        onClick={() => {
                            setIsPaused(false);
                            isPausedRef.current = false
                        }}
                        className='p-4'
                    >
                        <FaPlay className='text-emerald-700 border-0 inline-block' />
                    </button> :
                        <button
                            onClick={() => {
                                setIsPaused(true)
                                isPausedRef.current = true
                            }}
                            className='p-4'
                        >
                            <FaPause className='text-emerald-700 border-0 inline-block' />
                        </button>
                }
                <button
                    onClick={() => {
                        setIsPaused(true)
                        isPausedRef.current = true
                    }}
                    className='p-4'
                >
                    <BiReset className='text-emerald-700 border-0 inline-block' />
                </button>
            </div>
        </div>
    )
}

export default Clock