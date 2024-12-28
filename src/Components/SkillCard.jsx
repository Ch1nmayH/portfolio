import React from 'react'
import SubSkills from './SubSkills'


const SkillCard = ({skill}) => {
  return (
    <div className="bg-gray-100 lg:w-[31%] md:w-[48%] sm:w-[98%] m-2 rounded-lg p-2">
    <p className="font-normal text-left ml-5 p-3">
      <span>
        {skill.icon}
      </span>{" "}
      {skill.title}
    </p>
    {skill.skills.map((skill) => (
        <SubSkills skill={skill} />
    ))}
  </div>
  )
}

export default SkillCard