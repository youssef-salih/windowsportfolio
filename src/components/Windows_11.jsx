import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  screenOn,
  screenOff,
  screenLockedValue,
  shutDownScreenValue,
  shutOnScreen,
  shutOffScreen,
} from "../features/power/stateSlice";
import Lock_screen from "./screen/Lock_screen";
import BootingScreen from "./screen/Booting_screen";
import Navbar from "./screen/Navbar";
import Desktop from "./screen/Desktop";
import apps from "../../apps.config";
import Window from "./base/Window";

const Windows11 = () => {
  const dispatch = useDispatch();
  // states from store
  // lock screen
  const screenLocked = useSelector(screenLockedValue);
  const shutDownScreen = useSelector(shutDownScreenValue);

  const [bootingScreen, setBootingScreen] = useState(true);
  const [bgImageName, setBgImageName] = useState("wall-1");
  const setTimeOutBootScreen = () => {
    setTimeout(() => {
      setBootingScreen(false);
    }, 8000);
  };
  const lockScreen = () => {
    document.getElementById("status-bar").blur();
    setTimeout(() => {
      dispatch(screenOff());
    }, 100);
    localStorage.setItem("screen-locked", true);
  };

  const unLockScreen = () => {
    window.removeEventListener("keypress", unLockScreen);
    dispatch(screenOn());
    localStorage.setItem("screen-locked", false);
  };
  const turnOn = () => {
    // setShutDownScreen(false);
    dispatch(shutOnScreen());
    setBootingScreen(false);
    setTimeOutBootScreen();
    localStorage.setItem("shut-down", false);
  };
  const shutDownAction = () => {
    document.getElementById("status-bar").blur();
    dispatch(shutOffScreen());
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
      localStorage.setItem("booting_screen", true);
      setTimeOutBootScreen();
    }

    // get shutdown state
    let shutDown = localStorage.getItem("shut-down");
    if (shutDown !== null && shutDown !== undefined && shutDown === "true") {
      shutDownAction();
    } else {
      // Get previous lock screen state
      let screenLocked = localStorage.getItem("screen-locked");
      if (screenLocked !== null && screenLocked !== undefined) {
        // setScreenLocked(() => ("true" ? true : false));
        screenLocked === "true" ? true : false;
      }
    }
  };

  useEffect(() => {
    getLocalData();
    localStorage.setItem("bg-image", "wall-1");
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
      <Navbar lockScreen={lockScreen} shutDown={turnOn} />
      <Desktop bgImageName={bgImageName} />
    </div>
  );
};

export default Windows11;
