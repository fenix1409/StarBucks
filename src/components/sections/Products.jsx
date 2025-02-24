import React from 'react'
import C1 from '../../assets/coffee1.png'
import C2 from '../../assets/coffee2.png'
import C3 from '../../assets/coffee3.png'
import Button from '../ui/Button'

const Products = () => {
    const coffees = [
        { id: 1, image: C1, name: "Fast", description: "Our cafe will serve you quickly", price: "7,45$", amount: "330 ml" },
        { id: 2, image: C1, name: "Fast", description: "Our cafe will serve you quickly", price: "7,45$", amount: "330 ml" },
        { id: 3, image: C3, name: "Cappuccino", description: "Our cafe will serve you quickly", price: "9,75$", amount: "330 ml" }
    ]
    return (
        <section className='my-[100px]'>
            <div className="w-[908px] flex items-center gap-[72px] mb-[54px]">
                <h1 className='text-[80px] leading-[87px] font-extrabold text-white'>New Our<span className='text-[#35C66B]'> Products</span></h1>
                <p className='text-[20px] leading-[32px] text-[#D9D9D9]'>Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!  Starbucks coffee and don't forget about the discount!</p>
            </div>
            <ul className='flex items-center gap-[54px]'>
                {coffees.map(item => (
                    <li key={item.id} className="w-[277px] p-[32px] border-2 rounded-[30px] relative border-[#DADADA]" >
                        <img src={item.image} alt="iamge" width={180} height={241} className='mb-[20px]' />
                        <div className="text-center">
                            <h2 className='text-[32px] leading-[52px] font-medium mb-[18px] text-white'>{item.name}</h2>
                            <p className='text-[20px] leading-[32px] mb-[7px] text-[#D9D9D9]'>{item.description}</p>
                            <div className="flex items-center gap-[35px] mb-[30px]">
                                <strong className='text-[32px] leading-[52px] font-medium text-white'>{item.price}</strong>
                                <p className='text-[20px] leading-[32px] text-[#D9D9D9]'>{item.amount}</p>
                            </div>
                            <Button title={"Buy Product"} extraClass={"!w-[186px] !py-[14px] !px-[38px] text-[17px] leading-[25px] text-white font-bold"} />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Products