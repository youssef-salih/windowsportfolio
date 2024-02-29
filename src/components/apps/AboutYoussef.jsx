import React, { useEffect, useLayoutEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
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
  me,
  next,
  node,
  projectIcon,
  python,
  react,
  redux,
  resumeIcon,
  sass,
  settings,
  tailwind,
} from "../../assets/images/icons";
import resume from "../../assets/dummy.pdf";
import { db } from "../../../firebase";
import { getCertifInfo, getProjects } from "../../requests";

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
    <div className="flex h-full w-full ">
      {<RenderLinks changeScreen={changeScreen} activeScreen={activeScreen} />}
      <ContentWrapper>{screen[activeScreen]}</ContentWrapper>
    </div>
  );
};

//side links
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
    <div className="bg-white md:w-1/4 border-r-[1px] border-opacity-30 border-gray-500 h-full flex flex-col gap-y-2 ">
      <div
        className="flex items-center  gap-x-2 cursor-pointer px-2  font-medium mr-6 mt-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          src={arrow}
          alt="arrow"
          className={`size-3  ${
            isOpen ? "rotate-0" : "-rotate-90"
          } transition-all duration-150`}
        />
        <div className="flex  items-center gap-x-2 font-medium">
          <img src={computer} alt="" className="md:size-5 size-4" />
          <p className="text-xs md:text-sm text-nowrap">Ce Pc</p>
        </div>
      </div>

      {isOpen &&
        links.map((link, index) => (
          <a
            key={index}
            className={`p-1 w-full flex gap-x-2 items-center cursor-pointer capitalize text-nowrap text-sm  font-medium ${
              link.toScreen === activeScreen
                ? "bg-cyan-300 bg-opacity-60 hover:bg-cyan-200"
                : "hover:bg-cyan-300 hover:bg-opacity-10"
            } px-2`}
            onClick={() => changeScreen(link.toScreen)}
          >
            <img src={link.icon} alt="" className="md:w-5 w-3" />
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
    <div className="bg-white w-full h-full overflow-x-hidden md:px-8 px-2 py-8">
      {children}
    </div>
  );
};

export const RsLinks = ({ tooltip }) => {
  const { width } = useWindowSize();
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
          <a href={link.path} target="_blank">
            <button className="duration-500">
              <img src={link.icon} alt="" className="w-8" />
            </button>
            {width > 600 && !tooltip && (
              <span
                className={`absolute ${link.style}  md:-translate-x-[50%]  z-20  scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100`}
              >
                <span> {link.nom}</span>
              </span>
            )}
          </a>
        </div>
      ))}
    </div>
  );
};

// screens UI
const TitleAboutYoussef = ({ children }) => {
  return (
    <h1 className="text-center text-3xl font-semibold mb-8">{children}</h1>
  );
};
// about

const About = () => {
  return (
    <div className="flex flex-col text-center md:text-start items-center  gap-y-8  min-h-0">
      <img src={me} alt="me" className="md:w-1/5 w-1/2" />
      <p className="font-semibold text-lg">
        my name is{" "}
        <span className="font-extrabold text-2xl">Youssef Salih</span> , <br />
        i'm a{" "}
        <span className="text-main font-extrabold text-2xl">
          Fullstack Developer
        </span>
      </p>
      <p className="md:px-16  uppercase font-medium text-lg text-start">
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
// education
const Education = () => {
  const certifInfodummy = [
    {
      name: "Front-end Web Developement",
      date: "2023",
      degree: "IBM Skillsbuild",
    },
    {
      name: "Formation SOFT-SKILLS",
      date: "2023",
      degree: "EFE Maroc",
    },
    {
      name: "Formation Front-end",
      date: "2023",
      degree: "EFE Maroc/ES2IM",
    },
  ];
  const [certifInfo, setCertifInfo] = useState(certifInfodummy);
  useLayoutEffect(() => {
    getCertifInfo()
      .then((res) => setCertifInfo(res.reverse()))
      .catch((err) => console.log(err));
  }, []);

  const eduInfo = [
    {
      name: "master degree",
      date: "22/24",
      degree: "Software engineering and web applications",
    },
    {
      name: "Bachelor's",
      date: "21/22",
      degree: "Development of Web Applications and Mobile Technologies",
    },
    {
      name: "Diploma",
      date: "19/21",
      degree: "software development",
    },
  ];

  return (
    <>
      <TitleAboutYoussef>Education</TitleAboutYoussef>

      <ul className="list-disc md:px-8 text-xl font-medium capitalize mb-4">
        {eduInfo.map((info, index) => (
          <React.Fragment key={index}>
            <li className="font-bold text-2xl">{info.name}</li>
            <p>{info.date}</p>
            <p className="font-medium text-main">{info.degree}</p>
          </React.Fragment>
        ))}
      </ul>

      <TitleAboutYoussef>Certification</TitleAboutYoussef>

      <ul className="list-disc md:px-8 text-xl font-medium capitalize">
        {certifInfo &&
          certifInfo.map((info, index) => (
            <React.Fragment key={index}>
              <li className="font-bold text-2xl">{info.name}</li>
              <p>{info.date}</p>
              <p className="font-medium text-main">{info.degree}</p>
            </React.Fragment>
          ))}
      </ul>
    </>
  );
};

//skills screen

const TechItem = ({ tech }) => (
  <div
    className={`${
      tech.color === "black" ? "bg-black" : `bg-${tech.color}-500`
    } p-1 px-2 rounded flex items-center gap-1`}
  >
    {/* for tailwind bug  */}
    <p className="hidden bg-yellow-500 bg-rose-500 bg-black bg-pink-500 bg-orange-500 bg-blue-500 bg-violet-500 bg-cyan-500 bg-green-500"></p>
    {tech.icon && <img src={tech.icon} alt="" className="w-4 invert" />}
    <p className="text-white capitalize text-base">{tech.nom}</p>
  </div>
);

const TechsUI = () => {
  const techs = [
    //languages
    [
      { nom: "javascript", color: "yellow", icon: js },
      { nom: "python", color: "blue", icon: python },
      { nom: "sass", color: "pink", icon: sass },
      { nom: "html5", color: "orange", icon: html },
      { nom: "git", color: "rose", icon: git },
    ],
    //frameworks
    [
      { nom: "next", color: "black", icon: next },
      { nom: "react", color: "blue", icon: react },
      { nom: "tailwindcss", color: "cyan", icon: tailwind },
      { nom: "nodejs", color: "green", icon: node },
      { nom: "redux", color: "violet", icon: redux },
    ],
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center gap-x-36 gap-y-8 md:px-4">
      {techs.map((category, categoryIndex) => (
        <div key={categoryIndex} className="flex flex-col items-center">
          <h1 className="">
            {categoryIndex === 0
              ? "languages & tools"
              : "frameworks & libraries"}
          </h1>
          <div className="flex flex-wrap gap-2">
            {category.map((tech, index) => (
              <TechItem key={index} tech={tech} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <TitleAboutYoussef>Technical Skills</TitleAboutYoussef>
      <div className="md:px-4 text-xl font-medium my-12">
        <p>
          I have experience with a diverse range of programming languages and
          frameworks.
        </p>
        <p>
          I excel in front-end development, with expertise in
          <span className="text-main"> React.js and JavaScript!</span>
        </p>
        <p>Here are my most frequenly used</p>
      </div>

      <TechsUI />
    </>
  );
};

// projects

const ProjectsItem = ({ nom, tech, desc, href }) => {
  return (
    <a className="group" href={href} target="_blank" rel="noreferrer">
      <div className="my-2 border-2 p-3 w-full rounded group-hover:border-black group-hover:duration-500 group-hover:transition-all group-hover:ease-in-out">
        <h1 className="md:text-2xl text-lg font-medium capitalize ">{nom}</h1>
        <p className="md:before:block flex items-center gap-x-2 md:before:w-1 md:before:rounded md:before:h-1 md:before:bg-black my-2 text-lg ">
          {desc}
        </p>
        {tech?.map((techno, index) => (
          <span
            key={index}
            className="p-1 border border-black border-opacity-25 rounded-md mr-2 text-base "
          >
            {techno}
          </span>
        ))}
      </div>
    </a>
  );
};

const Projects = () => {
  const [projects, setprojects] = useState();
  useEffect(() => {
    getProjects().then((res) => setprojects(res));
  }, []);

  return (
    <>
      <TitleAboutYoussef>Technical Projects</TitleAboutYoussef>
      {projects ? (
        projects.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectsItem
              nom={project.nom}
              desc={project.desc}
              tech={project.techs}
              href={project.path}
            />
          </React.Fragment>
        ))
      ) : (
        <div className="flex justify-center">
          <div class="border-gray-300 h-12 w-12 animate-spin rounded-full border-4 border-t-blue-600" />
        </div>
      )}
    </>
  );
};

// resume
const Resume = () => {
  return (
    <>
      <TitleAboutYoussef>Technical Resume</TitleAboutYoussef>

      <iframe src={resume} frameBorder="0" className="w-full h-full "></iframe>
    </>
  );
};
