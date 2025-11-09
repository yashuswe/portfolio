import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Zap,
  Target,
  Users,
  TrendingUp,
  Shield,
  Lightbulb,
  Code,
  Rocket,
  Heart,
  Award,
} from "lucide-react";

const valueProps = [
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Reduced API response times by 40% and increased development velocity through strategic implementation of React Query and Zustand.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
  },
  {
    icon: Target,
    title: "Quality-First Approach",
    description:
      "Achieved 90%+ test coverage with Vitest and Playwright, reducing bug reports by 55% and improving release quality.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Users,
    title: "Cross-Functional Collaboration",
    description:
      "Led UI rebuilds and facilitated team scaling in lean, high-velocity environments, shipping 94,000+ lines of production code.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Built healthcare platforms serving 1M+ patients and educational systems with performance tracking capabilities.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    icon: Shield,
    title: "Security & Best Practices",
    description:
      "Implemented secure cascading deletion APIs and robust authorization systems using FastAPI and SQLAlchemy.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Problem Solving",
    description:
      "Delivered robust features and enhanced user retention by 40% through modern design patterns, automated testing, and intuitive interfaces.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
];

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Expertise",
    value: "React to FastAPI",
  },
  {
    icon: Rocket,
    title: "Test Coverage",
    value: "90%+ Achieved",
  },
  {
    icon: Heart,
    title: "Bug Reduction",
    value: "55% Decrease",
  },
  {
    icon: Award,
    title: "Code Quality",
    value: "54K+ Lines Delivered",
  },
];

function ValueCard({
  value,
  index,
}: {
  value: (typeof valueProps)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const IconComponent = value.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="h-full"
    >
      <Card
        className={`h-full hover:shadow-lg transition-all duration-300 group border ${value.borderColor} hover:border-opacity-40 flex flex-col`}
      >
        <CardContent className="p-6 flex-1 flex flex-col">
          <div
            className={`w-12 h-12 rounded-lg ${value.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
          >
            <IconComponent className={`w-6 h-6 ${value.color}`} />
          </div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {value.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed flex-1">
            {value.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function HighlightCard({
  highlight,
  index,
}: {
  highlight: (typeof highlights)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const IconComponent = highlight.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <Card className="text-center hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
        <CardContent className="p-6 flex-1 flex flex-col justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <IconComponent className="w-8 h-8 text-primary" />
          </div>
          <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
          <p className="text-2xl font-bold text-primary">{highlight.value}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ValuePropositionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="value"
      className="section-padding bg-gradient-to-br from-background via-muted/20 to-background"
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            What I Bring to the Table
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Delivering <span className="gradient-text">Exceptional Value</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Combining technical expertise with proven results to create
            impactful solutions that drive business success
          </p>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={highlight.title}
              highlight={highlight}
              index={index}
            />
          ))}
        </motion.div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life with cutting-edge
                technology and proven results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-sm">
                  React & TypeScript Expert
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  FastAPI Backend Developer
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Performance Optimizer
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Quality Assurance Specialist
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
