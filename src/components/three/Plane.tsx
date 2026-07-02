export function Plane() {
  return (
    <mesh
      receiveShadow
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 0]}
    >
      <planeGeometry args={[10, 10]} />
      <shadowMaterial transparent opacity={0.5} />
    </mesh>
  );
}
