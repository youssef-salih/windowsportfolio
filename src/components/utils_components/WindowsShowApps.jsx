import React from "react";
import { magnify } from "../../assets/images/icons";

export const SearchWin = () => {
  return (
    <div className="border-b-2 border-[#5BBDD6] bg-[#19233A] mx-4 rounded-sm mt-2 p-1 flex">
      <img src={magnify} alt="magnify" className="mx-2" />
      <input
        type="text"
        className="bg-transparent outline-none text-white w-full"
        placeholder="Type here to search "
      />
    </div>
  );
};

const WindowsShowApps = () => {
  return (
    <div className="h-[30rem] bg-white bg-opacity-20 backdrop-blur-md rounded drop-shadow-lg md:w-1/3 w-5/6 md:max-w-[503px] md:min-w-[503px]  absolute -top-4 -translate-y-full ">
      <SearchWin />
    
    </div>
  );
};

export default WindowsShowApps;
