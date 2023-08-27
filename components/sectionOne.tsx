import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function sectionOne() {
    return (
        <>
            <div className='lg:flex mt-10 gap-10'>
                <div className='bg-[#262525] basis-1/4 rounded-3xl hover:shadow-2xl dark:hover:shadow-black/30'>
                        <Image className='absolute  -left-6 lg:top-[945px]' src='/Images/card1.png' alt='' width={380} height={380}></Image>
                        <div className='lg:pt-40 pt-28 lg:pb-0 pb-14 lg:pl-8 pl-4 pr-7'>
                            <p className='text-white text-xl'>Enjoy</p>
                            <h4 className='text-white text-3xl font-bold'>With</h4>
                            <h1 className='text-[#515151] text-5xl font-black'>EARPHONE</h1>
                            <Link href="/" className="mt-5 relative inline-flex items-center justify-center px-5 py-2 overflow-hidden tracking-tighter bg-red-600 rounded-full group">
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
                                <span className="relative">Browser</span>
                            </Link>
                        </div>
                    </div>
                    <div className='bg-[#FCC22C] basis-1/4 lg:mt-0 mt-8 rounded-3xl hover:shadow-2xl dark:hover:shadow-yellow-200'>
                        <Image className='absolute ml-6' src='/Images/card2.png' alt='' width={440} height={440}></Image>
                        <div className='pt-40 lg:pl-8 pl-4 pr-16'>
                            <p className='text-white text-xl'>New</p>
                            <h4 className='text-white text-3xl font-bold'>Wear</h4>
                            <h1 className='text-[#ffd76a] text-5xl font-black'>GADGEDS</h1>
                            <Link href="/" className="mt-5 relative inline-flex items-center justify-center px-5 py-2 overflow-hidden tracking-tighter text-yellow-400 bg-white rounded-full group">
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                                <span className="relative">Browser</span>
                            </Link>
                        </div>
                    </div>
                    <div className='bg-[#f42c37] basis-1/4 lg:mt-0 mt-8  rounded-3xl hover:shadow-2xl dark:hover:shadow-red-300'>
                        <div className='lg:pt-32 pt-20 lg:pl-20 pl-4 pr-96 lg:pb-0 pb-40'>
                            <p className='text-white text-xl'>Trend</p>
                            <h4 className='text-white text-3xl font-bold'>Devices</h4>
                            <h1 className='text-[#f6565f] text-6xl font-black'>LAPTOP</h1>
                            <Link href="/" className="mt-5 lg:mb-0 mb-10 relative inline-flex items-center justify-center px-5 py-2 overflow-hidden tracking-tighter text-red-500 bg-white rounded-full group">
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                                <span className="relative">Browser</span>
                            </Link>
                        </div>
                        <Image className='lg:-mt-80 -mt-80 lg:pl-[100px] pl-[100px] w-[700px]  lg:h-[400px]' src='/Images/card3.png' alt='' width={650} height={650}></Image>
                    </div>
                </div>


                <div className='lg:flex gap-10 mt-8'>
                <div className='bg-gradient-to-r from-gray-200 to-gray-100 basis-1/4  rounded-3xl hover:shadow-2xl dark:hover:shadow-gray-300'>
                        <Image className='absolute lg:ml-80 ml-28 lg:mt-16 mt-36 lg:w-auto w-[180px] lg:h-auto h-[180px]' src='/Images/card4.png' alt='' width={350} height={350}></Image>
                        <div className='lg:pt-32 pt-20 lg:pb-0 pb-10 lg:pl-20 pl-4 pr-[330px]'>
                            <p className='text-black text-xl'>Best</p>
                            <h4 className='text-black text-3xl font-bold'>Gaming</h4>
                            <h1 className='text-white text-6xl font-black'>CONSOLE</h1>
                            <Link href="/" className="mt-5  relative inline-flex items-center justify-center px-5 py-2 overflow-hidden tracking-tighter text-white bg-red-600 rounded-full group">
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                                <span className="relative">Browser</span>
                            </Link>
                        </div>
                    </div>
                    <div className='bg-[#2DD06F] lg:mt-0 mt-8  rounded-3xl hover:shadow-2xl dark:hover:shadow-green-300'>
                        <Image className='absolute mt-1.5 rounded-2xl lg:w-auto w-[303px] lg:h-auto h-[365px]' src='/Images/card--5.png' alt='' width={325} height={300}></Image>
                        <div className='pt-5 lg:pl-8 pl-4 lg:pr-[90px]'>
                            <p className='text-white text-xl'>Play</p>
                            <h4 className='text-white text-3xl font-bold'>Game</h4>
                            <h1 className='text-[#57d68b] text-5xl font-black'>OCULUS</h1>
                            <Link href="/" className="mt-5 relative inline-flex items-center justify-center px-5 py-2 overflow-hidden tracking-tighter text-green-500 bg-white rounded-full group">
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                                <span className="relative">Browser</span>
                            </Link>
                        </div>
                    </div>
                    <div className='bg-[#1478ff] " lg:mt-0 mt-8 rounded-3xl hover:shadow-2xl dark:hover:shadow-blue-300'>
                        
                        <div className='pt-5 lg:pl-8 '>
                            <p className='text-white text-xl'>New</p>
                            <h4 className='text-white text-3xl font-bold'>Amazon</h4>
                            <h1 className='text-[#1891ff] text-5xl font-black'>SPEAKER</h1>
                            <Link href="/" className="mt-5 relative inline-flex items-center justify-center px-5 py-2 overflow-hidden tracking-tighter text-blue-400 bg-white rounded-full group">
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                                <span className="relative">Browser</span>
                            </Link>
                        </div>
                        <Image className=' -mt-20 lg:ml- w-[500px] h-[300px]' src='/Images/card6.png' alt='' width={500} height={500}></Image>
                    </div>
            </div>
        </>
    )
}
