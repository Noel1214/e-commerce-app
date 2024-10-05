'use client'
import React, { useEffect, useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { CiUser } from "react-icons/ci";


const SlideBar = () => {

    const [isMouseHovering, setisMouseHovering] = useState<boolean>(false);

    const onMouseHoverHandler = (isHovering: boolean): void => {

        setisMouseHovering(isHovering)
    }

    return (
        <div id='parent-nav' className={`bg-black text-white h-[100vh] w-[5rem] hover:w-[19rem] transition-all duration-500 ease-in-out shadow-slate-800 shadow-2xl font-semibold text-lg`} onMouseLeave={() => onMouseHoverHandler(false)} onMouseEnter={() => onMouseHoverHandler(true)}>
            <nav className=''>
                <ul className='flex flex-col justify-center gap-14 absolute top-12 left-7'>
                    <li className='flex gap-5 h-[2rem] hover:scale-110 transition-all duration-300 ease-in-out'>
                        <AiOutlineHome size={26} />
                        <h1 className={`${isMouseHovering ? 'opacity-1 transition-all duration-500 ease-in' : 'opacity-0 transition-none'} translate-y-1`}>Home</h1>
                    </li>
                    <li className='flex gap-5 hover:scale-110 transition-all duration-300 ease-in-out'>
                        <MdOutlineShoppingCart size={26} />
                        <h1 className={`${isMouseHovering ? 'opacity-1 transition-all duration-500 ease-in' : 'opacity-0'} translate-y-1`}>Cart</h1>
                    </li>
                    <li className='flex gap-5 hover:scale-110 transition-all duration-300 ease-in-out'>
                        <IoBagHandleOutline className={`${isMouseHovering ? 'scale-[100rem]' : ''}`} size={24} />
                        <h1 className={`${isMouseHovering ? 'opacity-1 transition-all duration-500 ease-in' : 'opacity-0'} translate-y-1`}>Shop</h1>
                    </li>
                    <li className='flex gap-5 hover:scale-110 transition-all duration-300 ease-in-out'>
                        <MdFavoriteBorder size={26} />
                        <h1 className={`${isMouseHovering ? 'opacity-1 transition-all duration-500 ease-in' : 'opacity-0'} translate-y-1`}>Favorites</h1>
                    </li>
                    <li className='flex gap-5 hover:scale-110 transition-all duration-300 ease-in-out relative top-[12rem]'>
                        <CiUser size={26} />
                        <h1 className={`${isMouseHovering ? 'opacity-1 transition-all duration-500 ease-in' : 'opacity-0'} translate-`}>Account</h1>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SlideBar