import { useEffect, useState } from "react";

function BackToTop() {

  const [show, setShow] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }

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

  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    <button
      onClick={scrollTop}

      style={{
        position: "fixed",

        bottom: "35px",

        right: "35px",

        width: "60px",

        height: "60px",

        borderRadius: "50%",

        border: "none",

        cursor: "pointer",

        background:
          "linear-gradient(135deg,#00ffff,#8b5cf6)",

        color: "#050816",

        fontSize: "28px",

        fontWeight: "bold",

        zIndex: "9999",

        display: show ? "flex" : "none",

        justifyContent: "center",

        alignItems: "center",

        boxShadow:
          "0 0 25px rgba(0,255,255,0.35)",

        transition: "0.3s ease",
      }}
    >
      ↑
    </button>

  );
}

export default BackToTop;