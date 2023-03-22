import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import Particles from "react-tsparticles";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Aboutme from "./Components/Aboutme";
import Experience from "./Components/Experience";
import Portfolio from "./Components/Portfolio";
import Form from "./Components/Contact";
import Footer from "./Components/Footer";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import Slide from './Component/Slide';
// import Box from './Components/three-scene';
// import Threejs from './components/Three';
// import Img from './Components/three-scene';

function App() {
  // const particlesInit = useCallback(async (engine) => {
  //   console.log(engine);
  //   await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);
  return (
    <>
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      /> */}
      {/* <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 700,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      /> */}
      <Navbar />
      <Header />
      <Aboutme />
      {/* <Resume/> */}
      <Experience />
      {/* <Img/> */}
      {/* <ThreeScene /> */}
      <Portfolio />
      {/* <Slide/> */}
      {/* <Contact/> */}
      <Form />
      <Footer />
    </>
  );
}

export default App;

// const serviceID = "service_wc8r197"
// const templateID = "template_0o894hc"
// const userID = "user_e6BIdz6WfGbHVAzBfof7h"
