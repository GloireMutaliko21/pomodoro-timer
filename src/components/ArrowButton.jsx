import React from 'react'

const ArrowButton = ({ handleClick, icon }) => {
    return (
        <button
            className='text-xl text-white'
            type='button'
            onClick={handleClick}
        >
            {icon}
        </button>
    )
}

export default ArrowButton