import React from 'react'


const SkillCard = ({skill}) => {
  return (
    <div className="bg-gray-100 lg:w-[31%] md:w-[45%] sm:w-[98%] m-2 rounded-lg p-2">
    <p className="font-normal text-left ml-5 p-3">
      <span>
        {skill.icon}
      </span>{" "}
      {skill.title}
    </p>
    {skill.skills.map((skill) => (
    <div className="inline-flex justify-between flex-wrap bg-white w-auto rounded-3xl p-2 w-fit ml-[20px] mt-2">
      <span className="font-medium text-gray-700 text-sm ml-1 mr-1">{skill}</span>
    </div>
    ))}
  </div>
  )
}

export default SkillCard