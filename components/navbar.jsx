import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="w-full z-10 ease-in duration-200">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 ">
        <Link href="/">
          <h1 className="font-bold text-3xl  text-custom-primary ">CODEcamp Finder</h1>
        </Link>
      </div>
    </div>
  )
}
export default Navbar
