import NavBar from '@/components/navBar'
import CartItems from '../../components/cartItem'
import React from 'react'

export default async function page() {
  return (
    <>
      <div className='container 2xl:px-8 xl:px-4'>
        <NavBar />
        <CartItems />
      </div>
    </>
  )
}