import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GitHubCalendar } from "react-github-calendar"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Github, TrendingUp, Calendar } from "lucide-react"

export function GitHubContributions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Your GitHub username
  const username = "yashuswe"

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
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

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Github className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">GitHub Activity</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Code <span className="gradient-text">Contributions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A visual representation of my coding activity and contributions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Card className="glass-morphism border-2 border-primary/10 p-6 lg:p-8">
            <CardContent className="p-0">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">@{username}</h3>
                    <p className="text-sm text-muted-foreground">GitHub Contributions</p>
                  </div>
                </div>
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Last Year
                </Badge>
              </div>

              {/* GitHub Calendar */}
              <div className="overflow-x-auto">
                <div className="github-calendar-wrapper">
                  <GitHubCalendar
                    username={username}
                    blockSize={12}
                    blockMargin={4}
                    fontSize={12}
                    theme={{
                      light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                      dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
                    }}
                    colorScheme="dark"
                    style={{
                      color: 'var(--foreground)',
                    }}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border/50">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-muted-foreground">Total Contributions</span>
                  </div>
                  <div className="text-2xl font-bold text-green-500">54K+</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Github className="w-4 h-4 text-purple-500" />
                    <span className="text-xs text-muted-foreground">Repositories</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-500">Active</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span className="text-xs text-muted-foreground">Streak</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-500">Consistent</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-orange-500" />
                    <span className="text-xs text-muted-foreground">Growth</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-500">Rising</div>
                </motion.div>
              </div>

              {/* Link to GitHub */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="mt-6 text-center"
              >
                <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <Github className="w-4 h-4" />
                  View Full Profile on GitHub
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <style>{`
        .github-calendar-wrapper {
          display: flex;
          justify-content: center;
          padding: 20px 0;
        }
        
        .github-calendar-wrapper svg {
          width: 100%;
          max-width: 100%;
        }
        
        .github-calendar-wrapper text {
          fill: var(--muted-foreground) !important;
        }
        
        .github-calendar-wrapper .react-activity-calendar__legend {
          color: var(--muted-foreground);
        }
        
        @media (max-width: 768px) {
          .github-calendar-wrapper {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </section>
  )
}

