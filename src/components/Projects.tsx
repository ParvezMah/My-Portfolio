import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Image } from "lucide-react";
import goTripImage from "@/assets/images/GoTrip-Project Image.png";
import librarianImage from "@/assets/images/Librarian-Project Image.png";

const Projects = () => {
  const projects = [
    {
      title: "GoTrip",
      description: "Ride Booking Management System.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      liveUrl: "https://a6-go-trip-ride-booking-management.vercel.app",
      fronendRepo: "https://github.com/ParvezMah/GoTrip-Ride-Booking-Management-System-Frontend",
      backendRepo: "https://github.com/ParvezMah/GoTrip-Ride-Booking-Management-System-Backend",
      image: goTripImage,
    },
    {
      title: "Librarian",
      description: "A Complete Library Management System",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      liveUrl: "#",
      fronendRepo: "#",
      backendRepo: "#",
      image: librarianImage,
    },
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
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          // className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="glass-card rounded-xl overflow-hidden hover-lift glow-on-hover"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Image className="w-24 h-24 text-primary/40" />
                </div>
              )}

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

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                    <a
                      href={project.fronendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2" size={16} />
                      Frontend
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={project.backendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2" size={16} />
                      Backend
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
