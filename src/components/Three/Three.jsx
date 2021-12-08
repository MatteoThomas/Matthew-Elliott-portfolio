import React, { Suspense } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Cloud } from "@react-three/drei"
import styled from "styled-components"

const Container = styled.div`
      height: 100vh;
      width: 100vw;
      background: linear-gradient(14deg, ${({ theme }) => theme.text} 0%, transparent 100%);
      filter: opacity(.5);
`

function Rig() {
  const camera = useThree((state) => state.camera)
  return useFrame((state) => {
    camera.position.z = 6
  })
}

export default function App() {
  return (
    <Container>

    <Canvas camera={{ position: [0, 0, 46], fov: 35 }}>
      <ambientLight intensity={2.2} />
      {/* <pointLight intensity={1} position={[0, 0, -1000]} /> */}
      <Suspense fallback={null}>
        <Cloud position={[-34, 32, -25]} speed={.2} opacity={.01} />
        <Cloud position={[4, 2, -15]} speed={1} opacity={0.3} />
        <Cloud position={[-6, 2, -10]} speed={0.2} opacity={1} />
        <Cloud position={[21, -2, -5]} speed={0.2} opacity={0.05} />
        <Cloud position={[12, 2, 0]} speed={.1} opacity={0.1} />
      </Suspense>
      <Rig />
    </Canvas>
    </Container>
  )
}
  