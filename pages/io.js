import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import VideoPlayer from "../src/components/VideoPlayer";

export default function IO() {
  const router = useRouter();
  // 모든 이미지를 배열로 관리
  const slides = [
    {
      type: "image",
      src: "/3.png"
    },
    {
      type: "video",
      videoSrc: "/iovi.png",
      bgSrc: "/mv3.png"
    }
  ];

  // 현재 슬라이드 인덱스
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const isAnimating = useRef(false);

  // 스크롤 유도 애니메이션 상태
  const [showScrollHint, setShowScrollHint] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowScrollHint(false), 4000);
    return () => clearTimeout(timer);
  }, []);

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
    const handleKey = (e) => {
      if (isAnimating.current) return;
      if ((e.key === "ArrowDown" || e.key === "PageDown") && current < slides.length - 1) {
        isAnimating.current = true;
        setCurrent((c) => Math.min(c + 1, slides.length - 1));
        setTimeout(() => { isAnimating.current = false; }, 600);
      } else if ((e.key === "ArrowUp" || e.key === "PageUp") && current > 0) {
        isAnimating.current = true;
        setCurrent((c) => Math.max(c - 1, 0));
        setTimeout(() => { isAnimating.current = false; }, 600);
      }
    };
    // 터치 지원
    let touchStartY = null;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      if (touchStartY === null) return;
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      if (Math.abs(diff) > 40 && !isAnimating.current) {
        if (diff > 0 && current < slides.length - 1) {
          isAnimating.current = true;
          setCurrent((c) => Math.min(c + 1, slides.length - 1));
          setTimeout(() => { isAnimating.current = false; }, 600);
        } else if (diff < 0 && current > 0) {
          isAnimating.current = true;
          setCurrent((c) => Math.max(c - 1, 0));
          setTimeout(() => { isAnimating.current = false; }, 600);
        }
      }
      touchStartY = null;
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKey);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
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
      <button
        onClick={() => router.push("/")}
        style={{ position: "absolute", top: 32, left: 32, background: "none", border: "none", padding: 0, cursor: "pointer", zIndex: 10 }}
        aria-label="뒤로가기"
      >
        <img src="/arrow-back.svg" alt="뒤로가기" style={{ width: 48, height: 48 }} />
      </button>
      {/* 슬라이드 전체를 하나의 래퍼에 넣고 transform으로 이동 */}
      <div
        ref={containerRef}
        style={{
          width: "100vw",
          height: `calc(100vh * ${slides.length} + 40px * ${slides.length - 1})`,
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
                alt={`IO ${idx}`}
                style={{
                  maxWidth: "100vw",
                  maxHeight: "100vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            )}
            {slide.type === "video" && (
              <VideoPlayer
                src="/iovi.mp4"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "45%",
                  transform: "translate(-50%, -50%)",
                  width: "80vw",
                  maxWidth: "1200px",
                  height: "auto",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                  borderRadius: "16px",
                  zIndex: 2,
                  pointerEvents: "none"
                }}
              />
            )}
            {/* 슬라이드 간 공백 */}
            {idx !== slides.length - 1 && (
              <div style={{ position: "absolute", left: 0, bottom: -40, width: "100vw", height: "40px", background: "#fff" }} />
            )}
          </div>
        ))}
      </div>
      {/* 스크롤 유도 애니메이션 */}
      {showScrollHint && (
        <div style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 32,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 20,
        }}>
          <div style={{
            width: 40,
            height: 60,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: 0.8,
            animation: "fadeIn 0.5s cubic-bezier(.4,0,.2,1)",
          }}>
            <span style={{
              display: "block",
              width: 0,
              height: 0,
              borderLeft: "20px solid transparent",
              borderRight: "20px solid transparent",
              borderTop: "28px solid #222",
              animation: "arrow-bounce 1.2s infinite"
            }} />
          </div>
          <style>{`
            @keyframes arrow-bounce {
              0% { transform: translateY(0); opacity: 0.7; }
              50% { transform: translateY(18px); opacity: 1; }
              100% { transform: translateY(0); opacity: 0.7; }
            }
          `}</style>
        </div>
      )}
    </div>
  );
} 