import React, { useEffect, useRef, useState } from "react";
import "./Alarmtime.css";
const Alarmtime = (prop) => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();
  const startTimer = () => {
    const countdown = new Date(prop.Date).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdown - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
        if (seconds === 0 && days === 0 && hours === 0 && minutes === 0) {
          alert(`it's time to do ${prop.name}!!!`);
        }
      }
    }, 1000);
  };
  var newfunction = () => {
    clearInterval(interval.current);
  };

  useEffect(() => {
    startTimer();
    return () => {
      newfunction();
    };
  }, []);

  return (
    <div className="list-date">
      <div className="list-date__day">Day: {timerDays}</div>
      <div className="list-date__month">Hour: {timerHours}</div>
      <div className="list-date__year">Min:{timerMinutes}</div>
      <div className="list-date__year">Sec:{timerSeconds}</div>
    </div>
  );
};

export default Alarmtime;
