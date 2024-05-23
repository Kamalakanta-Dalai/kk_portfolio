import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<BsTrophyFill />} des="10 Awards Won" />
      <FunFactCard icon={<SiAntdesign />} des="10 Finished Projects" />
      <a href="https://leetcode.com/u/dalaikamalakanta52/" target="_blank">
        <FunFactCard icon={<SiLeetcode />} des="50+ Coding Problems" />
      </a>
      <a href="https://www.youtube.com/@billionmoments5164" target="_blank">
        <FunFactCard icon={<IoLogoYoutube />} des="60k Views in Youtube" />
      </a>
    </div>
  );
};

export default FunFact;
