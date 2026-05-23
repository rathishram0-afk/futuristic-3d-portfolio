function Stats() {

  const stats = [

    {
      number: "3+",
      label: "Projects",
    },

    {
      number: "2+",
      label: "Years Learning",
    },

    {
      number: "10+",
      label: "Technologies",
    },

    {
      number: "100%",
      label: "Passion",
    },

  ];

  return (

    <div
      style={{
        display: "grid",

        gridTemplateColumns:
          "repeat(auto-fit,minmax(180px,1fr))",

        gap: "25px",

        marginTop: "70px",

        width: "100%",
      }}
    >

      {stats.map((item, index) => (

        <div
          key={index}

          className="glass-card"

          style={{
            padding: "30px",

            borderRadius: "25px",

            textAlign: "center",

            backdropFilter: "blur(12px)",

            border:
              "1px solid rgba(255,255,255,0.08)",

            boxShadow:
              "0 0 25px rgba(0,255,255,0.08)",
          }}
        >

          <h1
            style={{
              color: "#00ffff",

              fontSize: "42px",

              marginBottom: "10px",

              textShadow:
                "0 0 20px rgba(0,255,255,0.5)",
            }}
          >
            {item.number}
          </h1>

          <p
            style={{
              color: "#cbd5e1",

              fontSize: "17px",
            }}
          >
            {item.label}
          </p>

        </div>

      ))}

    </div>

  );
}

export default Stats;