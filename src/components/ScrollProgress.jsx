import { useEffect, useState } from "react";

function ScrollProgress() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollTop =
        document.documentElement.scrollTop;

      const progress =
        (scrollTop / totalHeight) * 100;

      setScroll(progress);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (

    <div
      style={{
        position: "fixed",

        top: "0",

        left: "0",

        width: `${scroll}%`,

        height: "4px",

        background:
          "linear-gradient(90deg,#00ffff,#8b5cf6)",

        boxShadow:
          "0 0 20px #00ffff",

        zIndex: "99999",

        transition: "width 0.1s linear",
      }}
    />

  );
}

export default ScrollProgress;