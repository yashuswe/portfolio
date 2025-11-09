import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  ArrowDown,
  MapPin,
  Mail,
  Phone,
  Sparkles,
  Code2,
  Rocket,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { useState, useEffect } from "react";
import { ConfettiButton } from "../ui/confetti-button";
import { TechTicker } from "../ui/tech-ticker";

export function HeroSection() {
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX - innerWidth / 2) / 100;
      const y = (clientY - innerHeight / 2) / 100;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center section-padding custom-cursor relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container-custom relative z-10">
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
              className="relative"
            >
              <motion.div
                style={{
                  rotateX: springRotateX,
                  rotateY: springRotateY,
                  transformStyle: "preserve-3d",
                }}
                className="perspective-1000"
              >
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance leading-[1.1] relative">
                  Hi, I'm{" "}
                  <ConfettiButton>
                    <motion.span
                      className="gradient-text relative inline-block"
                      whileHover={{
                        scale: 1.05,
                        textShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
                      }}
                      onHoverStart={() => setIsHovering(true)}
                      onHoverEnd={() => setIsHovering(false)}
                    >
                      Yashassvi
                      {isHovering && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          className="absolute -top-2 -right-2"
                        >
                          <Sparkles className="w-6 h-6 text-purple-400" />
                        </motion.div>
                      )}
                    </motion.span>
                  </ConfettiButton>
                </h1>
                <h2 className="text-2xl lg:text-4xl text-muted-foreground mb-6 font-medium">
                  Full Stack Software Engineer
                </h2>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Results-driven Full-Stack Engineer skilled in scalable UI design,
              automated testing, and modern JavaScript frameworks. Passionate
              about enhancing user experience, improving release velocity, and
              building robust web applications.
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col gap-6"
          >
            {/* Animated Tech Stack Ticker */}
            <Card className="glass-morphism border-2 border-primary/10 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-5 h-5 text-purple-500" />
                  <h3 className="text-lg font-bold">Tech Stack</h3>
                </div>
                <TechTicker />
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-4 glass-morphism border-2 border-purple-500/20 brand-gradient-hover">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <Rocket className="w-4 h-4 text-purple-500" />
                      <span className="text-xs text-muted-foreground">
                        Test Coverage
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-purple-500">
                      90%+
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-4 glass-morphism border-2 border-blue-500/20 brand-gradient-hover">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-blue-500" />
                      <span className="text-xs text-muted-foreground">
                        Production Code
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-blue-500">54K+</div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Current Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Card className="p-6 glass-morphism border-2 border-green-500/20 text-center">
                <Badge className="mb-3 bg-green-500/10 text-green-500 border-green-500/30">
                  ✨ Available for opportunities
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Open to full-time roles & exciting projects
                </p>
              </Card>
            </motion.div>

            {/* Old Stats Grid commented out */}
            {/* <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <Card className="p-6 glass-morphism floating-animation shadow-xl text-center relative overflow-hidden cursor-pointer">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="text-3xl font-bold text-primary mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      60%
                    </motion.div>
                    <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <Target className="w-4 h-4" />
                      Bug Reduction
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotateY: -5 }}
                className="group"
              >
                <Card className="p-6 glass-morphism floating-delayed shadow-xl text-center relative overflow-hidden cursor-pointer">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="text-3xl font-bold text-green-500 mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      39%
                    </motion.div>
                    <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4" />
                      Performance Boost
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <Card className="p-6 glass-morphism floating-animation shadow-xl text-center relative overflow-hidden cursor-pointer">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="text-3xl font-bold text-blue-500 mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      300+
                    </motion.div>
                    <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Bugs Fixed
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotateY: -5 }}
                className="group"
              >
                <Card className="p-6 glass-morphism floating-delayed shadow-xl text-center relative overflow-hidden cursor-pointer">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="text-3xl font-bold text-purple-500 mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      238+
                    </motion.div>
                    <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <Users className="w-4 h-4" />
                      Commits
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div> */}
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
  );
}
