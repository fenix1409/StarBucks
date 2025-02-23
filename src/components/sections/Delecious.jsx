import React from 'react'
import Cafe from '../../assets/cafe.png'
import PRoces from '../../assets/process.png'
import Button from '../ui/Button'

const Delecious = () => {
    return (
        <div className='flex items-center justify-between'>
            <img src={Cafe} alt="Cafe image" width={548} height={755} />
            <div className="w-[457px]">
                <h1 className='text-[80px] leading-[87px] font-extrabold mb-[63px] text-white'>We make <span className='text-[#237249]'>delicious</span></h1>
                <p className='text-[20px] leading-[32px] text-[#D9D9D9] mb-[63px]'>Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market</p>
                <div className="relative">
                    <img src={PRoces} alt="image" width={447} height={275} />
                    <Button title={"Cooking Process"} extraClass={'!w-[326px] !px-[42px] !py-[20px] !absolute !top-1/2 !left-1/2 !transform !-translate-x-1/2 !-translate-y-1/2'} />
                </div>
            </div>
        </div>
    )
}

export default Delecious