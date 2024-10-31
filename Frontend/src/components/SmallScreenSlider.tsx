import React from 'react'

const SmallScreenSlider = () => {
    return (
        <div className=''>
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