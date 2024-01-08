import { useEffect, useState } from "react";
import Lock_screen from "./screen/Lock_screen";
import BootingScreen from "./screen/Booting_screen";

const Windows11 = () => {
  const [screenLocked, setScreenLocked] = useState(true);
  const [shutDownScreen, setShutDownScreen] = useState(false);
  const [bootingScreen, setBootingScreen] = useState(true);
  const [bgImageName, setBgImageName] = useState("wall-1");
  const setTimeOutBootScreen = () => {
    setTimeout(() => {
      setBootingScreen(false);
    }, 2000);
  };
  // const lockScreen = () => {
  //   document.getElementById("status-bar").blur();
  //   setTimeout(() => {
  //     setScreenLocked(true);
  //   }, 100);
  //   localStorage.setItem("screen-locked", true);
  // };

  const unLockScreen = () => {
    window.removeEventListener("click", unLockScreen);
    window.removeEventListener("keypress", unLockScreen);
    setScreenLocked(false);
    localStorage.setItem("screen-locked", false);
  };
  const turnOn = () => {
    setShutDownScreen(false);
    setBootingScreen(false);
    setTimeOutBootScreen();
    localStorage.setItem("shut-down", false);
  };
  const shutDownAction = () => {
    document.getElementById("status-bar").blur();
    setShutDownScreen(true);
    localStorage.setItem("shut-down", true);
  };

  const getLocalData = () => {
    // Get Previously selected Background Image
    let bgImageName = localStorage.getItem("bg-image");
    if (bgImageName !== null && bgImageName !== undefined) {
      setBgImageName(bgImageName);
    }

    let bootingScreen = localStorage.getItem("booting_screen");
    if (bootingScreen !== null && bootingScreen !== undefined) {
      // user has visited site before
      setBootingScreen(false);
    } else {
      // user is visiting site for the first time
      localStorage.setItem("booting_screen", false);
      setTimeOutBootScreen();
    }

    // get shutdown state
    let shutDown = localStorage.getItem("shut-down");
    if (shutDown !== null && shutDown !== undefined && shutDown === "true")
      shutDownAction();
    else {
      // Get previous lock screen state
      let screenLocked = localStorage.getItem("screen-locked");
      if (screenLocked !== null && screenLocked !== undefined) {
        setScreenLocked(() => ("true" ? true : false));
      }
    }
  };

  useEffect(() => {
    getLocalData();
    return () => {};
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden " id="monitor-screen">
      <Lock_screen
        bgImgName={bgImageName}
        isLocked={screenLocked}
        unLockScreen={unLockScreen}
      />
      <BootingScreen
        isShutDown={shutDownScreen}
        turnOn={turnOn}
        visible={bootingScreen}
      />
    </div>
  );
};

export default Windows11;
