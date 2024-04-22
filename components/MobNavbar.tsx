import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import {FaHeart  } 
from "react-icons/fa";

const MobNavbar = () => {
  return (
    <div className='lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8'>
<div className='flex justify-between text-[28px] py-2 '><IoMdMenu />

<div className='relative'>
        <HiOutlineShoppingBag />
        <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1'>8</div>
        </div>

        <IoHome />

        <div className='relative'>
        <FaHeart />
        <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1'>10</div>
        </div>


</div>
    </div>
  )
}

export default MobNavbar
