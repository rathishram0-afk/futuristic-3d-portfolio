import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

function Services() {

  const services = [

    {
      title: "Frontend Development",

      icon: "💻",

      desc:
        "Modern responsive websites using React and JavaScript.",
    },

    {
      title: "UI/UX Design",

      icon: "🎨",

      desc:
        "Clean futuristic designs with smooth animations.",
    },

    {
      title: "Cybersecurity",

      icon: "🛡️",

      desc:
        "Basic security testing and cyber awareness projects.",
    },

  ];

  return (

    <motion.section

      initial={{ opacity: 0, y: 80 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}

      viewport={{ once: true }}

      id="services"

      style={{
        minHeight: "100vh",

        background:
          "linear-gradient(to bottom,#050816,#0f172a)",

        color: "white",

        padding: "80px 8%",

        display: "flex",

        flexDirection: "column",

        alignItems: "center",

        position: "relative",

        overflow: "hidden",
      }}
    >

      {/* CYAN GLOW */}
      <div
        style={{
          position: "absolute",

          width: "450px",

          height: "450px",

          background: "#00ffff",

          borderRadius: "50%",

          filter: "blur(180px)",

          opacity: "0.08",

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

          filter: "blur(180px)",

          opacity: "0.08",

          bottom: "-120px",

          right: "-120px",
        }}
      />

      {/* TOP TEXT */}
      <div
        style={{
          textAlign: "center",

          marginBottom: "70px",

          position: "relative",

          zIndex: "5",
        }}
      >

        <p
          style={{
            color: "#00ffff",

            letterSpacing: "6px",

            marginBottom: "15px",

            fontWeight: "bold",
          }}
        >
          WHAT I DO
        </p>

        <h1
          className="hero-glow"

          style={{
            fontSize: "clamp(42px,6vw,75px)",

            marginBottom: "10px",

            fontWeight: "900",
          }}
        >
          Services
        </h1>

      </div>

      {/* SERVICE CARDS */}
      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",

          gap: "35px",

          width: "100%",

          maxWidth: "1300px",

          position: "relative",

          zIndex: "5",
        }}
      >

        {services.map((item, index) => (

          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.03}
            transitionSpeed={1500}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            key={index}
          >

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
                scale: 1.04,
              }}

              className="glass-card float"

              style={{
                borderRadius: "35px",

                padding: "40px 28px",

                textAlign: "center",

                cursor: "pointer",

                transition: "0.4s ease",

                background:
                  "linear-gradient(145deg,#0f172a,#111827)",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                backdropFilter: "blur(12px)",

                boxShadow:
                  "0 0 20px rgba(0,255,255,0.08)",
              }}
            >

              {/* ICON */}
              <motion.div

                whileHover={{
                  rotate: 10,
                  scale: 1.15,
                }}

                style={{
                  fontSize: "65px",

                  marginBottom: "25px",

                  filter:
                    "drop-shadow(0 0 20px rgba(0,255,255,0.3))",
                }}
              >
                {item.icon}
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
                  fontSize: "26px",

                  marginBottom: "20px",

                  color: "white",

                  fontWeight: "800",
                }}
              >
                {item.title}
              </h2>

              {/* DESCRIPTION */}
              <p
                style={{
                  color: "#cbd5e1",

                  lineHeight: "1.8",

                  fontSize: "18px",
                }}
              >
                {item.desc}
              </p>

            </motion.div>

          </Tilt>

        ))}

      </div>

    </motion.section>

  );
}

export default Services;