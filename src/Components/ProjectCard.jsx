import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import SubSkills from "./SubSkills";
import axios from "axios";

const ProjectCard = (project) => {

  const [liveWebsite, setLiveWebsite] = useState(false);
  const fetchLiveWebsite = async (author,name) => {

    const response = await axios.get(`https://api.github.com/repos/${author}/${name}`);
    const data = response.data;
    if(!data.homepage){
      setLiveWebsite(false);
      return false;
    }
    else{
      setLiveWebsite(data.homepage);
      return true;
    }
  }



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

  else if (project.project.name === "stackoverflow-api" || project.project.name === "School-Management-System") {
    skills = [
      "NodeJS",
      "MongoDB",
      "ExpressJS",
    ];
  }

  else if(project.project.name === "Restaurant-Table-Booking-System" || project.project.name ===  "Travel-Agency-Booking-System"){
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
            <div>

            <a
              href={`https://github.com/${project.project.github} `}
              target="_blank"
              rel="noopener noreferrer"
              >
              <GitHubIcon style={{ fontSize: "20px", color: "black" }} />
            </a>
            </div>
            
          ) : (
            <div>
              
            <a
              href={`https://github.com/${project.project.author}/${project.project.name} `}
              target="_blank"
              rel="noopener noreferrer"
              >
              <GitHubIcon style={{ fontSize: "20px", color: "black" }} />
            </a>
            {fetchLiveWebsite(project.project.author, project.project.name) ? (
              <a
              href={liveWebsite}
              target="_blank"
              rel="noopener noreferrer"
              >
              <span className="font-bold text-[15px] text-left leading-5 p-2 hover:text-blue-500">
                Live
              </span>
            </a>
            ) : (
              <> NOT LIVE</>
            )
            }
            
              </div>


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
