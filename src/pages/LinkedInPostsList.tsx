import { motion } from "framer-motion";
import { Linkedin, ThumbsUp, MessageCircle, Share2, ExternalLink, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { linkedinPosts } from "@/components/LinkedInPosts";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

const LinkedInPostsList = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link to="/">
              <Button variant="ghost" className="group mb-6">
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Linkedin className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">
                All LinkedIn <span className="gradient-text">Updates</span>
              </h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl">
              All posts and thoughts shared on LinkedIn
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {linkedinPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass hover-lift h-full flex flex-col">
                  <CardHeader className="flex-row items-center gap-3 space-y-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Your Name</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-4">
                    <p className="text-foreground whitespace-pre-line flex-1">
                      {post.content}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4 border-t border-border">
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Share2 className="w-4 h-4" />
                        {post.shares}
                      </span>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full group"
                      onClick={() => window.open(post.link, '_blank')}
                    >
                      View on LinkedIn
                      <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button 
              variant="outline"
              size="lg" 
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Follow on LinkedIn
            </Button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LinkedInPostsList;
