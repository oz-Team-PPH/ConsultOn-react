// src/components/VideoControls.jsx
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import MuteButton from './MuteButton';
import VideoToggleButton from './VideoToggleButton';
import ScreenShareButton from './ScreenShareButton';
import FileShareButton from './FileShareButton';
import EndSessionButton from './EndSessionButton';

export default function VideoControls({
  muted, onToggleMute,
  videoOff, onToggleVideo,
  sharing, onToggleShare,
  onEnd, isExpert = false, onPause = null,
  onToggleChat = null, onToggleRecording = null, isRecording = false
}) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = useCallback((dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const handleDropdownClose = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  // 외부 클릭 시 드롭다운 닫기
  const handleOutsideClick = useCallback((event) => {
    if (!event.target.closest('.dropdown-container')) {
      setActiveDropdown(null);
    }
  }, []);

  // ESC 키로 드롭다운 닫기
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-2xl"
      role="toolbar"
      aria-label="화상상담 컨트롤"
    >
      {/* 마이크 컨트롤 */}
      <div className="relative dropdown-container">
        <MuteButton 
          muted={muted} 
          onClick={() => handleDropdownToggle('mic')}
          aria-expanded={activeDropdown === 'mic'}
          aria-haspopup="true"
        />
        {activeDropdown === 'mic' && (
          <div 
            className="absolute bottom-full mb-2 left-0 bg-white rounded-lg shadow-lg border p-2 min-w-48 z-10"
            role="menu"
            aria-label="마이크 설정"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">마이크 설정</span>
              <button 
                onClick={handleDropdownClose}
                className="text-gray-400 hover:text-gray-600"
                aria-label="마이크 설정 닫기"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="space-y-2">
              <button 
                onClick={() => { onToggleMute(); handleDropdownClose(); }}
                className={`w-full text-left px-3 py-2 rounded text-sm ${
                  !muted ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                }`}
                role="menuitem"
                aria-label="마이크 켜기"
              >
                마이크 켜기
              </button>
              <button 
                onClick={() => { onToggleMute(); handleDropdownClose(); }}
                className={`w-full text-left px-3 py-2 rounded text-sm ${
                  muted ? 'bg-red-100 text-red-700' : 'hover:bg-gray-100'
                }`}
                role="menuitem"
                aria-label="마이크 끄기"
              >
                마이크 끄기
              </button>
              <hr className="my-2" />
              <div className="px-3 py-1 text-xs text-gray-500">
                마이크 볼륨: 80%
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                defaultValue="80"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                aria-label="마이크 볼륨 조절"
              />
            </div>
          </div>
        )}
      </div>

      {/* 카메라 컨트롤 */}
      <div className="relative dropdown-container">
        <VideoToggleButton 
          off={videoOff} 
          onClick={() => handleDropdownToggle('camera')}
          aria-expanded={activeDropdown === 'camera'}
          aria-haspopup="true"
        />
        {activeDropdown === 'camera' && (
          <div 
            className="absolute bottom-full mb-2 left-0 bg-white rounded-lg shadow-lg border p-2 min-w-48 z-10"
            role="menu"
            aria-label="카메라 설정"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">카메라 설정</span>
              <button 
                onClick={handleDropdownClose}
                className="text-gray-400 hover:text-gray-600"
                aria-label="카메라 설정 닫기"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="space-y-2">
              <button 
                onClick={() => { onToggleVideo(); handleDropdownClose(); }}
                className={`w-full text-left px-3 py-2 rounded text-sm ${
                  !videoOff ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
                }`}
                role="menuitem"
                aria-label="카메라 켜기"
              >
                카메라 켜기
              </button>
              <button 
                onClick={() => { onToggleVideo(); handleDropdownClose(); }}
                className={`w-full text-left px-3 py-2 rounded text-sm ${
                  videoOff ? 'bg-red-100 text-red-700' : 'hover:bg-gray-100'
                }`}
                role="menuitem"
                aria-label="카메라 끄기"
              >
                카메라 끄기
              </button>
              <hr className="my-2" />
              <div className="px-3 py-1 text-xs text-gray-500">
                카메라 선택
              </div>
              <select 
                className="w-full px-3 py-2 text-sm border rounded"
                aria-label="카메라 선택"
              >
                <option>기본 카메라</option>
                <option>외장 카메라</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* 화면 공유 컨트롤 */}
      <div className="relative dropdown-container">
        <ScreenShareButton 
          sharing={sharing} 
          onClick={() => handleDropdownToggle('share')}
          aria-expanded={activeDropdown === 'share'}
          aria-haspopup="true"
        />
        {activeDropdown === 'share' && (
          <div 
            className="absolute bottom-full mb-2 left-0 bg-white rounded-lg shadow-lg border p-2 min-w-48 z-10"
            role="menu"
            aria-label="화면 공유 설정"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">화면 공유</span>
              <button 
                onClick={handleDropdownClose}
                className="text-gray-400 hover:text-gray-600"
                aria-label="화면 공유 설정 닫기"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="space-y-2">
              <button 
                onClick={() => { onToggleShare(); handleDropdownClose(); }}
                className={`w-full text-left px-3 py-2 rounded text-sm ${
                  !sharing ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                }`}
                role="menuitem"
                aria-label="화면 공유 시작"
              >
                화면 공유 시작
              </button>
              <button 
                onClick={() => { onToggleShare(); handleDropdownClose(); }}
                className={`w-full text-left px-3 py-2 rounded text-sm ${
                  sharing ? 'bg-red-100 text-red-700' : 'hover:bg-gray-100'
                }`}
                role="menuitem"
                aria-label="화면 공유 중지"
              >
                화면 공유 중지
              </button>
              <hr className="my-2" />
              <button 
                className="w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-100"
                role="menuitem"
                aria-label="창 공유"
              >
                창 공유
              </button>
              <button 
                className="w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-100"
                role="menuitem"
                aria-label="탭 공유"
              >
                탭 공유
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 구분선 */}
      <div className="w-px h-6 bg-gray-300" aria-hidden="true"></div>

      {/* 채팅 버튼 */}
      {onToggleChat && (
        <button 
          onClick={onToggleChat} 
          className="p-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors"
          title="채팅"
          aria-label="채팅 토글"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      {/* 녹화 버튼 */}
      {onToggleRecording && (
        <button 
          onClick={onToggleRecording} 
          className={`p-3 rounded-full transition-colors ${
            isRecording 
              ? 'bg-red-600 hover:bg-red-700 text-white' 
              : 'bg-gray-600 hover:bg-gray-700 text-white'
          }`}
          title={isRecording ? "녹화 중지" : "녹화 시작"}
          aria-label={isRecording ? "녹화 중지" : "녹화 시작"}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      {/* 구분선 */}
      <div className="w-px h-6 bg-gray-300" aria-hidden="true"></div>

      {/* 파일 보내기 */}
      <FileShareButton />

      {/* 구분선 */}
      <div className="w-px h-6 bg-gray-300" aria-hidden="true"></div>

      {/* 전문가 모드 일시정지 */}
      {isExpert && onPause && (
        <button 
          onClick={onPause} 
          className="p-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full transition-colors"
          title="일시정지"
          aria-label="상담 일시정지"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      {/* 상담 종료 */}
      <EndSessionButton onEnd={onEnd} />
    </div>
  );
}

// PropTypes 정의
VideoControls.propTypes = {
  muted: PropTypes.bool.isRequired,
  onToggleMute: PropTypes.func.isRequired,
  videoOff: PropTypes.bool.isRequired,
  onToggleVideo: PropTypes.func.isRequired,
  sharing: PropTypes.bool.isRequired,
  onToggleShare: PropTypes.func.isRequired,
  onEnd: PropTypes.func.isRequired,
  isExpert: PropTypes.bool,
  onPause: PropTypes.func,
  onToggleChat: PropTypes.func,
  onToggleRecording: PropTypes.func,
  isRecording: PropTypes.bool
};
