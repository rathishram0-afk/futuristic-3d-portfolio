function CyberGrid() {

  return (

    <div
      style={{
        position: "fixed",

        inset: 0,

        zIndex: "0",

        pointerEvents: "none",

        overflow: "hidden",
      }}
    >

      <div
        style={{
          position: "absolute",

          width: "200%",

          height: "200%",

          backgroundImage:
            `
            linear-gradient(
              rgba(0,255,255,0.05) 1px,
              transparent 1px
            ),

            linear-gradient(
              90deg,
              rgba(0,255,255,0.05) 1px,
              transparent 1px
            )
          `,

          backgroundSize: "60px 60px",

          transform:
            "perspective(1000px) rotateX(75deg)",

          animation:
            "moveGrid 15s linear infinite",
        }}
      />

      <style>
        {`

          @keyframes moveGrid {

            0%{
              transform:
                perspective(1000px)
                rotateX(75deg)
                translateY(0px);
            }

            100%{
              transform:
                perspective(1000px)
                rotateX(75deg)
                translateY(60px);
            }

          }

        `}
      </style>

    </div>

  );
}

export default CyberGrid;