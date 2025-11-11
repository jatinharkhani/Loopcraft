import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-2 hover-lift">
              <img 
                src={profileImg} 
                alt="Profile" 
                className="rounded-3xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-[80px]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Hello, I'm Jatin Patel — MEAN/MERN Stack Developer</h3>
              <p className="text-muted-foreground mb-4">
                With over 5 years of experience as a MEAN/MERN Stack Developer, I specialize in creating responsive, scalable, and user-friendly web applications using MongoDB, Express, Angular/React, Node.js, Next.js and Nest.js.
              </p>
              <p className="text-muted-foreground mb-6">
                My approach combines technical expertise with creative thinking, ensuring 
                every project not only functions flawlessly but also delivers an exceptional 
                user experience. I'm passionate about staying current with the latest 
                technologies and best practices.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass rounded-xl p-4">
                  <div className="text-3xl font-bold gradient-text mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="text-3xl font-bold gradient-text mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>

              <Button
                asChild
                className="bg-gradient-primary text-primary-foreground border-0 hover:opacity-90">
                <a
                  href="https://drive.google.com/your-resume-link"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Download className="mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
