import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import axios from 'axios'

const Projects = () => {
  const [projects, setProjects] = useState([]);
  let gitHubName = "Ch1nmayH";
  let extra = {
    name: "Checkout more projects on my GitHub",
    github : "Ch1nmayH",
    description: "Click the link to head over to my GitHub profile",
  }
  useEffect(() => {

      const response = axios.get(`https://pinned.berrysauce.dev/get/${gitHubName}`)
      .then((response) => {
          setProjects(response.data);
      })
      .catch((error) => {
          console.error('Error fetching data: ', error);
      });


  }, []);

  return (
    <div className="mx-auto mt-[65px] w-[98%] 2xl:w-[70%] lg:w-[80%] md:w-[95%] bg-gray-50 mt-4 border-none rounded-lg flex justify-between flex-col  text-grey text-2xl font-bold font-mono shadow-sm hover:shadow-2xl p-3 cursor-pointer">
      <h1 className="ml-[2%] text-center md:text-left">
          Featured Projects
        </h1>

        <div className="flex flex-wrap mt-[30px] ml-[2%] mt-4">
          
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        <ProjectCard project={extra} />
        </div>
    </div> 
      
    )
}

export default Projects