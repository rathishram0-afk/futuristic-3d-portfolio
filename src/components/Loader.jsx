function Loader() {

  return (

    <div
      style={{
        height: "100vh",

        background: "#050816",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        flexDirection: "column",

        color: "white",
      }}
    >

      <h1
        className="hero-glow"

        style={{
          fontSize: "70px",

          marginBottom: "20px",
        }}
      >
        Rathish
      </h1>

      <div
        style={{
          width: "220px",

          height: "6px",

          background:
            "rgba(255,255,255,0.1)",

          borderRadius: "20px",

          overflow: "hidden",
        }}
      >

        <div
          style={{
            width: "100%",

            height: "100%",

            background:
              "linear-gradient(90deg,#00ffff,#8b5cf6)",

            animation:
              "loading 2s infinite",
          }}
        />

      </div>

      <style>
        {`
          @keyframes loading {

            0%{
              transform: translateX(-100%);
            }

            100%{
              transform: translateX(100%);
            }

          }
        `}
      </style>

    </div>
  );
}

export default Loader;