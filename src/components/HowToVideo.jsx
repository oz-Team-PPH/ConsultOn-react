const HowToVideo = () => {
  const handlePlayVideo = () => {
    // 비디오 재생 로직 구현
    console.log("비디오 재생");
  };

  return (
    <section
      id="howto"
      className="py-5 text-center w-100"
      style={{
        backgroundColor: "#f8f9fa",
      }}
    >
      <div className="container">
        {/* 타이틀 */}
        <h2 className="howtouse fw-bold">컨설트온 사용법 영상</h2>
        <p className="howtouseSub text-muted">
          3분만에 배우는 컨설트온 사용법을 배워보세요
        </p>

        {/* 영상 플레이어 더미 박스 */}
        <div
          className="ratio ratio-16x9 mx-auto mb-5"
          style={{
            maxWidth: "800px",
            background: "#f8f9fa",
            borderRadius: "0.5rem",
            overflow: "hidden",
          }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <button
              type="button"
              className="btn btn-light btn-lg rounded-circle"
              style={{
                fontSize: "3rem",
                width: "4rem",
                height: "4rem",
                lineHeight: "1",
              }}
              onClick={handlePlayVideo}
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToVideo;
