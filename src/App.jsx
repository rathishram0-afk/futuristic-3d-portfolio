import Navbar from "./components/Navbar";

import ParticlesBg from "./components/ParticlesBg";

import CursorGlow from "./components/CursorGlow";

import MouseGlow from "./components/MouseGlow";

import CursorTrail from "./components/CursorTrail";

import BackgroundEffects from "./components/BackgroundEffects";

import ShootingStars from "./components/ShootingStars";

import FloatingIcons from "./components/FloatingIcons";

import ScrollProgress from "./components/ScrollProgress";

import BackToTop from "./components/BackToTop";

import ParallaxBalls from "./components/ParallaxBalls";

import Hero from "./sections/Hero";

import About from "./sections/About";

import Services from "./sections/Services";

import Projects from "./sections/Projects";

import Contact from "./sections/Contact";

import Footer from "./sections/Footer";

function App() {

  return (

    <div
      style={{
        background: "#050816",

        overflowX: "hidden",

        scrollBehavior: "smooth",

        position: "relative",

        minHeight: "100vh",
      }}
    >

      {/* PARTICLES */}
      <ParticlesBg />

      {/* CURSOR GLOW */}
      <CursorGlow />

      {/* MOUSE FOLLOW GLOW */}
      <MouseGlow />

      {/* CURSOR PARTICLE TRAIL */}
      <CursorTrail />

      {/* SCROLL PROGRESS */}
      <ScrollProgress />

      {/* PREMIUM BACKGROUND */}
      <BackgroundEffects />

      {/* SHOOTING STARS */}
      <ShootingStars />

      {/* FLOATING ICONS */}
      <FloatingIcons />

      {/* PARALLAX BALLS */}
      <ParallaxBalls />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* SERVICES */}
      <section id="services">
        <Services />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <Projects />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />

      {/* BACK TO TOP */}
      <BackToTop />

    </div>

  );
}

export default App;