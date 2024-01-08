import { wall1 } from "../../assets/images/bg";
import Clock from "../utils_components/Clock";

// eslint-disable-next-line react/prop-types
const Lock_screen = ({ isLocked, bgImgName, unLockScreen }) => {
  const wallpapers = {
    "wall-1": wall1,
  };

  if (isLocked) {
    window.addEventListener("click", unLockScreen);
    window.addEventListener("keypress", unLockScreen);
  }
  return (
    <div
      id="ubuntu-lock-screen"
      style={{ zIndex: "100" }}
      className={
        (isLocked
          ? " visible translate-y-0 "
          : " invisible -translate-y-full ") +
        " absolute outline-none bg-black bg-opacity-90 transform duration-500 select-none top-0 right-0 overflow-hidden m-0 p-0 h-screen w-screen"
      }
    >
      <div
        style={{
          backgroundImage: `url(${wallpapers[bgImgName]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "center",
        }}
        className="absolute top-0 left-0 w-full h-full transform z-20 blur-md "
      ></div>
      <div className="w-full h-full z-50 overflow-hidden relative flex flex-col justify-center items-center text-white -translate-y-1/4">
        <div className=" text-7xl font-bold">
          <Clock onlyTime={true} />
        </div>
        <div className="mt-4 text-xl font-medium">
          <Clock onlyDay={true} />
        </div>
        {/* <div className=" mt-16 text-base">
          Click or Press a key to unlock
        </div> */}
      </div>
    </div>
  );
};

export default Lock_screen;
