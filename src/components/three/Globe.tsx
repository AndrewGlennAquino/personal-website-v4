import { Mesh } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { GradientTexture } from "@react-three/drei";

export function Globe() {
  const ref = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.05;
  });

  return (
    <mesh position={[0, 2, 0]} rotation={[0.25, 0, 0]} ref={ref}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial wireframe>
        <GradientTexture
          stops={[0, 0.5, 1]}
          colors={["#fffc13", "#f16d41", "#f651e3"]}
        />
      </meshBasicMaterial>
    </mesh>
  );
}
