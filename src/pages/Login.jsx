// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // 로그인 API 호출 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 더미 로그인 검증
      if (
        formData.email === "test@example.com" &&
        formData.password === "password"
      ) {
        console.log("로그인 성공");
        navigate("/dashboard");
      } else {
        setError("이메일 또는 비밀번호가 올바르지 않습니다.");
      }
    } catch (err) {
      setError("로그인 중 오류가 발생했습니다.");
      console.error("Login Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    try {
      // 구글 로그인 API 호출 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("구글 로그인 성공");
      navigate("/dashboard");
    } catch (err) {
      setError("구글 로그인 중 오류가 발생했습니다.");
      console.error("Google Login Error:", err);
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0 min-vh-100">
        <div className="col-12 d-flex align-items-center justify-content-center p-4 p-lg-5">
          <div className="w-100" style={{ maxWidth: "450px" }}>
            <div className="card shadow-lg border-0">
              <div className="card-body p-4 p-lg-5">
                <h2 className="text-center mb-4">로그인</h2>

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                {/* 구글 로그인 버튼 */}
                <div className="mb-4">
                  <button
                    type="button"
                    className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center py-3"
                    onClick={handleGoogleLogin}
                    disabled={googleLoading}
                  >
                    {googleLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        구글 로그인 중...
                      </>
                    ) : (
                      <>
                        <svg
                          className="me-2"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                        Google로 로그인
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center mb-4">
                  <span className="text-muted">또는</span>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      이메일
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="이메일을 입력하세요"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      비밀번호
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      placeholder="비밀번호를 입력하세요"
                    />
                  </div>

                  <div className="mb-4 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                      로그인 상태 유지
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 py-3"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        로그인 중...
                      </>
                    ) : (
                      "로그인"
                    )}
                  </button>
                </form>

                <div className="text-center mt-3">
                  <Link to="/forgot-password" className="text-decoration-none">
                    비밀번호를 잊으셨나요?
                  </Link>
                </div>

                <hr className="my-4" />

                <div className="text-center">
                  <p className="mb-0">계정이 없으신가요?</p>
                  <Link to="/signup" className="btn btn-outline-primary mt-2">
                    회원가입
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
