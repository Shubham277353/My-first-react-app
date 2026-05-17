import { useState } from "react";

export default function PointerStalker() {
  const [pointer, setPointer] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      onPointerMove={(e) => {
        setPointer({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: 'relative',
        width : '100vw',
        height : '100vh',
      }}
    >
    <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius : '50%',
        width : 20,
        height: 20,
        transform : `translate(${pointer.x}px , ${pointer.y}px)`,
        top : -20,
        left : -20
    }}></div>
    </div>
  );
}
