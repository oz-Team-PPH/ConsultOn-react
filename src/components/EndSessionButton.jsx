// src/components/EndSessionButton.jsx
import React from "react";

export default function EndSessionButton({ onEnd }) {
  return (
    <button onClick={onEnd} className="mt-2 btn btn-danger">
      상담 종료
    </button>
  );
}
