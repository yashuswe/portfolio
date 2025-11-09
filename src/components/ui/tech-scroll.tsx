import { motion } from "framer-motion";
import { useState } from "react";

const technologies = [
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "FastAPI", icon: "⚡" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📝" },
  { name: "Linux", icon: "🐧" },
  { name: "Tailwind", icon: "💨" },
  { name: "Figma", icon: "🎨" },
  { name: "Vite", icon: "⚡" },
  { name: "Express", icon: "🚀" },
  { name: "Redux", icon: "🔄" },
  { name: "Zustand", icon: "🐻" },
  { name: "Prisma", icon: "💎" },
];

// Duplicate the array to create seamless loop
const duplicatedTech = [...technologies, ...technologies];

export function TechScroll() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="w-full overflow-hidden bg-muted/20 py-8 border-y border-border/30">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={isPaused ? {} : { x: [0, -50 * technologies.length] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedTech.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-3 px-6 py-3 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">
              {tech.icon}
            </span>
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
