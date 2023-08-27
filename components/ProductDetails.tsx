"use client";
import React, { useState } from "react";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";
import NavBar from "./navBar";
import { useAuth } from "@clerk/nextjs";

export default function ProductDetails({
    filteredData,
}: {
    filteredData: any;
}) {
    const {userId} = useAuth()
    console.log('UserID',userId)
    const [quantity, setQuantity] = useState(1);

    // console.log("filteredData", filteredData);

    function handleIncrement() {
        setQuantity(quantity + 1);
    }
    function handleDecrement() {
        setQuantity(quantity - 1);
    }

    async function handleAddToCart() {
        try {
            const res = await fetch("/api/cart", {
                method: "POST",
                body: JSON.stringify({
                    user_id: userId,
                    product_id: filteredData._id,
                    product_title: filteredData.title,
                    product_price: filteredData.price * quantity,
                    product_quantity: quantity,
                    image_url: urlForImage(filteredData.image).url(),
                }),
            });
        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <>
            <div className='container 2xl:px-8 xl:px-4'>
                <NavBar />
                <Link href='/allProducts'>
                    <div className="flex gap-1 ml-2">
                        <svg width="20" height="16" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.3803 10.8224C25.3803 11.2202 25.2223 11.6018 24.941 11.8831C24.6597 12.1644 24.2782 12.3224 23.8803 12.3224H5.50533L11.9453 18.7611C12.2271 19.0429 12.3854 19.4251 12.3854 19.8236C12.3854 20.2222 12.2271 20.6044 11.9453 20.8861C11.6635 21.1679 11.2813 21.3263 10.8828 21.3263C10.4843 21.3263 10.1021 21.1679 9.82033 20.8861L0.820333 11.8861C0.680493 11.7468 0.569538 11.5812 0.49383 11.3989C0.418122 11.2165 0.37915 11.0211 0.37915 10.8236C0.37915 10.6262 0.418122 10.4307 0.49383 10.2484C0.569538 10.0661 0.680493 9.9005 0.820333 9.76115L9.82033 0.761147C9.95986 0.621617 10.1255 0.510936 10.3078 0.435423C10.4901 0.359911 10.6855 0.321045 10.8828 0.321045C11.0802 0.321045 11.2756 0.359911 11.4579 0.435423C11.6402 0.510936 11.8058 0.621617 11.9453 0.761147C12.0849 0.900676 12.1955 1.06632 12.2711 1.24863C12.3466 1.43093 12.3854 1.62632 12.3854 1.82365C12.3854 2.02097 12.3466 2.21636 12.2711 2.39867C12.1955 2.58097 12.0849 2.74662 11.9453 2.88615L5.50533 9.3224H23.8803C24.2782 9.3224 24.6597 9.48043 24.941 9.76174C25.2223 10.043 25.3803 10.4246 25.3803 10.8224Z" fill="black" />
                        </svg>
                        <p className="-mt-1">Back</p>
                    </div>
                </Link>
                <div className="xl:flex gap-10 mt-10 pb-20 border-b">
                    <img
                        src={urlForImage(filteredData.image).url()}
                        alt=""
                        className="lg:w-[900px] lg:h-[700px] mx-auto object-cover object-top rounded-[50px]"
                    />
                    <div className="mt-20 xl:px-0 lg:px- px-3">
                        <h1 className="text-5xl font-extrabold">{filteredData.title}</h1>
                        <div className="flex items-center mt-10">
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>
                        <h1 className="pt-5 text-3xl font-bold">${filteredData.price}</h1>
                        <h1 className="text-md text-justify prose prose-sm  pt-10 text-gray-400">{filteredData.description}</h1>
                        <div className="flex border w-fit mt-5">
                            <button
                                onClick={() => handleDecrement()}
                                disabled={quantity === 1}
                                className={`px-3 py-1 text-center hover:bg-gray-200`}
                            >
                                -
                            </button>
                            <div className="px-3 py-1 text-center">{quantity}</div>
                            <button
                                onClick={() => handleIncrement()}
                                className={`px-3 py-1 text-center hover:bg-gray-200`}
                            >
                                +
                            </button>
                        </div>
                        <Link href="#" onClick={handleAddToCart} className="mt-10 relative inline-flex items-center justify-center lg:px-16 px-6 lg:py-4 py-2 overflow-hidden tracking-tighter text-white bg-red-600 rounded-full group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative">Add to Cart</span>
                        </Link>
                        <button
                            onClick={handleAddToCart}
                            className={`w-full overflow-hidden group text-center border border-black py-3 mt-5 text-lg font-bold flex items-center`}
                        >
                            <p className="flex-grow">Add to Cart</p>
                        </button>
                        <h1 className="text-red-500 pt-10">Category: {filteredData.category}</h1>
                    </div>
                </div>
                <div className="mt-10">
                </div>
            </div>
        </>
    );
}