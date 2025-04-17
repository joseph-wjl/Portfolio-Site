import React from 'react';
import Avatar from "./Avatar";
import { OrbitControls } from "@react-three/drei";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
        <Avatar />
      </group>
      
      <ambientLight intensity={1} />
    </>
  );
};
