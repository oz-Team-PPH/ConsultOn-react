// src/components/FileShareButton.jsx
import React, { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

export default function FileShareButton({ onFileSelect, ...props }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('파일 선택됨:', file.name);
      if (onFileSelect) {
        onFileSelect(file);
      }
      setShowDropdown(false);
    }
  }, [onFileSelect]);

  const handleFileUpload = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleDropdownToggle = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  const handleDropdownClose = useCallback(() => {
    setShowDropdown(false);
  }, []);

  return (
    <div className="relative dropdown-container">
      <button 
        onClick={handleDropdownToggle}
        className="p-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full transition-colors flex items-center space-x-1"
        title="파일 보내기"
        aria-label="파일 보내기"
        aria-expanded={showDropdown}
        aria-haspopup="true"
        {...props}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {showDropdown && (
        <div 
          className="absolute bottom-full mb-2 left-0 bg-white rounded-lg shadow-lg border p-2 min-w-48 z-10"
          role="menu"
          aria-label="파일 보내기 옵션"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">파일 보내기</span>
            <button 
              onClick={handleDropdownClose}
              className="text-gray-400 hover:text-gray-600"
              aria-label="파일 보내기 옵션 닫기"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="space-y-2">
            <button 
              onClick={handleFileUpload}
              className="w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-100"
              role="menuitem"
              aria-label="파일 선택"
            >
              파일 선택
            </button>
            <button 
              className="w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-100"
              role="menuitem"
              aria-label="클립보드에서 붙여넣기"
            >
              클립보드에서 붙여넣기
            </button>
            <hr className="my-2" />
            <div className="px-3 py-1 text-xs text-gray-500">
              최근 파일
            </div>
            <div className="space-y-1">
              <button 
                className="w-full text-left px-3 py-1 text-xs text-gray-600 hover:bg-gray-100 rounded cursor-pointer"
                role="menuitem"
                aria-label="document.pdf 파일 보내기"
              >
                document.pdf
              </button>
              <button 
                className="w-full text-left px-3 py-1 text-xs text-gray-600 hover:bg-gray-100 rounded cursor-pointer"
                role="menuitem"
                aria-label="image.jpg 파일 보내기"
              >
                image.jpg
              </button>
            </div>
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileSelect}
        className="hidden"
        accept="*/*"
        aria-label="파일 선택"
      />
    </div>
  );
}

FileShareButton.propTypes = {
  onFileSelect: PropTypes.func
}; 