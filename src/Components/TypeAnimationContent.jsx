import React from "react";
import { TypeAnimation } from 'react-type-animation';
const TypeAnimationContent = (args) => {
  if (args.args1 && args.args2) {
    return (
      <TypeAnimation
        sequence={[`${args.args1}`, 1000, `${args.args2}`, 1000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    );
  } else {
    return <></>;
  }
};

export default TypeAnimationContent;
