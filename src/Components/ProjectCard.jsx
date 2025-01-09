import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import SubSkills from "./SubSkills";

const ProjectCard = (project) => {
  let skills = [];
  if (project.project.name === "SecureShop") {
    skills = [
      "ReactJS",
      "NodeJS",
      "MongoDB",
      "ExpressJS",
      "Web3JS",
      "TailwindCSS",
      "Solidity",
      "MetaMask",
    ];
  } else if (project.project.name === "svg") {
    skills = ["HTML", "CSS", "Javascript", "PHP", "XAMPP", "MySQL"];
  }

  else if (project.project.name === "stackoverflow-api" || "School-Management-System") {
    skills = [
      "NodeJS",
      "MongoDB",
      "ExpressJS",
    ];
  }

  else if(project.project.name === "Restaurant-Table-Booking-System" || "Travel-Agency-Booking-System"){
    skills = [
      "ReactJS",
      "NodeJS",
      "MongoDB",
      "ExpressJS",
      "TailwindCSS",
    ];
  }
  return (
    <div className="bg-white w-[98%] lg:w-[47%] md:w-[45%] m-2 rounded-lg p-2 shadow-sm">
      <div className="flex justify-between">
        <span className="font-bold text-[20px] text-left p-3 ">
          {project.project.name}
        </span>
        <span className="mr-2 mt-2">
          {project.project.github ? (
            <a
              href={`https://github.com/${project.project.github} `}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon style={{ fontSize: "20px", color: "black" }} />
            </a>
          ) : (
            <a
              href={`https://github.com/${project.project.author}/${project.project.name} `}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon style={{ fontSize: "20px", color: "black" }} />
            </a>
          )}
        </span>
      </div>
      <div>
        <p className="font-medium text-[15px] text-left leading-5 p-2">
          {project.project.description}
        </p>
      </div>

      {skills.map((skill, i) => (
        <SubSkills skill={skill} color={"gray"} key={i} />
      ))}
    </div>
  );
};

export default ProjectCard;
