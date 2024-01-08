import React, { useState } from "react";
import Clock from "../utils_components/Clock";
import { windowsBoot } from "../../assets/images/icons";

const Navbar = ({ shutDown, lockScreen }) => {
  const [statusCard, setStatusCard] = useState(false);
  return (
    <div className="main-navbar-vp absolute bottom-0 right-0 w-screen shadow-md flex flex-nowrap justify-between items-center bg-ub-gray text-ubt-gray text-sm select-none z-50">
      <div
        id="status-bar"
        tabIndex="0"
        onFocus={() => {
          setStatusCard(true);
        }}
        // removed onBlur from here
        className={
          "relative pr-3 pl-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-gray-400 py-1 "
        }
      >
        {/* <Status />
        <StatusCard
          shutDown={shutDown}
          lockScreen={lockScreen}
          visible={statusCard}
          toggleVisible={() => {
            // this prop is used in statusCard component in handleClickOutside callback using react-onclickoutside
            setStatusCard(false);
          }}
        /> */}
      </div>
      <div
        tabIndex="0"
        className={
          "pl-3 pr-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-gray-400 py-1 "
        }
      >
        <img src={windowsBoot} alt="" className="w-8" />
      </div>
      <div
        tabIndex="0"
        className={
          "pl-2 pr-2 text-xs md:text-sm outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-gray-400 py-1"
        }
      >
        <Clock mini />
      </div>
    </div>
  );
};

export default Navbar;
