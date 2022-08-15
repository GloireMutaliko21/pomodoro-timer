import React from 'react'
import { BiLoaderCircle } from "react-icons/bi";

const Fallback = () => {
    return (
        <div className='text-6xl h-screen w-screen animate-spin text-green-700 flex justify-center items-center content-center'>
            <BiLoaderCircle />
        </div>
    )
}

export default Fallback