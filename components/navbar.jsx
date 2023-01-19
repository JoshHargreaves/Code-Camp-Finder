import React from 'react'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-200">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 className="font-bold text-3xl ">CODEcamp Finder</h1>
        </Link>

        <ul className="hidden sm:flex">
          <li className="p-4">Home</li>
          <li className="p-4">About</li>
        </ul>
        <div className="sm:block hidden z-10">
          <AiOutlineMenu size={20} />
        </div>
        <div className="sm:hidden absolute top-o left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center">
          <ul>
            <li className="p-4">Home</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar
