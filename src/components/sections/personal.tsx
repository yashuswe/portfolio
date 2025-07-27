import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "../ui/card"
import { MapPin, Music, Palette, Coffee, BookOpen, Heart, Star, Sparkles } from "lucide-react"
import personalPhoto from "../../assets/personal-picture.jpeg"

export default function Personal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [scrollY, setScrollY] = useState(0)
  const [hoveredInterest, setHoveredInterest] = useState<string | null>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useTransform(mouseY, [-100, 100], [15, -15])
  const rotateY = useTransform(mouseX, [-100, 100], [-15, 15])
  
  const springConfig = { damping: 20, stiffness: 300 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const interests = [
    { icon: Music, label: "Jazz Music", description: "Timeless classics and smooth melodies" },
    { icon: Palette, label: "Art Galleries", description: "Exploring creativity and inspiration" },
    { icon: Coffee, label: "Coffee Culture", description: "Perfect brew, perfect code" },
    { icon: BookOpen, label: "Tech Books", description: "Always learning, always growing" }
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const x = (e.clientX - centerX) / 100
    const y = (e.clientY - centerY) / 100
    
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <section id="personal" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: scrollY * 0.5 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Beyond the Code
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here's a glimpse into my world beyond the screen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {}}
            onMouseLeave={() => {
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
            <Card className="bg-black/40 backdrop-blur-md border border-gray-800/50 overflow-hidden group hover:bg-black/60 transition-all duration-500 relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
              
              <CardContent className="p-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <motion.div 
                    className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-700/50 group-hover:border-gray-600/70 transition-colors duration-500 flex-shrink-0 relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={personalPhoto}
                      alt="Yashassvi Suhane"
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    />
                  </motion.div>
                  <div className="flex-1 text-center md:text-left">
                    <motion.h3 
                      className="text-3xl font-bold text-white mb-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      Yashassvi Suhane
                    </motion.h3>
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      Full-stack developer passionate about creating exceptional digital experiences. When I'm not coding, you'll find me exploring art galleries and listening to timeless jazz classics.
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300">Bengaluru, India</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Interests Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {interests.map((interest, index) => {
              const IconComponent = interest.icon
              return (
                <motion.div
                  key={interest.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  onMouseEnter={() => setHoveredInterest(interest.label)}
                  onMouseLeave={() => setHoveredInterest(null)}
                  className="relative"
                >
                  <Card className="bg-black/30 backdrop-blur-md border border-gray-800/30 overflow-hidden group cursor-pointer hover:bg-black/50 transition-all duration-300">
                    <CardContent className="p-6 text-center relative">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                      />
                      
                      <div className="relative z-10">
                        <motion.div
                          className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors duration-300"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {interest.label}
                        </h4>
                        {hoveredInterest === interest.label && (
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="text-sm text-gray-300"
                          >
                            {interest.description}
                          </motion.p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <Card className="bg-black/20 backdrop-blur-md border border-gray-800/30">
            <CardContent className="p-8">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-block mb-4"
              >
                <Heart className="w-8 h-8 text-red-400" />
              </motion.div>
              <blockquote className="text-xl text-gray-300 italic mb-4">
             "Talk is cheap. Show me the code."
              </blockquote>
              <p className="text-gray-400">— Linus Torvalds</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}