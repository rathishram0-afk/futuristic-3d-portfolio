import { motion } from "framer-motion";

import profile from "../assets/rathish.jpg";

function About() {

  const skills = [
    "React",
    "JavaScript",
    "Python",
    "Cybersecurity",
    "UI/UX",
    "Frontend",
  ];

  return (

    <motion.section

      initial={{ opacity: 0, y: 80 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}

      viewport={{ once: true }}

      id="about"

      style={{
        minHeight: "75vh",

        background: "#050816",

        color: "white",

        padding: "150px 8% 90px",

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

          filter: "blur(160px)",

          opacity: "0.08",

          top: "-120px",

          left: "-120px",
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

          filter: "blur(150px)",

          opacity: "0.08",

          bottom: "-100px",

          right: "-100px",
        }}
      />

      {/* CONTENT */}
      <motion.div

        whileHover={{
          scale: 1.01,
        }}

        className="glass-card"

        style={{
          position: "relative",

          zIndex: "5",

          display: "flex",

          justifyContent: "space-between",

          alignItems: "center",

          gap: "40px",

          flexWrap: "wrap",

          padding: "45px",

          borderRadius: "40px",
        }}
      >

        {/* LEFT SIDE */}
        <div
          style={{
            flex: "1",

            minWidth: "300px",
          }}
        >

          <p
            style={{
              color: "#00ffff",

              letterSpacing: "6px",

              fontWeight: "bold",

              marginBottom: "20px",

              textTransform: "uppercase",
            }}
          >
            About Me
          </p>

          <h1
            className="hero-glow"

            style={{
              fontSize: "clamp(45px, 7vw, 80px)",

              marginBottom: "25px",

              lineHeight: "1.1",

              textShadow:
                "0 0 20px rgba(255,255,255,0.15)",
            }}
          >
            Passionate
            <span
              style={{
                color: "#00ffff",
              }}
            >
              {" "}Developer
            </span>
          </h1>

          <p
            style={{
              color: "#cbd5e1",

              fontSize: "20px",

              lineHeight: "1.9",

              marginBottom: "40px",
            }}
          >
            Hi, I'm Rathish from Chennai.
            I love building futuristic websites,
            animated UI designs, and cybersecurity
            projects using modern web technologies.
          </p>

          {/* SKILLS */}
          <div
            style={{
              display: "flex",

              gap: "15px",

              flexWrap: "wrap",
            }}
          >

            {skills.map((skill, index) => (

              <motion.div

                whileHover={{
                  scale: 1.08,
                  y: -5,
                }}

                key={index}

                className="glow-btn"

                style={{
                  padding: "12px 22px",

                  borderRadius: "30px",

                  background:
                    "rgba(255,255,255,0.04)",

                  border:
                    "1px solid rgba(0,255,255,0.25)",

                  color: "#00ffff",

                  fontWeight: "bold",

                  backdropFilter: "blur(10px)",

                  boxShadow:
                    "0 0 15px rgba(0,255,255,0.12)",

                  cursor: "pointer",
                }}
              >
                {skill}
              </motion.div>

            ))}

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            flex: "1",

            minWidth: "300px",

            display: "flex",

            justifyContent: "center",
          }}
        >

          <motion.div

            whileHover={{
              rotate: 2,
              scale: 1.05,
            }}

            className="glass-card float"

            style={{
              width: "340px",

              height: "340px",

              borderRadius: "35px",

              overflow: "hidden",

              background:
                "linear-gradient(145deg,#0f172a,#111827)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              display: "flex",

              justifyContent: "center",

              alignItems: "center",

              boxShadow:
                "0 0 40px rgba(0,255,255,0.25)",

              transform: "rotate(-3deg)",

              transition: "0.4s ease",
            }}
          >

            <img
              src={profile}

              alt="Rathish"

              style={{
                width: "100%",

                height: "100%",

                objectFit: "cover",
              }}
            />

          </motion.div>

        </div>

      </motion.div>

    </motion.section>
  );
}

export default About;