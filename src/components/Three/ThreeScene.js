import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Scene } from "three";
// import gradient from "../img/gradientMELON.png";
import styled from "styled-components";

const Container = styled.div`
  z-index: 100;
  position: absolute;
  top: 15rem;
`;

function Torus(props) {
  const mesh = useRef();
  const [state, setState] = useState({ isHovered: false, isActive: false });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.position.y =
      mesh.current.position.y + Math.sin(time * 2) / 100;
    mesh.current.rotation.y = mesh.current.rotation.x += 0.011;
  });

  return (
    <mesh
      position={[2, 4, 0]}
      {...props}
      ref={mesh}
      scale={state.isHovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setState({ ...state, isActive: !state.isActive })}
      onPointerOver={(e) => setState({ ...state, isHovered: true })}
      onPointerOver={(e) => setState({ ...state, isHovered: false })}
    >
      <torusBufferGeometry args={[1, 2, 66, 133]} />
      <meshStandardMaterial
        roughness={0}
        color={state.isActive ? "#000000" : "#e7dcd8"}
        // wireframe={true}
      />
    </mesh>
  );
}

// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef();
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);
//   // Rotate mesh every frame, this is outside of React without overhead
//   useFrame(() => (mesh.current.rotation.x += 0.01));

//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}
//     >
//       <boxGeometry args={[1, 2, 3]} />
//       <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
//     </mesh>
//   );
// }

export default function ThreeScene() {
  return (
    <Container>
      <Canvas style={{ height: "600px" }}>
        <Torus wireframe={[true]} />
        <ambientLight intensity={[5000]} color={[0xf78589]} />
        <pointLight intensity={[5100]} position={[410, -600, 0]} />
        {/* <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} /> */}
      </Canvas>
    </Container>
  );
}
