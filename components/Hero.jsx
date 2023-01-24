import React from 'react'

const Hero = () => {
  return (
    <div className="flex justify-center mb-12">
      <div className="z-[2] mt-10" />
      <div className="p-5 z-[2]  ">
        <h2 className="text-5xl text-custom-primary font-bold"> Start your journey into computer coding</h2>
        <p className="py-5 text-custom-secondary text-xl">
          Find the best coding bootcamps suited to your needs !
        </p>
        <form className="flex items-center">   
        <label className="sr-only">Search camps, keywords, locations</label>
        <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule={"evenodd"}></path></svg>
            </div>
            <input type="text" id="camp-search" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " placeholder="Search camps, keywords, locations" required/>
        </div>
        <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-custom-background bg-custom-primary rounded-lg border border-blue-700"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
    </form>
      </div>
    </div>
  )
}

export default Hero
