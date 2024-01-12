import React, { useEffect, useState } from "react";

const AboutYoussef = () => {
  const renderLinks = () => {
    const links = ["about Me", "education", "skills", "projects", "resume"];
    return (
      <div className="bg-white w-1/6 border-r-[1px] border-gray-500 h-full flex flex-col">
        {links.map((link, index) => (
          <a key={index}>{link}</a>
        ))}
      </div>
    );
  };
  return (
    <div className="flex w-full h-full">
      {renderLinks()}
      <div className="bg-white w-full">hello</div>
    </div>
  );
};

export default AboutYoussef;

export const displayAboutYoussef = () => {
  return <AboutYoussef />;
};
