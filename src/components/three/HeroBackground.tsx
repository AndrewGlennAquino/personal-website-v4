import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";
import { Plane } from "./Plane";
import { Title } from "./Title";

function CanvasLoader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}% loaded</Html>;
}

export function HeroBackground() {
  return (
    <Canvas
      shadows="basic"
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <group>
          <Title />
          <Plane />
        </group>
        <directionalLight
          castShadow
          shadow-mapSize={[1024, 1024]}
          position={[0, 1, 2]}
          intensity={1}
        />
        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          enablePan={false}
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
        />
        <Environment background preset="dawn" backgroundBlurriness={1} />;
      </Suspense>
    </Canvas>
  );
}
