import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MoreIcon } from '../../../public/icons/Icons'
import Close from '../../../public/icons/close-svgrepo-com.svg'

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
    
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <header className='flex items-center gap-[94px] mt-[48px] mb-[16px]'>
            <h1 className='text-[37px] leading-[41px] font-extrabold text-[#35C66B]'>StarBucks</h1>
            <ul className='flex items-center gap-[94px] max-sm:hidden'>
                {menus.map(item => (
                    <Link key={item.id} className="text-[19px] leading-[23px] text-[#D9D9D9]" to={item.path}>{item.name}</Link>
                ))}
            </ul>
            <button className='sm:hidden' onClick={() => setIsModalOpen(true)}><MoreIcon/></button>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300">
                        <button className="absolute top-2 right-2" onClick={() => setIsModalOpen(false)}>
                            <img src={Close} alt="close icon" width={25} height={25}/>
                        </button>
                        <ul className='flex flex-col items-center gap-4'>
                            {menus.map(item => (
                                <Link key={item.id} className="text-[19px] leading-[23px] text-[#000]" to={item.path} onClick={() => setIsModalOpen(false)}>{item.name}</Link>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header