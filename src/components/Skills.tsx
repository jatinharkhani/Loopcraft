import { motion } from "framer-motion";
import { Code2, Palette, Database, Zap } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Design",
    icon: Palette,
    items: ["UI/UX", "Figma", "Adobe XD", "Framer"]
  },
  {
    category: "Backend",
    icon: Database,
    items: ["Node.js", "PostgreSQL", "MongoDB", "GraphQL"]
  },
  {
    category: "Tools",
    icon: Zap,
    items: ["Git", "Docker", "AWS", "CI/CD"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover-lift group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li 
                      key={i}
                      className="flex items-center text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
