'use client'
import React, { useEffect, useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

const SlideBar = () => {

    const [isMouseHovering, setisMouseHovering] = useState<boolean>(false);
    const [width, setwidth] = useState<String>('5rem');

    console.log(isMouseHovering);

    const onMouseHoverHandler = (): void => {
        if('5rem' === width){
            setwidth('19rem');
        }else{
            setwidth('5rem');
        }

        setisMouseHovering((prev) => {
            return !prev
        })
    }

    return (
        <div id='parent-nav' className={`h-[100vh] w-[${width}] transition-all duration-500 ease-in-out font-semibold text-lg shadow-slate-600 shadow-2xl relative`} onMouseLeave={onMouseHoverHandler} onMouseEnter={onMouseHoverHandler}>
            <nav>
                <ul className='flex flex-col justify-center gap-14 absolute top-12 left-7'>
                    <li className='flex gap-5 h-[2rem] hover:scale-110 transition-all duration-300 ease-in-out'>
                        <AiOutlineHome size={26} />
                        <h1 className={`${isMouseHovering ? 'opacity-1' : 'opacity-0'} transition-all duration-300 ease-in-out translate-y-1`}>Home</h1>
                    </li>
                    <li className='flex gap-5 hover:scale-110 transition-all duration-300 ease-in-out'>
                        <MdOutlineShoppingCart size={26} />
                        <h1 className={`${isMouseHovering ? 'opacity-1' : 'opacity-0'} transition-all duration-300 ease-in-out translate-y-1`}>Cart</h1>
                    </li>
                    <li className='flex gap-5 hover:scale-110 transition-all duration-300 ease-in-out'>
                        <IoBagHandleOutline className={`${isMouseHovering ? 'scale-[100rem]' : ''}`} size={24} />
                        <h1 className={`${isMouseHovering ? 'opacity-1' : 'opacity-0'} transition-all duration-300 ease-in-out translate-y-1`}>Shop</h1>
                    </li>
                    <li className='flex gap-5 hover:scale-110 transition-all duration-300 ease-in-out'>
                        <MdFavoriteBorder size={26} />
                        <h1 className={`${isMouseHovering ? 'opacity-1' : 'opacity-0'} transition-all duration-300 ease-in-out translate-y-1`}>Favorites</h1>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SlideBar