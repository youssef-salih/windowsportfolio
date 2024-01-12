import React, { useEffect, useState } from "react";
import { chrome_home, chrome_refresh } from "../../assets/images/themes/app";

const Chrome = () => {
  const [home_url, setHome_url] = useState(
    "https://www.google.com/webhp?igu=1"
  );
  const [url, setUrl] = useState("https://www.google.com/webhp?igu=1");
  const [display_url, setDisplay_url] = useState("https://www.google.com");
  useEffect(() => {
    let lastVisitedUrl = localStorage.getItem("chrome-url");
    let lastDisplayedUrl = localStorage.getItem("chrome-display-url");
    if (lastVisitedUrl !== null && lastVisitedUrl !== undefined) {
      setUrl(lastVisitedUrl);
      setDisplay_url(lastDisplayedUrl);
      refreshChrome();
    }
    return () => {};
  }, []);

  const storeVisitedUrl = (url, display_url) => {
    localStorage.setItem("chrome-url", url);
    localStorage.setItem("chrome-display-url", display_url);
  };

  const refreshChrome = () => {
    document.getElementById("chrome-screen").src += "";
  };
  const goToHome = () => {
    setUrl(home_url);
    setDisplay_url("https://www.google.com");
    refreshChrome();
    localStorage.setItem("chrome-display-url", display_url);
    localStorage.setItem("chrome-url", url);
  };

  const checkKey = (e) => {
    if (e.key === "Enter") {
      let url = e.target.value;
      let display_url = "";

      url = url.trim();
      if (url.length === 0) return;

      if (url.indexOf("http://") !== 0 && url.indexOf("https://") !== 0) {
        url = "https://" + url;
      }

      url = encodeURI(url);
      display_url = url;
      if (url.includes("google.com")) {
        url = "https://www.google.com/webhp?igu=1";
        display_url = "https://www.google.com";
      }
      setUrl(url);
      setDisplay_url(url);
      storeVisitedUrl(url, display_url);
      document.getElementById("chrome-url-bar").blur();
    }
  };

  const handleDisplayUrl = (e) => {
    setDisplay_url(e.target.value);
  };

  const displayUrlBar = () => {
    return (
      <div className="w-full pt-0.5 pb-1 flex justify-start items-center text-white text-sm border-b border-gray-900">
        <div
          onClick={refreshChrome}
          className=" ml-2 mr-1 flex justify-center items-center rounded-full bg-gray-50 bg-opacity-0 hover:bg-opacity-10"
        >
          <img
            className="w-5"
            src={chrome_refresh}
            alt="Ubuntu Chrome Refresh"
          />
        </div>
        <div
          onClick={goToHome}
          className=" mr-2 ml-1 flex justify-center items-center rounded-full bg-gray-50 bg-opacity-0 hover:bg-opacity-10"
        >
          <img className="w-5" src={chrome_home} alt="Ubuntu Chrome Home" />
        </div>
        <input
          onKeyDown={checkKey}
          onChange={handleDisplayUrl}
          value={display_url}
          id="chrome-url-bar"
          className="outline-none bg-ub-grey rounded-full pl-3 py-0.5 mr-3 w-5/6 text-gray-300 focus:text-white"
          type="url"
          spellCheck={false}
          autoComplete="off"
        />
      </div>
    );
  };
  return (
    <div className="h-full w-full flex flex-col bg-ub-cool-grey">
      {displayUrlBar()}
      <iframe
        src={url}
        className="flex-grow"
        id="chrome-screen"
        frameBorder="0"
        title="Ubuntu Chrome Url"
      ></iframe>
    </div>
  );
};

export default Chrome;

export const displayChrome = () => {
  return <Chrome> </Chrome>;
};
