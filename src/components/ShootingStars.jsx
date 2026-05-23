function ShootingStars() {

  return (

    <div
      style={{
        position: "fixed",

        inset: "0",

        overflow: "hidden",

        pointerEvents: "none",

        zIndex: "1",
      }}
    >

      {[...Array(8)].map((_, index) => (

        <span
          key={index}

          style={{
            position: "absolute",

            top: `${Math.random() * 100}%`,

            left: `${Math.random() * 100}%`,

            width: "2px",

            height: "120px",

            background:
              "linear-gradient(transparent,#00ffff)",

            borderRadius: "50%",

            transform: "rotate(-45deg)",

            opacity: "0.7",

            animation:
              `shoot ${4 + index}s linear infinite`,

            animationDelay: `${index * 2}s`,

            boxShadow:
              "0 0 20px #00ffff",
          }}
        />

      ))}

      <style>
        {`
          @keyframes shoot {

            0%{
              transform:
                translateX(0px)
                translateY(0px)
                rotate(-45deg);

              opacity: 0;
            }

            10%{
              opacity: 1;
            }

            100%{
              transform:
                translateX(-1200px)
                translateY(1200px)
                rotate(-45deg);

              opacity: 0;
            }

          }
        `}
      </style>

    </div>
  );
}

export default ShootingStars;