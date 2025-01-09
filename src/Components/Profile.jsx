import React, { useEffect, useState } from "react";
import TypeAnimationContent from "./TypeAnimationContent";
import profileImage from "../Assets/profile.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import axios from "axios";

const Profile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [visitors, setVisitors] = useState(0);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const response = axios.get(
      `${'api.portfolio.chinmayh.me/api'}/countVisitors`
    );


    if(!response) {
      return;
    }
    response.then((response) => {
      setVisitors(response.data);
    }

    );
  }
  , []);

  useEffect(() => {
    const fetchIp = async () => {
        try {
            // Fetch IP address from a third-party API
            const response = await axios.get("https://api.ipify.org?format=json");
            const ip = response.data.ip;
            console.log("Current IP address:", ip);
            const sendIp = await axios.post(`${'api.portfolio.chinmayh.me/api'}/addVisitor`, {
                ip,
            });
        } catch (error) {
            console.error("Error fetching IP address:", error);
        }
    };
    fetchIp();
}, []);


  return (
    <>
      <div
        className={`mx-auto mt-10 w-[93%] 2xl:w-[60%] text-xl lg:w-[70%] md:w-[95%] bg-white mt-4 border-none rounded-lg flex justify-between flex-col items-center text-grey md:text-2xl font-bold font-mono shadow-sm hover:shadow-2xl p-3 cursor-pointer transition duration-500 ease-in-out`}
      >
        <p className="text-sm ml-[90%] sm:ml-[94%]"><RemoveRedEyeIcon fontSize="sm"/> {visitors}</p>
        <div className="flex justify-between items-center w-full mt-5">
          <p className="ml-[2%] font-Mynerve">Chinmay Hegde</p>
          <div className="hidden md:flex md:justify-between md:items-center md:mr-[2%]">
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
              href="https://mail.google.com/mail/u/0/?fs=1&to=chinmayhegde4408@gmail.com&tf=cm"
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

          <button
            className="md:hidden flex justify-between items-center p-2"
            onClick={handleMenu}
          >
            {!showMenu ? (
              <MenuIcon className="text-gray-800" />
            ) : (
              <CloseIcon className="text-gray-800" />
            )}
          </button>
        </div>

        {showMenu && (
          <div
            className="fixed inset-0 flex bg-black bg-opacity-70 items-center justify-center z-50"
            onClick={handleMenu}
          >
            <div
              className="bg-white shadow-2xl rounded-lg w-80 h-20 flex justify-center items-center p-4 space-y-4 mt-[250px]"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex items-center justify-between items-center space-x-4">
                <li>
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
                </li>
                <li>
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
                </li>
                <li>
                <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=chinmayhegde4408@gmail.com&tf=cm"
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
                </li>
              </ul>
            </div>
          </div>
        )}

        <div className="flex md:flex-row justify-between items-center w-full md:mt-5 ml-[2%] mt-[9%] mb-[3%] flex-col items-center mt-5">
          <img
            src={profileImage}
            alt="profile"
            className="rounded-full lg:h-96 lg:w-96 md:max-w-[200px] md:max-h-[200px] w-[150px] h-[150px] mt-[28px] shadow-2xl border-4 border-white"
          ></img>
          <div>
            <p className="ml-2 md:ml-10 mb-3 font-Lexend md:text-left text-center mt-[30px] text-2xl md:text-3xl text-gray-800">
              {/* Full Stack Developer */}
              <TypeAnimationContent
                args1={"Full Stack Developer"}
                args2={"MERN Stack Developer"}
              />
            </p>
            <div className="flex flex-col w-[90%] md:flex-row md:justify-between md:items-center md:w-[95%] lg:w-[95%] items-center justify-center">
              <p className="text-gray-600 mr-[10px] ml-[43px] md:mr-[40px] text-[15px] md:text-[19px] lg:text-left md:text-left md:ml-[40px] text-center lg:word-wrap">
                MCA graduate with experience in MERN Stack, PHP, and blockchain
                technology. Skilled in building secure web applications and
                blockchain projects. Strong leadership and problem-solving
                abilities, ready to contribute to innovative teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
