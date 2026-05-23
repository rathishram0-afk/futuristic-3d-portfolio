function FloatingIcons() {

  return (

    <>

      {/* REACT ICON */}
      <div
        style={{
          position: "absolute",

          top: "22%",

          left: "10%",

          fontSize: "60px",

          zIndex: "1",

          opacity: "0.8",

          filter:
            "drop-shadow(0 0 20px rgba(0,255,255,0.6))",

          animation:
            "floatIcon 6s ease-in-out infinite",
        }}
      >
        ⚛️
      </div>

      {/* CYBER SECURITY ICON */}
      <div
        style={{
          position: "absolute",

          top: "65%",

          right: "10%",

          fontSize: "60px",

          zIndex: "1",

          opacity: "0.8",

          filter:
            "drop-shadow(0 0 20px rgba(139,92,246,0.6))",

          animation:
            "floatIcon 7s ease-in-out infinite",
        }}
      >
        🛡️
      </div>

      <style>
        {`

          @keyframes floatIcon {

            0%{
              transform: translateY(0px);
            }

            50%{
              transform: translateY(-25px);
            }

            100%{
              transform: translateY(0px);
            }

          }

        `}
      </style>

    </>

  );
}

export default FloatingIcons;