import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import { ImVideoCamera } from "react-icons/im";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="I'm a full stack developer specializing in the MERN stack and NEXT.js. I build dynamic web apps with Firebase and advanced UI libraries, and design intuitive interfaces with Figma."
      />

      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Mobile Application"
        subTitle="I develop scalable mobile apps for Android and iOS using FlutterFlow, with backends powered by Firebase and Supabase, tailored to elevate your business."
      />
      <ServicesCard
        icons={<IoBusiness />}
        title="Business Development"
        subTitle="I help build businesses by crafting effective strategies for growth, creative marketing, and market acquisition, ensuring better reach and sustainable success."
      />
      <ServicesCard
        icons={<ImVideoCamera />}
        title="Video Editor"
        subTitle="I'm a filmic video editor using DaVinci Resolve, CapCut, and Adobe, with expertise in After Effects for animations, creating cinematic and engaging visual content."
      />
    </div>
  );
};

export default MyServices;
