import React from 'react'
import { BiPlusCircle } from "react-icons/bi";
import { TbCircleMinus } from "react-icons/tb";

import { useStateContext } from "../context/contextProvider";
import ArrowButton from "./ArrowButton";

const OptionsSession = ({ titre }) => {
    const { sessionLength, setSessionLength } = useStateContext()

    return (
        <div>
            <p className='text-2xl'>{titre}</p>
            <div className='flex justify-around pt-6'>
                <ArrowButton
                    icon={<TbCircleMinus />}
                    handleClick={() => { sessionLength > 1 ? setSessionLength(sessionLength - 1) : setSessionLength(sessionLength) }}
                />
                <p className='text-lg text-green-700 font-semibold'>{sessionLength}</p>
                <ArrowButton
                    icon={<BiPlusCircle />}
                    handleClick={() => setSessionLength(sessionLength + 1)}
                />
            </div>
        </div>
    )
}

export default OptionsSession