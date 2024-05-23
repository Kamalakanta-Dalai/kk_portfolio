import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Mobile Application"
            category="Android & ios"
            image={workImgThree}
          />
          <ProjectsCard
            title="YouTube Backend"
            category="Js-project"
            image={workImgEight}
          />

          <ProjectsCard
            title="Monsters Rolodex"
            category="Basic React Project"
            image={workImgTwo}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Responsive website"
            category="Ideas & Innovations"
            image={workImgFour}
          />
          <ProjectsCard
            title="ToDoList"
            category="Web App"
            image={workImgOne}
          />
          <ProjectsCard
            title="Web App"
            category="Drum Kit"
            image={workImgSix}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
