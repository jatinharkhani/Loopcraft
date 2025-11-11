import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout",
    image: project1,
    tech: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Real-time data visualization and insights",
    image: project2,
    tech: ["TypeScript", "D3.js", "PostgreSQL"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 3,
    title: "Fitness Mobile App",
    description: "Track your workouts and achieve your goals",
    image: project3,
    tech: ["React Native", "Firebase", "Redux"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "Connect and share with friends worldwide",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tech: ["Next.js", "GraphQL", "MongoDB"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 5,
    title: "Task Management System",
    description: "Organize teams and boost productivity",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    tech: ["Vue.js", "Express", "MySQL"],
    demoUrl: "#",
    codeUrl: "#"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden hover-lift">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-primary/20 hover:border-primary/40"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs rounded-full glass border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/portfolio">
              <Button size="lg" className="group">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
