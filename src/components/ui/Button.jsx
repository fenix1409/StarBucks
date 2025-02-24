import React from 'react'

const Button = ({ extraClass, title }) => {
    return (
        <button className={`${extraClass} w-[333px] max-sm:w-[223px] px-[78px] max-sm:px-[52px] py-[20px] max-sm:py-[13px] rounded-[82px] text-white cursor-pointer`} style={{background: "linear-gradient(265.23deg, #237249 6.79%, #35C66B 97.2%)"}}>{title}</button>
    )
}

export default Button