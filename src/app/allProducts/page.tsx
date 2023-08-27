import React from "react";
import FetchData from "../../../sanity/FatchData";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import NavBar from "@/components/navBar";

export default async function page() {
  const data = await FetchData();
  // console.log("data", data[0].slug);
  return (
    <>
      <div className='container 2xl:px-8 xl:px-4'>
        <NavBar />
        <div className="bg-[#E2E2E2] pt-10 pb-10">
          <div className="flex justify-center gap-5 text-lg text-gray-500">
            <Link className="no-underline hover:underline hover:underline-offset-1 hover:text-red-500" href='/'>Home</Link>
            <p>&#62;</p>
            <p>Products</p>
          </div>
          <h4 className="text-3xl pt-5 font-bold text-center">Products</h4>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 m-auto text-black mt-20 ">
          {data.map((product: any, index: number) => (
            <Link
              href={`/product/${product.slug.current}`}
              className="p-2"
              key={index}
            >
              <img
                src={urlForImage(product.image).url()}
                alt=""
                className="w-auto h-auto object-cover object-top rounded-3xl"
              />
              <h1 className="text-xl font-bold mt-2">{product.title}</h1>
              {/*<h1 className="">{product.description}</h1>
               <h1 className="text-lg font-semibold">
                Category: {product.category}
              </h1> */}
              <h1 className="text-xl font-semibold">${product.price}</h1>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}