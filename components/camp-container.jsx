import React from 'react';
import Tag from './tags/tag';

const CampContainer = () => {
  return (
    <div className="flex justify-center  text-custom-background">
      <div className="flex flex-col md:flex-row w-full  border bg-custom-primary rounded-lg mt-4 mx-4 shadow-lg">
        <div className="p-5 flex flex-col justify-start">
          <h5 className="text-xl font-medium mb-1">Camp Name</h5>
          <div className='my-2 flex flex-wrap space-x-2'>
            <Tag name={'Python'} ></Tag>
            <Tag name={'HTML'} ></Tag>
            <Tag name={'CSS'} ></Tag>
          </div>
          <p className="text-base ">
            This is a description of a coding camp . We teach you to code in 2
            weeks
          </p>
          <a
            href=""
            className="bg-custom-four hover:bg-custom-four text-center text-white mt-5 font-bold py-2 px-4 rounded"
          >
            View more info
          </a>
        </div>
        <div className="px-6 pb-2 flex flex-col justify-start">
          <p className=" text-xs">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  )
}

export default CampContainer
