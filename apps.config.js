// import displaySpotify from './components/apps/spotify';
// import displayVsCode from './components/apps/vscode';
// import { displayTerminal } from './components/apps/terminal';
// import { displaySettings } from './components/apps/settings';
// import { displayChrome } from './components/apps/chrome';
// import { displayTrash } from './components/apps/trash';
// import { displayGedit } from './components/apps/gedit';
// import { displayAboutVivek } from './components/apps/vivek';
// import { displayTerminalCalc } from './components/apps/calc';

import { folderUser, settings, trashEmpty } from "./src/assets/images/icons";
import {
  calc,
  chrome,
  cmd,
  gedit,
  spotify,
  vscode,
} from "./src/assets/images/themes/app";
import { displayAboutYoussef } from "./src/components/apps/AboutYoussef";
import { displayChrome } from "./src/components/apps/Chrome";
import Spotify, { displaySpotify } from "./src/components/apps/Spotify";

const apps = [
  {
    id: "chrome",
    title: "Google Chrome",
    icon: chrome,
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChrome,
  },
  {
    id: "spotify",
    title: "Spotify",
    icon: spotify,
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displaySpotify,
  },

  {
    id: "calc",
    title: "Calc",
    icon: calc,
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    // screen: displayTerminalCalc,
  },
  {
    id: "about-youssef",
    title: "About Youssef",
    icon: folderUser,
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayAboutYoussef,
  },
  {
    id: "vscode",
    title: "Visual Studio Code",
    icon: vscode,
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    // screen: displayVsCode,
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: cmd,
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    // screen: displayTerminal,
  },

  {
    id: "settings",
    title: "Settings",
    icon: settings,
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    // screen: displaySettings,
  },
  {
    id: "trash",
    title: "Trash",
    icon: trashEmpty,
    disabled: false,
    favourite: false,
    desktop_shortcut: true,
    // screen: displayTrash,
  },
  {
    id: "gedit",
    title: "Contact Me",
    icon: gedit,
    disabled: false,
    favourite: false,
    desktop_shortcut: true,
    // screen: displayGedit,
  },
];

export default apps;
