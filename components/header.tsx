import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function header() {
    return (
        <>
            <div className='bg-gradient-to-r from-[#CFCFCF] to-gray-100 rounded-[30px] lg:pb-36 pb-10 '>
                <Image className='absolute ' src='/images/headerImg.png' alt='' width={1400} height={1400}></Image>
                <div className='lg:pl-20  pl-5 lg:pt-48 pt-16'>
                    <span className='lg:text-3xl font-semibold'>Beats Solo</span>
                    <h1 className=' lg:text-7xl text-3xl font-extrabold w-[800px] space-y-14'>Wireless</h1>
                    <h1 className='lg:text-[200px] text-[43px] text-white  font-extrabold'>HEADPHONE</h1>
                    <Link href="/" className="relative inline-flex items-center justify-center lg:px-10 px-6 lg:py-4 py-2 overflow-hidden tracking-tighter text-white bg-red-600 rounded-full group">
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="relative">Shop by Category</span>
                    </Link>
                </div>
                <div className='-[290px] 2xl:ml-[1100px] mr-20 xl:text-right'>
                    <p className='lg:flex  hidden justify-end font-semibold '>Description</p>
                    <p className='lg:flex hidden 2xl:pl-0 pl-[890px] justify-end -right text-gray-400'>There are many variations passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                </div>
            </div>
        </>
    )
}
