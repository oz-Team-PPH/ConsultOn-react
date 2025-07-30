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
          className="navbar-brand fw-bold text-primary"
          to="/"
          style={{ marginRight: "120px" }}
        >
          Consul+On
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
                상담
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/chat">
                    AI 사전 Q&A
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/experts">
                    전문가 매칭
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/booking">
                    상담 예약
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/video">
                    화상 상담
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/summary">
                    상담 요약
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
