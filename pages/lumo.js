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
      <video
        src="/lumovi.mp4"
        style={{
          width: "80vw",
          maxWidth: "1200px",
          height: "auto",
          borderRadius: "16px",
          background: "#000",
          zIndex: 2
        }}
        controls
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
} 