const About = () => {
  return (
    <main>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold">About Consul+On</h1>
              <p className="lead text-muted">
                AI와 전문가를 연결하는 혁신적인 상담 플랫폼
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">미션</h5>
                    <p className="card-text">
                      누구나 쉽게 전문적인 상담을 받을 수 있도록 AI 기술을
                      활용하여 전문가와 사용자 간의 연결을 돕습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">비전</h5>
                    <p className="card-text">
                      상담의 접근성을 높이고, AI 기술을 통해 더욱 정확하고
                      효율적인 상담 서비스를 제공하는 것을 목표로 합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">핵심 가치</h5>
                    <p className="card-text">
                      • 접근성: 누구나 쉽게 이용할 수 있는 서비스
                      <br />
                      • 전문성: 검증된 전문가들의 품질 높은 상담
                      <br />• 혁신성: AI 기술을 활용한 스마트한 매칭
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">기술 스택</h5>
                    <p className="card-text">
                      • AI/ML: 자연어 처리, 추천 시스템
                      <br />
                      • 웹 기술: React, Node.js
                      <br />
                      • 화상 통화: WebRTC 기술
                      <br />• 클라우드: AWS, Azure
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
              <h3>팀 소개</h3>
              <p className="text-muted">
                다양한 분야의 전문가들이 모여 만든 Consul+On 팀입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
