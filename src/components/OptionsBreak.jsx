import React from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { BsFillPatchMinusFill } from 'react-icons/bs'

import '../styles/slider.css';
import { useStateContext } from "../context/contextProvider";

const OptionsBreak = () => {
    const { breakLength, setBreakLength } = useStateContext()

    return (
        <div className='flex flex-col justify-between items-center text-left text-white'>
            <label className='block' for="">Break Length: {breakLength}:00</label>
            <div className='text-emerald-700 border-0 text-3xl'>
                <button onClick={() => setBreakLength(breakLength - 1)} className='mr-5 text-red-400'>
                    <BsFillPatchMinusFill />
                </button>
                <button onClick={() => setBreakLength(breakLength + 1)}>
                    <BsFillPlusCircleFill />
                </button>
            </div>
        </div>
    )
}

export default OptionsBreak