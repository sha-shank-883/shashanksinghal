import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Aboutme from './Components/Aboutme';
// import Resume from './Components/Resume';
import Experience from './Components/Experience';
import Portfolio from './Components/Portfolio';
import Form from './Components/Contact';
import Footer from './Components/Footer';
// import Slide from './Component/Slide';
// import Box from './Components/three-scene';
// import Threejs from './components/Three';
// import Img from './Components/three-scene';



function App() {
  return (
    <>
    <Particles 
    className="particles-canvas"
    params={{
      particles:{
        number:{
          value:30,
          density: {
            enable: true, 
            value_area:700
          }
        },
        shape:{
          type:"circle",
          stroke:{
            width:6,
            color:"#f9ab00" 
          }
        }
      }
    }}
    />
  <Navbar/>
  <Header/>
  <Aboutme/>
  {/* <Resume/> */}
  <Experience/>
  {/* <Img/> */}
  {/* <ThreeScene /> */}
  <Portfolio/>
  {/* <Slide/> */}
  {/* <Contact/> */}
   <Form/>
  <Footer/>
  </>

  );
}

export default App;
 


// const serviceID = "service_wc8r197"
// const templateID = "template_0o894hc"
// const userID = "user_e6BIdz6WfGbHVAzBfof7h"