"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import AllProducts from '../app/allProducts/page'
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";


export default function NavBar() {
  const { isSignedIn } = useAuth();
  return (
    <>
      <div>
        <div className='flex justify-between px-2 mt-8 pb-8'>
          <div className=''>
            <Link href='/'><Image src='/images/logotype.png' alt='' width={120} height={120} /></Link>
          </div>
          <div className='text-md space-x-10 tracking-wide 2xl:mr-[700px] lg:flex hidden'>
            <Link className='text-gray-400 hover:text-black' href=''>Headphones</Link>
            <Link className='text-gray-400 hover:text-black' href=''>SmartWatches</Link>
            <Link className='text-gray-400 hover:text-black' href=''>Laptop</Link>
            <Link className='text-gray-400 hover:text-black' href='/allProducts'>All Products</Link>
          </div>
          <div className='flex gap-4'>
            <div className="flex justify-between">
              {!isSignedIn && (
                <SignInButton mode="modal">
                  <div className='text-gray-400 hover:text-black'><BsPerson size={30} /></div>
                </SignInButton>
              )}
              <UserButton afterSignOutUrl="/" />
            </div>
            {/* <div className='text-gray-400 hover:text-black'><BsPerson size={30} /></div> */}
            <div className='text-gray-400 hover:text-black'><AiOutlineShoppingCart size={30} /></div>
          </div>
        </div>
      </div>
    </>
  )
}
