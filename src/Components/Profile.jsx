import React from "react";
import  TypeAnimationContent  from "./TypeAnimationContent";
import profileImage from "../Assets/profile.jpg";

const Profile = () => {

  return (
    <>
      <div className="mx-auto mt-10 w-[93%] 2xl:w-[60%] text-xl lg:w-[70%] md:w-[95%] bg-white mt-4 border-none rounded-lg flex justify-between flex-col items-center text-grey md:text-2xl font-bold font-mono shadow-sm hover:shadow-2xl p-3 cursor-pointer">
        <div className="flex justify-between items-center w-full mt-5">
          <p className="ml-[2%] font-Mynerve">Chinmay Hegde</p>
          <div className="flex justify-between items-center mr-[2%]">
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
        </div>
        <div className="flex md:flex-row justify-between items-center w-full md:mt-5 ml-[2%] mt-[9%] mb-[3%] flex-col items-center mt-5">
          <img
            src={profileImage}
            alt="profile"
            className="rounded-full lg:h-96 lg:w-96 md:max-w-[200px] md:max-h-[200px] w-[150px] h-[150px] mt-[60px] shadow-2xl border-4 border-white"
          ></img>
          <div>
            <p className="ml-2 md:ml-10 mb-3 font-Lexend md:text-left text-center mt-[30px] text-3xl text-gray-800">
              {/* Full Stack Developer */}
              <TypeAnimationContent args1= {'Full Stack Developer'} args2 = {'MERN Stack Developer'}/>
            </p>
            <div className="flex flex-col w-[90%] md:flex-row md:justify-between md:items-center md:w-[100%] lg:w-[95%] items-center justify-center">
              <p className="text-gray-600 mr-[10px] text-[19px] lg:text-left md:text-left ml-10 text-center lg:word-wrap md:mr-[100px]">
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
