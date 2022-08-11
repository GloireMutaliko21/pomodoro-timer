import React from 'react'
import { BiPlusCircle } from "react-icons/bi";
import { TbCircleMinus } from "react-icons/tb";

import ArrowButton from './ArrowButton';
import { useStateContext } from "../context/contextProvider";

const OptionsBreak = ({ titre }) => {

    const { breakLength, setBreakLength } = useStateContext()

    return (
        <div>
            <p className='text-2xl'>{titre}</p>
            <div className='flex justify-around pt-6'>
                <ArrowButton
                    icon={<TbCircleMinus />}
                    handleClick={() => { breakLength > 1 ? setBreakLength(breakLength - 1) : setBreakLength(breakLength) }}
                />
                <p className='text-lg text-green-700 font-semibold'>{breakLength}</p>
                <ArrowButton
                    icon={<BiPlusCircle />}
                    handleClick={() => setBreakLength(breakLength + 1)}
                />
            </div>
        </div>
    )
}

export default OptionsBreak