// src/components/VideoGrid.jsx
import React from 'react';
import ParticipantVideo from './ParticipantVideo';

export default function VideoGrid({ localStream, remoteStream, isExpert = false }) {
  return (
    <div className="relative w-full h-screen bg-gray-900 rounded-lg overflow-hidden">
      {/* 상대방 화면 (큰 화면) */}
      <div className="w-full h-full">
        <ParticipantVideo 
          stream={remoteStream} 
          label={isExpert ? "고객" : "전문가"} 
          isRemote 
        />
      </div>
      
      {/* 나의 화면 (작은 화면, 우상단) */}
      <div className="absolute top-8 right-8 w-64 h-48 bg-gray-800 rounded-lg overflow-hidden border-4 border-white shadow-2xl">
        <ParticipantVideo 
          stream={localStream} 
          label={isExpert ? "전문가" : "고객"} 
          isLocal 
        />
      </div>
    </div>
  );
}
