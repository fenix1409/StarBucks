import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const menus = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Select',
            path: '#'
        },
        {
            id: 3,
            name: 'Shop',
            path: '#'
        }
    ]
    return (
        <header className='flex items-center gap-[94px] mt-[48px] mb-[16px]'>
            <h1 className='text-[37px] leading-[41px] font-extrabold text-[#35C66B]'>StarBucks</h1>
            <ul className='flex items-center gap-[94px]'>
                {menus.map((item, index) => (
                    <Link key={item.id} className="text-[19px] leading-[23px] text-[#D9D9D9]" to={item.path}>{item.name}</Link>
                ))}
            </ul>
        </header>
    )
}

export default Header