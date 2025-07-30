// src/components/RecordingPlayer.jsx
import React from "react";

export default function RecordingPlayer({ src }) {
  return (
    <div className="w-100 mb-4">
      <video controls className="w-100 rounded">
        <source src={src} type="video/mp4" />
        해당 브라우저는 video 태그를 지원하지 않습니다.
      </video>
    </div>
  );
}
