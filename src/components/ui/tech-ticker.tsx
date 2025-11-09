import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Next.js", icon: "▲" },
  { name: "FastAPI", icon: "⚡" },
  { name: "Python", icon: "🐍" },
  { name: "Tailwind", icon: "🎨" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📦" },
  { name: "Vitest", icon: "✅" },
  { name: "Playwright", icon: "🎭" },
];

export function TechTicker() {
  // Duplicate the array for seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -50 * technologies.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {duplicatedTechs.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20 whitespace-nowrap"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(var(--primary), 0.2)",
            }}
          >
            <span className="text-xl">{tech.icon}</span>
            <span className="text-sm font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
