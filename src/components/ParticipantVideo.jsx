// src/components/ParticipantVideo.jsx
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ParticipantVideo({ stream, label, isLocal, isRemote }) {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className={`relative w-full h-full ${isLocal ? 'opacity-90' : ''}`}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={isLocal}
        className="w-full h-full object-cover"
        aria-label={`${label} 비디오`}
      />
      <span 
        className={`absolute bottom-2 left-2 px-2 py-1 text-xs font-medium rounded ${
          isRemote 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-800 text-white'
        }`}
        aria-label={`${label} 라벨`}
      >
        {label}
      </span>
    </div>
  );
}

ParticipantVideo.propTypes = {
  stream: PropTypes.object,
  label: PropTypes.string.isRequired,
  isLocal: PropTypes.bool,
  isRemote: PropTypes.bool
};
