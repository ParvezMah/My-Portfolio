import { motion } from "framer-motion";
import { Code, Database, FileCode, Wrench, Zap } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiCloudinary,
  SiExpress,
  SiGit, SiGithub,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiPassport,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRedux,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skillCategories: {
    title: string;
    icon: IconType;
    skills: { name: string; icon: IconType }[];
  }[] = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "React.js", icon: SiReact },
        // { name: "Material UI", icon: SiMui },
        { name: "Redux", icon: SiRedux },
        // { name: "Zustand", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        // { name: "Framer Motion", icon: SiFramer },
      ],
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "REST API", icon: Code },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Mongoose", icon: SiMongoose },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Prisma", icon: SiPrisma },
        { name: "Redis", icon: SiRedis },
        // { name: "GraphQL", icon: SiGraphql },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Postman", icon: SiPostman },
        { name: "VS Code", icon: VscVscode },
        { name: "Vercel", icon: SiVercel },
        // { name: "Heroku", icon: SiHeroku },
        // { name: "Docker", icon: SiDocker },
        // { name: "AWS", icon: SiAwsamplify },
      ],
    },
    {
      title: "Other Skills",
      icon: Zap,
      skills: [
        { name: "JWT Auth", icon: SiJsonwebtokens },
        { name: "Passport.js", icon: SiPassport },
        { name: "Stripe Integration", icon: SiStripe },
        { name: "Cloudinary", icon: SiCloudinary },
        { name: "API Development", icon: Code },
        // { name: "WebSocket", icon: SiSocketdotio },
        // { name: "Testing", icon: SiJest },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-card p-6 rounded-xl hover-lift glow-on-hover"
              >
                <div className="flex items-center gap-3 mb-6">
                  <CategoryIcon className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold text-primary">
                    {category.title}
                  </h3>
                </div>
                <div className="grid grid-cols-4 gap-6">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card/50 hover:bg-card transition-all hover-lift group"
                        title={skill.name}
                      >
                        <SkillIcon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
