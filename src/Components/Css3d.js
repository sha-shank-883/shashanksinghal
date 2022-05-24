import { GLTFLoader }from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import {Canvas, extend} from '@react-three/fiber'
import glb from './static/css.glb'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
// import {OrbitControls} from '@react-three/drei'
import { Suspense, useRef } from 'react'


function Css(){
function Asset({ url }) {
  const model = useLoader(GLTFLoader, url)
  
  return model ? <primitive object={ model.scene }
  dispose={ null }
  /> : null
}
extend({OrbitControls})
const Controls = () => {
  const controls = useRef()
  const {camera,gl} = useThree()
  
  useFrame(() => {
    controls.current.update()
  })
  return (
    <orbitControls ref={controls} autoRotate args = {[camera,gl.domElement]}></orbitControls>
  )

  }

// const Img =()=> {
  
  return (
    // <div style = {{height:"100vh",width:"100vh", backgroundColor:"#fde2e4"}}>
    
    <Canvas className = "css3-img " camera={{position: [7, 18, 30] , fov: 2}}>
            <mesh >
            <pointLight position={[10, 10, 10]} intensity={1.3} />
          
              <Suspense fallback={null }>
                  <Asset url={glb} />
              </Suspense>
     <Controls/>
            
              <pointLight position={ [-3, -3, -2] } />
          </mesh>
          </Canvas>
      // </div>
  )
}
export default Css