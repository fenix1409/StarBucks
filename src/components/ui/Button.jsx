import React from 'react'

const Button = ({ extraClass, title }) => {
    return (
        <button className={`${extraClass} w-[333px] max-sm:w-[223px] px-[78px] max-sm:px-[52px] py-[20px] max-sm:py-[13px] bg-[#35C66B] rounded-[82px] text-white cursor-pointer`}>{title}</button>
    )
}

export default Button