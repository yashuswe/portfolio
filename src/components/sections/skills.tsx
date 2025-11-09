import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { 
  Code2, 
  Server, 
  Wrench, 
  Shield,
  Sparkles,
  Zap
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    gradient: "from-blue-500/20 to-cyan-500/20",
    skills: [
      { name: "React.js", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "📘" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "Tailwind CSS", level: 88, icon: "🎨" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    gradient: "from-green-500/20 to-emerald-500/20",
    skills: [
      { name: "FastAPI", level: 80, icon: "⚡" },
      { name: "SQLAlchemy", level: 75, icon: "🗄️" },
      { name: "REST APIs", level: 88, icon: "🔗" },
      { name: "Python", level: 82, icon: "🐍" },
    ],
  },
  {
    title: "Tools & Infrastructure",
    icon: Wrench,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    gradient: "from-purple-500/20 to-pink-500/20",
    skills: [
      { name: "Git/GitHub", level: 95, icon: "📦" },
      { name: "AWS", level: 70, icon: "☁️" },
      { name: "Docker", level: 65, icon: "🐳" },
      { name: "Linux", level: 85, icon: "🐧" },
    ],
  },
  {
    title: "Testing & Quality",
    icon: Shield,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    gradient: "from-orange-500/20 to-red-500/20",
    skills: [
      { name: "Vitest", level: 85, icon: "✅" },
      { name: "Playwright", level: 80, icon: "🎭" },
      { name: "CI/CD", level: 75, icon: "🔄" },
      { name: "Code Review", level: 90, icon: "👀" },
    ],
  },
]

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const IconComponent = category.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="h-full"
    >
      <Card className={`h-full border-2 ${category.borderColor} hover:border-opacity-60 transition-all duration-300 group relative overflow-hidden`}>
        {/* Gradient background on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1 }}
        />
        
        <CardContent className="p-6 relative z-10">
          {/* Header with Icon */}
          <motion.div 
            className="flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <IconComponent className={`w-6 h-6 ${category.color}`} />
            </div>
            <h3 className={`text-xl font-bold ${category.color}`}>
              {category.title}
            </h3>
          </motion.div>

          {/* Skills as interactive badges */}
          <div className="space-y-3">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: (index * 0.1) + (skillIndex * 0.05), duration: 0.4 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                  <motion.span 
                    className={`text-xs font-bold ${category.color}`}
                    animate={{ scale: hoveredSkill === skill.name ? 1.2 : 1 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                
                {/* Custom animated progress bar */}
                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.gradient} rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ 
                      delay: (index * 0.1) + (skillIndex * 0.05) + 0.2, 
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      animate={{
                        x: hoveredSkill === skill.name ? ["-100%", "200%"] : "-100%",
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Tech Stack</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting exceptional digital experiences with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Featured Technologies - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative"
        >
          <Card className="glass-morphism border-2 border-primary/10">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-primary" />
                <h3 className="text-2xl font-bold">Also Proficient In</h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: "Redux", color: "bg-purple-500/10 text-purple-600 border-purple-500/20" },
                  { name: "Zustand", color: "bg-orange-500/10 text-orange-600 border-orange-500/20" },
                  { name: "React Query", color: "bg-red-500/10 text-red-600 border-red-500/20" },
                  { name: "Vite", color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20" },
                  { name: "shadcn/ui", color: "bg-slate-500/10 text-slate-600 border-slate-500/20" },
                  { name: "Framer Motion", color: "bg-pink-500/10 text-pink-600 border-pink-500/20" },
                  { name: "PostgreSQL", color: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
                  { name: "MongoDB", color: "bg-green-500/10 text-green-600 border-green-500/20" },
                  { name: "Express.js", color: "bg-gray-500/10 text-gray-600 border-gray-500/20" },
                  { name: "Node.js", color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + (index * 0.05), duration: 0.3 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge 
                      variant="outline" 
                      className={`${tech.color} px-4 py-2 text-sm font-medium border-2 cursor-pointer transition-all duration-300`}
                    >
                      {tech.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
