import React from 'react'
import { IoClose } from "react-icons/io5";

const SmallScreenSlider = ({ setshowSlideBar }) => {

    const toggleShowSlideBar = () => {
        setshowSlideBar((prev: boolean) => !prev);
    }

    return (
        <div className='relative'>
            <div className='absolute top-[1.6rem] right-[1.5rem]' onClick={toggleShowSlideBar}>
                <IoClose size={35} />
            </div>
            <nav className='h-screen w-screen bg-black flex justify-center'>
                <ul className='text-3xl mt-[9rem] flex flex-col gap-5'>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Shop</li>
                    <li>Favorites</li>
                    <li>Account</li>
                </ul>
            </nav>
        </div>
    )
}

export default SmallScreenSlider