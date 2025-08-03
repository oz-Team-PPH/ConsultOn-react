// src/pages/VideoConsultation.jsx
import React, { useState } from "react";
import VideoConsultationComponent from "../components/VideoConsultation";
import MediaPermissionRequest from "../components/MediaPermissionRequest";

export default function VideoConsultation() {
  const [isExpert, setIsExpert] = useState(false);
  const [permissionsGranted, setPermissionsGranted] = useState(false);

  const handlePermissionGranted = () => {
    setPermissionsGranted(true);
  };

  const handlePermissionDenied = () => {
    setPermissionsGranted(false);
  };

  return (
    <div className="min-h-screen bg-light">
      {/* 헤더 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">화상 상담</h1>
              <p className="text-gray-600 text-lg">실시간 화상 상담을 시작합니다</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="mode"
                    checked={!isExpert}
                    onChange={() => setIsExpert(false)}
                    className="text-blue-600 focus:ring-blue-500 w-5 h-5"
                  />
                  <span className="text-base font-medium text-gray-700">고객 모드</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="mode"
                    checked={isExpert}
                    onChange={() => setIsExpert(true)}
                    className="text-blue-600 focus:ring-blue-500 w-5 h-5"
                  />
                  <span className="text-base font-medium text-gray-700">전문가 모드</span>
                </label>
              </div>
              {isExpert && (
                <span className="text-sm text-blue-600 bg-blue-100 px-4 py-2 rounded-full">
                  일시정지 기능 활성화
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {!permissionsGranted ? (
          <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">화상상담 준비</h2>
              <p className="text-gray-600 mb-8 text-lg">
                화상상담을 시작하기 전에 카메라와 마이크 접근 권한을 허용해주세요.
              </p>
              <MediaPermissionRequest
                onPermissionGranted={handlePermissionGranted}
                onPermissionDenied={handlePermissionDenied}
              />
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
            <VideoConsultationComponent isExpert={isExpert} />
          </div>
        )}
        
        {/* 상담 정보 */}
        <div className="mt-8 bg-white rounded-lg shadow-lg border p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">상담 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-base text-gray-500">상담사</p>
                <p className="font-medium text-gray-900 text-lg">김상담 전문가</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-base text-gray-500">상담 시간</p>
                <p className="font-medium text-gray-900 text-lg">30분</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-base text-gray-500">상담료</p>
                <p className="font-medium text-gray-900 text-lg">50,000원</p>
              </div>
            </div>
          </div>
        </div>

        {/* 상담 가이드 */}
        <div className="mt-8 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-blue-900 mb-6">상담 가이드</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base text-blue-800">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-lg">카메라와 마이크 접근 권한을 허용해주세요</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-lg">안정적인 인터넷 연결을 확인해주세요</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-lg">조용한 환경에서 상담을 진행해주세요</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-lg">상담 내용은 자동으로 기록됩니다</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
