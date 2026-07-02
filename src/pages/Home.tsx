import { HeroBackground } from "../components/three";

export function Home() {
  return (
    <main aria-label="Home">
      <section className="bg-onyx w-full h-screen relative" aria-label="Hero">
        <HeroBackground />
        <h1 className="text-transparent absolute inset-0 -z-10">
          Andrew Aquino
        </h1>
        <h2 className="text-transparent absolute inset-0 -z-10">
          Full Stack Engineer
        </h2>
      </section>
    </main>
  );
}
