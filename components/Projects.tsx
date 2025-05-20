import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc/SectionWrapper';
import { Github, ExternalLink, Code } from 'lucide-react';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterClick = (item: string) => {
    setActiveFilter(item);
    
    if (item === 'All') {
      setFilteredProjects(projects);
      return;
    }
    
    const filtered = projects.filter(project => 
      project.tags.includes(item)
    );
    setFilteredProjects(filtered);
  };

  return (
    <div className="section-padding">
      <motion.div variants={textVariant()}>
        <p className="text-accent sm:text-[18px] text-[14px] uppercase tracking-wider">My work</p>
        <h2 className="section-heading text-white">Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="section-subheading mt-4"
      >
        The following projects showcase my skills and experience through real-world examples of my work. 
        Each project is briefly described with links to code repositories and live demos. 
        They reflect my ability to solve complex problems, work with different technologies, 
        and manage projects effectively.
      </motion.p>

      <div className="flex flex-wrap gap-4 mt-8 mb-12 justify-center">
        {['All', 'React', 'Next.js', 'TypeScript', 'Three.js'].map((item) => (
          <button
            key={item}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeFilter === item
                ? 'bg-accent text-white'
                : ' hover:text-white'
            }`}
            onClick={() => handleFilterClick(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

interface Project {
  name: string;
  description: string;
  tags: string[];
  image: string;
  source_code_link: string;
  demo_link: string;
}

const ProjectCard = ({ index, name, description, tags, image, source_code_link, demo_link }: Project & { index: number }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.15, 0.5)}
      className=" p-5 rounded-2xl sm:w-full w-full flex flex-col h-full shadow-card hover:shadow-lg transition-shadow"
    >
      <div className="relative w-full h-[230px] overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-end gap-2 m-3">
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <Github className="w-5 h-5 text-white" />
          </a>
          {demo_link && (
            <a
              href={demo_link}
              target="_blank"
              rel="noopener noreferrer"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          )}
        </div>
      </div>

      <div className="mt-5 flex-grow">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag}`} className="text-[14px]">
            <span className="text-accent">#</span> {tag}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const projects = [
  {
    name: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for e-commerce businesses to track sales, inventory, and customer analytics with real-time data visualization.",
    tags: ["React", "TypeScript", "Redux", "Tailwind"],
    image: "https://images.pexels.com/photos/4974917/pexels-photo-4974917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    source_code_link: "https://github.com",
    demo_link: "https://demo.com",
  },
  {
    name: "AI Content Generator",
    description:
      "An application that leverages AI to generate content for blogs, social media, and marketing materials based on user inputs and preferences.",
    tags: ["React", "Next.js", "TypeScript", "API"],
    image: "https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    source_code_link: "https://github.com",
    demo_link: "https://demo.com",
  },
  {
    name: "3D Product Configurator",
    description:
      "Interactive 3D product configurator that allows users to customize products in real-time with different colors, materials, and features.",
    tags: ["React", "Three.js", "TypeScript"],
    image: "https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    source_code_link: "https://github.com",
    demo_link: "https://demo.com",
  },
  {
    name: "Fitness Tracking App",
    description:
      "A mobile-responsive web application for tracking workouts, nutrition, and fitness goals with progress visualization and social sharing features.",
    tags: ["React", "TypeScript", "Firebase"],
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    source_code_link: "https://github.com",
    demo_link: "https://demo.com",
  },
  {
    name: "Real Estate Platform",
    description:
      "A comprehensive real estate platform featuring property listings, virtual tours, mortgage calculators, and agent directories.",
    tags: ["Next.js", "TypeScript", "Prisma"],
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    source_code_link: "https://github.com",
    demo_link: "https://demo.com",
  },
  {
    name: "AR Portfolio Experience",
    description:
      "An augmented reality portfolio that showcases projects in an interactive 3D space, allowing users to explore and interact with case studies.",
    tags: ["React", "Three.js", "WebXR"],
    image: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    source_code_link: "https://github.com",
    demo_link: "https://demo.com",
  },
];

export default SectionWrapper(Projects, 'projects');