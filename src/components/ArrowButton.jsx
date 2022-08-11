import React from 'react'

const ArrowButton = ({ handleClick, icon }) => {
    return (
        <button
            className='text-xl'
            type='button'
            onClick={handleClick}
        >
            {icon}
        </button>
    )
}

export default ArrowButton