import React from 'react'
import { BiPlusCircle } from "react-icons/bi";
import { TbCircleMinus } from "react-icons/tb";

import ArrowButton from './ArrowButton';
import { useStateContext } from "../context/contextProvider";

const Options = ({ titre }) => {

    const { breakLength, setBreakLength } = useStateContext()

    return (
        <div>
            <p className='text-white text-2xl'>{titre}</p>
            <div className='flex text-white justify-around'>
                <ArrowButton
                    icon={<TbCircleMinus />}
                    handleClick={() => setBreakLength(breakLength - 1)}
                />
                <p>{breakLength}</p>
                <ArrowButton
                    icon={<BiPlusCircle />}
                    handleClick={() => setBreakLength(breakLength + 1)}
                />
            </div>
        </div>
    )
}

export default Options