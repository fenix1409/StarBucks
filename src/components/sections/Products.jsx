import React from 'react'
import C1 from '../../assets/coffee1.png'
import C3 from '../../assets/coffee3.png'
import Button from '../ui/Button'

const Products = () => {
    const coffees = [
        { id: 1, image: C1, name: "Fast", description: "Our cafe will serve you quickly", price: "7,45$", amount: "330 ml" },
        { id: 2, image: C1, name: "Fast", description: "Our cafe will serve you quickly", price: "7,45$", amount: "330 ml" },
        { id: 3, image: C3, name: "Cappuccino", description: "Our cafe will serve you quickly", price: "9,75$", amount: "330 ml" }
    ]
    return (
        <section className='my-[100px] max-sm:my-[64px]'>
            <div className="w-[908px] max-sm:w-[260px] flex items-center max-sm:flex-col gap-[72px] max-sm:gap-[36px] mb-[54px] max-sm:mb-[42px]">
                <h1 className='text-[80px] max-sm:text-[53px] leading-[87px] max-sm:leading-[58px] font-extrabold text-white'>New Our<span className='text-[#35C66B]'> Products</span></h1>
                <p className='text-[20px] max-sm:text-[13px] leading-[32px] max-sm:leading-[21px] text-[#D9D9D9]'>Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!  Starbucks coffee and don't forget about the discount!</p>
            </div>
            <ul className='flex items-center gap-[54px] max-sm:gap-[35px] max-sm:overflow-y-auto'>
                {coffees.map(item => (
                    <li key={item.id} className="w-[277px] max-sm:w-[183px] p-[32px] max-sm:p-[20px] border-2 max-sm:border-[1px] rounded-[30px] max-sm:rounded-[19px] relative border-[#DADADA]" >
                        <img src={item.image} alt="iamge" width={180} height={241} className='mb-[20px] max-sm:!w-[118px] max-sm:!h-[159px] max-sm:mb-[5px]' />
                        <div className="text-center">
                            <h2 className='text-[32px] max-sm:text-[21px] leading-[52px] max-sm:leading-[34px] font-medium mb-[18px] max-sm:mb-[2px] text-white'>{item.name}</h2>
                            <p className='text-[20px] max-sm:text-[13px] leading-[32px] max-sm:leading-[21px] mb-[7px] max-sm:mb-1 text-[#D9D9D9]'>{item.description}</p>
                            <div className="flex items-center gap-[35px] max-sm:gap-[23px] mb-[30px] max-sm:mb-[20px]">
                                <strong className='text-[32px] max-sm:text-[21px] leading-[52px] max-sm:leading-[34px] font-medium text-white'>{item.price}</strong>
                                <p className='text-[20px] max-sm:text-[13px] leading-[32px] max-sm:leading-[21px] text-[#D9D9D9]'>{item.amount}</p>
                            </div>
                            <Button title={"Buy Product"} extraClass={"!w-[186px] max-sm:!w-[122px] !py-[14px] max-sm:!py-[9px] !px-[38px] max-sm:!px-[25px] text-[17px] max-sm:text-[11px] leading-[25px] max-sm:leading-[16px] text-white font-bold"} />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Products