import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "./card";
import { Badge } from "./badge";
import { Briefcase, GraduationCap, Rocket, Trophy } from "lucide-react";

const journeySteps = [
  {
    year: "2020",
    title: "Started CS Journey",
    icon: GraduationCap,
    description: "Began B.Tech in Computer Science at GLA University",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    year: "2023",
    title: "First Professional Role",
    icon: Briefcase,
    description: "Software Developer Intern at Squareboat Technologies",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    year: "2024",
    title: "Freelance & Global Work",
    icon: Rocket,
    description: "Worked with US startups and Singapore healthtech",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    year: "2024-Present",
    title: "Full Stack Engineer",
    icon: Trophy,
    description: "Leading UI development at AmpUp.ai with 90%+ test coverage",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

export function TechJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            My Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Evolution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From student to building production systems at scale
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary transform -translate-x-1/2" />

          <div className="space-y-12">
            {journeySteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col gap-8`}
                >
                  {/* Content Card */}
                  <div
                    className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-center`}
                  >
                    <Card
                      className={`inline-block border-2 ${step.bgColor} hover:shadow-xl transition-all duration-300`}
                    >
                      <CardContent className="p-6">
                        <div
                          className={`flex items-center gap-3 mb-3 ${isEven ? "md:flex-row-reverse md:justify-end" : "md:justify-start"} justify-center`}
                        >
                          <div
                            className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center`}
                          >
                            <IconComponent
                              className={`w-6 h-6 ${step.color}`}
                            />
                          </div>
                          <Badge className={`${step.color}`}>{step.year}</Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center dot */}
                  <motion.div
                    className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                  />

                  {/* Spacer for layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
