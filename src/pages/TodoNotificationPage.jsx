// src/pages/TodoNotificationPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TodoNotificationPage() {
  const [todos, setTodos] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [newTodo, setNewTodo] = useState('');
  const [newTodoPriority, setNewTodoPriority] = useState('medium');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // To-Do 및 알림 데이터 시뮬레이션
  useEffect(() => {
    const mockTodos = [
      {
        id: 1,
        title: '운동 계획표 작성',
        description: '주 3회 이상 운동 계획을 세우고 실행하기',
        priority: 'high',
        status: 'pending',
        dueDate: '2024-01-20',
        category: '건강',
        createdAt: '2024-01-15'
      },
      {
        id: 2,
        title: '명상 앱 다운로드',
        description: '일일 명상 10분을 위한 앱 설치',
        priority: 'medium',
        status: 'completed',
        dueDate: '2024-01-18',
        category: '정신건강',
        createdAt: '2024-01-15'
      },
      {
        id: 3,
        title: '수면 일기 작성',
        description: '수면 패턴을 기록하고 분석하기',
        priority: 'high',
        status: 'pending',
        dueDate: '2024-01-22',
        category: '건강',
        createdAt: '2024-01-15'
      },
      {
        id: 4,
        title: '이력서 작성 시작',
        description: '현재 경험을 바탕으로 이력서 업데이트',
        priority: 'high',
        status: 'pending',
        dueDate: '2024-01-25',
        category: '커리어',
        createdAt: '2024-01-10'
      },
      {
        id: 5,
        title: '포트폴리오 정리',
        description: '프로젝트 경험을 포트폴리오로 정리',
        priority: 'medium',
        status: 'pending',
        dueDate: '2024-01-30',
        category: '커리어',
        createdAt: '2024-01-10'
      },
      {
        id: 6,
        title: '네트워킹 이벤트 찾기',
        description: '업계 관련 네트워킹 이벤트 조사 및 참석 계획',
        priority: 'low',
        status: 'pending',
        dueDate: '2024-02-05',
        category: '커리어',
        createdAt: '2024-01-10'
      }
    ];

    const mockNotifications = [
      {
        id: 1,
        type: 'todo',
        title: '운동 계획표 작성 마감일 알림',
        message: '오늘까지 운동 계획표를 작성해야 합니다.',
        time: '2024-01-20 09:00',
        read: false,
        priority: 'high'
      },
      {
        id: 2,
        type: 'consultation',
        title: '상담 예약 알림',
        message: '내일 오후 2시 김상담 전문가와 상담이 예정되어 있습니다.',
        time: '2024-01-19 14:00',
        read: false,
        priority: 'medium'
      },
      {
        id: 3,
        type: 'reminder',
        title: '명상 시간 알림',
        message: '오늘 명상 10분을 실천해보세요.',
        time: '2024-01-18 20:00',
        read: true,
        priority: 'low'
      },
      {
        id: 4,
        type: 'todo',
        title: '이력서 작성 마감일 알림',
        message: '이력서 작성을 시작해야 합니다.',
        time: '2024-01-25 09:00',
        read: false,
        priority: 'high'
      }
    ];

    setTodos(mockTodos);
    setNotifications(mockNotifications);
    setLoading(false);
  }, []);

  const filteredTodos = todos.filter(todo => {
    if (selectedFilter !== 'all' && todo.status !== selectedFilter) return false;
    if (selectedPriority !== 'all' && todo.priority !== selectedPriority) return false;
    return true;
  });

  const handleAddTodo = () => {
    if (!newTodo.trim()) return;

    const todo = {
      id: Date.now(),
      title: newTodo,
      description: '',
      priority: newTodoPriority,
      status: 'pending',
      dueDate: new Date().toISOString().split('T')[0],
      category: '일반',
      createdAt: new Date().toISOString().split('T')[0]
    };

    setTodos(prev => [todo, ...prev]);
    setNewTodo('');
    setNewTodoPriority('medium');
  };

  const handleToggleTodo = (todoId) => {
    setTodos(prev => prev.map(todo =>
      todo.id === todoId
        ? { ...todo, status: todo.status === 'completed' ? 'pending' : 'completed' }
        : todo
    ));
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(prev => prev.filter(todo => todo.id !== todoId));
  };

  const handleMarkNotificationRead = (notificationId) => {
    setNotifications(prev => prev.map(notification =>
      notification.id === notificationId
        ? { ...notification, read: true }
        : notification
    ));
  };

  const handleDeleteNotification = (notificationId) => {
    setNotifications(prev => prev.filter(notification => notification.id !== notificationId));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'danger';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'secondary';
    }
  };

  const getPriorityText = (priority) => {
    switch (priority) {
      case 'high': return '높음';
      case 'medium': return '보통';
      case 'low': return '낮음';
      default: return '보통';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return '완료';
      case 'pending': return '진행중';
      default: return '진행중';
    }
  };

  if (loading) {
    return (
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted">To-Do 목록을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-light">
      {/* 헤더 */}
      <div className="bg-white shadow-sm border-bottom">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-3 mb-lg-0">
              <h1 className="h2 fw-bold text-dark mb-2">To-Do 알림</h1>
              <p className="text-muted mb-0">중요한 일정과 할 일을 자동으로 관리하고 알림을 통해 놓치지 않도록 도와줍니다</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          {/* To-Do 목록 */}
          <div className="col-12 col-lg-8 mb-4">
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="h5 fw-semibold text-dark mb-0">To-Do 목록</h3>
                  <button
                    className="btn btn-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#addTodoModal"
                  >
                    <i className="bi bi-plus me-1"></i>
                    새 To-Do 추가
                  </button>
                </div>
              </div>

              <div className="card-body">
                {/* 필터 */}
                <div className="row g-3 mb-4">
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-semibold">상태</label>
                    <select
                      value={selectedFilter}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                      className="form-select"
                    >
                      <option value="all">전체</option>
                      <option value="pending">진행중</option>
                      <option value="completed">완료</option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-semibold">우선순위</label>
                    <select
                      value={selectedPriority}
                      onChange={(e) => setSelectedPriority(e.target.value)}
                      className="form-select"
                    >
                      <option value="all">전체</option>
                      <option value="high">높음</option>
                      <option value="medium">보통</option>
                      <option value="low">낮음</option>
                    </select>
                  </div>
                </div>

                {/* To-Do 목록 */}
                <div className="list-group">
                  {filteredTodos.map((todo) => (
                    <div key={todo.id} className="list-group-item">
                      <div className="d-flex align-items-start gap-3">
                        <div className="form-check mt-1">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={todo.status === 'completed'}
                            onChange={() => handleToggleTodo(todo.id)}
                          />
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h6 className={`mb-0 ${todo.status === 'completed' ? 'text-decoration-line-through text-muted' : ''}`}>
                              {todo.title}
                            </h6>
                            <div className="d-flex align-items-center gap-2">
                              <span className={`badge bg-${getPriorityColor(todo.priority)}`}>
                                {getPriorityText(todo.priority)}
                              </span>
                              <span className={`badge bg-${todo.status === 'completed' ? 'success' : 'warning'}`}>
                                {getStatusText(todo.status)}
                              </span>
                            </div>
                          </div>
                          {todo.description && (
                            <p className="text-muted small mb-2">{todo.description}</p>
                          )}
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-3 text-muted small">
                              <span><i className="bi bi-calendar me-1"></i>{todo.dueDate}</span>
                              <span><i className="bi bi-tag me-1"></i>{todo.category}</span>
                            </div>
                            <button
                              onClick={() => handleDeleteTodo(todo.id)}
                              className="btn btn-outline-danger btn-sm"
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredTodos.length === 0 && (
                  <div className="text-center py-4">
                    <div className="text-muted mb-3">
                      <i className="bi bi-check-circle fs-1"></i>
                    </div>
                    <h4 className="h6 fw-semibold text-dark mb-2">완료된 To-Do가 없습니다</h4>
                    <p className="text-muted">새로운 To-Do를 추가해보세요</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 알림 */}
          <div className="col-12 col-lg-4">
            <div className="card">
              <div className="card-header">
                <h3 className="h5 fw-semibold text-dark mb-0">알림</h3>
              </div>
              <div className="card-body p-0">
                <div className="list-group list-group-flush">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`list-group-item ${!notification.read ? 'bg-light' : ''}`}
                    >
                      <div className="d-flex align-items-start gap-3">
                        <div className={`badge bg-${getPriorityColor(notification.priority)} rounded-circle p-2`}>
                          <i className="bi bi-bell"></i>
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center justify-content-between mb-1">
                            <h6 className="mb-0 fw-semibold">{notification.title}</h6>
                            {!notification.read && (
                              <span className="badge bg-primary">새</span>
                            )}
                          </div>
                          <p className="text-muted small mb-2">{notification.message}</p>
                          <div className="d-flex align-items-center justify-content-between">
                            <small className="text-muted">{notification.time}</small>
                            <div className="d-flex gap-1">
                              {!notification.read && (
                                <button
                                  onClick={() => handleMarkNotificationRead(notification.id)}
                                  className="btn btn-outline-primary btn-sm"
                                >
                                  읽음
                                </button>
                              )}
                              <button
                                onClick={() => handleDeleteNotification(notification.id)}
                                className="btn btn-outline-danger btn-sm"
                              >
                                삭제
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 새 To-Do 추가 모달 */}
      <div className="modal fade" id="addTodoModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">새 To-Do 추가</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">제목</label>
                <input
                  type="text"
                  className="form-control"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  placeholder="To-Do 제목을 입력하세요"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">우선순위</label>
                <select
                  className="form-select"
                  value={newTodoPriority}
                  onChange={(e) => setNewTodoPriority(e.target.value)}
                >
                  <option value="high">높음</option>
                  <option value="medium">보통</option>
                  <option value="low">낮음</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                취소
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddTodo}
                data-bs-dismiss="modal"
              >
                추가
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 