import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import {
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
  GitBranch,
} from "lucide-react";

const experiences = [
  {
    title: "Software Engineer — Front End",
    company: "AmpUp.ai (US-based AI Startup)",
    period: "Oct 2024 – Present",
    status: "Current",
    icon: Code,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    highlights: [
      {
        metric: "55%",
        label: "Bug Reduction",
        icon: Target,
        color: "text-green-500",
      },
      {
        metric: "90%+",
        label: "Test Coverage",
        icon: Shield,
        color: "text-purple-500",
      },
      {
        metric: "40%",
        label: "API Response Boost",
        icon: Zap,
        color: "text-blue-500",
      },
      {
        metric: "54K+",
        label: "Lines Delivered",
        icon: GitBranch,
        color: "text-orange-500",
      },
    ],
    achievements: [
      {
        text: "Rebuilt UI for AmpUp's AI sales enablement platform, increasing development velocity and reducing bug reports by 55% quarter-over-quarter.",
        highlight: "55%",
        icon: Target,
      },
      {
        text: "Planned and executed automated test suite expansion with Vitest and Playwright, achieving 90%+ test coverage and improving release quality for new features.",
        highlight: "90%+",
        icon: Shield,
      },
      {
        text: "Directed implementation of advanced state management using Zustand and React Query for analytics, lowering API response times by 40%.",
        highlight: "40%",
        icon: Zap,
      },
      {
        text: "Developed backend features with FastAPI and SQLAlchemy, including secure cascading deletion APIs and robust authorization systems.",
        highlight: "FastAPI",
        icon: Code,
      },
      {
        text: "Facilitated onboarding and documentation, empowering rapid team scaling and smoother integration for new engineers.",
        highlight: "Team Scaling",
        icon: Star,
      },
      {
        text: "Shipped over 54,000 lines of production code across full-stack features in a lean, high-velocity startup environment.",
        highlight: "54K+",
        icon: BarChart3,
      },
    ],
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
      {
        metric: "15%",
        label: "Workflow Speed",
        icon: Zap,
        color: "text-green-500",
      },
      {
        metric: "1M+",
        label: "Users Served",
        icon: Users,
        color: "text-blue-500",
      },
      {
        metric: "100%",
        label: "Healthcare Platform",
        icon: Rocket,
        color: "text-purple-500",
      },
    ],
    achievements: [
      {
        text: "Upgraded performance for patient admission modules in healthtech platform utilized by 1M+ users, contributing to a 15% faster workflow.",
        highlight: "15%",
        icon: Zap,
      },
      {
        text: "Collaborated with cross-functional teams to deliver critical healthcare features for Singapore's healthcare system.",
        highlight: "1M+",
        icon: Rocket,
      },
    ],
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
      {
        metric: "40%",
        label: "Retention Uplift",
        icon: TrendingUp,
        color: "text-green-500",
      },
      {
        metric: "100%",
        label: "Platform Built",
        icon: Code,
        color: "text-blue-500",
      },
      {
        metric: "Multilingual",
        label: "Framework",
        icon: Users,
        color: "text-purple-500",
      },
    ],
    achievements: [
      {
        text: "Led UI overhaul for Fukuryou Real Estate Platform, resulting in 40% uplift in user retention and satisfaction through modern design.",
        highlight: "40%",
        icon: TrendingUp,
      },
      {
        text: "Revamped localization framework, improving code maintainability and enabling new language support with minimal dev effort.",
        highlight: "Framework",
        icon: Users,
      },
      {
        text: "Built the entire Fukuryou website from scratch, implementing modern Japanese UI design and full-stack functionality.",
        highlight: "100%",
        icon: Code,
      },
    ],
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
      {
        metric: "20%",
        label: "Engagement Boost",
        icon: Star,
        color: "text-yellow-500",
      },
      {
        metric: "100%",
        label: "Platform Shipped",
        icon: Code,
        color: "text-blue-500",
      },
    ],
    achievements: [
      {
        text: "Built and shipped responsive educational interfaces, raising student engagement metrics by 20% in subsequent release.",
        highlight: "20%",
        icon: Star,
      },
      {
        text: "Developed key features for Cedarwood educational platform including student performance tracking and progress monitoring capabilities.",
        highlight: "Platform",
        icon: Code,
      },
    ],
  },
];

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const IconComponent = experience.icon;

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
        whileHover={{
          scale: 1.5,
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
        }}
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

      <Card
        className={`hover:shadow-xl transition-all duration-500 group border ${experience.borderColor} hover:border-opacity-60 relative overflow-hidden`}
      >
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
                <div
                  className={`w-12 h-12 rounded-lg ${experience.bgColor} flex items-center justify-center`}
                >
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
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                >
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
              const HighlightIcon = highlight.icon;
              return (
                <motion.div
                  key={highlight.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: index * 0.2 + highlightIndex * 0.1,
                    duration: 0.4,
                  }}
                  className="text-center p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <HighlightIcon
                    className={`w-5 h-5 mx-auto mb-1 ${highlight.color}`}
                  />
                  <div className="text-lg font-bold text-primary">
                    {highlight.metric}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {highlight.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Achievements */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">
              Key Achievements
            </h4>
            <ul className="space-y-3">
              {experience.achievements.map((achievement, achievementIndex) => {
                const AchievementIcon = achievement.icon;
                return (
                  <motion.li
                    key={achievementIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: index * 0.2 + achievementIndex * 0.1,
                      duration: 0.4,
                    }}
                    className="flex items-start gap-3 text-muted-foreground group/achievement"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/achievement:bg-primary/20 transition-colors">
                      <AchievementIcon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm leading-relaxed">
                        {achievement.text
                          .split(achievement.highlight)
                          .map((part, i, arr) => (
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
                );
              })}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional Experience
          </h2>
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
  );
}
