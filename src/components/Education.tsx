import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const Education = () => {
  const timeline = [
    {
      type: "education",
      title: "Degree BA Pass",
      organization: "Patiya Govt College",
      period: "2022 to Present - 3rd Year Running",
      icon: GraduationCap,
    },
    {
      type: "education",
      title: "HSC (Higher Secondary Certificate)",
      organization: "B G C Trust School and College",
      period: "2017 to 2019",
      icon: Briefcase,
    },
    {
      type: "education",
      title: "SSC (Secondary School Certificate)",
      organization: "Hashimpur Makbulia Madrasah",
      period: "2015 to 2017",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0"
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center border-2 border-primary/30">
                <item.icon className="text-primary" size={24} />
              </div>

              <div className="glass-card p-6 rounded-xl ml-6 hover-lift glow-on-hover">
                <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <span className="text-sm text-accent-foreground font-semibold px-3 py-1 rounded-full bg-accent-foreground/10">
                    {item.period}
                  </span>
                </div>
                
                <p className="text-primary font-medium mb-3">
                  {item.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
