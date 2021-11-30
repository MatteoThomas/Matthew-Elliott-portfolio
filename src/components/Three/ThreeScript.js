import * as THREE from "three";
import { OrbitControls } from "./OrbitControls.js";
import * as dat from "dat.gui";
import { Canvas, useFrame } from "@react-three/fiber";
import styled from "styled-components";

const Container = styled.div`
  z-index: 100;
  position: absolute;
  top: 15rem;
`;

/**
 * Base
 */
// Debug

export default function ThreeScript() {
  const gui = new dat.GUI();

  // Canvas
  const canvas = document.querySelector("canvas.webgl");

  // Scene
  const scene = new THREE.Scene();

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 0.3);
  scene.add(hemisphereLight);

  // moderate cost
  const pointLight = new THREE.PointLight(0xff9000, 0.5, 10, 2);
  pointLight.position.set(1, -0.5, 1);
  scene.add(pointLight);

  const directionalLight = new THREE.DirectionalLight(0x00ffc, 0.3);
  scene.add(directionalLight);
  directionalLight.position.set(1, 0.25, 0);

  const spotLight = new THREE.SpotLight(
    0x78ff00,
    0.5,
    10,
    Math.PI * 0.1,
    0.25,
    1
  );
  spotLight.position.set(1, 1, 0.5);
  scene.add(spotLight);
  spotLight.target.position.x = -0.75;
  scene.add(spotLight.target);

  const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 2, 1, 1);
  scene.add(rectAreaLight);
  rectAreaLight.position.set(-1.5, 0, 1.5);
  rectAreaLight.lookAt(new THREE.Vector3());

  /**
   * Textures
   */
  const textureLoader = new THREE.TextureLoader();
  const particlesTexture = textureLoader.load("/textures/particles/5.png");
  // Material
  const material = new THREE.MeshStandardMaterial();
  material.roughness = 0.11;
  // Geometry
  const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 32, 64),
    material
  );

  const particlesGeometry = new THREE.BufferGeometry();
  const count = 12000;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
    colors[i] = Math.random();
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );
  particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  // Materials
  const particlesMaterial = new THREE.PointsMaterial();
  particlesMaterial.color = new THREE.Color("#ff88cc");
  particlesMaterial.size = 0.11;
  particlesMaterial.sizeAttenuation = true;
  particlesMaterial.map = particlesTexture;
  particlesMaterial.transparent = true;
  particlesMaterial.alphaMap = particlesTexture;
  // particlesMaterial.alphaTest = 0.001;
  particlesMaterial.depthWrite = false;
  // particlesMaterial.depthTest = false;
  particlesMaterial.blending = THREE.AdditiveBlending;
  particlesMaterial.vertexColors = true;

  // Points
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles, torus);
  // Sizes

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  /**
   * Camera
   */
  // Base camera
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = 3;
  scene.add(camera);

  // Controls
  // const controls = new OrbitControls(camera, canvas);
  // controls.enableDamping = true;

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  /**
   * Animate
   */
  const clock = new THREE.Clock();

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    //   particles.rotation.y = 0.05 * elapsedTime;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = particlesGeometry.attributes.position.array[i3];
      particlesGeometry.attributes.position.array[i3 + 1] = Math.sin(
        elapsedTime + x
      );
    }

    particlesGeometry.attributes.position.needsUpdate = true;

    torus.rotation.y = 1.1 * elapsedTime;
    torus.rotation.x = 0.352 * elapsedTime;
    // Update controls
    // controls.update();

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();
  return (
    <Container>
      <Canvas style={{ height: "600px" }}></Canvas>
    </Container>
  );
}
