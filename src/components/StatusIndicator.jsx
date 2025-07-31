// src/components/StatusIndicator.jsx
import React from 'react';
import PropTypes from 'prop-types';

export default function StatusIndicator({ timeLeft, networkQuality, isOnline = true }) {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${('0' + remainingSeconds).slice(-2)}`;
  };

  return (
    <div 
      className="absolute top-4 left-4 flex items-center space-x-3"
      role="status"
      aria-live="polite"
    >
      {/* 온라인/오프라인 상태 */}
      <div 
        className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
          isOnline 
            ? 'bg-green-600 text-white' 
            : 'bg-red-600 text-white'
        }`}
        aria-label={`연결 상태: ${isOnline ? '온라인' : '오프라인'}`}
      >
        <div 
          className={`w-2 h-2 rounded-full ${
            isOnline ? 'bg-white' : 'bg-white'
          }`}
          aria-hidden="true"
        ></div>
        <span>{isOnline ? '온라인' : '오프라인'}</span>
      </div>
      
      {/* 네트워크 품질 */}
      <div 
        className="bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs"
        aria-label={`네트워크 품질: ${networkQuality}`}
      >
        네트워크: {networkQuality}
      </div>
      
      {/* 남은 시간 */}
      <div 
        className="bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs"
        aria-label={`남은 시간: ${formatTime(timeLeft)}`}
      >
        {formatTime(timeLeft)}
      </div>
    </div>
  );
}

StatusIndicator.propTypes = {
  timeLeft: PropTypes.number.isRequired,
  networkQuality: PropTypes.string.isRequired,
  isOnline: PropTypes.bool
};
