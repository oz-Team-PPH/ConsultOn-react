// src/components/VideoConsultation.jsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import VideoGrid from './VideoGrid';
import VideoControls from './VideoControls';
import StatusIndicator from './StatusIndicator';
import ChatBubble from './ChatBubble';
import MediaPermissionRequest from './MediaPermissionRequest';

export default function VideoConsultation({ isExpert = false }) {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [muted, setMuted] = useState(false);
  const [videoOff, setVideoOff] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900);
  const [networkQuality, setNetworkQuality] = useState('Good');
  const [isOnline, setIsOnline] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [permissionsGranted, setPermissionsGranted] = useState(true);
  
  // 채팅 관련 상태
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  // 미디어 스트림 초기화 (개선된 에러 처리)
  const initializeMediaStream = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // HTTPS 환경 확인 (개선된 로직)
      if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
        throw new Error('보안을 위해 HTTPS 환경에서만 미디어 접근이 가능합니다. 개발 환경에서는 localhost를 사용하세요.');
      }

      // 미디어 접근 권한 확인
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('이 브라우저는 미디어 접근을 지원하지 않습니다. Chrome, Firefox, Safari를 사용해주세요.');
      }

      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: true, 
        video: {
          width: { ideal: 1920 },
          height: { ideal: 1080 },
          facingMode: 'user'
        }
      });
      
      setLocalStream(stream);
      setIsLoading(false);
      
      // 네트워크 품질 모니터링 시작
      monitorNetworkQuality();
      
    } catch (err) {
      console.error('미디어 스트림 초기화 실패:', err);
      
      // 사용자 친화적인 에러 메시지
      let errorMessage = '카메라와 마이크에 접근할 수 없습니다.';
      
      if (err.name === 'NotAllowedError') {
        errorMessage = '카메라와 마이크 접근 권한이 거부되었습니다. 브라우저 설정에서 권한을 허용해주세요.';
      } else if (err.name === 'NotFoundError') {
        errorMessage = '카메라나 마이크를 찾을 수 없습니다. 장치가 연결되어 있는지 확인해주세요.';
      } else if (err.name === 'NotReadableError') {
        errorMessage = '카메라나 마이크가 다른 애플리케이션에서 사용 중입니다.';
      } else if (err.message.includes('HTTPS')) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      setIsLoading(false);
    }
  }, []);

  // 네트워크 품질 모니터링 (개선된 로직)
  const monitorNetworkQuality = useCallback(() => {
    const interval = setInterval(() => {
      if (navigator.connection) {
        const connection = navigator.connection;
        let quality = 'Good';
        
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          quality = 'Poor';
        } else if (connection.effectiveType === '3g') {
          quality = 'Fair';
        }
        
        setNetworkQuality(quality);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // 미디어 스트림 정리 (개선된 로직)
  const cleanupMediaStream = useCallback((stream) => {
    if (stream && stream.getTracks) {
      stream.getTracks().forEach(track => {
        track.stop();
      });
    }
  }, []);

  // 권한이 허용된 후에만 미디어 스트림 초기화
  useEffect(() => {
    if (permissionsGranted) {
      initializeMediaStream();
    }

    return () => {
      if (localStream) {
        cleanupMediaStream(localStream);
      }
    };
  }, [permissionsGranted, initializeMediaStream, cleanupMediaStream]);

  // 타이머 (메모이제이션 포함)
  useEffect(() => {
    if (timeLeft > 0 && !isPaused) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isPaused]);

  // 녹화 타이머
  useEffect(() => {
    if (isRecording) {
      const timer = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRecording]);

  // 마이크 토글 (개선된 로직)
  const handleToggleMute = useCallback(() => {
    if (!localStream) return;
    
    try {
      const audioTrack = localStream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !muted; // 수정된 로직
        setMuted(!muted);
      }
    } catch (err) {
      console.error('마이크 토글 실패:', err);
      setError('마이크 설정을 변경할 수 없습니다.');
    }
  }, [localStream, muted]);

  // 비디오 토글 (개선된 로직)
  const handleToggleVideo = useCallback(() => {
    if (!localStream) return;
    
    try {
      const videoTrack = localStream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoOff; // 수정된 로직
        setVideoOff(!videoOff);
      }
    } catch (err) {
      console.error('비디오 토글 실패:', err);
      setError('카메라 설정을 변경할 수 없습니다.');
    }
  }, [localStream, videoOff]);

  // 화면 공유 토글 (개선된 로직)
  const handleToggleShare = useCallback(async () => {
    try {
      if (sharing) {
        // 화면 공유 중지
        setSharing(false);
      } else {
        // 화면 공유 시작
        const displayStream = await navigator.mediaDevices.getDisplayMedia({ 
          video: {
            cursor: 'always',
            displaySurface: 'monitor'
          }
        });
        setSharing(true);
        
        // 스트림 종료 이벤트 리스너
        displayStream.getVideoTracks()[0].addEventListener('ended', () => {
          setSharing(false);
        });
      }
    } catch (err) {
      console.error('화면 공유 실패:', err);
      if (err.name === 'NotAllowedError') {
        setError('화면 공유 권한이 거부되었습니다.');
      } else {
        setError('화면 공유를 시작할 수 없습니다.');
      }
    }
  }, [sharing]);

  // 상담 종료 (개선된 로직)
  const handleEnd = useCallback(() => {
    if (window.confirm("정말로 상담을 종료하시겠습니까?")) {
      console.log("상담 세션 종료");
      
      // 스트림 정리
      if (localStream) {
        cleanupMediaStream(localStream);
      }
      
      // 세션 종료 로직
      setLocalStream(null);
      setRemoteStream(null);
      
      // 페이지 이동 또는 상태 초기화
      window.history.back();
    }
  }, [localStream, cleanupMediaStream]);

  // 일시정지 (개선된 로직)
  const handlePause = useCallback(() => {
    setIsPaused(!isPaused);
    console.log(isPaused ? "상담 재개" : "상담 일시정지");
  }, [isPaused]);

  // 권한 허용 콜백
  const handlePermissionGranted = useCallback(() => {
    setPermissionsGranted(true);
    setIsLoading(false);
  }, []);

  // 권한 거부 콜백
  const handlePermissionDenied = useCallback(() => {
    setPermissionsGranted(false);
    setIsLoading(false);
  }, []);

  // 재시도 (개선된 로직)
  const handleRetry = useCallback(() => {
    setRetryCount(prev => prev + 1);
    setError(null);
    if (permissionsGranted) {
      initializeMediaStream();
    }
  }, [initializeMediaStream, permissionsGranted]);

  // 채팅 메시지 전송
  const handleSendMessage = useCallback(() => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        text: newMessage,
        sender: isExpert ? '전문가' : '고객',
        timestamp: new Date().toLocaleTimeString(),
        isExpert: isExpert
      };
      setChatMessages(prev => [...prev, message]);
      setNewMessage('');
    }
  }, [newMessage, isExpert]);

  // 채팅 토글
  const handleToggleChat = useCallback(() => {
    setShowChat(!showChat);
  }, [showChat]);

  // 녹화 시작/중지
  const handleToggleRecording = useCallback(() => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setRecordingTime(0);
    }
  }, [isRecording]);

  // 에러 메시지 (메모이제이션)
  const errorMessage = useMemo(() => {
    if (!error) return null;
    
    return (
      <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg z-10 max-w-sm">
        <div className="flex items-start space-x-2">
          <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <div className="flex-1">
            <span className="text-sm">{error}</span>
          </div>
          <button 
            onClick={() => setError(null)}
            className="text-white hover:text-gray-200 flex-shrink-0"
            aria-label="에러 메시지 닫기"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    );
  }, [error]);

  // 권한이 허용되지 않은 경우 권한 요청 화면 표시
  if (!permissionsGranted) {
    return (
      <div className="relative w-full h-screen bg-gray-900 rounded-lg overflow-hidden">
        <MediaPermissionRequest
          onPermissionGranted={handlePermissionGranted}
          onPermissionDenied={handlePermissionDenied}
        />
      </div>
    );
  }

  // 로딩 상태 (개선된 UI)
  if (isLoading) {
    return (
      <div className="relative w-full h-screen bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <div className="text-lg mb-2">미디어 스트림을 초기화하는 중...</div>
          <div className="text-sm text-gray-300">카메라와 마이크 접근 권한을 확인해주세요</div>
        </div>
      </div>
    );
  }

  // 에러 상태 (개선된 UI)
  if (error && retryCount >= 3) {
    return (
      <div className="relative w-full h-screen bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="text-white text-center max-w-md">
          <div className="text-red-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-lg mb-2">미디어 접근에 실패했습니다</div>
          <div className="text-sm text-gray-300 mb-4 px-4">{error}</div>
          <div className="space-x-2">
            <button 
              onClick={handleRetry}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              aria-label="다시 시도"
            >
              다시 시도
            </button>
            <button 
              onClick={() => window.history.back()}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
              aria-label="뒤로 가기"
            >
              뒤로 가기
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-gray-900 rounded-lg overflow-hidden">
      {/* 전문가/고객 표시 */}
      <div className="absolute top-6 left-6 z-10">
        <div className={`px-4 py-2 rounded-full text-sm font-medium ${
          isExpert 
            ? 'bg-blue-600 text-white' 
            : 'bg-green-600 text-white'
        }`}>
          {isExpert ? '전문가 모드' : '고객 모드'}
        </div>
      </div>

      {/* 녹화 상태 표시 */}
      {isRecording && (
        <div className="absolute top-6 left-40 z-10">
          <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
            녹화 중 {Math.floor(recordingTime / 60)}:{(recordingTime % 60).toString().padStart(2, '0')}
          </div>
        </div>
      )}

      <VideoGrid localStream={localStream} remoteStream={remoteStream} isExpert={isExpert} />
      
      {/* 상태 표시 (좌상단) */}
      <StatusIndicator 
        timeLeft={timeLeft} 
        networkQuality={networkQuality} 
        isOnline={isOnline}
      />
      
      {/* 컨트롤 (하단 중앙) */}
      <VideoControls
        muted={muted}
        onToggleMute={handleToggleMute}
        videoOff={videoOff}
        onToggleVideo={handleToggleVideo}
        sharing={sharing}
        onToggleShare={handleToggleShare}
        onEnd={handleEnd}
        isExpert={isExpert}
        onPause={handlePause}
        onToggleChat={handleToggleChat}
        onToggleRecording={handleToggleRecording}
        isRecording={isRecording}
      />
      
      {/* 채팅 패널 */}
      {showChat && (
        <div className="absolute top-0 right-0 w-96 h-full bg-white shadow-lg border-l">
          <div className="flex flex-col h-full">
            {/* 채팅 헤더 */}
            <div className="bg-gray-50 px-6 py-4 border-b">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">채팅</h3>
                <button 
                  onClick={handleToggleChat}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* 채팅 메시지 */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {chatMessages.map((message) => (
                <ChatBubble 
                  key={message.id}
                  message={message}
                  isOwn={message.isExpert === isExpert}
                />
              ))}
            </div>

            {/* 메시지 입력 */}
            <div className="border-t p-6">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="메시지를 입력하세요..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  전송
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* 일시정지 오버레이 */}
      {isPaused && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-3xl font-bold mb-4">상담 일시정지</div>
            <div className="text-lg">전문가가 상담을 일시정지했습니다.</div>
          </div>
        </div>
      )}

      {/* 에러 메시지 */}
      {errorMessage}
    </div>
  );
}

// PropTypes 정의
VideoConsultation.propTypes = {
  isExpert: PropTypes.bool
};
