// src/components/VideoGrid.jsx
import React from 'react';
import ParticipantVideo from './ParticipantVideo';

export default function VideoGrid({ localStream, remoteStream }) {
  return (
    <div className="relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden">
      {/* 상대방 화면 (큰 화면) */}
      <div className="w-full h-full">
        <ParticipantVideo stream={remoteStream} label="상대방" isRemote />
      </div>
      
      {/* 나의 화면 (작은 화면, 우상단) */}
      <div className="absolute top-4 right-4 w-32 h-24 bg-gray-800 rounded-lg overflow-hidden border-2 border-white shadow-lg">
        <ParticipantVideo stream={localStream} label="나" isLocal />
      </div>
    </div>
  );
}
