// src/components/ConsultationTimer.jsx
import React, { useEffect, useState } from "react";

export default function ConsultationTimer({ duration, onEnd }) {
  const [time, setTime] = useState(duration);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive || time <= 0) {
      if (time <= 0) {
        onEnd();
      }
      return;
    }

    const timer = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(timer);
  }, [time, isActive, onEnd]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? `0${sec}` : sec}`;
  };

  const handlePause = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="text-center my-3">
      <div className="alert alert-info d-inline-block">
        <strong>남은 시간: {formatTime(time)}</strong>
        <button
          onClick={handlePause}
          className="btn btn-sm btn-outline-secondary ms-2"
        >
          {isActive ? "일시정지" : "재개"}
        </button>
      </div>
    </div>
  );
}
