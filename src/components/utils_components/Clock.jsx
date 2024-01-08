import { useState, useEffect } from "react";

const Clock = ({ onlyTime, onlyDay, mini }) => {
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
  let month = mini
    ? (currentTime.getMonth() + 1).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })
    : monthList[currentTime.getMonth()];

  let date = currentTime.getDate().toLocaleString();
  let year = currentTime.getFullYear();

  if (minute.toLocaleString().length === 1) {
    minute = "0" + minute;
  }

  let displayTime;
  let displayDate;
  if (onlyTime) {
    displayTime = hour + ":" + minute + " ";
  } else if (onlyDay) {
    displayTime = day + ", " + month + " " + date;
  } else if (mini) {
    displayTime = hour + ":" + minute;
    displayDate = date + "/" + month + "/" + year;
  } else {
    displayTime = day + " " + month + " " + date + " " + hour + ":" + minute;
  }

  return (
    <>
      {mini ? (
        <div className="flex flex-col items-center">
          <span>{displayTime}</span>
          <span>{displayDate}</span>
        </div>
      ) : (
        <span>{displayTime}</span>
      )}
    </>
  );
};

export default Clock;
