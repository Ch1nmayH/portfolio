import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto mt-[65px] w-[93%] 2xl:w-[60%] lg:w-[70%] md:w-[95%] mt-4 mb-[30px] h-[1%] border-none rounded-lg flex justify-center">
    <div className="border-none rounded-lg flex justify-between flex-col w-[100%] text-grey bg-gray-50 h-[10%] text-2xl font-bold font-mono p-3 shadow-sm">
      <p className="text-[15px] md:text-[19px] text-center font-medium font-Lexend p-3">
        &copy; 2024 <span className="font-Mynerve text-[19px] text-center font-bold">Chinmay Hegde.</span> All rights reserved.
      </p>
    </div>
    </div>
  );
};

export default Footer;
