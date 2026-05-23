import { useEffect } from "react";

function CursorTrail() {

  useEffect(() => {

    const createParticle = (x, y) => {

      const particle =
        document.createElement("div");

      particle.style.position = "fixed";

      particle.style.left = `${x}px`;

      particle.style.top = `${y}px`;

      particle.style.width = "10px";

      particle.style.height = "10px";

      particle.style.borderRadius = "50%";

      particle.style.pointerEvents = "none";

      particle.style.background =
        "linear-gradient(90deg,#00ffff,#8b5cf6)";

      particle.style.boxShadow =
        "0 0 15px #00ffff";

      particle.style.zIndex = "9999";

      particle.style.transition =
        "all 0.8s ease-out";

      document.body.appendChild(particle);

      setTimeout(() => {

        particle.style.opacity = "0";

        particle.style.transform =
          "scale(0) translateY(-20px)";

      }, 10);

      setTimeout(() => {

        particle.remove();

      }, 800);

    };

    const move = (e) => {

      createParticle(
        e.clientX,
        e.clientY
      );

    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );

  }, []);

  return null;
}

export default CursorTrail;