import React from 'react'
import Cafe from '../../assets/cafe.png'
import PRoces from '../../assets/process.png'
import Button from '../ui/Button'

const Delecious = () => {
    return (
        <div className='flex items-center justify-between max-sm:flex-col'>
            <img src={Cafe} alt="Cafe image" width={548} height={755} className='max-sm:mb-[48px]'/>
            <div className="w-[457px] max-sm:w-[320px]">
                <h1 className='text-[80px] max-sm:text-[48px] leading-[87px] max-sm:leading-[52px] font-extrabold mb-[63px] max-sm:mb-[35px] text-white'>We make <span className='text-[#237249]'>delicious</span></h1>
                <p className='text-[20px] max-sm:text-[14px] leading-[32px] max-sm:leading-[22px] text-[#D9D9D9] mb-[63px] max-sm:mb-[38px]'>Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market</p>
                <div className="relative">
                    <img src={PRoces} alt="image" width={255} height={163} />
                    <Button title={"Cooking Process"} extraClass={'!w-[326px] max-sm:!w-[193px] !px-[42px] max-sm:!px-[25px] !py-[20px] max-sm:!py-[11px] !absolute !top-1/2 !left-1/2 max-sm:!left- !transform !-translate-x-1/2 !-translate-y-1/2'} />
                </div>
            </div>
        </div>
    )
}

export default Delecious