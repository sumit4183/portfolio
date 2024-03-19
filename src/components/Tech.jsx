import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex flex-wrap justify-center gap-2 text-lg my-4'>
          {/* <BallCanvas icon={technology.icon} /> */}
          <div className="flex flex-col items-center px-1 py-5">
            <img 
              src={technology.icon}
              className="w-36 h-24"
            />
            {technology.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");