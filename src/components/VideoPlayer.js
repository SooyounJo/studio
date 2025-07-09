import React, { useRef, useState, useEffect } from "react";

export default function VideoPlayer({ src, style }) {
  const videoRef = useRef(null);

  // 슬라이드 전환 시 자동 재생
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      style={style}
    />
  );
} 