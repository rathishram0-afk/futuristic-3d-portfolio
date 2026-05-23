import { motion } from "framer-motion";

function Projects() {

  const projects = [

    {
      icon: "🚀",

      title: "3D Portfolio Website",

      description:
        "Modern 3D portfolio with glowing neon effects, glassmorphism cards and premium animations.",

      tech: "React • Three.js • GSAP",
    },

    {
      icon: "🛡️",

      title: "Cybersecurity Dashboard",

      description:
        "Advanced hacker-style dashboard with live threat monitoring and animated security analytics.",

      tech: "React • Charts • Framer Motion",
    },

    {
      icon: "🤖",

      title: "AI SaaS Platform",

      description:
        "Premium AI web application with chatbot, image generation, dark UI and futuristic animations.",

      tech: "React • OpenAI API • Tailwind",
    },

  ];

  return (

    <motion.section

      initial={{ opacity: 0, y: 80 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}

      viewport={{ once: true }}

      id="projects"

      style={{
        minHeight: "100vh",

        background: "#050816",

        color: "white",

        padding: "120px 8%",

        position: "relative",

        overflow: "hidden",

        fontFamily: "Arial",
      }}
    >

      {/* TOP GLOW */}
      <div
        style={{
          position: "absolute",

          width: "400px",

          height: "400px",

          background: "#00ffff",

          borderRadius: "50%",

          filter: "blur(170px)",

          opacity: "0.08",

          top: "-100px",

          left: "-100px",
        }}
      />

      {/* PURPLE GLOW */}
      <div
        style={{
          position: "absolute",

          width: "350px",

          height: "350px",

          background: "#8b5cf6",

          borderRadius: "50%",

          filter: "blur(160px)",

          opacity: "0.08",

          bottom: "-100px",

          right: "-100px",
        }}
      />

      {/* HEADING */}
      <div
        style={{
          textAlign: "center",

          marginBottom: "80px",

          position: "relative",

          zIndex: "5",
        }}
      >

        <p
          style={{
            color: "#00ffff",

            letterSpacing: "6px",

            fontWeight: "bold",

            marginBottom: "15px",

            textTransform: "uppercase",
          }}
        >
          My Work
        </p>

        <h1
          className="hero-glow"

          style={{
            fontSize: "clamp(45px,7vw,90px)",

            fontWeight: "900",

            textShadow:
              "0 0 20px rgba(255,255,255,0.12)",
          }}
        >
          Featured Projects
        </h1>

      </div>

      {/* PROJECT CARDS */}
      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",

          gap: "35px",

          position: "relative",

          zIndex: "5",
        }}
      >

        {projects.map((project, index) => (

          <motion.div

            initial={{
              opacity: 0,
              y: 50,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}

            whileHover={{
              y: -15,
              rotateX: 5,
              rotateY: -5,
              scale: 1.03,
            }}

            key={index}

            className="glass-card float"

            style={{
              background:
                "linear-gradient(145deg,#0f172a,#111827)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              borderRadius: "30px",

              padding: "40px",

              transition: "0.4s ease",

              backdropFilter: "blur(12px)",

              boxShadow:
                "0 0 15px rgba(0,255,255,0.08)",

              transformStyle: "preserve-3d",

              cursor: "pointer",
            }}
          >

            {/* ICON */}
            <motion.div

              whileHover={{
                rotate: 10,
                scale: 1.15,
              }}

              style={{
                fontSize: "70px",

                marginBottom: "25px",

                filter:
                  "drop-shadow(0 0 20px rgba(0,255,255,0.3))",
              }}
            >
              {project.icon}
            </motion.div>

            {/* PREMIUM LINE */}
            <div
              style={{
                height: "4px",

                width: "100%",

                marginBottom: "25px",

                borderRadius: "20px",

                background:
                  "linear-gradient(90deg,#00ffff,#8b5cf6)",

                boxShadow:
                  "0 0 20px rgba(0,255,255,0.4)",
              }}
            ></div>

            {/* TITLE */}
            <h2
              style={{
                fontSize: "34px",

                marginBottom: "20px",

                lineHeight: "1.2",

                fontWeight: "800",
              }}
            >
              {project.title}
            </h2>

            {/* DESCRIPTION */}
            <p
              style={{
                color: "#cbd5e1",

                lineHeight: "1.8",

                marginBottom: "25px",

                fontSize: "17px",
              }}
            >
              {project.description}
            </p>

            {/* TECH */}
            <p
              style={{
                color: "#00ffff",

                marginBottom: "30px",

                fontWeight: "bold",
              }}
            >
              {project.tech}
            </p>

            {/* BUTTON */}
            <motion.button

              whileHover={{
                scale: 1.05,
                y: -5,
              }}

              whileTap={{
                scale: 0.95,
              }}

              className="glow-btn"

              style={{
                padding: "14px 30px",

                border: "none",

                borderRadius: "40px",

                background:
                  "linear-gradient(90deg,#00ffff,#8b5cf6)",

                color: "#050816",

                fontWeight: "bold",

                cursor: "pointer",

                fontSize: "16px",

                transition: "0.3s ease",

                boxShadow:
                  "0 0 20px rgba(0,255,255,0.3)",
              }}
            >
              View Project
            </motion.button>

          </motion.div>

        ))}

      </div>

    </motion.section>

  );
}

export default Projects;