import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function footer() {
    return (
        <>
            {/* <div className='flex justify-between'>
                <div>
                    <Image src='/images/logotype.png' alt='' width={120} height={120} />
                    <p>There are many variations passages of Lorem Ipsum available, but the majority have</p>
                </div>
                
            </div> */}

            <div className=" container md:w-2/3 xl:w-auto mx-auto  flex flex-col xl:items-stretch justify-between xl:flex-row">
                <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
                    <img src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png" alt="Envelope with a newsletter" role="img" className="h-full xl:w-full lg:w-1/2 w-full " />
                </div>
                <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">Subscribe</h1>
                    <p className="text-base leading-normal text-gray-600 text-center xl:text-left">Whether article spirits new her covered hastily sitting her. Money witty books nor son add.</p>
                    <div className="flex items-stretch mt-12">
                        <input className="bg-gray-100 rounded-full rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
                        <Link href="/" className=" relative inline-flex items-center justify-center px-10 py-6 overflow-hidden tracking-tighter text-white bg-red-600 rounded-l-none rounded-full group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-l-none rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative">Subscribe</span>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="relative mt-16 ">
                <div className="pt-12 lg:mx-8">
                    <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                        <div className="md:max-w-md lg:col-span-2">
                            <Image src='/images/logotype.png' alt='' width={120} height={120} />
                            <div className="mt-10 lg:pr-28">
                                <p className="text-md text-gray-500">
                                    There are many variations passages of Lorem Ipsum available, but the majority have
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                            <div>
                                <p className="font-semibold tracking-wide text-teal-accent-400">
                                    All Product
                                </p>
                                <ul className="mt-4 space-y-2">
                                    <li><a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-red-600">HeadPhones</a></li>
                                    <li><a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-red-600">EarPhones</a></li>
                                    <li><a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-red-600">Laptop</a></li>
                                    <li><a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-red-600">SmartWatch</a></li>
                                    <li><a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-red-600">Meta Oculus</a></li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold tracking-wide text-teal-accent-400">
                                    Contact
                                </p>
                                <ul className="mt-2 space-y-2">
                                    <li><a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-red-600">123-456-789</a></li>
                                    <li><a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-red-600">Karachi,Pakistan</a></li>
                                    <li><a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-red-600">Whatsapp</a></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
                        <p className="text-gray-500">
                            © Copyright 2023 PHLOX.
                        </p>
                        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                            <a href="/" className="transition-colors duration-300 text-deep-purple-100 hover:text-red-600">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                </svg>
                            </a>
                            <a href="/" className="transition-colors duration-300 text-deep-purple-100 hover:text-red-600">
                                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                    <circle cx="15" cy="15" r="4" />
                                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                                </svg>
                            </a>
                            <a href="/" className="transition-colors duration-300 text-deep-purple-100 hover:text-red-600">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
