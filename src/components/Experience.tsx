import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const timeline = [
    {
      type: "work",
      title: "Frontend Developer (Intern)",
      organization: "Weero Digital",
      projects: [
        {name: "WeepCheez", type: "Fashion, LifeStyle & Clothing Brand"},
      ],
      period: "Feb 2026 to Present",
      description: [
        "Developing a fully responsive e-commerce frontend for a clothing brand using React and Tailwind CSS.",
        "Building reusable UI components including product cards, grids, sliders, and navigation.",
        "Implementing mobile-first responsive layouts improving mobile UX.",
        "Integrating REST APIs to fetch and display dynamic product data",
        "Optimizing frontend performance and loading experience.",
      ],
      icon: Briefcase,
    },
    {
      type: "work",
      title: "Web Developer",
      organization: "Self-Employed",
      projects: [],
      period: "2024 to Present",
      description: [
        "Building and deploying modern web applications for businesses. Specializing in full-stack development with React.js, Node.js, and MongoDB.",
      ],
      icon: Briefcase,
    },
    {
      type: "work",
      title: "Computer Operator",
      organization: "Fashion Watch Ltd (Garments Industry)",
      projects: [],
      period: "March-2021 to Sep-2025 - 4 Years 6 Months",
      description: [
        "Learned discipline, problem-solving, and team collaboration. Developed strong work ethic and attention to detail.",
      ],
      icon: Briefcase,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
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
                  Compnay : {item.organization}
                </p>

                <p className="text-primary font-medium mb-3">
                  Current Project : {item.projects.map((project) => project.name + " - " + project.type).join(", ")}
                </p>
                
                {/* <p className="text-muted-foreground leading-relaxed">
                  {item.description}<br/>
                </p> */}

               <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
