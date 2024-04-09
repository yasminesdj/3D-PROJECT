import React from "react";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Suspense } from "react";
import { Track } from "./Track";
import { Ground } from "./Ground";
import { Car } from "./Car";
import Button from "./Button";

export function Scene() {
  return (
    <Suspense fallback={null}>
      <Environment files={process.env.PUBLIC_URL + "/textures/envmap (1).hdr"} background={"both"} />
      <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping={true}
        dampingFactor={0.25}
        rotateSpeed={0.5}
        target={[-2.64, -0.71, 0.03]}
      />
      <Track />
      <Ground />
      <Car />
      <Button />
    </Suspense>
  );
}
