import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { MapPin, Music, ExternalLink } from "lucide-react"
import personalPhoto from "../../assets/personal-picture.jpeg"

const musicArtists = [
  {
    name: "Kenny Dorham",
    url: "https://music.apple.com/in/artist/kenny-dorham/298282",
    genre: "Jazz Trumpet"
  },
  {
    name: "Frank Sinatra", 
    url: "https://music.apple.com/in/artist/frank-sinatra/171366",
    genre: "Classic Jazz"
  }
]

export default function Personal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="personal" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
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

        {/* Music Interests */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Music className="w-6 h-6 text-gray-400" />
              <h4 className="text-2xl font-bold text-white">Music I Love</h4>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Jazz has always been a source of inspiration, bringing creativity and rhythm to my development process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {musicArtists.map((artist, index) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.2) }}
              >
                <Card className="bg-black/30 backdrop-blur-md border border-gray-800/50 overflow-hidden group hover:bg-black/50 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h5 className="text-xl font-semibold text-white mb-2">
                        {artist.name}
                      </h5>
                      <p className="text-gray-400 mb-4 text-sm">
                        {artist.genre}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300"
                      >
                        <a
                          href={artist.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Music className="w-4 h-4" />
                          Listen on Apple Music
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}