import React, { Suspense } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Cloud } from "@react-three/drei"
import styled from "styled-components"

const Container = styled.div`
      height: 100vh;
      width: 100vw;
      background: linear-gradient(14deg, ${({ theme }) => theme.color} 100%, ${({ theme }) => theme.accentTwo} 100%);
      filter: opacity(1);
`

function Rig() {
  const camera = useThree((state) => state.camera)
  return useFrame((state) => {
    camera.position.z = 4
  })
}

export default function App() {
  return (
    <Container>

    <Canvas camera={{ position: [0, 0, 46], fov: 35 }}>
      <ambientLight intensity={.1} />

      <Suspense fallback={null}>
        <Cloud position={[-5, 4, 5]} speed={.2} opacity={.5} />
        <Cloud position={[-9, 1, -15]} speed={1} opacity={.3}/>
        
        {/* <Cloud position={[5, -6, -5]} speed={0.2} opacity={.05} /> */}
        {/* <Cloud position={[5, 2, 0]} speed={.1} opacity={.1} /> */}
        <Cloud position={[-7, 2, -10]} speed={0.2} opacity={.6} />
      </Suspense>
      <Rig />
    </Canvas>
    </Container>
  )
}
  