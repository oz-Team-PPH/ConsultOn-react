// src/components/RecordingStatus.jsx
import React from "react";

export default function RecordingStatus({ progress }) {
  return (
    <div className="mb-4">
      <p>녹화 업로드 진행률: {progress}%</p>
      <div className="progress">
        <div
          className="progress-bar bg-primary"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
}
