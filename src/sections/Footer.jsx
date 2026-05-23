function Footer() {

  return (

    <footer
      style={{
        background: "#050816",

        color: "white",

        padding: "40px 8%",

        borderTop:
          "1px solid rgba(255,255,255,0.08)",

        position: "relative",

        overflow: "hidden",
      }}
    >

      {/* GLOW */}
      <div
        style={{
          position: "absolute",

          width: "300px",

          height: "300px",

          background: "#00ffff",

          borderRadius: "50%",

          filter: "blur(150px)",

          opacity: "0.06",

          top: "-120px",

          right: "-120px",
        }}
      />

      <div
        style={{
          position: "relative",

          zIndex: "2",

          display: "flex",

          justifyContent: "space-between",

          alignItems: "center",

          flexWrap: "wrap",

          gap: "20px",
        }}
      >

        {/* LEFT */}
        <div>

          <h1
            className="hero-glow"

            style={{
              fontSize: "32px",

              marginBottom: "10px",

              fontWeight: "900",
            }}
          >
            Rathish Kumar
          </h1>

          <p
            style={{
              color: "#94a3b8",

              fontSize: "16px",
            }}
          >
            Building futuristic web experiences 🚀
          </p>

        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",

            gap: "20px",

            flexWrap: "wrap",
          }}
        >

          <a
            href="https://github.com/rathishram0-afk"

            target="_blank"

            rel="noreferrer"

            className="glow-btn"

            style={{
              textDecoration: "none",

              color: "#00ffff",

              fontWeight: "bold",
            }}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rathish-kumar-v-2007-/"

            target="_blank"

            rel="noreferrer"

            className="glow-btn"

            style={{
              textDecoration: "none",

              color: "#00ffff",

              fontWeight: "bold",
            }}
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/its_.me._rathish/"

            target="_blank"

            rel="noreferrer"

            className="glow-btn"

            style={{
              textDecoration: "none",

              color: "#00ffff",

              fontWeight: "bold",
            }}
          >
            Instagram
          </a>

        </div>

      </div>

      {/* BOTTOM */}
      <div
        style={{
          marginTop: "35px",

          textAlign: "center",

          color: "#64748b",

          fontSize: "15px",
        }}
      >
        © 2026 Rathish Kumar • All Rights Reserved
      </div>

    </footer>

  );
}

export default Footer;