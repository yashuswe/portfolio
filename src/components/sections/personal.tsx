import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "../ui/card"
import { MapPin } from "lucide-react"
import personalPhoto from "../../assets/personal-picture.jpeg"

export default function Personal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="personal" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Personal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Beyond code, here's a glimpse into my world
          </p>
        </motion.div>

        {/* Main Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <Card className="bg-black/40 backdrop-blur-md border border-gray-800/50 overflow-hidden group hover:bg-black/60 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-700/50 group-hover:border-gray-600/70 transition-colors duration-500 flex-shrink-0">
                  <img
                    src={personalPhoto}
                    alt="Yashassvi Suhane"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Yashassvi Suhane
                  </h3>
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
      </motion.div>
    </section>
  )
}