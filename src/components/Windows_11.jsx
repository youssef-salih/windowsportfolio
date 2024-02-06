import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  screenOn,
  screenOff,
  shutOnScreen,
  shutOffScreen,
  bgImageValue,
  changeBg,
} from "../features/power/stateSlice";
import Lock_screen from "./screen/Lock_screen";
import BootingScreen from "./screen/Booting_screen";
import Navbar from "./screen/Navbar";
import Desktop from "./screen/Desktop";
import {
  brightnessValue,
  changeBrightness,
} from "../features/status/statusSlice";

const Windows11 = () => {
  const dispatch = useDispatch();

  const [bootingScreen, setBootingScreen] = useState(true);

  const bgImage = useSelector(bgImageValue);
  const brightnessLevel = useSelector(brightnessValue);
  const setTimeOutBootScreen = () => {
    setTimeout(() => {
      setBootingScreen(false);
    }, 3000);
  };
  const lockScreen = () => {
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
    dispatch(shutOffScreen());
    localStorage.setItem("shut-down", true);
  };

  const getLocalData = () => {
    // Get Previously selected Background Image
    let bgImageName = localStorage.getItem("bg-image");
    if (bgImageName !== null && bgImageName !== undefined) {
      dispatch(changeBg(bgImageName));
    } else {
      localStorage.setItem("bg-image", bgImage);
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

    let brightnessLevel = localStorage.getItem("brightness-level");
    if (brightnessLevel !== null && brightnessLevel !== undefined) {
      dispatch(changeBrightness(brightnessLevel));
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
    return () => {};
  }, []);

  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{
        filter: `brightness(${brightnessLevel <= 15 ? 10 : brightnessLevel}%)`,
      }}
      id="monitor-screen"
    >
      <Lock_screen unLockScreen={unLockScreen} />
      <BootingScreen turnOn={turnOn} visible={bootingScreen} />
      <Navbar lockScreen={lockScreen} />
      <Desktop />
    </div>
  );
};

export default Windows11;
