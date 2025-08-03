// src/components/MediaPermissionRequest.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function MediaPermissionRequest({ onPermissionGranted, onPermissionDenied }) {
  const [permissionStatus, setPermissionStatus] = useState('checking');
  const [error, setError] = useState(null);
  const [isRequesting, setIsRequesting] = useState(false);

  // 권한 상태 확인
  useEffect(() => {
    checkPermissions();
  }, []);

  const checkPermissions = async () => {
    try {
      // 브라우저 지원 확인
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setError('이 브라우저는 미디어 접근을 지원하지 않습니다.');
        setPermissionStatus('unsupported');
        return;
      }

      // HTTPS 환경 확인
      if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
        setError('보안을 위해 HTTPS 환경에서만 미디어 접근이 가능합니다.');
        setPermissionStatus('unsupported');
        return;
      }

      // 권한 상태 확인
      const permissions = await navigator.permissions.query({ name: 'camera' });
      const microphonePermission = await navigator.permissions.query({ name: 'microphone' });

      if (permissions.state === 'granted' && microphonePermission.state === 'granted') {
        setPermissionStatus('granted');
        onPermissionGranted();
      } else if (permissions.state === 'denied' || microphonePermission.state === 'denied') {
        setPermissionStatus('denied');
        setError('카메라와 마이크 접근이 거부되었습니다. 브라우저 설정에서 권한을 허용해주세요.');
      } else {
        setPermissionStatus('prompt');
      }
    } catch (err) {
      console.error('권한 확인 실패:', err);
      setError('권한 상태를 확인할 수 없습니다.');
      setPermissionStatus('error');
    }
  };

  const requestPermissions = async () => {
    setIsRequesting(true);
    setError(null);

    try {
      // 카메라와 마이크 권한 요청
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        }
      });

      // 스트림 정리
      stream.getTracks().forEach(track => track.stop());

      setPermissionStatus('granted');
      onPermissionGranted();
    } catch (err) {
      console.error('권한 요청 실패:', err);
      
      let errorMessage = '카메라와 마이크에 접근할 수 없습니다.';
      
      if (err.name === 'NotAllowedError') {
        errorMessage = '카메라와 마이크 접근 권한이 거부되었습니다. 브라우저 설정에서 권한을 허용해주세요.';
      } else if (err.name === 'NotFoundError') {
        errorMessage = '카메라나 마이크를 찾을 수 없습니다. 장치가 연결되어 있는지 확인해주세요.';
      } else if (err.name === 'NotReadableError') {
        errorMessage = '카메라나 마이크가 다른 애플리케이션에서 사용 중입니다.';
      }
      
      setError(errorMessage);
      setPermissionStatus('denied');
      onPermissionDenied();
    } finally {
      setIsRequesting(false);
    }
  };

  const handleRetry = () => {
    setPermissionStatus('prompt');
    setError(null);
  };

  const handleOpenSettings = () => {
    // 브라우저별 설정 페이지 안내
    const browser = getBrowserInfo();
    let settingsUrl = '';
    
    if (browser === 'chrome') {
      settingsUrl = 'chrome://settings/content/camera';
    } else if (browser === 'firefox') {
      settingsUrl = 'about:preferences#privacy';
    } else if (browser === 'safari') {
      settingsUrl = 'prefs:root=Privacy&path=Camera';
    }
    
    if (settingsUrl) {
      window.open(settingsUrl, '_blank');
    }
  };

  const getBrowserInfo = () => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome')) return 'chrome';
    if (userAgent.includes('Firefox')) return 'firefox';
    if (userAgent.includes('Safari')) return 'safari';
    return 'unknown';
  };

  if (permissionStatus === 'checking') {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-6"></div>
          <div className="text-xl font-medium text-gray-900">권한 상태를 확인하는 중...</div>
        </div>
      </div>
    );
  }

  if (permissionStatus === 'granted') {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-2xl font-medium text-gray-900 mb-3">권한이 허용되었습니다!</div>
          <div className="text-lg text-gray-600">화상상담을 시작할 수 있습니다.</div>
        </div>
      </div>
    );
  }

  if (permissionStatus === 'denied' || permissionStatus === 'error') {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-2xl font-medium text-gray-900 mb-3">권한이 거부되었습니다</div>
          <div className="text-lg text-gray-600 mb-6">{error}</div>
          <div className="space-x-4">
            <button
              onClick={handleRetry}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg"
            >
              다시 시도
            </button>
            <button
              onClick={handleOpenSettings}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-lg"
            >
              설정 열기
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (permissionStatus === 'unsupported') {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-2xl font-medium text-gray-900 mb-3">지원되지 않는 환경</div>
          <div className="text-lg text-gray-600 mb-4">{error}</div>
          <div className="text-base text-gray-500">
            Chrome, Firefox, Safari 브라우저를 사용해주세요.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-96">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
            <path d="M10 9a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" />
            <path d="M10 13a1 1 0 100 2 1 1 0 000-2z" />
          </svg>
        </div>
        <div className="text-2xl font-medium text-gray-900 mb-3">카메라와 마이크 권한이 필요합니다</div>
        <div className="text-lg text-gray-600 mb-8">
          화상상담을 위해 카메라와 마이크 접근 권한을 허용해주세요.
        </div>
        <button
          onClick={requestPermissions}
          disabled={isRequesting}
          className={`px-8 py-4 rounded-lg font-medium text-lg ${
            isRequesting
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isRequesting ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              권한 요청 중...
            </div>
          ) : (
            '권한 허용하기'
          )}
        </button>
        <div className="mt-6 text-base text-gray-500">
          권한을 허용하면 카메라와 마이크에 접근할 수 있습니다.
        </div>
      </div>
    </div>
  );
}

MediaPermissionRequest.propTypes = {
  onPermissionGranted: PropTypes.func.isRequired,
  onPermissionDenied: PropTypes.func.isRequired
}; 