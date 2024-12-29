import React from "react";
import TypeAnimationContent from "./TypeAnimationContent";

const Contact = () => {
  // let randomRgB = () => {
  //   let r = Math.floor(Math.random() * 255)
  //   let g = Math.floor(Math.random() * 255)
  //   let b = Math.floor(Math.random() * 255)
  //   return `rgba(${r},${g},${b},0.5)`
  // }

  return (
    <div className="mx-auto w-[93%] lg:w-[70%] 2xl:w-[60%] m:w-[95%] mt-10 border-none rounded-lg text-gray shadow-sm hover:shadow-2xl p-3 cursor-pointer flex justify-between flex-col items-left">
      <h1 className="mx-auto text-center font-Mynerve text-[50px] mt-4 mb-2">
        
        <TypeAnimationContent args1={'Want to work with me ?'} args2={'So....'} />
      </h1>
      <p className="text-center p-2">
        Just Click on the button below and we can connect.
      </p>

      <button
        className={`text-center text-white font-medium text-[18px] p-2 bg-violet-500 rounded-lg flex justify-center mx-auto w-[100%] lg:w-[18%] md:w-[100%] hover:bg-violet-400`}
      >
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&to=chinmayhegde4408@gmail.com&tf=cm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lets Connect
        </a>
      </button>
    </div>
  );
};

export default Contact;
