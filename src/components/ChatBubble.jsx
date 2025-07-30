// src/components/ChatBubble.jsx
import React from "react";

export default function ChatBubble({ message }) {
  const isUser = message.type === "user";

  return (
    <div
      className={`mb-2 d-flex ${
        isUser ? "justify-content-end" : "justify-content-start"
      }`}
    >
      <div
        className={`p-2 rounded ${
          isUser ? "bg-primary text-white" : "bg-light"
        }`}
        style={{ maxWidth: "300px" }}
      >
        {message.text}
      </div>
    </div>
  );
}
