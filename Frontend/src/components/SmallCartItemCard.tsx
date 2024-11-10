import React from 'react'

const SmallCartItemCard = ({image}) => {
  return (
    <div className='bg-zinc-900 flex flex-col gap-5 items-center w-[83vw] min-h-[50vh] rounded-lg overflow-hidden'>
      <div className='w-full h-auto border-b-2 border-zinc-700'>
        <img className='w-full h-auto object-cover' src={`${image}`} alt="" />
      </div>
      <div className='w-full flex flex-col gap-7 px-5 font-semibold'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-lg break-words'>Nike Jordans</h1>
          <h1 className='text-sm'>Product id: 904234</h1>
        </div>
        <div className='flex justify-between mx-4'>
          <div className='flex flex-col gap-2'>
            <h1 className=''>Total Price</h1>
            <div className='flex gap-2'>
              <h1>$</h1>
              <h1>34244</h1>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-center'>Quantity</h1>
            <div className='flex gap-6'>
              <div>+</div>
              <h1>1</h1>
              <div>-</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center gap-4 mb-6'>
          <button className='bg-teal-500 w-[18rem] p-2 rounded-lg text-center'>Buy Now</button>
          <button className='bg-red-500 w-[18rem] p-2 rounded-lg text-center'>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default SmallCartItemCard