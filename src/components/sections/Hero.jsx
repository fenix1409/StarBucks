import React from 'react'
import Button from '../ui/Button'
import Image from '../../assets/hero-img.png'
import line from '../../assets/line.png'

const Hero = () => {
    const users = [
        {
            id: 1,
            title: "Premium Users",
            count: "9k"
        },
        {
            id: 2,
            title: "Happy Customers",
            count: "2k"
        },
        {
            id: 3,
            title: "Awards Winning",
            count: "28"
        }
    ]
    return (
        <div className='flex items-center justify-between'>
            <div className="w-[574px]">
                <h1 className='text-[80px] leading-[87px] font-extrabold text-white'>New Cafe by <span className='text-[#237249]'>StarBucks</span></h1>
                <p className='text-[20px] leading-[32px] text-[#D9D9D9] my-[54px]'>Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!</p>
                <div className="flex items-center gap-[16px] mb-[54px]">
                    <Button title="Select a coffee " extraClass={`text-[24px] leading-[35px] font-medium`} />
                    <button className='w-[167px] px-[54px] py-[20px] border-[1px] border-[#DADADA] rounded-[82px] text-[24px] leading-[35px] text-[#D9D9D9] cursor-pointer'>More</button>
                </div>
                <ul className='flex items-center gap-[46px] w-[472px]'>
                    {users.map(item => (
                        <li key={item.id} className='w-[127px] h-[126px]'>
                            <p className='text-[62px] leading-[67px] text-white flex'>{item.count} <span className='text-[#237249]'>+</span></p>
                            <p className='text-[20px] leading-[28px] text-[#D9D9D9]'>{item.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="relative">
                <img src={Image} alt="image" width={472} height={680} className='relative' />
                <img src={line} alt="line" width={910} height={676} className='absolute top-[395px] left-[127px]' />
            </div>
        </div>
    )
}

export default Hero