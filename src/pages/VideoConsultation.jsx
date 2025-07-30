// src/pages/VideoConsultation.jsx
import React, { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import ConsultationTimer from "../components/ConsultationTimer";
import EndSessionButton from "../components/EndSessionButton";

export default function VideoConsultation() {
  const [sessionEnded, setSessionEnded] = useState(false);

  const handleEndSession = () => {
    if (window.confirm("정말로 상담을 종료하시겠습니까?")) {
      setSessionEnded(true);
      console.log("상담 세션 종료");
    }
  };

  const handleTimerEnd = () => {
    alert("상담 시간이 종료되었습니다.");
    setSessionEnded(true);
  };

  if (sessionEnded) {
    return (
      <div className="container mx-auto p-4">
        <div className="alert alert-info" role="alert">
          <h4 className="alert-heading">상담이 종료되었습니다</h4>
          <p>상담 요약과 후속 작업이 준비되면 알려드리겠습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="h3 mb-4">화상 상담</h2>
      <VideoPlayer />
      <ConsultationTimer duration={900} onEnd={handleTimerEnd} />
      <EndSessionButton onEnd={handleEndSession} />
    </div>
  );
}
