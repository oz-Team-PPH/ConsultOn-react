// src/pages/AIQAPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AIQAPage() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 초기 AI 메시지
  useEffect(() => {
    setMessages([
      {
        id: 1,
        type: 'ai',
        content: '안녕하세요! 저는 ConsultOn AI 어시스턴트입니다. 어떤 도움이 필요하신가요?',
        timestamp: new Date(),
        avatar: '🤖'
      }
    ]);
  }, []);

  const categories = [
    { id: 'general', name: '일반 상담', icon: '💬', color: 'primary' },
    { id: 'career', name: '커리어 상담', icon: '💼', color: 'success' },
    { id: 'mental', name: '심리 상담', icon: '🧠', color: 'info' },
    { id: 'family', name: '가족 상담', icon: '👨‍👩‍👧‍👦', color: 'warning' },
    { id: 'health', name: '건강 상담', icon: '🏥', color: 'danger' },
    { id: 'education', name: '교육 상담', icon: '📚', color: 'secondary' }
  ];

  const quickQuestions = {
    general: [
      '상담 비용은 얼마인가요?',
      '상담 시간은 얼마나 걸리나요?',
      '온라인 상담이 가능한가요?'
    ],
    career: [
      '이직 준비는 어떻게 해야 하나요?',
      '진로 변경을 고려하고 있습니다',
      '면접 준비 방법을 알려주세요'
    ],
    mental: [
      '스트레스 관리 방법이 궁금합니다',
      '불면증이 심해요',
      '우울감이 지속됩니다'
    ],
    family: [
      '부부 갈등 해결 방법',
      '자녀 교육에 대한 조언',
      '가족 간 소통 개선'
    ],
    health: [
      '건강한 생활 습관',
      '운동 방법 추천',
      '식단 관리 방법'
    ],
    education: [
      '학습 방법 개선',
      '시험 준비 전략',
      '진학 상담'
    ]
  };

  const generateAIResponse = (userInput, category) => {
    const responses = {
      general: [
        '상담 비용은 전문가와 상담 유형에 따라 30,000원~80,000원입니다.',
        '상담 시간은 보통 30분~60분 정도 소요됩니다.',
        '네, 온라인 화상 상담이 가능합니다. 언제 어디서든 편리하게 이용하실 수 있습니다.'
      ],
      career: [
        '이직 준비는 체계적인 계획이 필요합니다. 현재 상황을 분석하고 목표를 명확히 하는 것이 중요합니다.',
        '진로 변경은 신중한 결정이 필요합니다. 현재 경험과 새로운 분야의 연관성을 찾아보세요.',
        '면접 준비는 회사와 직무에 대한 충분한 조사와 자신의 경험을 구체적으로 정리하는 것이 핵심입니다.'
      ],
      mental: [
        '스트레스 관리는 규칙적인 운동, 충분한 휴식, 그리고 긍정적인 마음가짐이 중요합니다.',
        '불면증 개선을 위해 수면 환경을 개선하고, 취침 전 스마트폰 사용을 줄이는 것이 도움이 됩니다.',
        '우울감이 지속된다면 전문가와 상담하는 것을 권장합니다. 혼자 견디지 마세요.'
      ],
      family: [
        '부부 갈등 해결을 위해서는 서로의 입장을 이해하고 대화를 통한 소통이 중요합니다.',
        '자녀 교육은 일관성 있는 원칙과 무조건적인 사랑이 기본입니다.',
        '가족 간 소통 개선을 위해 정기적인 대화 시간을 가지는 것이 좋습니다.'
      ],
      health: [
        '건강한 생활 습관은 규칙적인 운동, 균형 잡힌 식사, 충분한 수면이 기본입니다.',
        '운동은 본인의 체력과 관심사에 맞는 것을 선택하는 것이 중요합니다.',
        '식단 관리는 균형 잡힌 영양소 섭취와 적절한 칼로리 조절이 핵심입니다.'
      ],
      education: [
        '학습 방법 개선을 위해 목표 설정과 계획 수립이 중요합니다.',
        '시험 준비는 체계적인 계획과 꾸준한 복습이 핵심입니다.',
        '진학 상담은 본인의 관심사와 능력을 고려한 현실적인 목표 설정이 중요합니다.'
      ]
    };

    const categoryResponses = responses[category] || responses.general;
    return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
      avatar: '👤'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setIsTyping(true);

    // AI 응답 시뮬레이션
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue, selectedCategory);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'ai',
        content: aiResponse,
        timestamp: new Date(),
        avatar: '🤖'
      }]);
      setIsLoading(false);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    inputRef.current?.focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleStartConsultation = () => {
    navigate('/expert-search');
  };

  return (
    <div className="min-vh-100 bg-light">
      {/* 헤더 */}
      <div className="bg-white shadow-sm border-bottom position-sticky top-0 z-3">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-3 mb-lg-0">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                  <span className="fs-4">🤖</span>
                </div>
                <div>
                  <h1 className="h2 fw-bold text-dark mb-1">AI Q&A</h1>
                  <p className="text-muted mb-0">AI와 대화하며 상담 준비를 해보세요</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <button
                onClick={handleStartConsultation}
                className="btn btn-primary btn-lg rounded-pill px-4"
              >
                <svg className="me-2" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                전문가 상담 시작
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          {/* 카테고리 선택 */}
          <div className="col-lg-3 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="h5 fw-semibold text-dark mb-4">
                  <svg className="me-2" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                  </svg>
                  상담 카테고리
                </h3>
                <div className="d-flex flex-column gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`btn text-start p-3 rounded-3 transition-all ${
                        selectedCategory === category.id
                          ? `btn-${category.color} border-0 shadow-sm`
                          : 'btn-outline-secondary border-0'
                      }`}
                      style={{
                        transition: 'all 0.3s ease',
                        transform: selectedCategory === category.id ? 'translateX(5px)' : 'translateX(0)'
                      }}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <span className="fs-4">{category.icon}</span>
                        <span className="fw-medium">{category.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 채팅 영역 */}
          <div className="col-lg-9">
            <div className="card border-0 shadow-sm h-100" style={{ minHeight: '600px' }}>
              <div className="card-body d-flex flex-column p-0">
                {/* 메시지 영역 */}
                <div className="flex-grow-1 overflow-auto p-4" style={{ maxHeight: '500px' }}>
                  <div className="d-flex flex-column gap-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`d-flex ${message.type === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
                      >
                        <div className="d-flex gap-3" style={{ maxWidth: '80%' }}>
                          {message.type === 'ai' && (
                            <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px', flexShrink: 0}}>
                              <span className="fs-5">{message.avatar}</span>
                            </div>
                          )}
                          <div
                            className={`rounded-3 px-4 py-3 ${
                              message.type === 'user'
                                ? 'bg-primary text-white'
                                : 'bg-light text-dark'
                            }`}
                            style={{ maxWidth: '100%' }}
                          >
                            <p className="mb-2" style={{lineHeight: '1.5'}}>{message.content}</p>
                            <small className={`${message.type === 'user' ? 'text-white' : 'text-muted'} opacity-75`}>
                              {message.timestamp.toLocaleTimeString()}
                            </small>
                          </div>
                          {message.type === 'user' && (
                            <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px', flexShrink: 0}}>
                              <span className="fs-5">{message.avatar}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    {isLoading && (
                      <div className="d-flex justify-content-start">
                        <div className="d-flex gap-3">
                          <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                            <span className="fs-5">🤖</span>
                          </div>
                          <div className="bg-light text-dark rounded-3 px-4 py-3">
                            <div className="d-flex align-items-center gap-2">
                              <div className="spinner-border spinner-border-sm text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </div>
                              <span className="small">AI가 답변을 준비하고 있습니다...</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>
                </div>

                {/* 입력 영역 */}
                <div className="border-top p-4">
                  <div className="d-flex gap-3">
                    <div className="flex-grow-1">
                      <textarea
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="질문을 입력하세요..."
                        className="form-control border-0 bg-light"
                        rows="2"
                        style={{resize: 'none'}}
                      />
                    </div>
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isLoading}
                      className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
                      style={{width: '50px', height: '50px'}}
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 빠른 질문 */}
            <div className="mt-4">
              <h3 className="h5 fw-semibold text-dark mb-4">
                <svg className="me-2" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                자주 묻는 질문
              </h3>
              <div className="row g-3">
                {quickQuestions[selectedCategory]?.map((question, index) => (
                  <div key={index} className="col-12 col-md-6 col-lg-4">
                    <button
                      onClick={() => handleQuickQuestion(question)}
                      className="btn btn-outline-secondary w-100 text-start p-3 rounded-3 transition-all hover-shadow"
                      style={{
                        transition: 'all 0.3s ease',
                        border: '1px solid #e9ecef'
                      }}
                    >
                      <p className="mb-0 small">{question}</p>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .transition-all {
          transition: all 0.3s ease;
        }
        
        .hover-shadow:hover {
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important;
        }
        
        @media (max-width: 768px) {
          .h2 { font-size: 1.5rem; }
          .btn-lg { font-size: 0.875rem; padding: 0.5rem 1rem; }
        }
      `}</style>
    </div>
  );
} 