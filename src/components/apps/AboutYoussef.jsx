import React, { useEffect, useState } from "react";
import {
  arrow,
  briefcase,
  computer,
  educationIcon,
  git,
  github,
  html,
  info,
  js,
  linkedin,
  projectIcon,
  python,
  resumeIcon,
  sass,
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
      {<RenderLinks changeScreen={changeScreen} activeScreen={activeScreen} />}
      <ContentWrapper>{screen[activeScreen]}</ContentWrapper>
    </div>
  );
};
const RenderLinks = ({ changeScreen, activeScreen }) => {
  const [isOpen, setIsOpen] = useState(true);
  const links = [
    { nom: "about me ", toScreen: "about", icon: info },
    { nom: "education", toScreen: "education", icon: educationIcon },
    { nom: "skills", toScreen: "skills", icon: briefcase },
    { nom: "projects", toScreen: "projects", icon: projectIcon },
    { nom: "resume", toScreen: "resume", icon: resumeIcon },
  ];
  return (
    <div className="bg-white w-1/6 border-r-[1px] border-opacity-30 border-gray-500 h-full flex flex-col gap-y-2">
      <div
        className="flex items-center  gap-x-2 cursor-pointer px-2 text-base font-medium"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <img
            src={arrow}
            alt=""
            className="size-3 rotate-0 transition-all duration-150"
          />
        ) : (
          <img
            src={arrow}
            alt=""
            className="size-3 -rotate-90 transition-all duration-150"
          />
        )}
        <div className="flex  items-center gap-x-2 font-medium">
          <img src={computer} alt="" className="size-5" />
          <p>Ce Pc</p>
        </div>
      </div>

      {isOpen &&
        links.map((link, index) => (
          <a
            key={index}
            className={`p-1  flex gap-x-2 items-center cursor-pointer capitalize text-base font-medium ${
              link.toScreen === activeScreen
                ? "bg-cyan-300 bg-opacity-60 hover:bg-cyan-200"
                : "hover:bg-cyan-300 hover:bg-opacity-10"
            } px-2`}
            onClick={() => changeScreen(link.toScreen)}
          >
            <img src={link.icon} alt="" className="w-5" />
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
    <div className="bg-white w-full h-full overflow-y-auto">{children}</div>
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
    </div>
  );
};

// screens UI
const TitleAbout = ({ children }) => {
  return <h1 className="text-center text-3xl font-semibold ">{children}</h1>;
};

const About = () => {
  return (
    <div className="flex flex-col items-center  gap-y-8 p-4 min-h-0">
      <img src={settings} alt="" className="w-1/5" />
      <p className="font-semibold text-xl">
        my name is{" "}
        <span className="font-extrabold text-3xl">Youssef Salih</span> , <br />
        i'm a{" "}
        <span className="text-blue-600 font-extrabold text-3xl">
          Fullstack Developer
        </span>
      </p>
      <p className="px-16 uppercase font-medium text-xl">
        HI,I'M YOUSSEF SALIH,A Fullstack DEVELOPER LOCATED IN CASABLANCA. I HAVE
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
  const EduInfo = [
    {
      name: "master",
      date: "22/24",
      degree: "Software engineering and web applications",
    },
    {
      name: "Bachelor's",
      date: "21/22",
      degree: "Development of web applications and mobile technology",
    },
    {
      name: "diplome",
      date: "19/21",
      degree: "pc",
    },
    {
      name: "bac",
      date: "18/19",
      degree: "pc",
    },
  ];
  return (
    <>
      <TitleAbout>Education</TitleAbout>

      <ul className="list-disc px-8">
        {EduInfo.map((info, index) => (
          <React.Fragment key={index}>
            <li className="font-bold">{info.name}</li>
            <p>{info.date}</p>
            <p className="font-medium">{info.degree}</p>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};
const TechsUI = () => {
  const techs = [
    //languages
    [
      {
        nom: "javascript",
        color: "yellow",
        icon: js,
      },
      {
        nom: "python",
        color: "blue",
        icon: python,
      },
      {
        nom: "sass",
        color: "pink",
        icon: sass,
      },
      {
        nom: "html5",
        color: "orange",
        icon: html,
      },

      {
        nom: "git",
        color: "rose",
        icon: git,
      },
    ], //frameworks
    [
      {
        nom: "next",
        color: "black",
        icon: "",
      },
      {
        nom: "",
        color: "",
        icon: "",
      },
      {
        nom: "",
        color: "",
        icon: "",
      },
      {
        nom: "",
        color: "",
        icon: "",
      },
      {
        nom: "",
        color: "",
        icon: "",
      },
    ],
  ];
  return (
    <div className="flex justify-center gap-x-36 px-4">
      <div className="flex flex-col items-center">
        <h1 className="">languages & tools</h1>
        <div className="flex flex-wrap  gap-x-2 ">
          {techs[0].map((tech, index) => (
            <div
              key={index}
              className={`bg-${tech.color}-500 p-1 rounded  flex items-center gap-1`}
            >
              <img src={tech.icon} alt="" className="w-4 invert" />
              <p className="text-white">{tech.nom}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        {/* <h1 className="">frameworks & libraries</h1>
        <div className="flex flex-wrap  gap-x-2 ">
          {techs[1].map((tech, index) => (
            <div
              key={index}
              className={`bg-${tech.color}-500 p-1 rounded  flex items-center gap-1`}
            >
              <img src={tech.icon} alt="" className="w-4 invert" />
              <p className="text-white">{tech.nom}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <TitleAbout>Technical Skills</TitleAbout>
      <p>
        I have experience with a diverse range of programming languages and
        frameworks.
      </p>
      <p>
        I excel in front-end development, with expertise in
        <span className="text-blue-500"> React.js and JavaScript!</span>
      </p>
      <p>Here are my most frequenly used</p>
      <TechsUI />
    </>
  );
};

const Projects = () => {
  return (
    <>
      <TitleAbout>Technical Projects</TitleAbout>
    </>
  );
};

const Resume = () => {
  return (
    <>
      <TitleAbout>Technical Resume</TitleAbout>
    </>
  );
};
