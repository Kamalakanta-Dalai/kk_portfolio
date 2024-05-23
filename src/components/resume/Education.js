import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="App Developer"
          subTitle="Coratia Technologies"
          des="Mobile app developer at Coratia Technologies. Building Flutter app for machine inspection tracking, backed by Firebase."
        />
        <ResumeCard
          badge="2023-2024"
          title="Developer & Agency Head"
          subTitle="AtBlink Pvt Ltd."
          des="Developer and Agency Head at AtBlink Pvt Ltd Developed apps and managed partnerships with agencies."
        />
        <ResumeCard
          badge=""
          title="Founder & CEO"
          subTitle="UniverCity.Co"
          des="Founder & CEO of UniverCity startup. Designed Flutter app, a student-centric social media platform, addressing all student needs."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2021-2025"
          title="National Institute Of Technology"
          subTitle="Rourkela"
          des="Final year Mechanical Engineering student at NIT Rourkela pursuing Bachelor's degree."
        />
        <ResumeCard
          badge="2018-2020"
          title="Prananatha H S Eduation"
          subTitle="Khordha"
          des="Completed intermediate education(PCMB) at Prananatha Higher Secondary Education, Khordha."
        />
        <ResumeCard
          badge="2018"
          title="Saraswati Vidya Mandira"
          subTitle="Khordha"
          des="Completed schooling with first-class distinction at Saraswati Vidya Mandira, Bisiapada."
        />
      </div>
    </div>
  );
};

export default Education;
