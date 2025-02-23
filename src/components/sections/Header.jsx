import React, { useState } from "react"
import { Link } from "react-router-dom"
import { MoreIcon } from "../../../public/icons/Icons"
import Close from "../../../public/icons/close-svgrepo-com.svg"

const Header = () => {
    const menus = [
        { id: 1, name: "Pricing", path: "#" },
        { id: 2, name: "About", path: "#" },
        { id: 3, name: "Contact", path: "#" },
    ]

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <header className="flex items-center justify-between px-6 py-4">
            <h1 className="text-[37px] font-extrabold text-[#35C66B]">StarBucks</h1>
            <button className="sm:hidden" onClick={() => setIsModalOpen(true)}><MoreIcon /></button>
            <div className={`fixed inset-0 bg-opacity-50 z-50 transition-opacity duration-300 ${isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsModalOpen(false)}></div>
            <div className={`fixed top-0 right-0 h-full w-64 bg-[#1F2937] text-white shadow-lg p-6 transform transition-transform duration-300 ${isModalOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setIsModalOpen(false)}>
                    <img src={Close} alt="close" width={20} height={20} />
                </button>
                <ul className="flex flex-col items-center gap-6 mt-10">
                    {menus.map((item) => (
                        <Link key={item.id} to={item.path} className="text-lg font-medium text-gray-300 hover:text-white transition" onClick={() => setIsModalOpen(false)}>{item.name}</Link>
                    ))}
                </ul>
                <div classNam="mt-6 flex justify-center">
                    <button className="px-5 py-2 bg-[#D43F6D] text-white rounded-full text-lg font-semibold hover:bg-[#C23460] transition">
                        Schedule a Demo
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header