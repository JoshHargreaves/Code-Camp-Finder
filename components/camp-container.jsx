import React from 'react'

const CampContainer = () => {
  return (
<div className="flex justify-center  text-custom-background">
  <div className="flex flex-col md:flex-row w-full  border bg-custom-primary rounded-lg m-4  shadow-lg">
    <div className="p-6 flex flex-col justify-start">
      <h5 className=" text-xl font-medium mb-2">Camp Name</h5>
      <p className="text-base mb-4">
        Description of camp
      </p>
      <p className=" text-xs mb-2">Python Html Css</p>
      <p className=" text-xs">Last updated 3 mins ago</p>
    </div>
  </div>
</div>
  )
}

export default CampContainer
