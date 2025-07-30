// src/components/QuestionInput.jsx
import React, { useState } from "react";

export default function QuestionInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mt-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="질문을 입력하세요"
        className="form-control flex-grow-1"
      />
      <button type="submit" className="btn btn-primary">
        전송
      </button>
    </form>
  );
}
