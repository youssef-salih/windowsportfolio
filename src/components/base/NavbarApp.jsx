import React, { useEffect, useState } from "react";

const NavbarApp = ({
  id,
  icon,
  title,
  isMinimized,
  isClose,
  isFocus,
  open,
}) => {
  const [showTitle, setShowTitle] = useState(false);
  const [scaleImage, setScaleImage] = useState(false);

  const scaleImages = () => {
    setTimeout(() => {
      setScaleImage(false);
    }, 1000);
    setScaleImage(true);
  };
  // const openApp = () => {
  //   if (!isMinimized[id] && isClose[id]) {
  //     scaleImages();
  //   }
  //   // openAppProp(id);
  //   setShowTitle(false);
  // };

  return (
    <div
      tabIndex="0"
      onClick={() => open(id)}
      className={
        (isClose[id] === false && isFocus[id]
          ? "bg-white bg-opacity-10 "
          : "") +
        " w-auto p-2 outline-none relative transition hover:bg-white hover:bg-opacity-40 rounded m-1"
      }
      id={"sidebar-" + id}
    >
      <img
        width="28px"
        height="28px"
        className="w-7"
        src={icon}
        alt="windows App Icon"
      />
      <img
        className={
          (scaleImage ? " scale " : "") +
          " scalable-app-icon w-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }
        src={icon}
        alt=""
      />
      {isClose[id] === false ? (
        <div className=" w-1 h-1 absolute left-0 top-1/2 bg-ub-orange rounded-sm"></div>
      ) : null}
      {/* <div
        className={
          (showTitle ? " visible " : " invisible ") +
          " w-max py-0.5 px-1.5 absolute -top-full ml-3 m-1 text-ubt-grey text-opacity-90 text-sm bg-ub-gray  border-gray-400 border border-opacity-40 rounded-md"
        }
      >
        {title}
      </div> */}
    </div>
  );
};

export default NavbarApp;
