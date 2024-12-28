import React from "react";
import XIcon from "@mui/icons-material/X";
import profileImage from "../Assets/profile.jpg";

const Profile = () => {
  return (
    <>
      <div className="md:ml-[18%] md:mr-[18%] sm:ml-[5%] sm:mr-[5%] mt-10 max-w-[60%] bg-grey-500 mt-4 border-none border-t-2 border-black rounded-lg flex justify-between flex-col items-center text-grey text-2xl font-bold font-mono shadow-2xl">
        <div className="flex justify-between items-center w-full mt-5">
          <h3 className="ml-20">Chinmay Hegde</h3>
          <div className="flex justify-between items-center mr-20">
            <a
              href="https://www.linkedin.com/in/chinmay-hegde-b89b27211/"
              target="_blank"
              rel="noopener noreferrer"
              className="m-1 hover:text-blue-500 transition duration-250 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://www.github.com/Ch1nmayH/"
              target="_blank"
              rel="noopener noreferrer"
              className="m-1 hover:text-green-500 transition duration-250 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              </svg>
            </a>
            <a
              href="chinmayhegde4408@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="m-1 hover:text-red-500 transition duration-250 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-5 ml-[100px] mb-8">
      <img
        src={profileImage}
        alt="profile"
        className="rounded-full h-96 w-96 md:max-w-[200px] md:max-h-[200px] s:max-w-[50px] s:max-h-[50px] shadow-2xl border-4 border-white"
      ></img>
      <div>
        <p className="ml-10 mb-3">Full Stack Developer</p>

        <p className="text-grey-100 text-base font-light ml-10 word-wrap mr-[100px]">
          Dedicated and proactive MCA Graduate with hands-on experience in MERN
          Stack development, PHP, and blockchain technology. Demonstrates
          expertise in building secure and scalable web applications, including
          blockchain-based projects, and possesses solid knowledge in PHP and
          AWS EC2. Proven leadership abilities in team settings and a strong
          foundation in technical problem-solving. Eager to leverage technical
          and collaborative skills to contribute effectively in a
          forward-thinking organization.
        </p>
      </div>
    </div>
      </div>
    </>
  );
};

export default Profile;
