import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Progress } from "../ui/progress"

const skillCategories = [
  {
    title: "Frontend",
    color: "text-blue-500",
    skills: [
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    title: "Backend",
    color: "text-green-500",
    skills: [
      { name: "FastAPI", level: 80 },
      { name: "SQLAlchemy", level: 75 },
      { name: "REST APIs", level: 88 },
      { name: "Python", level: 82 },
    ],
  },
  {
    title: "Tools & Infrastructure",
    color: "text-purple-500",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "AWS", level: 70 },
      { name: "Docker", level: 65 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    title: "Testing & Quality",
    color: "text-orange-500",
    skills: [
      { name: "Vitest", level: 85 },
      { name: "Playwright", level: 80 },
      { name: "CI/CD", level: 75 },
      { name: "Code Review", level: 90 },
    ],
  },
]

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
        <CardHeader>
          <CardTitle className={`${category.color} text-xl font-semibold`}>
            {category.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: (index * 0.1) + (skillIndex * 0.05), duration: 0.4 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress 
                value={isInView ? skill.level : 0} 
                className="h-2"
              />
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with daily to build exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Featured Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Also experienced with</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Redux", "Zustand", "React Query", "Vite", "shadcn/ui", 
              "Framer Motion", "PostgreSQL", "MongoDB", "Express.js", "Node.js"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + (index * 0.05), duration: 0.3 }}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
