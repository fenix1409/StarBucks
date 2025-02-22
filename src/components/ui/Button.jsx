import React from 'react'

const Button = ({ extraClass, title }) => {
    return (
        <button className={`${extraClass} w-[333px] px-[78px] py-[20px] bg-[#35C66B] rounded-[82px] text-white cursor-pointer`}>{title}</button>
    )
}

export default Button