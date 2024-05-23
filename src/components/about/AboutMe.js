import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Kamalakanta Dalai</h2>
          <p-4 className="text-base leading-6 text-center">
            <u>full stack web developer</u> specializing in the
            <u> MERN stack</u>, with a focus on <u>NEXT.js</u> for seamless full
            stack development. I leverage advanced UI libraries like{" "}
            <u>ShadCN and Accertinity</u>, and use <u>Firebase</u> for robust
            backend solutions. Proficient in DSA with <u>Java</u>, I excel in
            problem-solving and optimizing performance. I also create stunning
            designs with <u>Figma</u> and develop mobile apps for both Android
            and iOS using <u>FlutterFlow</u>.
          </p-4>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <h2 className="font-semibold mb-1">My Education:</h2>
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">University:</span>
            NIT Rourkela
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Course status:</span>
            BTech, Final Year
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Branch:</span>
            Mechanical Engg
          </li>
        </ul>
        <br />
        <h2 className="font-semibold mb-1">Find Me:</h2>
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            India
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Bhubaneswar, Odisha
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
