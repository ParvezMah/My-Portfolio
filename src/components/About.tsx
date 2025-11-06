import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl glass-card overflow-hidden border-2 border-primary/30 glow-on-hover">
                <img 
                  src={profileImage} 
                  alt="Parvez Mahamud - Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Parvez Mahamud</span>, 
              a self-taught full stack developer from Bangladesh. I build end-to-end 
              web applications using React.js, Node.js, and MongoDB.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My goal is to create impactful digital solutions that help businesses 
              grow and thrive. With experience in modern frameworks and a passion for 
              clean, efficient code, I turn complex problems into elegant solutions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I'm learning new technologies, contributing to 
              open source, or working on exciting freelance projects.
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 glow-on-hover mt-6"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
