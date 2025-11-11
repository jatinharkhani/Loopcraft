import { motion } from "framer-motion";
import { Linkedin, ThumbsUp, MessageCircle, Share2, ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const linkedinPosts = [
  {
    id: 1,
    content: "Just launched my new portfolio website! 🚀 Built with React, TypeScript, and Tailwind CSS. Check it out and let me know what you think!",
    date: "2024-03-15",
    likes: 234,
    comments: 45,
    shares: 12,
    link: "https://linkedin.com",
  },
  {
    id: 2,
    content: "Excited to share my latest project - a full-stack web application that helps teams collaborate more effectively. The tech stack includes React, Node.js, and PostgreSQL. #WebDev #FullStack",
    date: "2024-03-10",
    likes: 189,
    comments: 32,
    shares: 8,
    link: "https://linkedin.com",
  },
  {
    id: 3,
    content: "5 tips for writing clean, maintainable code:\n\n1. Keep functions small and focused\n2. Use meaningful variable names\n3. Write self-documenting code\n4. Follow consistent styling\n5. Refactor regularly\n\nWhat's your best tip?",
    date: "2024-03-05",
    likes: 312,
    comments: 67,
    shares: 23,
    link: "https://linkedin.com",
  },
  {
    id: 4,
    content: "Attending an amazing tech conference today! Learning about the latest trends in AI and machine learning. The future is exciting! 🤖 #AI #TechConference",
    date: "2024-03-01",
    likes: 267,
    comments: 41,
    shares: 15,
    link: "https://linkedin.com",
  },
  {
    id: 5,
    content: "Grateful to be part of such an innovative team! We just hit a major milestone with our latest product release. Couldn't have done it without this amazing group of people. 💪 #Teamwork",
    date: "2024-02-25",
    likes: 421,
    comments: 89,
    shares: 34,
    link: "https://linkedin.com",
  },
];

const LinkedInPosts = () => {
  return (
    <section id="linkedin" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Linkedin className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              LinkedIn <span className="gradient-text">Updates</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recent posts and thoughts shared on LinkedIn
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {linkedinPosts.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
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

        {linkedinPosts.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/linkedin">
              <Button size="lg" className="group">
                View All Updates
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
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
  );
};

export default LinkedInPosts;
