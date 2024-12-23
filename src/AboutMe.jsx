import React from "react";
import profileImage from "./Assets/profile.jpg";

const AboutMe = () => {
  return (
    <div className="md:ml-[18%] md:mr-[18%] sm:ml-[5%] sm:mr-[5%] mt-10 max-w-[60%] bg-grey-500 mt-2 border-none border-t-2 border-black rounded-lg flex justify-between items-center text-grey text-2xl font-bold font-mono">
      <img
        src={profileImage}
        alt="profile"
        className="rounded-full h-96 w-96 mb-[150px] md:max-w-[200px] md:max-h-[200px] s:max-w-[50px] s:max-h-[50px] shadow-2xl border-4 border-white"
      ></img>
      <div>
        <p className="ml-10 mb-3">Full Stack Developer</p>

        <p className="text-grey-100 text-base font-light mb-[150px] ml-10">
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
  );
};

export default AboutMe;
