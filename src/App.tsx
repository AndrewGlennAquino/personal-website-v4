import { motion } from "motion/react";

export function App() {
  return (
    <main>
      <motion.h1
        className="font-bold text-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        Hello World!
      </motion.h1>
    </main>
  );
}
