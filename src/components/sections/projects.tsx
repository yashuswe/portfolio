import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { ExternalLink, Github, Eye, Code, Zap, Users, TrendingUp } from "lucide-react"
import fukuryouScreenshot from "../../assets/fukuryou.png"

const projects = [
  {
    title: "Cedarwood Educational Platform",
    description: "Created features to track children's progress on the platform using Next.js, React Query, and TypeScript, enhancing educational monitoring capabilities.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Next.js", "React Query", "TypeScript", "Education", "Progress Tracking"],
    links: {
      demo: "https://cedarwood.co.in/"
    },
    stats: {
      users: "10K+",
      performance: "25%",
      retention: "40%"
    },
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    title: "Fukuryou Real Estate Platform",
    description: "Built the entire website from scratch for a Japanese real estate platform, improving user retention by 40% through enhanced user experience and modern design.",
    image: fukuryouScreenshot,
    tags: ["Full Stack", "React", "SCSS", "Real Estate", "Japanese UI"],
    links: {
      demo: "https://fukuryou.com/"
    },
    stats: {
      users: "50K+",
      performance: "40%",
      retention: "60%"
    },
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  {
    title: "Radiology Platform UI",
    description: "Built diagnostic interfaces for Singapore's NMH Hospital using Django, Jinja, HTML, and SCSS.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Django", "Healthcare", "SCSS", "Medical Interface", "Hospital System"],
    links: {
      demo: "#"
    },
    stats: {
      users: "1M+",
      performance: "30%",
      retention: "50%"
    },
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  }
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isHovered, setIsHovered] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useTransform(mouseY, [-100, 100], [15, -15])
  const rotateY = useTransform(mouseX, [-100, 100], [-15, 15])
  
  const springConfig = { damping: 20, stiffness: 300 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const x = (e.clientX - centerX) / 50
    const y = (e.clientY - centerY) / 50
    
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d"
      }}
      className="perspective-1000"
    >
      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group h-full relative">
        <motion.div
          className={`absolute inset-0 ${project.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1 }}
        />
        
        <div className="relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Project Stats Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute top-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center">
                <div className="text-xs text-gray-600">Users</div>
                <div className="text-sm font-bold text-black">{project.stats.users}</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center">
                <div className="text-xs text-gray-600">Performance</div>
                <div className="text-sm font-bold text-black">{project.stats.performance}</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center">
                <div className="text-xs text-gray-600">Retention</div>
                <div className="text-sm font-bold text-black">{project.stats.retention}</div>
              </div>
            </div>
          </motion.div>
          
          {/* Hover overlay with links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {Object.entries(project.links).map(([key, url]) => (
              <motion.div
                key={key}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  variant="secondary"
                  className="backdrop-blur-sm bg-white/90 text-black hover:bg-white"
                  onClick={() => window.open(url, '_blank')}
                >
                  {key === 'github' ? (
                    <Github className="h-4 w-4 mr-2" />
                  ) : (
                    <ExternalLink className="h-4 w-4 mr-2" />
                  )}
                  {key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <CardContent className="p-6 flex-1 flex flex-col relative z-10">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <motion.div
              className={`w-8 h-8 rounded-full ${project.bgColor} flex items-center justify-center`}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Eye className={`w-4 h-4 ${project.color}`} />
            </motion.div>
          </div>
          
          <p className="text-muted-foreground mb-4 flex-1 leading-relaxed">
            {project.description}
          </p>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <motion.div
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
            
            {/* Project Impact Stats */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border/50">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <Users className="w-3 h-3" />
                  Users
                </div>
                <div className="text-sm font-bold">{project.stats.users}</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <Zap className="w-3 h-3" />
                  Performance
                </div>
                <div className="text-sm font-bold">{project.stats.performance}</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="w-3 h-3" />
                  Retention
                </div>
                <div className="text-sm font-bold">{project.stats.retention}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the impact I've created
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="px-8"
            onClick={() => scrollToSection("#contact")}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Let's Discuss Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
