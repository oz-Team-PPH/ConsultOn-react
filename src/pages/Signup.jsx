// src/pages/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [verificationCode, setVerificationCode] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [sendingCode, setSendingCode] = useState(false);
  const [verifyingCode, setVerifyingCode] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSendVerificationCode = async () => {
    if (!formData.email) {
      setError("이메일을 먼저 입력해주세요.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("올바른 이메일 형식을 입력해주세요.");
      return;
    }

    setSendingCode(true);
    setError("");
    setSuccess("");

    try {
      // 이메일 인증 코드 발송 API 호출 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSuccess("인증 코드가 이메일로 발송되었습니다. 이메일을 확인해주세요.");
      console.log("인증 코드 발송:", formData.email);
    } catch (err) {
      setError("인증 코드 발송 중 오류가 발생했습니다.");
      console.error("Send Code Error:", err);
    } finally {
      setSendingCode(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode) {
      setError("인증 코드를 입력해주세요.");
      return;
    }

    setVerifyingCode(true);
    setError("");
    setSuccess("");

    try {
      // 인증 코드 확인 API 호출 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // 더미 인증 코드: 123456
      if (verificationCode === "123456") {
        setEmailVerified(true);
        setSuccess("이메일 인증이 완료되었습니다!");
        console.log("이메일 인증 성공");
      } else {
        setError("인증 코드가 올바르지 않습니다. 다시 확인해주세요.");
      }
    } catch (err) {
      setError("인증 코드 확인 중 오류가 발생했습니다.");
      console.error("Verify Code Error:", err);
    } finally {
      setVerifyingCode(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // 이메일 인증 확인
    if (!emailVerified) {
      setError("이메일 인증을 완료해주세요.");
      setLoading(false);
      return;
    }

    // 비밀번호 확인
    if (formData.password !== formData.confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      setLoading(false);
      return;
    }

    // 약관 동의 확인
    if (!formData.agreeTerms) {
      setError("이용약관에 동의해주세요.");
      setLoading(false);
      return;
    }

    try {
      // 회원가입 API 호출 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("회원가입 성공:", formData);
      navigate("/login");
    } catch (err) {
      setError("회원가입 중 오류가 발생했습니다.");
      console.error("Signup Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setGoogleLoading(true);
    try {
      // 구글 회원가입 API 호출 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("구글 회원가입 성공");
      navigate("/dashboard");
    } catch (err) {
      setError("구글 회원가입 중 오류가 발생했습니다.");
      console.error("Google Signup Error:", err);
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0 min-vh-100">
        <div className="col-12 d-flex align-items-center justify-content-center p-4 p-lg-5">
          <div className="w-100" style={{ maxWidth: "500px" }}>
            <div className="card shadow-lg border-0">
              <div className="card-body p-4 p-lg-5">
                <h2 className="text-center mb-4">회원가입</h2>

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="alert alert-success" role="alert">
                    {success}
                  </div>
                )}

                {/* 구글 회원가입 버튼 */}
                <div className="mb-4">
                  <button
                    type="button"
                    className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center py-3"
                    onClick={handleGoogleSignup}
                    disabled={googleLoading}
                  >
                    {googleLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        구글 회원가입 중...
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
                        Google로 회원가입
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center mb-4">
                  <span className="text-muted">또는</span>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      이름
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="이름을 입력하세요"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      이메일
                    </label>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="이메일을 입력하세요"
                        disabled={emailVerified}
                      />
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={handleSendVerificationCode}
                        disabled={
                          sendingCode || emailVerified || !formData.email
                        }
                      >
                        {sendingCode ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-1"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            발송중
                          </>
                        ) : emailVerified ? (
                          "인증완료"
                        ) : (
                          "인증코드 발송"
                        )}
                      </button>
                    </div>
                  </div>

                  {/* 이메일 인증 코드 입력 */}
                  {!emailVerified && formData.email && (
                    <div className="mb-3">
                      <label htmlFor="verificationCode" className="form-label">
                        인증 코드
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="verificationCode"
                          value={verificationCode}
                          onChange={(e) => setVerificationCode(e.target.value)}
                          placeholder="인증 코드 6자리를 입력하세요"
                          maxLength="6"
                        />
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handleVerifyCode}
                          disabled={verifyingCode || !verificationCode}
                        >
                          {verifyingCode ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-1"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              확인중
                            </>
                          ) : (
                            "확인"
                          )}
                        </button>
                      </div>
                      <div className="form-text">
                        이메일로 발송된 6자리 인증 코드를 입력해주세요.
                        (테스트용: 123456)
                      </div>
                    </div>
                  )}

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
                      minLength="8"
                      placeholder="비밀번호를 입력하세요"
                    />
                    <div className="form-text">최소 8자 이상 입력해주세요.</div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      비밀번호 확인
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      placeholder="비밀번호를 다시 입력하세요"
                    />
                  </div>

                  <div className="mb-4 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="agreeTerms"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="agreeTerms">
                      <Link to="/terms" className="text-decoration-none">
                        이용약관
                      </Link>
                      및{" "}
                      <Link to="/privacy" className="text-decoration-none">
                        개인정보처리방침
                      </Link>
                      에 동의합니다.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 py-3"
                    disabled={loading || !emailVerified}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        가입 중...
                      </>
                    ) : (
                      "회원가입"
                    )}
                  </button>
                </form>

                <hr className="my-4" />

                <div className="text-center">
                  <p className="mb-0">이미 계정이 있으신가요?</p>
                  <Link to="/login" className="btn btn-outline-primary mt-2">
                    로그인
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
