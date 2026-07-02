import { motion } from "motion/react";

let keyCounter = 0;

function Stack({ tech }: { tech: string }) {
  let style: string = "border-1 text-xs w-fit h-fit px-2 py-0.5 rounded-full";

  switch (tech) {
    case "TypeScript":
      style = "bg-blue-400/20 text-blue-400 border-blue-400/40 " + style;
      break;
    case "JavaScript":
      style = "bg-yellow/20 text-yellow border-yellow/40 " + style;
      break;
    case "React":
      style = "bg-cyan/20 text-cyan border-cyan/40 " + style;
      break;
    case "Motion":
      style = "bg-yellow/20 text-yellow border-yellow/40 " + style;
      break;
    case "TailwindCSS":
      style = "bg-blue-400/20 text-blue-400 border-blue-400/40 " + style;
      break;
    case "Node.js":
      style = "bg-green-400/20 text-green-400 border-green-400/40 " + style;
      break;
    case "PostgreSQL":
      style = "bg-blue-400/20 text-blue-400 border-blue-400/40 " + style;
      break;
    case "Vanilla CSS":
      style = "bg-blue-400/20 text-blue-400 border-blue-400/40 " + style;
      break;
    case "Three.js":
      style = "bg-white-400/20 text-white-400 border-white-400/40 " + style;
      break;
  }

  return (
    <li className={style}>
      {tech}
    </li>
  );
}

export function Project({
  video,
  type,
  title,
  stack,
  url,
}: {
  video: string;
  type: string;
  title: string;
  stack: string[];
  url: string;
}) {
  return (
    <motion.a href={url} target="_blank" whileHover="animateHover">
      <motion.article
        className="bg-gray border border-white/5 rounded-2xl"
        initial={{ transform: "scale(1)" }}
        variants={{ animateHover: { transform: "scale(1.05)" } }}
        aria-label="Project"
      >
        {/* Video container */}
        <div>
          <video
            className="w-full h-full rounded-t-2xl object-cover"
            src={video}
            muted
            autoPlay
            loop
            playsInline
            aria-label={`Video of ${title}`}
          />
        </div>

        {/* Content container */}
        <div className="p-4 flex flex-col">
          <div className="font-roboto-mono text-pink">{type}</div>
          <h3>{title}</h3>
          <ul className="pt-2 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <Stack key={tech + keyCounter++} tech={tech} />
            ))}
          </ul>
        </div>
      </motion.article>
    </motion.a>
  );
}
