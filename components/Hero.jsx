import React from 'react'

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover home-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] ml[-10rem] mt-[-10rem]">
        <h2 className="text-5xl font-bold"> Code Camp Finder</h2>
        <p className="py-5 text-xl">
          Find the best coding bootcamps suited to your needs !
        </p>
        <button className="px-8 py-2 border"> Find Camps now</button>
      </div>
    </div>
  )
}

export default Hero
