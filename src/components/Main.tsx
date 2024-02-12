import React from 'react'

export default function Main() {
  return (
    <div className='bg-white rounded-[24px] p-[36px]'>
      {/* Process steps */}
      <div className='flex flex-row justify-between gap-[6px] max-w-[630px] m-auto'>
        <div className='flex gap-[10px] items-center'>
          <div className='flex w-[34px] h-[34px] rounded-full bg-secondary justify-center items-center text-white'>1</div>
          <p>Receive offer</p>
        </div>
        <div className='h-[2px] bg-secondary grow m-auto '/>
        <div className='flex gap-[10px] items-center'>
          <div className='flex w-[34px] h-[34px] rounded-full bg-secondary justify-center items-center text-white'>2</div>
          <p>Receive offer</p>
        </div>
        <div className='h-[2px] bg-gray-400 grow  m-auto '/>
        <div className='flex gap-[10px] items-center'>
          <div className='flex w-[34px] h-[34px] rounded-full bg-gray-400 justify-center items-center text-white'>3</div>
          <p>Enjoy Solar</p>
        </div>
      </div>
      <div className='flex' >
        <div className='w-full'>
        <h1 className='text-[30px] font-bold'>Your Details</h1>


        </div>
        <div className='w-full'>
          <img src='/solar_panels.png' alt='solar panel' className='w-full' />
          <p>Price to Pay: €3,600.00</p>
        </div>
      </div>
    </div>
  )
}
