import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "../ui/badge"
import { Card, CardContent } from "../ui/card"
import { CheckCircle } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer — Full Stack",
    company: "a79.ai (US-based AI Startup)",
    period: "Oct 2024 – Present",
    status: "Current",
    achievements: [
      "Led UI revamp with React, TypeScript, shadcn/ui, and React Hooks, reducing visual bugs by 60% and increasing user satisfaction.",
      "Built and maintained frontend testing suites with Vitest and Playwright, lowering crash rates and frontend regressions by over 60%.",
      "Integrated Zustand and React Query, reducing redundant API calls by 40% and improving average page load time by 39%.",
      "Developed backend features with FastAPI and SQLAlchemy, such as secure cascading deletion APIs—leveraging Cursor to ramp up backend development and ensure robust authorization.",
      "Resolved 300+ UI bugs, driving significant stability and trust in the product.",
      "Contributed 238+ commits with over 54,000 lines added and 20,000 removed, supporting major features in a lean, high-velocity team."
    ]
  },
  {
    title: "Frontend Developer",
    company: "Sopeonow (Healthtech, Singapore)",
    period: "Jul 2024 – Present",
    achievements: [
      "Enhanced application performance by 25% for a healthcare platform serving 1M+ patients.",
      "Streamlined workflows and improved patient admission efficiency by 15%, collaborating with cross-disciplinary teams."
    ]
  },
  {
    title: "Frontend Intern",
    company: "Willeder Inc. (Remote, USA)",
    period: "Mar 2024 – Jun 2024",
    achievements: [
      "Built the entire Fukuryou real estate website from scratch, implementing modern Japanese UI design and functionality.",
      "Contributed to localization across multilingual React projects, improving coverage by 15%.",
      "Boosted team collaboration efficiency by 10% through code reusability and documentation."
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Squareboat Technologies (Gurugram)",
    period: "Jul 2023 – Feb 2024",
    achievements: [
      "Built responsive interfaces alongside UI/UX teams, raising customer satisfaction scores by 20%.",
      "Revamped educational platform frontend and added student performance tracking for cedarwood.co.in."
    ]
  }
]

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative pl-8"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
      
      <Card className="hover:shadow-lg transition-all duration-300 group">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                {experience.title}
              </h3>
              <p className="text-lg font-medium text-muted-foreground">
                {experience.company}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2 lg:mt-0">
              {experience.status && (
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  {experience.status}
                </Badge>
              )}
              <span className="text-sm text-muted-foreground">
                {experience.period}
              </span>
            </div>
          </div>
          
          <ul className="space-y-3">
            {experience.achievements.map((achievement, achievementIndex) => (
              <motion.li
                key={achievementIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: (index * 0.2) + (achievementIndex * 0.1), 
                  duration: 0.4 
                }}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in software development and the impact I've made
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-border" />
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
