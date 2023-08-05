"use client"
import type { RootState } from '@/store/store';
import { useSelector } from 'react-redux'
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { useState } from "react";


function Navbar() {
    const [nav, setNav] = useState(true);
    const cartValue = useSelector((state: RootState) => state.cart.totalQuantity)
    return <div>
        <div className="flex gap-x-10 md:justify-evenly justify-between px-5 md:px-0 items-center mt-8">
            {/* Logo */}
            <div className="flex items-center z-10">
                <Link href={"/"}>
                    <Image src={"/Logo.webp"} alt="Logo" width={150} height={150} />
                </Link>
            </div>


            {/* Links */}
            <div className="space-x-14 font-semibold md:flex items-center hidden">
                <Link href="/female">Female</Link>
                <Link href="/male">Male</Link>
                <Link href="/kid">Kids</Link>
                <Link href="/allProducts">All Products</Link>
            </div>

            {/* Searchbar */}
            <div className="md:flex items-center border rounded-md hidden">
                <CiSearch className="text-2xl" />
                <input type="text" placeholder="What you looking for" size={35} className=" px-2 py-2" />
            </div>

            {/* Cart Icon */}
            <Link href={"/cart"}>
                <div className="bg-[#f1f1f1] rounded-full md:flex items-center p-3 text-2xl hidden relative">
                    <div className="absolute text-sm top-0 right-2 bg-red-500 rounded-full px-1 text-white">{cartValue}</div>
                    <AiOutlineShoppingCart />
                </div>
            </Link>

            {/* For Mobile View */}
            {/* Hamburger menu */}
            <div className="md:hidden text-2xl z-10" onClick={() => {
                setNav(!nav)
            }}>
                {nav ? <GiHamburgerMenu /> : <ImCross />}
            </div>

            {/* Overlay */}
            {!nav ?
                <div className="md:hidden fixed top-0 left-0  h-[100%] w-full flex justify-center items-center flex-col-reverse leading-8 bg-white">
                    {/* Links */}
                    <Link href="/allProducts">All Products</Link>
                    <Link href="/kid">Kids</Link>
                    <Link href="/male">Male</Link>
                    <Link href="/female">Female</Link>

                    {/* Cart Icon */}
                    <Link href={"/cart"}>
                        <div className='relative'>
                            <AiOutlineShoppingCart className="bg-[#f1f1f1] rounded-full p-2 text-4xl" />
                            <div className="absolute text-sm -top-1 right-1 bg-red-500 rounded-full px-1 text-white">{cartValue}</div>
                        </div>
                    </Link>
                </div>
                : null}
        </div>
    </div>;
}

export default Navbar;