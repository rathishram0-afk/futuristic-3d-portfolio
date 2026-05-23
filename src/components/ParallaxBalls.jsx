import { useEffect } from "react";

function ParallaxBalls() {

  useEffect(() => {

    const move = (e) => {

      const balls =
        document.querySelectorAll(".parallax-ball");

      balls.forEach((ball, index) => {

        const speed = (index + 1) * 0.02;

        const x =
          (window.innerWidth / 2 - e.clientX) * speed;

        const y =
          (window.innerHeight / 2 - e.clientY) * speed;

        ball.style.transform =
          `translate(${x}px, ${y}px)`;
      });

    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);

  }, []);

  return (

    <>
      {/* BALL 1 */}
      <div
        className="parallax-ball"

        style={{
          position: "fixed",

          width: "300px",

          height: "300px",

          borderRadius: "50%",

          background:
            "rgba(0,255,255,0.08)",

          filter: "blur(80px)",

          top: "10%",

          left: "5%",

          zIndex: "0",

          pointerEvents: "none",

          transition: "transform 0.2s linear",
        }}
      />

      {/* BALL 2 */}
      <div
        className="parallax-ball"

        style={{
          position: "fixed",

          width: "250px",

          height: "250px",

          borderRadius: "50%",

          background:
            "rgba(139,92,246,0.08)",

          filter: "blur(80px)",

          bottom: "10%",

          right: "5%",

          zIndex: "0",

          pointerEvents: "none",

          transition: "transform 0.2s linear",
        }}
      />

    </>
  );
}

export default ParallaxBalls;