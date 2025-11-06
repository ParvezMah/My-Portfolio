import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Image } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "No Projects Built Yet",
      description:
        "Projects will be added here very soon.",
      tech: ["Coming Soon"],
      liveUrl: "#",
      githubUrl: "#",
    },
    // {
    //   title: "UpRestaurant",
    //   description:
    //     "A comprehensive restaurant management web app with real-time order tracking, inventory management, and customer analytics. Built for efficiency and scalability.",
    //   tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   title: "ForkandFeast",
    //   description:
    //     "Restaurant brand platform featuring Stripe payment integration, admin dashboard for menu management, and customer reservation system.",
    //   tech: ["React.js", "TypeScript", "Stripe", "Node.js", "PostgreSQL"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   title: "RideNow",
    //   description:
    //     "Ride-sharing platform with role-based authentication for Drivers and Riders, real-time location tracking, and secure payment processing.",
    //   tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "JWT"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   title: "TechBlog",
    //   description:
    //     "A modern blogging platform with markdown support, user authentication, comment system, and SEO optimization. Built for developers.",
    //   tech: ["React.js", "Express.js", "MongoDB", "Redux", "Material UI"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-1 gap-8 max-w-6xl mx-auto"
          // className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="glass-card rounded-xl overflow-hidden hover-lift glow-on-hover"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Image className="w-24 h-24 text-primary/40" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" size={16} />
                      Source Code
                    </a>
                  </Button>
                </div> */}
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
