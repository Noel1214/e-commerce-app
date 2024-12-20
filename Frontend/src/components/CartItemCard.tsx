import React from 'react'
import SmallCartItemCard from './SmallCartItemCard'

const CartItemCard = ({ image }: any) => {
    return (
        <>
        {/* For Large Screens */}
            <div className='hidden sm:flex bg-zinc-900 w-[68vw] rounded-lg overflow-hidden'>
                <div className='flex'>
                    <div className='border-r-2 border-zinc-700'>
                        <img className='h-[13rem] w-[16vw] object-cover shrink-0' src={`${image}`} alt="" />
                    </div>
                    <div className='flex justify-between gap-10 mx-3 mt-10 w-[45vw]'>
                        <div className='w-[10rem] overflow-hidden flex flex-col items-center gap-3 text-center'>
                            <div>
                                <h1 className='text-xl'>Nike</h1>
                            </div>
                            <div>
                                <h1 className='text-xs'>Product id:</h1>
                                <h1 className='text-sm'>3948238</h1>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <h1>Quantity</h1>
                            <div className='flex flex-col items-center'>
                                <button>+</button>
                                <h1>1</h1>
                                <button>-</button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 items-center'>
                            <h1 className=''>Total Price</h1>
                            <div className='flex gap-1'>
                                <h1>$</h1>
                                <h1>8274</h1>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <button className='bg-teal-500 p-2 rounded-lg text-center'>Buy Now</button>
                            <button className='bg-red-500 p-2 rounded-lg text-center'>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='block sm:hidden overflow-x mb-12'>
                <SmallCartItemCard image={image} />
            </div>
        </>
    )
}

export default CartItemCard