import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function sectionFour() {
    return (
        <>
            <div className='mt-20'>
                <h1 className='text-center lg:text-5xl text-4xl font-extrabold'>Best Seller Products</h1>
                <p className='text-center lg:text-lg  pt-5 text-gray-500'>speakerThere are many variations passages</p>
                <div className='grid lg:grid-cols-4 justify-between mt-10 '>
                    <div className='lg:mt-0 mt-10'>
                        <div className="image"></div>
                            <h4 className='text-lg font-medium pt-2 '>Wireless Headphones</h4>
                            <p className='text-xl font-bold pt-2'>$124.88</p>
                        {/* <Link href="/" className="mt-3 relative inline-flex items-center justify-center px-5 py-2 overflow-hidden tracking-tighter text-white bg-red-500 rounded-full group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative">Add to Card</span>
                        </Link> */}
                    </div>
                    <div className='lg:mt-0 mt-10'>
                        <div className="image2"></div>
                            <h4 className='text-lg font-medium pt-2 '>Audio Headphone</h4>
                            <p className='text-xl font-bold pt-2'>$169.00</p>
                        {/* <Link href="/" className="mt-3 relative inline-flex items-center justify-center px-5 py-2 overflow-hidden tracking-tighter text-white bg-red-500 rounded-full group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative">Add to Card</span>
                        </Link> */}
                    </div>
                    <div className='lg:mt-0 mt-10'>
                        <div className="image3"></div>
                            <h4 className='text-lg font-medium pt-2 '>MacBook Pro</h4>
                            <p className='text-xl font-bold pt-2'>$840.00</p>
                        {/* <Link href="/" className="mt-3 relative inline-flex items-center justify-center px-5 py-2 overflow-hidden tracking-tighter text-white bg-red-500 rounded-full group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative">Add to Card</span>
                        </Link> */}
                    </div>
                    <div className='lg:mt-0 mt-10'>
                        <div className="image4"></div>
                            <h4 className='text-lg font-medium pt-2 '>Lenovo Laptop</h4>
                            <p className='text-xl font-bold pt-2'>$185.99</p>
                        {/* <Link href="/" className="mt-3 relative inline-flex items-center justify-center px-5 py-2 overflow-hidden tracking-tighter text-white bg-red-500 rounded-full group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative">Add to Card</span>
                        </Link> */}
                    </div>
                </div>


                <div className='grid lg:grid-cols-4 justify-around mt-10'>
                    <div className='lg:mt-0 mt-10'>
                        <div className="image5"></div>
                            <h4 className='text-lg font-medium pt-2 '>Amazfit SmartWatch</h4>
                            <p className='text-xl font-bold pt-2'>$69.99</p>
                        {/* <Link href="/" className="mt-3 relative inline-flex items-center justify-center px-5 py-2 overflow-hidden tracking-tighter text-white bg-red-500 rounded-full group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative">Add to Card</span>
                        </Link> */}
                    </div>
                    <div className='lg:mt-0 mt-10'>
                        <div className="image6"></div>
                            <h4 className='text-lg font-medium pt-2 '>Fitbit Smartwatch</h4>
                            <p className='text-xl font-bold pt-2'>$199.95</p>
                        {/* <Link href="/" className="mt-3 relative inline-flex items-center justify-center px-5 py-2 overflow-hidden tracking-tighter text-white bg-red-500 rounded-full group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative">Add to Card</span>
                        </Link> */}
                    </div>
                    <div className='lg:mt-0 mt-10'>
                        <div className="image7"></div>
                            <h4 className='text-lg font-medium pt-2 '>Meta Quest</h4>
                            <p className='text-xl font-bold pt-2'>$299.00</p>
                        {/* <Link href="/" className="mt-3 relative inline-flex items-center justify-center px-5 py-2 overflow-hidden tracking-tighter text-white bg-red-500 rounded-full group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative">Add to Card</span>
                        </Link> */}
                    </div>
                    <div className='lg:mt-0 mt-10'>
                        <div className="image8"></div>
                            <h4 className='text-lg font-medium pt-2 '>Bluetooth</h4>
                            <p className='text-xl font-bold pt-2'> $109.99</p>
                        {/* <Link href="/" className="mt-3 relative inline-flex items-center justify-center px-5 py-2 overflow-hidden tracking-tighter text-white bg-red-500 rounded-full group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative">Add to Card</span>
                        </Link> */}
                    </div>
                </div>
            </div>
        </>
    )
}


{/* Wireless Bluetooth Headphones === AmazonCommercial Wireless Noise Cancelling Bluetooth Commuter Headphones   ==>$124.88
    Audio-Technica  === Audio-Technica ATH-M50xBT2DS Wireless Headphone, Deep Sea  ===>$169.00
    Lenovo 14" Laptop === Lenovo Premium 14" Laptop, Intel Pentium Processor Up to 3.0GHz, 4GB Memory, 256GB SSD, Super-Fast WiFi, HDMI, Windows 11 (Renewed) (Gray)  ===>$185.99
    MacBook Pro 16-inch === Late 2019 Apple MacBook Pro with 2.6GHz Intel Core i7 (16-Inch, 16GB RAM, 512GB Storage) - Silver (Renewed)   ===> 	$840.00
    Fitbit Versa === Fitbit Versa 4 Fitness Smartwatch with Daily Readiness, GPS, 24/7 Heart Rate, 40+ Exercise Modes, Sleep Tracking and more, Black/Graphite, One Size (S & L Bands Included)   ===>$199.95
    Amazfit Bip U Pro Smart Watch for Women, Alexa Built-In, Health & Fitness Tracker with GPS, 60+ Sport Modes, Blood Oxygen Heart Rate Sleep Monitor, 5 ATM Water Resistant, for iPhone Android(Pink)   ====>$69.99
*/}