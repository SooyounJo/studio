import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [coHover, setCoHover] = useState(false);
  const [luHover, setLuHover] = useState(false);
  const [ioHover, setIoHover] = useState(false);
  const [hovered, setHovered] = useState(null); // 'co', 'lu', 'io', null
  const [fadeOut, setFadeOut] = useState(false);
  const titleRef = useRef(null);
  const [skewXY, setSkewXY] = useState({ x: 0, y: 0 });
  const router = useRouter();

  // 마우스 따라 기울기
  useEffect(() => {
    const handleMouseMove = (e) => {
      const el = titleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setSkewXY({ x: x / 40, y: -y / 60 });
    };
    const handleMouseLeave = () => {
      setSkewXY({ x: 0, y: 0 });
    };
    const el = titleRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (el) {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // 각 이미지의 opacity 계산
  const getOpacity = (key) => {
    if (!hovered) return 1;
    return hovered === key ? 1 : 0.4;
  };
  // main.png의 opacity 계산
  const getMainOpacity = () => hovered ? 0.4 : 1;

  const opacityTransition = "opacity 0.6s cubic-bezier(.4,0,.2,1)";

  // titleTransform에서 floatXY 제거, skew만 적용
  const titleTransform = `translate(-50%, 0px) skewX(${skewXY.x}deg) skewY(${skewXY.y}deg) scale(1.04)`;

  // 클릭 시 부드러운 페이드아웃 후 라우팅
  const handleClick = (path) => {
    setFadeOut(true);
    setTimeout(() => {
      router.push(path);
    }, 500); // 페이드아웃 시간과 맞춤
  };

  return (
    <div style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", overflow: "hidden", background: "#fff", transition: "opacity 0.5s cubic-bezier(.4,0,.2,1)", opacity: fadeOut ? 0 : 1 }}>
      <img
        src="/main.png"
        alt="메인 이미지"
        style={{ width: "100vw", height: "100vh", objectFit: "cover", display: "block", position: "absolute", top: 0, left: 0, zIndex: 1, opacity: getMainOpacity(), transition: opacityTransition }}
      />
      {/* 상단 타이틀 이미지에 인터랙션 */}
      <div
        ref={titleRef}
        style={{
          position: "absolute",
          top: "130px",
          left: "50%",
          transform: titleTransform,
          zIndex: 3,
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          transition: `transform 0.3s cubic-bezier(.25,.8,.25,1), ${opacityTransition}`,
          willChange: "transform",
          cursor: "pointer",
          opacity: getMainOpacity(),
        }}
      >
        <img src="/main/title.png" alt="Title" style={{ height: "120px", objectFit: "contain", pointerEvents: "none" }} />
      </div>
      {/* COCOON */}
      <div
        style={{ position: "absolute", top: "400px", left: "2%", width: "220px", height: "220px", zIndex: 2, cursor: "pointer", opacity: getOpacity('co'), transition: opacityTransition }}
        onMouseEnter={() => { setCoHover(true); setHovered('co'); }}
        onMouseLeave={() => { setCoHover(false); setHovered(null); }}
        onClick={() => handleClick("/el")}
      >
        <img
          src="/main/co1.png"
          alt="COCOON"
          style={{
            width: "220px",
            height: "220px",
            objectFit: "contain",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: coHover ? 0 : 1,
            transition: "opacity 0.4s, transform 0.4s",
            transform: coHover ? "scale(1.05)" : "scale(0.9)",
          }}
        />
        <img
          src="/main/co2.png"
          alt="COCOON Hover"
          style={{
            width: "220px",
            height: "220px",
            objectFit: "contain",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: coHover ? 1 : 0,
            transition: "opacity 0.4s, transform 0.4s",
            transform: coHover ? "scale(1.05)" : "scale(0.9)",
          }}
        />
      </div>
      {/* LUMO */}
      <div
        style={{ position: "absolute", top: "400px", left: "35%", width: "220px", height: "220px", zIndex: 2, cursor: "pointer", opacity: getOpacity('lu'), transition: opacityTransition }}
        onMouseEnter={() => { setLuHover(true); setHovered('lu'); }}
        onMouseLeave={() => { setLuHover(false); setHovered(null); }}
        onClick={() => handleClick("/lumo")}
      >
        <img
          src="/main/lu1.png"
          alt="LUMO"
          style={{
            width: "220px",
            height: "220px",
            objectFit: "contain",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: luHover ? 0 : 1,
            transition: "opacity 0.4s, transform 0.4s",
            transform: luHover ? "scale(1.05)" : "scale(0.9)",
          }}
        />
        <img
          src="/main/lu2.png"
          alt="LUMO Hover"
          style={{
            width: "220px",
            height: "220px",
            objectFit: "contain",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: luHover ? 1 : 0,
            transition: "opacity 0.4s, transform 0.4s",
            transform: luHover ? "scale(1.05)" : "scale(0.9)",
          }}
        />
      </div>
      {/* IO */}
      <div
        style={{ position: "absolute", top: "400px", left: "68%", width: "220px", height: "220px", zIndex: 2, cursor: "pointer", opacity: getOpacity('io'), transition: opacityTransition }}
        onMouseEnter={() => { setIoHover(true); setHovered('io'); }}
        onMouseLeave={() => { setIoHover(false); setHovered(null); }}
        onClick={() => handleClick("/io")}
      >
        <img
          src="/main/io1.png"
          alt="IO"
          style={{
            width: "220px",
            height: "220px",
            objectFit: "contain",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: ioHover ? 0 : 1,
            transition: "opacity 0.4s, transform 0.4s",
            transform: ioHover ? "scale(1.05)" : "scale(0.9)",
          }}
        />
        <img
          src="/main/io2.png"
          alt="IO Hover"
          style={{
            width: "220px",
            height: "220px",
            objectFit: "contain",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: ioHover ? 1 : 0,
            transition: "opacity 0.4s, transform 0.4s",
            transform: ioHover ? "scale(1.05)" : "scale(0.9)",
          }}
        />
      </div>
    </div>
  );
} 