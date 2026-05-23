import { useEffect, useState } from "react";

function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const move = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);

  }, []);

  return (

    <div
      style={{
        position: "fixed",

        top: position.y - 100,

        left: position.x - 100,

        width: "200px",

        height: "200px",

        borderRadius: "50%",

        background:
          "rgba(0,255,255,0.12)",

        filter: "blur(80px)",

        pointerEvents: "none",

        zIndex: "0",

        transition: "0.08s linear",
      }}
    />

  );
}

export default CursorGlow;