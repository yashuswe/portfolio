import { motion } from "framer-motion"
import { ArrowDown, MapPin, Mail, Phone } from "lucide-react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="min-h-screen flex items-center section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance leading-[1.1]">
                Hi, I'm{" "}
                <span className="gradient-text">Yashassvi</span>
              </h1>
              <h2 className="text-2xl lg:text-4xl text-muted-foreground mb-6 font-medium">
                Full Stack Software Engineer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Passionate about building scalable web applications with modern technologies. 
              Currently leading UI revamps and backend development at a79.ai, with expertise in React, TypeScript, and FastAPI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>suhaneyashassvi@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 80815 40136</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="px-8"
              >
                Let's Talk
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="px-8"
              >
                View Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col gap-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Card className="p-6 glass-morphism floating-animation shadow-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">60%</div>
                  <div className="text-sm text-muted-foreground">Bug Reduction</div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                <Card className="p-6 glass-morphism floating-delayed shadow-xl text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">39%</div>
                  <div className="text-sm text-muted-foreground">Performance Boost</div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <Card className="p-6 glass-morphism floating-animation shadow-xl text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">300+</div>
                  <div className="text-sm text-muted-foreground">Bugs Fixed</div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <Card className="p-6 glass-morphism floating-delayed shadow-xl text-center">
                  <div className="text-3xl font-bold text-purple-500 mb-2">238+</div>
                  <div className="text-sm text-muted-foreground">Commits</div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
