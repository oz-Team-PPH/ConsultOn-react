// src/components/VideoToggleButton.jsx
import React from 'react';
import PropTypes from 'prop-types';

export default function VideoToggleButton({ off, onClick, ...props }) {
  return (
    <button 
      onClick={onClick} 
      className={`p-2 rounded-full transition-colors flex items-center space-x-1 ${
        off ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-600 hover:bg-gray-700'
      } text-white`}
      title={off ? "비디오 켜기" : "비디오 끄기"}
      aria-label={off ? "비디오 켜기" : "비디오 끄기"}
      {...props}
    >
      {off ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          <path d="M3 3l14 14" stroke="currentColor" strokeWidth="2" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      )}
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  );
}

VideoToggleButton.propTypes = {
  off: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
