import { Link } from "react-router-dom";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer
      id="about"
      className="bg-dark text-light py-3"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold pt-3">Consul+On</h5>
            <p className="small">
              (주)컨설트온
              <br />
              사업자등록 123-45-67890
              <br />
              대표이사 홍길동
              <br />
              서울시 강남구 테헤란로에 회사가 있으면 어떤기분, 10층
            </p>
          </div>
          <div className="col-6 col-md-2 mb-4 mb-md-0">
            <h6 className="fw-bold pt-3">서비스</h6>
            <ul className="list-unstyled small">
              <li>
                <Link
                  to="/features"
                  className="text-light text-decoration-none"
                >
                  주요 기능
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-light text-decoration-none">
                  가격
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-4 mb-md-0">
            <h6 className="fw-bold pt-3">회사소개</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  블로그
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  채용
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-4 mb-md-0">
            <h6 className="fw-bold pt-3">정보</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="fw-bold pt-3">연락처</h6>
            <ul className="list-unstyled small">
              <li>
                <a
                  href="mailto:support@consulon.com"
                  className="text-light text-decoration-none"
                >
                  support@consulon.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3 small">
          © 2025 ConsultOn. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
