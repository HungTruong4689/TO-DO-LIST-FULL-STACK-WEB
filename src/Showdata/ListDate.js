import React from "react";
import "./ListDate.css";
const ListDate = (prop) => {
  const month = prop.Date.toLocaleString("en-US", { month: "long" });
  const day = prop.Date.toLocaleString("en-US", { day: "2-digit" });
  const year = prop.Date.getFullYear();
  const time = prop.Date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="list-date">
      <div className="list-date__day">{day}</div>
      <div className="list-date__month">{month}</div>
      <div className="list-date__year">{year}</div>
      <div className="list-date__time">{time}</div>
    </div>
  );
};

export default ListDate;
