import { motion } from "framer-motion";

function Contact() {

  return (

    <motion.section

      initial={{ opacity: 0, y: 80 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}

      viewport={{ once: true }}

      id="contact"

      style={{
        minHeight: "100vh",

        background: "#050816",

        color: "white",

        padding: "120px 8%",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        position: "relative",

        overflow: "hidden",

        fontFamily: "Arial",
      }}
    >

      {/* CYAN GLOW */}
      <div
        style={{
          position: "absolute",

          width: "400px",
          height: "400px",

          background: "#00ffff",

          borderRadius: "50%",

          filter: "blur(180px)",

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

      {/* MAIN BOX */}
      <motion.div

        whileHover={{
          scale: 1.01,
        }}

        className="glass-card"

        style={{
          position: "relative",

          zIndex: "5",

          width: "100%",

          maxWidth: "850px",

          background:
            "linear-gradient(145deg,#0f172a,#111827)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          borderRadius: "35px",

          padding: "65px",

          backdropFilter: "blur(12px)",

          boxShadow:
            "0 0 30px rgba(0,255,255,0.08)",
        }}
      >

        {/* TOP TEXT */}
        <p
          style={{
            color: "#00ffff",

            letterSpacing: "6px",

            textTransform: "uppercase",

            fontWeight: "bold",

            marginBottom: "20px",
          }}
        >
          Contact
        </p>

        {/* TITLE */}
        <h1
          className="hero-glow"

          style={{
            fontSize: "clamp(45px,7vw,80px)",

            marginBottom: "20px",

            lineHeight: "1.1",

            textShadow:
              "0 0 20px rgba(255,255,255,0.12)",
          }}
        >
          Let's Work
          <span
            style={{
              color: "#00ffff",
            }}
          >
            {" "}Together
          </span>
        </h1>

        {/* SUBTEXT */}
        <p
          style={{
            color: "#cbd5e1",

            lineHeight: "1.9",

            marginBottom: "35px",

            fontSize: "18px",
          }}
        >
          Interested in working together or building
          futuristic projects? Feel free to contact me.
        </p>

        {/* CONTACT INFO */}
        <div
          style={{
            marginBottom: "35px",

            display: "flex",

            flexDirection: "column",

            gap: "12px",
          }}
        >

          <motion.p

            whileHover={{
              x: 8,
            }}

            className="glow"

            style={{
              color: "#00ffff",

              fontWeight: "bold",

              fontSize: "18px",
            }}
          >
            📧 rathishram0@gmail.com
          </motion.p>

          <motion.p

            whileHover={{
              x: 8,
            }}

            className="glow"

            style={{
              color: "#00ffff",

              fontWeight: "bold",

              fontSize: "18px",
            }}
          >
            📱 +91 7010384060
          </motion.p>

        </div>

        {/* INPUTS */}
        <div
          style={{
            display: "flex",

            flexDirection: "column",

            gap: "25px",
          }}
        >

          <motion.input

            whileFocus={{
              scale: 1.02,
            }}

            type="text"

            placeholder="Your Name"

            style={{
              padding: "18px 22px",

              borderRadius: "18px",

              border:
                "1px solid rgba(255,255,255,0.08)",

              background:
                "rgba(255,255,255,0.03)",

              color: "white",

              outline: "none",

              fontSize: "16px",

              backdropFilter: "blur(10px)",
            }}
          />

          <motion.input

            whileFocus={{
              scale: 1.02,
            }}

            type="email"

            placeholder="Your Email"

            style={{
              padding: "18px 22px",

              borderRadius: "18px",

              border:
                "1px solid rgba(255,255,255,0.08)",

              background:
                "rgba(255,255,255,0.03)",

              color: "white",

              outline: "none",

              fontSize: "16px",

              backdropFilter: "blur(10px)",
            }}
          />

          <motion.textarea

            whileFocus={{
              scale: 1.02,
            }}

            rows="6"

            placeholder="Your Message"

            style={{
              padding: "18px 22px",

              borderRadius: "18px",

              border:
                "1px solid rgba(255,255,255,0.08)",

              background:
                "rgba(255,255,255,0.03)",

              color: "white",

              outline: "none",

              fontSize: "16px",

              resize: "none",

              backdropFilter: "blur(10px)",
            }}
          />

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
              padding: "16px 30px",

              border: "none",

              borderRadius: "40px",

              background:
                "linear-gradient(90deg,#00ffff,#8b5cf6)",

              color: "#050816",

              fontWeight: "bold",

              fontSize: "17px",

              cursor: "pointer",

              transition: "0.3s ease",

              boxShadow:
                "0 0 25px rgba(0,255,255,0.25)",
            }}
          >
            Send Message
          </motion.button>

        </div>

      </motion.div>

    </motion.section>
  );
}

export default Contact;