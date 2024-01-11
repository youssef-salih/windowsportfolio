import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import { close, maximize, minimize } from "../../assets/images/icons";

const WindowTitle = ({ title }) => {
  return (
    <div
      className={
        "  relative bg-white border-t-2 border-white border-opacity-5  px-3 text-black w-full select-none flex justify-between"
      }
    >
      <div className="p-4">{title}</div>
      <div className="flex gap-x-2    items-center  ">
        <div className="hover:bg-ub-gray p-4">
          <img src={minimize} alt="minimize" className="w-4  " />
        </div>
        <div className="hover:bg-ub-gray p-4">
          <img src={maximize} alt="maximize" className="w-4  " />
        </div>
        <div className="hover:bg-red-500 p-4 [&>img]:hover:invert">
          <img src={close} alt="close" className="w-4  " />
        </div>
      </div>
    </div>
  );
};

const Window = ({ minimized, isFocused }) => {
  const [id, setId] = useState(null);
  const [startX, setStartX] = useState(60);
  const [startY, setStartY] = useState(10);

  const [cursorType, setCursorType] = useState("cursor-default");
  const [width, setWidth] = useState(60);
  const [height, setHeight] = useState(85);
  const [closed, setClosed] = useState(false);
  const [maximized, setMaximized] = useState(false);

  const [parentSize, setParentSize] = useState({
    height: 100,
    width: 100,
  });

  return (
    <Rnd
      bounds={"parent"}
      default={{
        x: 0,
        y: 0,
        width: "60%",
        height: "80%",
      }}
      minWidth="20%"
      minHeight="30%"
    >
      <div
        // style={{ width: `${width}%`, height: `${height}%` }}
        className={
          cursorType +
          " " +
          (closed ? "closed-window" : "") +
          " " +
          (maximized ? "duration-300 rounded-none" : "  rounded-b-none") +
          (minimized ? " opacity-0 invisible duration-200 " : "") +
          (isFocused ? " z-30 " : " z-20 notFocused") +
          " opened-window overflow-hidden min-w-1/4 min-h-1/4 main-window absolute window-shadow border-whhite border-opacity-40 border border-t-0 flex flex-col w-full h-full"
        }
      >
        <WindowTitle title={"hello"} />
      </div>
    </Rnd>
  );
};

export default Window;

export const WindowMainScreen = ({ screen }) => {
  const [bgDark, setBgDark] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setBgDark(true);
    }, 3000);
  }, []);

  return (
    <div
      className={
        "w-full flex-grow z-20 max-h-full overflow-y-auto windowMainScreen" +
        (this.state.setDarkBg ? " bg-ub-drk-abrgn " : " bg-ub-cool-grey")
      }
    >
      {addFolder ? "displayTerminal(addFolder, openApp) " : screen()}
    </div>
  );
};
