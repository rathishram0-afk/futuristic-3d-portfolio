function ParticlesBg() {

  const particles = [...Array(40)];

  return (
    <div
      style={{
        position: "fixed",

        top: 0,
        left: 0,

        width: "100%",

        height: "100%",

        overflow: "hidden",

        zIndex: "0",

        pointerEvents: "none",
      }}
    >

      {particles.map((_, index) => (

        <span
          key={index}

          style={{
            position: "absolute",

            width: Math.random() * 6 + "px",

            height: Math.random() * 6 + "px",

            background:
              index % 2 === 0
                ? "#00ffff"
                : "#8b5cf6",

            borderRadius: "50%",

            top: Math.random() * 100 + "%",

            left: Math.random() * 100 + "%",

            opacity: 0.6,

            boxShadow:
              "0 0 20px rgba(0,255,255,0.8)",

            animation: `float ${
              Math.random() * 10 + 10
            }s linear infinite`,
          }}
        />

      ))}

      <style>
        {`
          @keyframes float {

            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-100px);
            }

            100% {
              transform: translateY(0px);
            }

          }
        `}
      </style>

    </div>
  );
}

export default ParticlesBg;