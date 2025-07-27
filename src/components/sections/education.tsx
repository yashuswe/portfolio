import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "B.Tech (Hons), Computer Science Engineering",
    institution: "GLA University, Mathura",
    period: "2020 – 2024",
    grade: "CPI: 8.34",
    type: "Bachelor's Degree"
  },
  {
    degree: "Intermediate (Science)",
    institution: "Sanskaar International School",
    period: "2019 – 2020",
    grade: "Percentage: 86.4%",
    type: "Higher Secondary"
  }
]

const certifications = [
  {
    title: "Cloud Digital Leader",
    issuer: "Google Cloud Platform",
    icon: "☁️",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    title: "Introduction to Networks",
    issuer: "Cisco Net Academy",
    icon: "🌐",
    color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
  },
  {
    title: "Agile Fundamentals",
    issuer: "Project Management Institute",
    icon: "🚀",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
  }
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="outline" className="mb-2">
                          {edu.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                      
                      <div className="flex items-center gap-1 text-primary mb-3">
                        <MapPin className="h-4 w-4" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      
                      <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                        {edu.grade}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{cert.icon}</div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {cert.title}
                          </h4>
                          <p className="text-muted-foreground">{cert.issuer}</p>
                        </div>
                        <Badge className={cert.color}>
                          Certified
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-8"
            >
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Additional Information</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Developer Tools: Cursor (AI pair programmer), VS Code, GitHub, CI/CD pipelines</li>
                    <li>• Availability: Available for relocation and remote opportunities</li>
                    <li>• Languages: English (Fluent), Hindi (Native)</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
