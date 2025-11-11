import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { blogPosts } from "@/components/Blog";
import ThemeToggle from "@/components/ThemeToggle";

const BlogList = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-30" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link to="/">
              <Button variant="ghost" className="mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All <span className="gradient-text">Blog Posts</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Explore all articles on web development, design, and technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                      <ArrowLeft className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1 rotate-180" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;
