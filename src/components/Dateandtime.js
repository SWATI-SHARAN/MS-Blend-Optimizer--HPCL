import React, { useState, useEffect } from "react";

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleString();
  };

  return (
    <div className="date-time-display">
      {formatDate(currentTime)}
    </div>
  );
};

export default DateTimeDisplay;
