// src/components/ChatBubble.jsx
import React from 'react';
import PropTypes from 'prop-types';

export default function ChatBubble({ message, isOwn }) {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs px-3 py-2 rounded-lg ${
        isOwn 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-200 text-gray-900'
      }`}>
        <div className="text-sm">{message.text}</div>
        <div className={`text-xs mt-1 ${
          isOwn ? 'text-blue-100' : 'text-gray-500'
        }`}>
          {message.timestamp}
        </div>
      </div>
    </div>
  );
}

ChatBubble.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    isExpert: PropTypes.bool.isRequired
  }).isRequired,
  isOwn: PropTypes.bool.isRequired
};
