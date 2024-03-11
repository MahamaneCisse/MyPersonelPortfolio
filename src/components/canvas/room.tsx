import React, { useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  SpotLight,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { AmbientLight } from "three";

const Room = ({ isMobile }) => {
  const room = useGLTF("Room.glb");
  const { actions } = useAnimations(room.animations, room.scene);

  useEffect(() => {
    console.log("Animation loaded:", room.animations);
    console.log("Actions:", actions);

    if (actions.Typing) {
      actions.Typing.play();
      console.log("Typing animation played");
    }
  }, [actions, room.animations]);

  return (
    <mesh>
      <ambientLight intensity={3} />
      <group>
        <primitive
          object={room.scene}
          scale={isMobile ? 2 : 0.7}
          position={isMobile ? [0, -3, 0] : [2, -3, -1]}
        />
      </group>
    </mesh>
  );
};

const RoomCanvas = () => {
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
      <Room isMobile={isMobile} />
    </Canvas>
  );
};

export { RoomCanvas };
