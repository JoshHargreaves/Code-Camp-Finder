import React from 'react'

const Tag = ({name}) => {
    return (
  <span
    className="px-2 py-1 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
    {name}
  </span>
    )
}

export default Tag;