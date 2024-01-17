import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import { close, maximize, minimize } from "../../assets/images/icons";
import Chrome from "../apps/Chrome";
import Spotify from "../apps/Spotify";

const WindowTitle = ({ id, title, icon }) => {
  return (
    <div className="flex  w-full">
      <div
        className={
          "title  relative  border-t-2 border-white border-opacity-5  px-3 text-black w-full select-none flex gap-x-3 items-center"
        }
      >
        <img src={icon} alt={title} className="size-4" />
        <p className="font-semibold text-sm">{title}</p>
      </div>
    </div>
  );
};
const WindowEdit = ({ id, closeWindow }) => {
  return (
    <div className="flex gap-x-2 items- justify-between">
      <div className="hover:bg-gray-400 hover:bg-opacity-25 p-4">
        <img src={minimize} alt="minimize" className="w-4" />
      </div>
      <div className="hover:bg-gray-400 hover:bg-opacity-25 p-4">
        <img src={maximize} alt="maximize" className="w-4" />
      </div>
      <div
        className="hover:bg-red-500 p-4 [&>img]:hover:invert"
        onClick={() => closeWindow(id)}
      >
        <img src={close} alt="close" className="w-4" />
      </div>
    </div>
  );
};
const Window = ({ id, isFocused, screen, title, icon, closed_windows }) => {
  const [cursorType, setCursorType] = useState("cursor-default");
  const [closed, setClosed] = useState(false);
  const [maximized, setMaximized] = useState(false);

  const closeWindow = (id) => {
    closed_windows(id);
  };
  return (
    <>
      <Rnd
        bounds={"parent"}
        default={{
          x: 0,
          y: 0,
          width: "60%",
          height: "80%",
        }}
        minWidth="40%"
        minHeight="30%"
        dragHandleClassName="title"
      >
        <div
          // style={{ width: `${width}%`, height: `${height}%` }}
          className={
            cursorType +
            " " +
            (closed ? "closed-window" : "") +
            " " +
            (maximized ? "duration-300 rounded-none" : "  rounded-b-none") +
            // (minimized ? " opacity-0 invisible duration-200 " : "") +
            (isFocused ? " z-30 " : " z-20 notFocused") +
            " opened-window  min-w-1/4 min-h-1/4 main-window absolute window-shadow border-whhite border-opacity-40 border border-t-0 flex flex-col w-full h-full"
          }
        >
          <div className="flex  justify-between bg-white ">
            <WindowTitle title={title} icon={icon} id={id} />
            <WindowEdit id={id} closeWindow={closeWindow} />
          </div>

          <div className="overflow-hidden h-full"> {screen()}</div>
        </div>
      </Rnd>
    </>
  );
};

export default Window;

// export const WindowMainScreen = ({ screen }) => {
//   const [bgDark, setBgDark] = useState(false);
//   useEffect(() => {
//     setTimeout(() => {
//       setBgDark(true);
//     }, 3000);
//   }, []);

//   return (
//     <div
//       className={
//         "w-full flex-grow z-20 max-h-full overflow-y-auto windowMainScreen" +
//         (this.state.setDarkBg ? " bg-ub-drk-abrgn " : " bg-ub-cool-grey")
//       }
//     >
//       {addFolder ? "displayTerminal(addFolder, openApp) " : screen()}
//     </div>
//   );
// };
