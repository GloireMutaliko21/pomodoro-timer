import React from 'react'
import { useTimer } from "use-timer";
import { MdOutlineNotStarted, MdPauseCircleFilled } from "react-icons/md";
import { TbRefreshAlert } from "react-icons/tb";
import { BsFillPlayCircleFill } from "react-icons/bs";

import { useStateContext } from "../context/contextProvider";

const Clock = () => {
    const { sessionLength } = useStateContext()

    const { time, start, pause, reset } = useTimer({
        initialTime: sessionLength,
        endTime: 0,
        timerType: "DECREMENTAL",
        autostart: false
    })

    return (
        <div className='mt-10 w-full flex flex-col justify-center items-center'>

            <div className='flex justify-around text-3xl w-3/4 text-green-800'>
                <button><MdOutlineNotStarted /></button>
                <button><BsFillPlayCircleFill /></button>
                <button><MdPauseCircleFilled /></button>
                <button><TbRefreshAlert /></button>
            </div>
        </div>
    )
}

export default Clock