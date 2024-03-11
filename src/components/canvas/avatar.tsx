import React, { useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import {
  Box,
  OrbitControls,
  Point,
  Sphere,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import LiquidApp from "./liquid";

const Avatars = ({ isMobile }) => {
  const avatar = useGLTF("avatarAbasco1.glb");
  const { actions } = useAnimations(avatar.animations, avatar.scene);
  console.log(actions);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    actions.standing.play();
  }, []);

  return (
    <mesh>
      <ambientLight intensity={4} />
      {/* <spotLight color="#FFFFFF" intensity={100} position={[1, 4, 1]} /> */}
      <group rotation={[0, 1.3, 0]}>
        <primitive
          object={avatar.scene}
          scale={isMobile ? 2 : 2.8}
          position={isMobile ? [0, -3, 0] : [2, -3, -1]}
        />
      </group>
    </mesh>
  );
};

const AvatarCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:790px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 3], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Avatars isMobile={isMobile} />
      </Canvas>
    </>
  );
};

export { AvatarCanvas };
