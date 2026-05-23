function BackgroundEffects() {

  return (

    <>
    
      {/* STAR 1 */}
      <div
        style={{
          position: "fixed",
          top: "10%",
          left: "20%",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: "#00ffff",
          boxShadow: "0 0 20px #00ffff",
          animation: "floatStar 6s ease-in-out infinite",
          zIndex: "0",
        }}
      />

      {/* STAR 2 */}
      <div
        style={{
          position: "fixed",
          top: "30%",
          right: "15%",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "#8b5cf6",
          boxShadow: "0 0 20px #8b5cf6",
          animation: "floatStar 8s ease-in-out infinite",
          zIndex: "0",
        }}
      />

      {/* STAR 3 */}
      <div
        style={{
          position: "fixed",
          bottom: "20%",
          left: "10%",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#00ffff",
          boxShadow: "0 0 25px #00ffff",
          animation: "floatStar 7s ease-in-out infinite",
          zIndex: "0",
        }}
      />

      {/* STAR 4 */}
      <div
        style={{
          position: "fixed",
          bottom: "15%",
          right: "25%",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: "#ffffff",
          boxShadow: "0 0 20px white",
          animation: "floatStar 5s ease-in-out infinite",
          zIndex: "0",
        }}
      />

      {/* STAR 5 */}
      <div
        style={{
          position: "fixed",
          top: "60%",
          left: "50%",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "#00ffff",
          boxShadow: "0 0 20px #00ffff",
          animation: "floatStar 9s ease-in-out infinite",
          zIndex: "0",
        }}
      />

      <style>
        {`
          @keyframes floatStar {

            0%{
              transform: translateY(0px);
              opacity: 0.5;
            }

            50%{
              transform: translateY(-20px);
              opacity: 1;
            }

            100%{
              transform: translateY(0px);
              opacity: 0.5;
            }

          }
        `}
      </style>

    </>
  );
}

export default BackgroundEffects;