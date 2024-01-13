import React, { useEffect, useState } from "react";
import {
  briefcase,
  github,
  linkedin,
  settings,
} from "../../assets/images/icons";

const AboutYoussef = () => {
  const [screen, setScreen] = useState({
    about: <About />,
    education: <Education />,
    skills: <Skills />,
    projects: <Projects />,
    resume: <Resume />,
  });

  const [activeScreen, setActiveScreen] = useState("about");
  const changeScreen = (e) => {
    setActiveScreen(e);
  };
  useEffect(() => {}, []);

  return (
    <div className="flex h-full w-full">
      {<RenderLinks changeScreen={changeScreen} />}
      <ContentWrapper>{screen[activeScreen]}</ContentWrapper>
    </div>
  );
};
const RenderLinks = ({ changeScreen }) => {
  const links = [
    { nom: "about me ", toStcreen: "about", icon: "" },
    { nom: "education", toStcreen: "education", icon: "" },
    { nom: "skills", toStcreen: "skills", icon: briefcase },
    { nom: "projects", toStcreen: "projects", icon: "" },
    { nom: "resume", toStcreen: "resume", icon: "" },
  ];
  return (
    <div className="bg-white w-1/6 border-r-[1px] border-gray-500 h-full flex flex-col gap-y-2">
      <p>Ce Pc</p>
      {links.map((link, index) => (
        <a
          key={index}
          className="flex gap-x-2 items-center cursor-pointer capitalize hover:bg-gray-800 hover:text-white hover:bg-opacity-40 px-2"
          onClick={() => changeScreen(link.toStcreen)}
        >
          <img src={link.icon} alt="" className="w-6" />
          {link.nom}
        </a>
      ))}
    </div>
  );
};
export default AboutYoussef;

export const displayAboutYoussef = () => {
  return <AboutYoussef />;
};

const ContentWrapper = ({ children }) => {
  return (
    <div className="bg-white w-full h-full overflow-y-scroll">{children}</div>
  );
};

const RsLinks = () => {
  const Links = [
    {
      nom: "linkedIn",
      path: "https://www.linkedin.com/in/youssef-salih-16a357204/",
      style: "top-0 -left-14 origin-left ",
      icon: linkedin,
    },
    {
      nom: "github",
      path: "https://github.com/youssef-salih",
      style: "top-0 -right-32 origin-right",
      icon: github,
    },
  ];
  return (
    <div className="flex gap-x-4 mt-4">
      {Links.map((link, index) => (
        <div
          className="group relative [&>a>button]:hover:scale-150 transition-all "
          key={index}
        >
          <a href={link.path}>
            <button className="duration-500">
              <img src={link.icon} alt="" className="w-8" />
            </button>
            <span
              className={`absolute ${link.style}  -translate-x-[50%] z-20  scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100`}
            >
              <span> {link.nom}</span>
            </span>
          </a>
        </div>
      ))}

      {/* <a className="flex bg-blue-600">
        <span className="bg-cyan-600 p-1">
          <img src={github} alt="" className="w-8" />
        </span>
        <p>github</p>
      </a> */}
    </div>
  );
};

// screens UI
const About = () => {
  return (
    <div className="flex flex-col items-center  gap-y-8 p-4 min-h-0">
      <img src={settings} alt="" className="w-1/5" />
      <p className="px-16 ">
        HI,I'M YOUSSEF SALIH,A FRONT-END DEVELOPER LOCATED IN CASABLANCA. I HAVE
        A SERIOUS PASSION FOR UI EFFECTS, ANIMATIONS AND CREATING INTUITIVE,
        DYNAMIC USER EXPERIENCES. WELL-ORGANISED PERSON, PROBLEM SOLVER,
        INDEPENDENT EMPLOYEE WITH HIGH ATTENTION TO DETAIL. FAN OF FOOTBALL AND
        GAMING, OUTDOOR ACTIVITIES, TV SERIES. A FAMILY PERSON, INTERESTED IN
        THE ENTIRE FRONTEND SPECTRUM AND WORKING ON AMBITIOUS PROJECTS WITH
        POSITIVE PEOPLE.
      </p>
      <RsLinks />
    </div>
  );
};

const Education = () => {
  return (
    <>
      <p>im Education</p>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <p>im Projects</p>
    </>
  );
};

const Skills = () => {
  return (
    <>
      <p>im Skills</p>
    </>
  );
};

const Resume = () => {
  return (
    <>
      <p>im Resume</p>
    </>
  );
};
