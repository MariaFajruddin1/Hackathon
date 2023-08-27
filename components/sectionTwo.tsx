import Image from 'next/image'
import React from 'react'

export default function sectionTwo() {
    return (
        <>
            <div className='mt-20  lg:ml-20 ml-0'>
                <div className='grid lg:grid-cols-4 grid-cols-2'>
                    <div className='lg:flex gap-7 lg:ml-0 ml-3'>
                        <Image className='w-16 h-10 lg:mx-0 mx-auto' src='/images/l1.png' alt='' width={50} height={50}></Image>
                        <div className=''>
                            <h4 className='lg:font-extrabold font-bold lg:pt-0 pt-2 lg:text-lg text-sm'>Free Shipping</h4>
                            <p className='lg:text-[15px] text-[12px]'>Free Shipping On All Order</p>
                        </div>
                    </div>
                    <div className='lg:flex gap-5 lg:ml-0 ml-3'>
                        <Image className='w-12 h-11 lg:mx-0 mx-auto' src='/images/l2.png' alt='' width={50} height={50}></Image>
                        <div className=''>
                            <h4 className='lg:font-extrabold font-bold lg:pt-0 pt-2 lg:text-lg text-sm'>Money Guarantee</h4>
                            <p className='lg:text-[15px] text-[12px]'>30 Day Money Back</p>
                        </div>
                    </div>
                    <div className='lg:flex gap-5 lg:ml-0 ml-3'>
                        <Image className='w-12 h-10 lg:mx-0 mx-auto' src='/images/l3.png' alt='' width={50} height={50}></Image>
                        <div className=''>
                            <h4 className='lg:font-extrabold font-bold lg:pt-0 pt-2 lg:text-lg text-sm'>Online Support 24/7</h4>
                            <p className='lg:text-[15px] text-[12px]'>Technical Support 24/7</p>
                        </div>
                    </div>
                    <div className='lg:flex gap-5 lg:ml-0 ml-3'>
                        <Image className='w-12 h-10 lg:mx-0 mx-auto' src='/images/l4.png' alt='' width={50} height={50}></Image>
                        <div className=''>
                            <h4 className='lg:font-extrabold font-bold lg:pt-0 pt-2 lg:text-lg text-sm'>Secure Payment</h4>
                            <p className='lg:text-[15px] text-[12px]'>All Cards Accepted</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
