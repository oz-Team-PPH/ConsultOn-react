// src/components/EndSessionButton.jsx
import React, { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';

export default function EndSessionButton({ 
  onEnd, 
  variant = 'danger',
  size = 'md',
  disabled = false,
  showConfirm = true,
  confirmMessage = '정말로 상담을 종료하시겠습니까?',
  enableKeyboardShortcut = true,
  ...props 
}) {
  const [isLoading, setIsLoading] = useState(false);

  // 버튼 스타일 클래스 생성
  const getButtonClasses = useCallback(() => {
    const baseClasses = "rounded-full transition-colors flex items-center justify-center";
    
    // 크기별 클래스
    const sizeClasses = {
      sm: 'p-1.5',
      md: 'p-2',
      lg: 'p-3'
    };

    // 변형별 클래스
    const variantClasses = {
      danger: 'bg-red-600 hover:bg-red-700 text-white',
      warning: 'bg-yellow-600 hover:bg-yellow-700 text-white',
      info: 'bg-blue-600 hover:bg-blue-700 text-white',
      secondary: 'bg-gray-600 hover:bg-gray-700 text-white'
    };

    // 비활성화 상태
    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses}`;
  }, [variant, size, disabled]);

  // 아이콘 크기 클래스
  const getIconClasses = useCallback(() => {
    const iconSizes = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6'
    };
    return iconSizes[size];
  }, [size]);

  // 클릭 핸들러
  const handleClick = useCallback(async () => {
    if (disabled || isLoading) return;

    try {
      setIsLoading(true);

      // 확인 대화상자 표시
      if (showConfirm) {
        const confirmed = window.confirm(confirmMessage);
        if (!confirmed) {
          return;
        }
      }

      // onEnd 함수가 Promise를 반환하는 경우를 대비한 처리
      const result = onEnd();
      if (result && typeof result.then === 'function') {
        await result;
      }
    } catch (error) {
      console.error('상담 종료 중 오류 발생:', error);
    } finally {
      setIsLoading(false);
    }
  }, [disabled, isLoading, showConfirm, confirmMessage, onEnd]);

  // 키보드 단축키 (Ctrl+Esc)
  useEffect(() => {
    if (!enableKeyboardShortcut || disabled) return;

    const handleKeyPress = useCallback((event) => {
      if (event.key === 'Escape' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        handleClick();
      }
    }, [handleClick]);

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [enableKeyboardShortcut, disabled, handleClick]);

  return (
    <button 
      onClick={handleClick}
      className={getButtonClasses()}
      title={`상담 종료${enableKeyboardShortcut ? ' (Ctrl+Esc)' : ''}`}
      aria-label={`상담 종료${isLoading ? ' 중...' : ''}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        // 로딩 스피너
        <svg 
          className={`${getIconClasses()} animate-spin`} 
          fill="none" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        // 기본 아이콘
        <svg 
          className={getIconClasses()} 
          fill="currentColor" 
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path 
            fillRule="evenodd" 
            d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm7 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm4 0a1 1 0 10-2 0v4a1 1 0 102 0V7z" 
            clipRule="evenodd" 
          />
        </svg>
      )}
    </button>
  );
}

// PropTypes 정의
EndSessionButton.propTypes = {
  onEnd: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['danger', 'warning', 'info', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  showConfirm: PropTypes.bool,
  confirmMessage: PropTypes.string,
  enableKeyboardShortcut: PropTypes.bool
};

// 기본 props
EndSessionButton.defaultProps = {
  variant: 'danger',
  size: 'md',
  disabled: false,
  showConfirm: true,
  confirmMessage: '정말로 상담을 종료하시겠습니까?',
  enableKeyboardShortcut: true
};
