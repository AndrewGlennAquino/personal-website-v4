import { HeroBackground } from "../components/three";
import { Project } from "../components/ui";

import chemtekVideo from "../assets/videos/chemtek-video.mp4";
import personalWebsiteVideo from "../assets/videos/personal-website-video.mp4";
import brewNBubbleVideo from "../assets/videos/brew-n-bubble-video.mp4";
import fitHausVideo from "../assets/videos/fit-haus-video.mp4";

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

      <section
        className="w-full pt-8 flex flex-col gap-8 relative"
        aria-label="Projects"
      >
        {/* Heading container */}
        <div className="font-roboto-mono text-center flex flex-col gap-2">
          <div className="text-cyan">Selected work</div>
          <h2>Projects</h2>
        </div>

        {/* Project card container */}
        <div className="bg-onyx container max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Project
            type="Website"
            video={chemtekVideo}
            title="Chemtek"
            stack={[
              "TypeScript",
              "React",
              "Node.js",
              "PostgreSQL"
            ]}
            url="https://chemtek.services/"
          />

          <Project
            type="Demo"
            video={brewNBubbleVideo}
            title="Brew N' Bubble"
            stack={[
              "JavaScript",
              "React",
              "TailwindCSS",
              "Motion"
            ]}
            url="https://andrewglennaquino.github.io/brew-n-bubble-website/"
          />

          <Project
            type="Demo"
            video={fitHausVideo}
            title="Fit Haus"
            stack={[
              "JavaScript",
              "React",
              "TailwindCSS",
              "Motion"
            ]}
            url="https://andrewglennaquino.github.io/fit-haus-website/"
          />

          <Project
            type="Demo"
            video={personalWebsiteVideo}
            title="Personal Portfolio v1"
            stack={[
              "JavaScript",
              "React",
              "Vanilla CSS",
              "Three.js",
            ]}
            url="https://andrewglennaquino.github.io/personal-website/"
          />
        </div>
      </section>
    </main>
  );
}
