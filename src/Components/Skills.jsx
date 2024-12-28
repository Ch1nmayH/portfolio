import React from "react";
import SkillCard from "./SkillCard";
import CodeIcon from "@mui/icons-material/Code";
import DnsIcon from '@mui/icons-material/Dns';
import GitHubIcon from '@mui/icons-material/GitHub';
import BuildIcon from '@mui/icons-material/Build';
import Inventory2Icon from '@mui/icons-material/Inventory2';

const Skills = () => {
  const skills = {
    skills: [
      {
        title: "Frontend",
        icon : <CodeIcon style={{ fontSize: "40px", color: ['#007FFF'] }} />,
        skills: ["HTML", "CSS", "JavaScript", "ReactJS", "TailwindCSS"],
      },
      {
        title: "Backend",
        icon : <DnsIcon style={{ fontSize: "40px", color: "green" }} />,
        skills: ["NodeJS", "ExpressJS", "MongoDB"],
      },
      {
        title: "Database",
        icon : <Inventory2Icon style={{ fontSize: "40px", color: "violet" }} />,
        skills: ["MongoDB", "MySQL"],       
      },
      {
        title: "Version Control",
        icon : <GitHubIcon style={{ fontSize: "40px", color: "black" }} />,
        skills: ["Git", "GitHub"],
      },
      {
        title: "Tools & Technologies",
        icon : <BuildIcon style={{ fontSize: "40px", color: "orange" }} />,
        skills: ["VS Code", "Postman", "AWS EC2", "Render"],
      }
    ],
  }
  return (
    <>
      <div className="mx-auto mt-[65px] 2xl:w-[70%] lg:w-[80%] md:w-[95%] sm:w-[98%] mt-4 border-none rounded-lg flex justify-between flex-col items-left text-grey text-2xl font-bold shadow-sm hover:shadow-2xl p-3 cursor-pointer">
        <h1 className="ml-[2%] md:text-left sm:text-center">
          Skill & Technologies
        </h1>

        <div className="flex flex-wrap mt-[30px] ml-[2%] mt-4">
          {skills.skills.map((skill) => (console.log(skill.title),
            <SkillCard skill={skill} />
          ))}
          
          
  
        </div>
      </div>
    </>
  );
};

export default Skills;
