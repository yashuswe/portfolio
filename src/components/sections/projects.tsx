import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { ExternalLink, Github } from "lucide-react"
import fukuryouScreenshot from "../../assets/fukuryou.png"

const projects = [
  {
    title: "Cedarwood Educational Platform",
    description: "Created features to track children's progress on the platform using Next.js, React Query, and TypeScript, enhancing educational monitoring capabilities.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Next.js", "React Query", "TypeScript", "Education", "Progress Tracking"],
    links: {
      demo: "https://cedarwood.co.in/"
    }
  },
  {
    title: "Fukuryou Real Estate Platform",
    description: "Built the entire website from scratch for a Japanese real estate platform, improving user retention by 40% through enhanced user experience and modern design.",
    image: fukuryouScreenshot,
    tags: ["Full Stack", "React", "SCSS", "Real Estate", "Japanese UI"],
    links: {
      demo: "https://fukuryou.com/"
    }
  },
  {
    title: "Radiology Platform UI",
    description: "Built diagnostic interfaces for Singapore's NMH Hospital using Django, Jinja, HTML, and SCSS.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Django", "Healthcare", "SCSS", "Medical Interface", "Hospital System"],
    links: {
      demo: "#"
    }
  }
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
        <div className="relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Hover overlay with links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {Object.entries(project.links).map(([key, url]) => (
              <Button
                key={key}
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
            ))}
          </motion.div>
        </div>
        
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 flex-1 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
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
