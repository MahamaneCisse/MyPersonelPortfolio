import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const LiquidShader: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>();
  const materialRef = useRef<THREE.ShaderMaterial>();

  useEffect(() => {
    const mesh = meshRef.current!;
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2() },
        mouse: { value: new THREE.Vector2() },
        iChannel0: {
          value: new THREE.TextureLoader().load("water.jpg"),
        }, // Charge la texture ici
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        uniform vec2 mouse;
        uniform sampler2D iChannel0; // Utilise iChannel0 au lieu de map
        varying vec2 vUv;

        void main() {
          vec2 p = -1.0 + 2.0 * vUv;
          vec3 color = vec3(0.1, 0.5, 0.8);

          for (int i = 0; i < 5; i++) {
            float a = time * 0.2 * float(i);
            float d = length(mouse - vUv);
            vec2 uv = vUv + 0.05 * vec2(cos(a) * d, sin(a) * d);
            color += texture2D(iChannel0, uv).xyz;
          }

          gl_FragColor = vec4(color * 0.2, 1.0);
        }
      `,
    });

    materialRef.current = material;
    mesh.material = material;

    return () => {
      material.dispose();
    };
  }, []);

  useFrame(({ clock, mouse, size }) => {
    const elapsedTime = clock.elapsedTime;

    if (materialRef.current) {
      materialRef.current.uniforms.time.value = elapsedTime;
      materialRef.current.uniforms.mouse.value = new THREE.Vector2(
        mouse.x / size.width,
        mouse.y / size.height
      );
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[10, 8]} />
    </mesh>
  );
};

const LiquidApp: React.FC = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <LiquidShader />
    </Canvas>
  );
};

export default LiquidApp;
