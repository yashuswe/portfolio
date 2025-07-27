import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Badge } from "../ui/badge"
import { Card, CardContent } from "../ui/card"
import { 
  CheckCircle, 
  TrendingUp, 
  Zap, 
  Users, 
  Award, 
  Code, 
  Target, 
  Rocket,
  Shield,
  Star,
  BarChart3,
  GitBranch
} from "lucide-react"

const experiences = [
  {
    title: "Software Engineer — Full Stack",
    company: "a79.ai (US-based AI Startup)",
    period: "Oct 2024 – Present",
    status: "Current",
    icon: Code,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    highlights: [
      { metric: "60%", label: "Bug Reduction", icon: Target, color: "text-green-500" },
      { metric: "39%", label: "Performance Boost", icon: Zap, color: "text-blue-500" },
      { metric: "300+", label: "Bugs Fixed", icon: Shield, color: "text-purple-500" },
      { metric: "238+", label: "Commits", icon: GitBranch, color: "text-orange-500" }
    ],
    achievements: [
      {
        text: "Led UI revamp with React, TypeScript, shadcn/ui, and React Hooks, reducing visual bugs by 60% and increasing user satisfaction.",
        highlight: "60%",
        icon: Target
      },
      {
        text: "Built and maintained frontend testing suites with Vitest and Playwright, lowering crash rates and frontend regressions by over 60%.",
        highlight: "60%",
        icon: Shield
      },
      {
        text: "Integrated Zustand and React Query, reducing redundant API calls by 40% and improving average page load time by 39%.",
        highlight: "39%",
        icon: Zap
      },
      {
        text: "Developed backend features with FastAPI and SQLAlchemy, such as secure cascading deletion APIs—leveraging Cursor to ramp up backend development and ensure robust authorization.",
        highlight: "FastAPI",
        icon: Code
      },
      {
        text: "Resolved 300+ UI bugs, driving significant stability and trust in the product.",
        highlight: "300+",
        icon: Star
      },
      {
        text: "Contributed 238+ commits with over 54,000 lines added and 20,000 removed, supporting major features in a lean, high-velocity team.",
        highlight: "54K+",
        icon: BarChart3
      }
    ]
  },
  {
    title: "Frontend Developer",
    company: "Sopeonow (Healthtech, Singapore)",
    period: "Jul 2024 – Present",
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    highlights: [
      { metric: "25%", label: "Performance Gain", icon: Zap, color: "text-green-500" },
      { metric: "1M+", label: "Patients Served", icon: Users, color: "text-blue-500" },
      { metric: "56%", label: "Efficiency Boost", icon: Rocket, color: "text-purple-500" }
    ],
    achievements: [
      {
        text: "Enhanced application performance by 25% for a healthcare platform serving 1M+ patients.",
        highlight: "25%",
        icon: Zap
      },
      {
        text: "Streamlined workflows and improved patient admission efficiency by 56%, collaborating with cross-disciplinary teams.",
        highlight: "56%",
        icon: Rocket
      }
    ]
  },
  {
    title: "Frontend Intern",
    company: "Willeder Inc. (Remote, USA)",
    period: "Mar 2024 – Jun 2024",
    icon: Users,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    highlights: [
      { metric: "40%", label: "User Retention", icon: TrendingUp, color: "text-green-500" },
      { metric: "56%", label: "Localization", icon: Users, color: "text-blue-500" },
      { metric: "10%", label: "Team Efficiency", icon: Rocket, color: "text-purple-500" }
    ],
    achievements: [
      {
        text: "Built the entire Fukuryou real estate website from scratch, implementing modern Japanese UI design and functionality.",
        highlight: "40%",
        icon: TrendingUp
      },
      {
        text: "Contributed to localization across multilingual React projects, improving coverage by 56%.",
        highlight: "56%",
        icon: Users
      },
      {
        text: "Boosted team collaboration efficiency by 10% through code reusability and documentation.",
        highlight: "10%",
        icon: Rocket
      }
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Squareboat Technologies (Gurugram)",
    period: "Jul 2023 – Feb 2024",
    icon: Award,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    highlights: [
      { metric: "20%", label: "Customer Satisfaction", icon: Star, color: "text-yellow-500" },
      { metric: "100%", label: "Platform Revamp", icon: Code, color: "text-blue-500" }
    ],
    achievements: [
      {
        text: "Built responsive interfaces alongside UI/UX teams, raising customer satisfaction scores by 20%.",
        highlight: "20%",
        icon: Star
      },
      {
        text: "Revamped educational platform frontend and added student performance tracking for cedarwood.co.in.",
        highlight: "100%",
        icon: Code
      }
    ]
  }
]

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [isExpanded, setIsExpanded] = useState(false)
  const IconComponent = experience.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative pl-8"
    >
      {/* Enhanced Timeline dot */}
      <motion.div 
        className="absolute left-0 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"
        whileHover={{ scale: 1.5, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
        animate={isInView ? { scale: [0, 1.2, 1] } : {}}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
      />
      
      {/* Timeline line */}
      <motion.div
        className="absolute left-2 top-4 w-0.5 bg-gradient-to-b from-primary to-muted-foreground/30"
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : {}}
        transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
        style={{ height: index === experiences.length - 1 ? "0" : "100%" }}
      />
      
      <Card className={`hover:shadow-xl transition-all duration-500 group border ${experience.borderColor} hover:border-opacity-60 relative overflow-hidden`}>
        <motion.div
          className={`absolute inset-0 ${experience.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1 }}
        />
        
        <CardContent className="p-6 relative z-10">
          {/* Header with Icon */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-lg ${experience.bgColor} flex items-center justify-center`}>
                  <IconComponent className={`w-6 h-6 ${experience.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {experience.title}
                  </h3>
                  <p className="text-lg font-medium text-muted-foreground">
                    {experience.company}
                  </p>
                </div>
              </div>
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

          {/* Key Metrics Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {experience.highlights.map((highlight, highlightIndex) => {
              const HighlightIcon = highlight.icon
              return (
                <motion.div
                  key={highlight.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: (index * 0.2) + (highlightIndex * 0.1), duration: 0.4 }}
                  className="text-center p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <HighlightIcon className={`w-5 h-5 mx-auto mb-1 ${highlight.color}`} />
                  <div className="text-lg font-bold text-primary">{highlight.metric}</div>
                  <div className="text-xs text-muted-foreground">{highlight.label}</div>
                </motion.div>
              )
            })}
          </div>
          
          {/* Achievements */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Key Achievements</h4>
            <ul className="space-y-3">
              {experience.achievements.map((achievement, achievementIndex) => {
                const AchievementIcon = achievement.icon
                return (
                  <motion.li
                    key={achievementIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      delay: (index * 0.2) + (achievementIndex * 0.1), 
                      duration: 0.4 
                    }}
                    className="flex items-start gap-3 text-muted-foreground group/achievement"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/achievement:bg-primary/20 transition-colors">
                      <AchievementIcon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm leading-relaxed">
                        {achievement.text.split(achievement.highlight).map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className="font-bold text-primary bg-primary/10 px-1 rounded">
                                {achievement.highlight}
                              </span>
                            )}
                          </span>
                        ))}
                      </span>
                    </div>
                  </motion.li>
                )
              })}
            </ul>
          </div>
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
