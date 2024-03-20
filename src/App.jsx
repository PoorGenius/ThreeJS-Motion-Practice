import { useState, useRef } from "react"
import { motion } from "framer-motion"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import { slideInVariants } from "./animations/animations"

import { SketchPicker } from 'react-color'
import Cube from "./Cube"

function App() {
  const [transform, setTransform] = useState(false);
  const [cubeColor, setCubeColor] = useState('#fff');
  const orbitControls = useRef();

  const handleColorChange = (color) => {
    setCubeColor(color.hex)
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <motion.div
        variants={slideInVariants("left")}
        animate="visible"
        initial="hidden">
        <h1 className="text-[32px] underline text-center">Transform Cube</h1>
        <div className="flex justify-around">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[150px]"
            onClick={() => setTransform(true)}>Transform</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[150px]"
            onClick={() => {
              setTransform(false);
              orbitControls.current.reset()
            }}>Reset</button>
        </div>
      </motion.div>
      <motion.div
        variants={slideInVariants("right")}
        animate="visible"
        initial="hidden"
      >
        <Canvas
          camera={{ fov: 125 }}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} />
          <Cube size={[5, 5, 5]} transform={transform} color={cubeColor} />
          <OrbitControls
            ref={orbitControls}
            enableZoom={false}
            enablePan={false}
          />
        </Canvas>
      </motion.div >
      <div className="w-[250px] h-[250px] text-center">
        <h2>Define Cube Colors</h2>
        <motion.div
          variants={slideInVariants("bottom")}
          animate="visible"
          initial="hidden">
          <SketchPicker color={cubeColor} onChange={handleColorChange}
            disableAlpha
            presetColors={[]} />
        </motion.div>
      </div>
    </div>
  )
}

export default App
