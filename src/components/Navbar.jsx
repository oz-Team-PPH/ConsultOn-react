import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top w-100"
      style={{ top: 0, left: 0, right: 0, zIndex: 1030 }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand fw-bold text-primary d-flex align-items-center justify-content-center"
          to="/"
          style={{ marginRight: "120px" }}
        >
          <span>Consult</span>
          <span className="d-flex align-items-center" style={{ marginLeft: "3px" }}>
            <svg
              width="50"
              height="25"
              viewBox="0 0 50 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="me-0"
              style={{ 
                transform: "translateY(0px)"
              }}
            >
              {/* 토글 스위치 트랙 - 파란색 */}
              <rect
                x="2"
                y="5"
                width="39"
                height="17"
                rx="8"
                fill="#007BFF"
                strokeWidth="1.2"
              />
              {/* 토글 스위치 노브 - 흰색, 오른쪽 위치 */}
              <circle
                cx="33"
                cy="13.5"
                r="6"
                fill="#FFFFFF"
                strokeWidth="1.2"
              />
              {/* ON 텍스트 - 왼쪽에 위치, 어두운 파란색 */}
              <text
                x="15.5"
                y="18"
                fontFamily="Arial, sans-serif"
                fontSize="11.5"
                fontWeight="bold"
                fill="#ffffff"
                textAnchor="middle"
              >
                ON
              </text>
            </svg>
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto me-3">
            <li className="nav-item">
              <Link className="nav-link" to="/features">
                서비스
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                가격
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                상담 서비스
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/ai-qa">
                    AI Q&A
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/expert-search">
                    전문가 검색
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/video-consultation">
                    화상 상담
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/recording-summary">
                    녹화+요약
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/todo-notification">
                    To-Do 알림
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/booking">
                    상담 예약
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                내 정보
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/dashboard">
                    대시보드
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/expert-dashboard">
                    전문가 대시보드
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/profile">
                    프로필
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/notifications">
                    알림 설정
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          <div className="d-flex flex-column flex-lg-row gap-2">
            <Link to="/login" className="btn btn-outline-primary">
              로그인
            </Link>
            <Link to="/signup" className="btn btn-primary">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
