import { Center, Text3D, type FontData } from "@react-three/drei";
import roboto from "../../assets/fonts/Roboto_Mono_Regular.json";
import { LinkCube } from "./LinkCube";

import GitHubLogo from "../../assets/images/github-logo.png";
import LinkedInLogo from "../../assets/images/LinkedIn-logo.png";

export function Title() {
  return (
    <>
      <Center position={[0, 0.5, 0]}>
        <Text3D
          font={roboto as unknown as FontData}
          size={0.2}
          height={0}
          curveSegments={4}
          bevelEnabled
          bevelThickness={0.05}
          bevelSegments={4}
          castShadow
        >
          Andrew Aquino
          <meshStandardMaterial color="white" roughness={1} metalness={1} />
        </Text3D>
      </Center>

      <Center position={[0, 0, 0]}>
        <Text3D
          font={roboto as unknown as FontData}
          size={0.2}
          height={0}
          curveSegments={4}
          bevelEnabled
          bevelThickness={0.05}
          bevelSegments={4}
          castShadow
          receiveShadow
        >
          Full Stack Engineer
          <meshStandardMaterial color="white" roughness={1} metalness={1} />
        </Text3D>
      </Center>

      <Center position={[0, -0.5, 0]}>
        <LinkCube
          url="https://github.com/your-username"
          color="#24292e"
          position={[-0.5, 0, 0]}
          texture={GitHubLogo}
        />

        {/* LinkedIn Cube */}
        <LinkCube
          url="https://linkedin.com/in/your-username"
          color="#0077b5" // LinkedIn blue
          position={[0.5, 0, 0]}
          texture={LinkedInLogo}
        />
      </Center>
    </>
  );
}
