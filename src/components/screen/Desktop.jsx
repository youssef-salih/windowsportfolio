import React from "react";
import BackgroundImage from "../utils_components/BackgroundImages";
import Window from "../base/Window";
import apps from "../../../apps.config";

const Desktop = ({ bgImageName }) => {
  const renderWindows = () => {
    let windowsJsx = [];
    apps.forEach((app, index) => {
      if (app.screen) {
        const props = {
          title: app.title,
          id: app.id,
          screen: app.screen,
          // addFolder: this.addToDesktop,
          // closed: this.closeApp,
          // openApp: this.openApp,
          // focus: this.focus,
          // isFocused: this.state.focused_windows[app.id],
          // hideSideBar: this.hideSideBar,
          // hasMinimised: this.hasMinimised,
          // minimized: this.state.minimized_windows[app.id],
          // changeBackgroundImage: this.props.changeBackgroundImage,
          // bg_image_name: this.props.bg_image_name,
        };

        windowsJsx.push(<Window key={index} title={app.title} screen={app.screen} icon={app.icon}  />);
      }
    });
    return windowsJsx;
  };

  return (
    <div className=" h-full w-full flex flex-col items-end justify-start content-start flex-wrap-reverse  bg-transparent relative overflow-hidden overscroll-none window-parent">
      <BackgroundImage img={bgImageName} />
      <div
        className="absolute h-full w-full bg-transparent"
        data-context="desktop-area"
      >
        {renderWindows()}
      </div>
    </div>
  );
};

export default Desktop;
