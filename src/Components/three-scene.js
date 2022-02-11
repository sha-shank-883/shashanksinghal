// import { GLTFLoader }from 'three/examples/jsm/loaders/GLTFLoader'
// import {Canvas,  useLoader } from '@react-three/fiber'
// import glb from './GLB/Htmlnew.glb';
// // import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
// import { Suspense } from 'react'
// function Asset({ url }) {
//   const model = useLoader(GLTFLoader, url)
//   return model ? <primitive object={ model.scene }
//       dispose={ null }
//   /> : null
// }
//   const Img =()=> {
   
//     return (
//       <div>
//           <Canvas >
//             <mesh>

//               <Suspense fallback={ <Img position={ [0, 0, 0] } /> }>
//                   <Asset url={glb} />
//               </Suspense>
//               <ambientLight />
//               <pointLight position={ [-2, 3, 3] } />
//           </mesh>
//           </Canvas>
//       </div>
//   )
// }
// export default Img