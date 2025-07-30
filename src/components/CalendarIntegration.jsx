// src/components/CalendarIntegration.jsx
import React from "react";

export default function CalendarIntegration() {
  const handleConnect = () => {
    // OAuth 흐름
    console.log("구글 캘린더 연동 시도");
  };

  return (
    <div className="mb-4">
      <button onClick={handleConnect} className="btn btn-primary">
        구글 캘린더 연동
      </button>
    </div>
  );
}
