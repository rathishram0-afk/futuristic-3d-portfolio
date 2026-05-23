import { useEffect, useState } from "react";

function Navbar() {

  const navItems = [
    "home",
    "about",
    "services",
    "projects",
    "contact",
  ];

  const [active, setActive] =
    useState("home");

  const [menuOpen, setMenuOpen] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {

      const sections =
        document.querySelectorAll("section");

      sections.forEach((section) => {

        const top = window.scrollY;

        const offset =
          section.offsetTop - 200;

        const height =
          section.offsetHeight;

        const id =
          section.getAttribute("id");

        if (
          top >= offset &&
          top < offset + height
        ) {

          setActive(id);

        }

      });

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  const isMobile =
    window.innerWidth < 768;

  return (

    <nav
      style={{
        position: "fixed",

        top: "20px",

        left: "50%",

        transform: "translateX(-50%)",

        width: "92%",

        maxWidth: "1350px",

        zIndex: "999",

        padding:
          isMobile
            ? "18px 22px"
            : "22px 40px",

        display: "flex",

        justifyContent:
          "space-between",

        alignItems: "center",

        background:
          "rgba(5,8,22,0.72)",

        backdropFilter:
          "blur(14px)",

        border:
          "1px solid rgba(255,255,255,0.08)",

        borderRadius: "24px",

        boxShadow:
          "0 0 30px rgba(0,255,255,0.06)",
      }}
    >

      {/* LOGO */}
      <h1
        style={{
          color: "white",

          fontSize:
            isMobile
              ? "28px"
              : "36px",

          fontWeight: "900",

          margin: 0,

          textShadow:
            "0 0 18px rgba(0,255,255,0.5)",
        }}
      >
        Rathish
      </h1>

      {/* MOBILE MENU BUTTON */}
      {isMobile && (

        <div
          onClick={() =>
            setMenuOpen(!menuOpen)
          }

          style={{
            fontSize: "32px",

            color: "white",

            cursor: "pointer",
          }}
        >
          ☰
        </div>

      )}

      {/* DESKTOP MENU */}
      {!isMobile && (

        <div
          style={{
            display: "flex",

            gap: "45px",

            alignItems: "center",
          }}
        >

          {navItems.map((item, index) => (

            <a
              key={index}

              href={`#${item}`}

              style={{
                color:
                  active === item
                    ? "#00ffff"
                    : "white",

                textDecoration: "none",

                fontSize: "20px",

                fontWeight: "700",

                position: "relative",

                transition:
                  "0.3s ease",

                textShadow:
                  active === item
                    ? "0 0 18px rgba(0,255,255,0.8)"
                    : "none",
              }}
            >
              {item.charAt(0).toUpperCase() +
                item.slice(1)}

              {active === item && (

                <div
                  style={{
                    position:
                      "absolute",

                    bottom: "-10px",

                    left: 0,

                    width: "100%",

                    height: "3px",

                    borderRadius:
                      "20px",

                    background:
                      "#00ffff",

                    boxShadow:
                      "0 0 12px #00ffff",
                  }}
                />

              )}

            </a>

          ))}

        </div>

      )}

      {/* MOBILE DROPDOWN */}
      {isMobile && menuOpen && (

        <div
          style={{
            position: "absolute",

            top: "85px",

            left: "0",

            width: "100%",

            background:
              "rgba(5,8,22,0.95)",

            borderRadius: "20px",

            padding: "25px",

            display: "flex",

            flexDirection: "column",

            gap: "25px",

            textAlign: "center",
          }}
        >

          {navItems.map((item, index) => (

            <a
              key={index}

              href={`#${item}`}

              onClick={() =>
                setMenuOpen(false)
              }

              style={{
                color:
                  active === item
                    ? "#00ffff"
                    : "white",

                textDecoration: "none",

                fontSize: "22px",

                fontWeight: "700",
              }}
            >
              {item.charAt(0).toUpperCase() +
                item.slice(1)}
            </a>

          ))}

        </div>

      )}

    </nav>

  );
}

export default Navbar;