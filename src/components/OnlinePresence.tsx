import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Globe, Star, GitFork, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const socialPlatforms = [
  {
    name: "GitHub",
    icon: Github,
    username: "@yourusername",
    followers: "1.2K",
    metric: "Repositories",
    metricValue: "45",
    link: "https://github.com",
    color: "text-foreground",
    stats: [
      { icon: Star, value: "2.3K", label: "Stars" },
      { icon: GitFork, value: "456", label: "Forks" },
    ]
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    username: "@yourname",
    followers: "3.5K",
    metric: "Connections",
    metricValue: "2.8K",
    link: "https://linkedin.com",
    color: "text-[#0077B5]",
    stats: [
      { icon: Users, value: "3.5K", label: "Followers" },
      { icon: MessageCircle, value: "150+", label: "Posts" },
    ]
  },
  {
    name: "Twitter/X",
    icon: Twitter,
    username: "@yourusername",
    followers: "890",
    metric: "Tweets",
    metricValue: "234",
    link: "https://twitter.com",
    color: "text-foreground",
    stats: [
      { icon: Users, value: "890", label: "Followers" },
      { icon: MessageCircle, value: "234", label: "Tweets" },
    ]
  },
];

const OnlinePresence = () => {
  return (
    <section id="presence" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Online <span className="gradient-text">Presence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with me across various platforms and stay updated with my latest work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {socialPlatforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass hover-lift group h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className={`w-8 h-8 ${platform.color}`} />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(platform.link, '_blank')}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Visit
                      </Button>
                    </div>
                    <CardTitle className="text-2xl">{platform.name}</CardTitle>
                    <p className="text-muted-foreground">{platform.username}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {platform.stats.map((stat, idx) => {
                        const StatIcon = stat.icon;
                        return (
                          <div key={idx} className="text-center p-3 rounded-lg bg-background/50">
                            <StatIcon className="w-4 h-4 mx-auto mb-1 text-primary" />
                            <p className="text-lg font-bold">{stat.value}</p>
                            <p className="text-xs text-muted-foreground">{stat.label}</p>
                          </div>
                        );
                      })}
                    </div>
                    <Button 
                      className="w-full group/btn"
                      onClick={() => window.open(platform.link, '_blank')}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      Connect
                      <Globe className="w-4 h-4 ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="glass max-w-2xl mx-auto p-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Mail className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Let's Connect</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              I'm always open to interesting conversations and collaboration opportunities
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="glow">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
              <Button size="lg" variant="outline">
                <Globe className="w-5 h-5 mr-2" />
                Schedule Call
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default OnlinePresence;
