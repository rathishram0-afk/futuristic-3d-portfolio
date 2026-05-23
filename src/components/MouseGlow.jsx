import { useEffect, useState } from "react";

function MouseGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const moveGlow = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", moveGlow);

    return () =>
      window.removeEventListener("mousemove", moveGlow);

  }, []);

  return (

    <div
      style={{
        position: "fixed",

        top: position.y - 120,

        left: position.x - 120,

        width: "240px",

        height: "240px",

        borderRadius: "50%",

        background:
          "radial-gradient(circle, rgba(0,255,255,0.22), transparent 70%)",

        pointerEvents: "none",

        zIndex: "0",

        transition: "top 0.08s linear, left 0.08s linear",

        filter: "blur(20px)",
      }}
    />

  );
}

export default MouseGlow;