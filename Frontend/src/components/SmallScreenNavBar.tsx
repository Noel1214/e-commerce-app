'use client'
import React, { useState } from 'react'
import SmallScreenSlider from './SmallScreenSlider'
import { IoMenu } from "react-icons/io5";

const SmallScreenNavBar = () => {

    const [showSlideBar, setshowSlideBar] = useState(false);
    console.log(showSlideBar);

    const toggleShowSlideBar = () => {
        setshowSlideBar((prev) => !prev)

    }

    return (
        <div className='relative'>
            <div className=''>
                <div className='h-[6rem] border-b-[1px] flex items-center'>
                    <div className='w-full mx-4 flex justify-between items-center'>
                        <h1 className=' text-[2.2rem] text-pink-700 font-bold font-sans'>Ecommer</h1>
                        <div className='' onClick={toggleShowSlideBar}>
                            <IoMenu size={36} />
                        </div>
                    </div>
                </div>

            </div>
            <div className={`absolute h-screen w-screen top-0 left-0 transition-all ease-in-out duration-700 -translate-x-[26rem] ${showSlideBar ? "translate-x-0" : ""}`} style={{ willChange: "transform" }}>
                <SmallScreenSlider setshowSlideBar={setshowSlideBar} />
            </div>
        </div>
    )
}

export default SmallScreenNavBar