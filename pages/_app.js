import '../styles/globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [fade, setFade] = useState('in');

  // 커스텀 커서 위치/상태
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [isTriangle, setIsTriangle] = useState(false);
  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    const down = () => setIsTriangle(true);
    const up = () => setIsTriangle(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, []);

  useEffect(() => {
    setFade('out');
    const timeout = setTimeout(() => setFade('in'), 80);
    return () => clearTimeout(timeout);
  }, [router.asPath]);

  return (
    <>
      <div
        className={`custom-cursor${isTriangle ? ' triangle' : ''}`}
        style={{ left: cursor.x, top: cursor.y }}
      />
    <div className={`fade-${fade}`} style={{ width: '100vw', height: '100vh' }}>
      <Component {...pageProps} />
    </div>
    </>
  );
} 