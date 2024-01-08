import { useState, useEffect } from "react";

const Clock = ({ onlyTime, onlyDay }) => {
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [state, setState] = useState({
    currentTime: new Date(),
  });

  useEffect(() => {
    const updateTime = setInterval(() => {
      setState({ currentTime: new Date() });
    }, 10 * 1000);

    return () => {
      clearInterval(updateTime);
    };
  }, []);

  const { currentTime } = state;

  let day = dayList[currentTime.getDay()];
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();
  let month = monthList[currentTime.getMonth()];
  let date = currentTime.getDate().toLocaleString();

  if (minute.toLocaleString().length === 1) {
    minute = "0" + minute;
  }

  let displayTime;
  if (onlyTime) {
    displayTime = hour + ":" + minute + " ";
  } else if (onlyDay) {
    displayTime = day + ", " + month + " " + date;
  } else {
    displayTime = day + " " + month + " " + date + " " + hour + ":" + minute;
  }

  return <span>{displayTime}</span>;
};

export default Clock;
