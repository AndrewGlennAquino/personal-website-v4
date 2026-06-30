import { Globe } from "./Globe";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export function HeroBackground() {
  return (
    <Canvas
      className="bg-linear-to-b from-midnight to-onyx w-full h-full relative -z-10"
      aria-label="Starry Background"
      role="img"
    >
      <ambientLight />
      <Globe />
      <Stars
        radius={100}
        depth={100}
        count={1000}
        factor={10}
        saturation={10}
        fade
        speed={1}
      />
    </Canvas>
  );
}
