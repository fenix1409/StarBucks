import React from 'react'
import Button from '../ui/Button'
import Image from '../../assets/hero-img.png'

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
        <section className='flex items-center justify-between max-sm:flex-col-reverse'>
            <div className="w-[574px] max-sm:w-[335px]">
                <h1 className='text-[80px] max-sm:text-[48px] leading-[87px] max-sm:leading-[52px] font-extrabold text-white'>New Cafe by <span className='text-[#237249]'>StarBucks</span></h1>
                <p className='text-[20px] max-sm:text-[12px] leading-[32px] max-sm:leading-[19px] text-[#D9D9D9] my-[54px] max-sm:my-[36px]'>Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!</p>
                <div className="flex items-center gap-[16px] mb-[54px]">
                    <Button title="Select a coffee " extraClass={`text-[24px] max-sm:text-[15px] leading-[35px] max-sm:leading-[23px] font-medium`} />
                    <button className='w-[167px] max-sm:w-[112px] px-[54px] max-sm:px-[36px] py-[20px] max-sm:py-[13px] border-[1px] border-[#DADADA] rounded-[82px] text-[24px] max-sm:text-[16px] leading-[35px] max-sm:leading-[23px] text-[#D9D9D9] cursor-pointer'>More</button>
                </div>
                <ul className='flex items-center gap-[46px] max-sm:gap-[30px] w-[472px] max-sm:w-[316px]'>
                    {users.map(item => (
                        <li key={item.id} className='w-[127px] h-[126px]'>
                            <p className='text-[62px] max-sm:text-[41px] leading-[67px] max-sm:leading-[45px] text-white flex'>{item.count} <span className='text-[#237249]'>+</span></p>
                            <p className='text-[20px] max-sm:text-[13px] leading-[28px] max-sm:leading-[17px] text-[#D9D9D9]'>{item.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <img src={Image} alt="image" width={472} height={680} className='relative max-sm:hidden' />
            <img src={Image} alt="image" width={472} height={680} className='relative sm:hidden mb-[26px]' />
        </section>
    )
}

export default Hero