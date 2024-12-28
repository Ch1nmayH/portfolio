import React from 'react'

const SubSkills = ({skill}) => {
  return (
    <div className="inline-flex justify-between flex-wrap bg-white w-auto rounded-3xl p-2 w-fit ml-[20px] mt-2">
    <span className="font-medium text-gray-700 text-sm ml-1 mr-1">{skill}</span>
  </div>
  )
}

export default SubSkills