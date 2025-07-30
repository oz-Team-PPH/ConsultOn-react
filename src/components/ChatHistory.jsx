// src/components/ChatHistory.jsx
import React from "react";
import ChatBubble from "./ChatBubble";

export default function ChatHistory({ history }) {
  return (
    <div
      className="border rounded p-3 bg-white"
      style={{ height: "400px", overflowY: "auto" }}
    >
      {history.map((msg, idx) => (
        <ChatBubble key={idx} message={msg} />
      ))}
    </div>
  );
}
