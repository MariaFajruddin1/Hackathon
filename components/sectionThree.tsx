import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function sectionThree() {
    return (
        <>
            <Image className='absolute' src='/Images/bg2head.png' alt='' width={1200} height={1200}></Image>
            <div className='bg-[#f42c37] lg:mt-60 mt-28 rounded-[30px]'>
                <div className='lg:flex justify-around text-white lg:pt-28 pt-16 lg:pb-20 pb-5 lg:text-left text-center'>
                    <div>
                        <p>20 % OFF</p>
                        <h1 className='lg:text-9xl text-5xl font-extrabold w-80'>FINE SALES</h1>
                        <p>7 Augest to 8 September</p>
                    </div>
                    <div className='mt-10'>
                        <p className='font-bold'>Beats Solo Air</p>
                        <h1 className='lg:text-5xl text-4xl font-extrabold pt-3'>Summer Sales</h1>
                        <p className='lg:text-md text-sm w-80 pt-3'>Company that&apos;s grown from 270 to 480 employes in the last 12 months.</p>
                        <Link href="/" className="mt-10 relative inline-flex items-center justify-center px-8 py-2 overflow-hidden tracking-tighter text-red-400 bg-white rounded-full group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative">Shop</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
