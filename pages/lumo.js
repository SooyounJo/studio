import VideoPlayer from "../src/components/VideoPlayer";

export default function Lumo() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      background: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }}>
      <VideoPlayer
        src="/lumovi.mp4"
        style={{
          width: "80vw",
          maxWidth: "1200px",
          height: "auto",
          borderRadius: "16px",
          zIndex: 2,
          background: "#000"
        }}
        controls // 재생바 추가
      />
    </div>
  );
} 