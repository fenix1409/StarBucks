import React from 'react'
import Rocket from '../../../public/icons/Rocket.svg'
import Money from '../../../public/icons/Money.svg'
import Heart from '../../../public/icons/Heart.svg'
import { GradientHeart, HaveIcon, HaveMobile } from '../../../public/icons/Icons'

const Have = () => {
    const items = [
        {
            id: 1,
            title: "Tasty",
            description: "We have the most delicious coffee",
            icon: Money
        },
        {
            id: 2,
            title: "Fast",
            description: "Our cafe will serve you quickly",
            icon: Rocket
        },
        {
            id: 3,
            title: "Available",
            description: "Cafe will serveat the most pleasant prices",
            icon: Money
        }
    ]
    return (
        <section className='mt-[60px] mb-[100px] max-sm:px-[80px] max-sm:mb-[68px]'>
            <ul className='flex items-center gap-[128px] max-sm:gap-[30px] justify-around max-sm:justify-center bg-white rounded-[46px] pt-[51px] max-sm:pt-[19px] px-[78px] max-sm:px-[56px] pb-[86px] max-sm:pb-[19px] relative max-sm:w-[218px] max-sm:flex-col max-sm:h-[602px]'>
                {items.map(item => (
                    <li key={item.id} className='w-[220px] max-sm:w-[133px] h-[290px] max-sm:h-[133px] text-center'>
                        <img src={item.icon} alt="icon" className='max-sm:w-[127px] max-sm:h-[133px]' />
                        <strong className='inline-block text-[32px] max-sm:text-[18px] leading-[52px] max-sm:leading-[30px] text-[#121517] mb-[4px] max-sm:mb-0 font-medium'>{item.title}</strong>
                        <p className='text-[20px] max-sm:text-[11px] leading-[32px] max-sm:leading-[19px] text-[#121517E5]'>{item.description}</p>
                    </li>
                ))}
                <div className='absolute top-[-93px] left-[-90px] max-sm:hidden'><HaveIcon /></div>
                <div className='sm:hidden absolute top-[-45px] right-[-40px]'><HaveMobile /></div>
            </ul>
        </section>
    )
}

export default Have