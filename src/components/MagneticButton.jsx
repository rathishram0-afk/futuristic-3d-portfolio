function MagneticButton({ children, href }) {

  const handleMove = (e) => {

    const button = e.currentTarget;

    const rect = button.getBoundingClientRect();

    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;

    button.style.transform =
      `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleLeave = (e) => {

    e.currentTarget.style.transform =
      "translate(0px,0px)";
  };

  return (

    <a
      href={href}

      target="_blank"

      rel="noreferrer"

      onMouseMove={handleMove}

      onMouseLeave={handleLeave}

      className="glow-btn"

      style={{
        padding: "20px 45px",

        borderRadius: "50px",

        textDecoration: "none",

        color: "#00ffff",

        border: "2px solid #00ffff",

        fontWeight: "bold",

        fontSize: "20px",

        transition: "0.15s ease",

        display: "inline-block",

        backdropFilter: "blur(10px)",

        boxShadow:
          "0 0 20px rgba(0,255,255,0.2)",
      }}
    >
      {children}
    </a>

  );
}

export default MagneticButton;