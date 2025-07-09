import { useEffect, useState, useRef } from "react";

export default function Lumo() {
  // 모든 이미지를 배열로 관리
  const slides = [
    {
      type: "image",
      src: "/2.png"
    },
    {
      type: "video",
      videoSrc: "/lumovi.mp4",
      bgSrc: "/mv2.png"
    }
  ];

  // 현재 슬라이드 인덱스
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const isAnimating = useRef(false);

  // 휠/키보드/터치 이벤트로 슬라이드 전환
  useEffect(() => {
    const handleWheel = (e) => {
      if (isAnimating.current) return;
      if (e.deltaY > 0 && current < slides.length - 1) {
        isAnimating.current = true;
        setCurrent((c) => Math.min(c + 1, slides.length - 1));
        setTimeout(() => { isAnimating.current = false; }, 600);
      } else if (e.deltaY < 0 && current > 0) {
        isAnimating.current = true;
        setCurrent((c) => Math.max(c - 1, 0));
        setTimeout(() => { isAnimating.current = false; }, 600);
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [current, slides.length]);

  // 슬라이드 이동 애니메이션
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateY(-${current * 100}vh)`;
    }
  }, [current]);

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#fff", overflow: "hidden", position: "relative" }}>
      <div
        ref={containerRef}
        style={{
          width: "100vw",
          height: `calc(100vh * ${slides.length})`,
          transition: "transform 0.6s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: slide.type === "video" ? `#000 url(${slide.bgSrc}) center center / auto 100vh no-repeat` : "#fff",
              position: "relative",
            }}
          >
            {slide.type === "image" && (
              <img
                src={slide.src}
                alt={`LUMO ${idx}`}
                style={{
                  maxWidth: "100vw",
                  maxHeight: "100vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            )}
            {slide.type === "video" && (
              <video
                src={slide.videoSrc}
                style={{
                  width: "70vw",
                  maxWidth: "1000px",
                  height: "auto",
                  borderRadius: "16px",
                  background: "#000",
                  display: "block",
                  margin: "0 auto",
                  position: "relative",
                  top: "-40px"
                }}
                controls
                autoPlay
                muted
                loop
                playsInline
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 