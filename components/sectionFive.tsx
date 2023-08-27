import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function sectionFive() {
    return (
        <>

            <div className='bg-[#2dcc6e] lg:mt-60 mt-36 rounded-[30px]'>
                <div className='lg:flex justify-around text-white pt-20 lg:pb-20 pb-10 mx-5 lg:text-left text-center'>
                    <div>
                        <p>20 % OFF</p>
                        <h1 className='lg:text-9xl text-5xl font-black lg:w-80'>HAPPY HOURSE</h1>
                        <p>7 Augest to 8 September</p>

                    </div>
                    <Image className='absolute lg:-mt-40 -mt-[400px] lg:mr-72' src='/Images/bg3head.png' alt='' width={700} height={700}></Image>
                    <div className='mt-10'>
                        <p className='font-bold'>Beats Solo Air</p>
                        <h1 className='text-5xl font-extrabold pt-3'>Summer Sales</h1>
                        <p className='lg:w-80 pt-3'>Company that&apos;s grown from 270 to 480 employes in the last 12 months.</p>
                        <Link href="/" className="mt-10 relative inline-flex items-center justify-center px-8 py-2 overflow-hidden tracking-tighter text-green-500 bg-white rounded-full group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative">Shop</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
