import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export function Track() {
  const result = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/models/track (1).glb');
  const colorMap = useLoader(TextureLoader, process.env.PUBLIC_URL + '/textures/track.png');

  useEffect(() => {
    colorMap.anisotropy = 16;
  }, [colorMap]);

  return (
    <>
      <mesh>
        <primitive object={result.scene.children[0].geometry} attach="geometry" />
        <meshBasicMaterial toneMapped={false} map={colorMap} />
      </mesh>
    </>
  );
}
