import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export const blogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with React",
    excerpt: "Explore the latest best practices and patterns for creating scalable React applications with TypeScript and modern tooling.",
    category: "Development",
    date: "2024-03-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    id: 2,
    title: "The Future of UI/UX Design",
    excerpt: "Discover emerging trends in user interface design and how AI is reshaping the way we create digital experiences.",
    category: "Design",
    date: "2024-03-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    id: 3,
    title: "Optimizing Performance in Modern Apps",
    excerpt: "Learn essential techniques for improving web application performance, from code splitting to efficient rendering strategies.",
    category: "Performance",
    date: "2024-03-05",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: 4,
    title: "Mastering TypeScript in 2024",
    excerpt: "Deep dive into advanced TypeScript features and patterns that will level up your development workflow and code quality.",
    category: "Development",
    date: "2024-03-01",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
  },
  {
    id: 5,
    title: "The Art of Component Architecture",
    excerpt: "Learn how to design and structure component hierarchies that are maintainable, reusable, and scalable for large applications.",
    category: "Architecture",
    date: "2024-02-25",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development and design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.slice(0, 4).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass hover-lift group cursor-pointer overflow-hidden h-full">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4">{post.category}</Badge>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold group-hover:gradient-text transition-all">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <Button variant="ghost" className="group/btn p-0 h-auto">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {blogPosts.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/blog">
              <Button size="lg" className="group">
                View All Posts
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
