import { useEffect, useState, useRef } from "react";

import FloatingIcons from "../components/FloatingIcons";
import Stats from "../components/Stats";
import MagneticButton from "../components/MagneticButton";

function Hero() {

  const roles = [
    "Frontend Developer",
    "React Developer",
    "Cybersecurity Student",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const cardRef = useRef(null);

  useEffect(() => {

    let currentText = roles[index];

    let i = 0;

    setText("");

    const typing = setInterval(() => {

      setText(currentText.slice(0, i));

      i++;

      if (i > currentText.length) {

        clearInterval(typing);

        setTimeout(() => {

          setIndex((prev) =>
            prev === roles.length - 1
              ? 0
              : prev + 1
          );

        }, 1500);

      }

    }, 100);

    return () => clearInterval(typing);

  }, [index]);

  const socialLinks = [

    {
      name: "GitHub",
      link: "https://github.com/rathishram0-afk",
    },

    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/rathish-kumar-v-2007-/",
    },

    {
      name: "Instagram",
      link: "https://www.instagram.com/its_.me._rathish/",
    },

  ];

  /* 3D EFFECT */
  const handleMouseMove = (e) => {

    if (window.innerWidth < 768) return;

    const card = cardRef.current;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY =
      ((x / rect.width) - 0.5) * 18;

    const rotateX =
      ((y / rect.height) - 0.5) * -18;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;

    card.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(0,255,255,0.15),
        rgba(255,255,255,0.03)
      )
    `;
  };

  const handleMouseLeave = () => {

    const card = cardRef.current;

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;

    card.style.background =
      "rgba(255,255,255,0.03)";
  };

  return (

    <section
      id="home"

      style={{
        minHeight: "120vh",

        scrollMarginTop: "120px",

        background:
          "radial-gradient(circle at top,#0f172a,#050816)",

        color: "white",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        position: "relative",

        overflow: "hidden",

        fontFamily: "Arial",

        padding: window.innerWidth < 768
          ? "170px 15px 80px"
          : "180px 20px 120px",
      }}
    >

      {/* FLOATING ICONS */}
      <FloatingIcons />

      {/* GRID */}
      <div
        style={{
          position: "absolute",

          width: "100%",

          height: "100%",

          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",

          backgroundSize: "60px 60px",

          zIndex: "1",
        }}
      />

      {/* BLUE GLOW */}
      <div
        style={{
          position: "absolute",

          width: "500px",

          height: "500px",

          background: "#00ffff",

          borderRadius: "50%",

          filter: "blur(180px)",

          opacity: "0.25",

          top: "-120px",

          left: "-120px",
        }}
      />

      {/* PURPLE GLOW */}
      <div
        style={{
          position: "absolute",

          width: "400px",

          height: "400px",

          background: "#8b5cf6",

          borderRadius: "50%",

          filter: "blur(170px)",

          opacity: "0.25",

          bottom: "-120px",

          right: "-120px",
        }}
      />

      {/* ROTATING BORDER */}
      <div
        className="rotate-glow"

        style={{
          position: "absolute",

          width: "82%",

          maxWidth: "1400px",

          height: "82%",

          borderRadius: "45px",

          background:
            "conic-gradient(from 0deg,#00ffff,#8b5cf6,#00ffff)",

          filter: "blur(25px)",

          opacity: "0.18",

          zIndex: "1",
        }}
      ></div>

      {/* MAIN CARD */}
      <div
        ref={cardRef}

        onMouseMove={handleMouseMove}

        onMouseLeave={handleMouseLeave}

        className="glass-card"

        style={{
          position: "relative",

          zIndex: "2",

          textAlign: "center",

          width: "100%",

          maxWidth: "1400px",

          minHeight:
            window.innerWidth < 768
              ? "auto"
              : "950px",

          padding:
            window.innerWidth < 768
              ? "70px 20px"
              : "120px 45px 140px",

          borderRadius: "40px",

          background:
            "rgba(255,255,255,0.03)",

          backdropFilter: "blur(14px)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          boxShadow:
            "0 0 40px rgba(0,255,255,0.08)",

          transformStyle: "preserve-3d",

          transition:
            "transform 0.15s ease, background 0.2s ease",

          animation:
            "floatCard 6s ease-in-out infinite",
        }}
      >

        {/* SMALL TEXT */}
        <p
          style={{
            color: "#00ffff",

            letterSpacing:
              window.innerWidth < 768
                ? "4px"
                : "8px",

            textTransform: "uppercase",

            fontWeight: "bold",

            marginBottom: "25px",

            fontSize:
              window.innerWidth < 768
                ? "12px"
                : "15px",
          }}
        >
          WELCOME TO MY PORTFOLIO
        </p>

        {/* NAME */}
        <h1
          className="hero-glow"

          style={{
            fontSize:
              window.innerWidth < 768
                ? "70px"
                : "clamp(90px,14vw,180px)",

            fontWeight: "900",

            lineHeight: "0.9",

            marginBottom: "50px",

            letterSpacing: "-4px",

            textShadow:
              "0 0 40px rgba(0,255,255,0.35)",
          }}
        >
          RATHISH
          <br />

          <span
            style={{
              color: "#00ffff",
            }}
          >
            KUMAR
          </span>
        </h1>

        {/* TYPING TEXT */}
        <h2
          style={{
            fontSize:
              window.innerWidth < 768
                ? "28px"
                : "clamp(28px,4vw,50px)",

            marginBottom: "70px",

            color: "#ffffff",

            minHeight: "70px",

            fontWeight: "700",

            textShadow:
              "0 0 20px rgba(0,255,255,0.4)",

            letterSpacing: "1px",
          }}
        >
          {text}

          <span
            style={{
              color: "#00ffff",

              animation:
                "blink 1s infinite",

              textShadow:
                "0 0 15px #00ffff",
            }}
          >
            |
          </span>

        </h2>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",

            justifyContent: "center",

            gap: "25px",

            flexWrap: "wrap",
          }}
        >

          {socialLinks.map((item, index) => (

            <MagneticButton
              key={index}
              href={item.link}
            >
              {item.name}
            </MagneticButton>

          ))}

        </div>

        {/* STATS */}
        <Stats />

        {/* BOTTOM TEXT */}
        <p
          style={{
            marginTop: "55px",

            color: "#94a3b8",

            fontSize:
              window.innerWidth < 768
                ? "15px"
                : "18px",

            letterSpacing: "1px",
          }}
        >
          Building Modern Web Experiences ✨
        </p>

      </div>

    </section>

  );
}

export default Hero;