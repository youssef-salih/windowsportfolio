import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import { useSelector, useDispatch } from "react-redux";
import {
  close,
  maximize,
  maximize2,
  minimize,
} from "../../assets/images/icons";
import Chrome from "../apps/Chrome";
import Spotify from "../apps/Spotify";
import {
  closeApp,
  focusApp,
  focused_windowsValue,
  maximizeApp,
  maximized_windowsValue,
  minimizeApp,
  minimized_windowsValue,
} from "../../features/apps/appsSlice";

const WindowTitle = ({ id, title, icon }) => {
  return (
    <div className="flex  w-full">
      <div
        className={
          "title relative px-3 text-black w-full select-none flex gap-x-3 items-center"
        }
      >
        <img src={icon} alt={title} className="size-4" />
        <p className="font-semibold text-sm">{title}</p>
      </div>
    </div>
  );
};
const WindowEdit = ({ id, checkMinimised, checkMaximized }) => {
  const minimized = useSelector(minimized_windowsValue);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-x-2 items- justify-between">
      <div
        className="hover:bg-gray-400 hover:bg-opacity-25 p-4"
        onClick={() => {
          dispatch(minimizeApp(id));
          checkMinimised(id);
        }}
      >
        <img src={minimize} alt="minimize" className="w-4" />
      </div>

      <div
        className="hover:bg-gray-400 hover:bg-opacity-25 p-4"
        onClick={() => {
          dispatch(maximizeApp(id));
          checkMaximized(id);
        }}
      >
        <img src={maximize} alt="maximize" className="w-4" />
      </div>

      <div
        className="hover:bg-red-500 p-4 [&>img]:hover:invert"
        onClick={() => dispatch(closeApp(id))}
      >
        <img src={close} alt="close" className="w-4" />
      </div>
    </div>
  );
};

function useWindowSize() {
  const [state, setState] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  useEffect(() => {
    const handler = () => {
      setState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      });
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return state;
}

const Window = ({ id, screen, title, icon }) => {
  const focused_windows = useSelector(focused_windowsValue);
  const [isfoc, setIsfoc] = useState(false);

  const dispatch = useDispatch();

  const { winWidth, winHeight } = useWindowSize();
  const [width, setWidth] = useState("60%");
  const [height, setHeight] = useState("80%");
  const [cursorType, setCursorType] = useState("cursor-default");
  const [closed, setClosed] = useState(false);
  const [minim, setMinim] = useState(false);
  const [maxi, setMaxi] = useState(false);
  const [position, setPosition] = useState({
    x: winWidth / 6,
    y: winHeight / 15,
  });

  const minimized = useSelector(minimized_windowsValue);
  const maximized = useSelector(maximized_windowsValue);

  const checkMinimised = (id) => {
    if (minimized[id] === true) {
      setMinim(true);
    } else {
      setMinim(false);
    }
  };

  const checkMaximized = (id) => {
    if (maximized[id] === false) {
      setMaxi(true);
      setPosition({ x: 0, y: 0 });
    } else {
      setMaxi(false);
      setPosition({ x: winWidth / 6, y: winHeight / 15 });
    }
  };

  const handleDragStop = (e, d) => {
    // Update the position state after dragging stops
    setPosition({ x: d.x, y: d.y });
  };

  const handleMouseDown = (e) => {
    e.stopPropagation();
    dispatch(focusApp(id));
    setIsfoc(true);
  };

  useEffect(() => {
    checkMinimised(id);
    setIsfoc(focused_windows[id] === true);
  }, [minimized, focused_windows]);

  return (
    <Rnd
      bounds={"parent"}
      size={{ width: maxi ? "100%" : width, height: maxi ? "100%" : height }}
      position={position}
      onDragStop={handleDragStop}
      onResizeStop={(e, direction, ref, delta, position) => {
        setWidth(ref.style.width);
        setHeight(ref.style.height);
      }}
      onMouseDown={handleMouseDown}
      minWidth="40%"
      minHeight="30%"
      dragHandleClassName={`title`}
      disableDragging={maxi}
      className={
        "duration-75 " +
        (minim
          ? " opacity-0 invisible -translate-y-32 "
          : "opacity-1 visible ") +
        (maxi ? " !duration-300 " : " ") +
        (isfoc ? `z-[49]` : `z-[30]`)
      }
      id={`window-${id}`}
    >
      <div
        className={
          cursorType +
          " " +
          (closed ? "closed-window" : "") +
          " opened-window min-w-1/4 min-h-1/4 main-window absolute window-shadow border-whhite border-opacity-40 border border-t-0 flex flex-col w-full h-full"
        }
      >
        <div className="flex justify-between bg-white border-b-2 border-gray-500 border-opacity-30">
          <WindowTitle title={title} icon={icon} id={id} />
          <WindowEdit
            id={id}
            maxi={maxi}
            checkMinimised={checkMinimised}
            checkMaximized={checkMaximized}
          />
        </div>

        <div className="overflow-hidden h-full bg-white">{screen()}</div>
      </div>
    </Rnd>
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
