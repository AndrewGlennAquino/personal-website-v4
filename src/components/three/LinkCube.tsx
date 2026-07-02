import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Decal, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function LinkCube({
  url,
  color,
  position,
  texture,
}: {
  url: string;
  color: string;
  position: [number, number, number];
  texture: string;
}) {
  const meshRef = useRef<THREE.Mesh | null>(null);
  const [hovered, setHovered] = useState(false);

  const loadedTexture = useTexture(texture);

  useFrame(() => {
    const targetScale = hovered ? 1.25 : 1.0;

    // Lerp (linear interpolation) gives us a smooth transition instead of an instant snap
    if (meshRef.current) {
      meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 0.1;
      meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 0.1;
      meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 0.1;
    }
  });

  return (
    <mesh
      position={position}
      ref={meshRef}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = "pointer"; // Change cursor to pointer for UX
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto"; // Reset cursor
      }}
      onClick={() => {
        window.open(url, "_blank", "noopener,noreferrer");
      }}
    >
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={hovered ? "#ffffff" : color} />

      <Decal
        position={[0, 0, 0.50]} // Position slightly offset forward so it doesn't clip into the cube face
        rotation={[0, 0, 0]}
        scale={[0.5, 0.5, 0.5]} // Size of the logo relative to the 1x1x1 cube
      >
        {/* White base material here means your transparent PNG logo renders perfectly untinted */}
        <meshStandardMaterial
          map={loadedTexture}
          transparent
          polygonOffset
          polygonOffsetFactor={-1} // Forces the sticker to render in front of the cube face
        />
      </Decal>
    </mesh>
  );
}
