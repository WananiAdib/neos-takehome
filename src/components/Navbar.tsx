import React from 'react'

export default function Navbar() {
  return (
    <div className='flex flex-row justify-between py-[40px] w-full items-center'>
      <div className='h-[28px] w-[100px]'>
        <img src='/neos_logo.png' alt='neon logo' className='object-cover' />
      </div>
      <div className='flex flex-row gap-[32px] items-center text-[20px] font-bold'>
        <div className='text-white'>
          FAQ
        </div>
        <div className='bg-white rounded-lg text-black px-[16px] py-[10px]'>
          English
        </div>
      </div>
    </div>
  )
}
