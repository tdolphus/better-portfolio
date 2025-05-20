import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc/SectionWrapper';

export const About = () => {
  return (
    <div className="section-padding">
      <motion.div variants={textVariant()}>
        <p className="text-accent sm:text-[18px] text-[14px] uppercase tracking-wider">Introduction</p>
        <h2 className="section-heading text-white">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="section-subheading mt-4"
      >
        I'm a skilled Front-end developer with extensive experience in React, NextJS, and TypeScript. 
        I specialize in building modern, responsive web applications with a focus on performance 
        and user experience. With a strong foundation in JavaScript and modern front-end 
        frameworks, I enjoy creating intuitive interfaces that solve real-world problems.
        Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {serviceCards.map((card, index) => (
          <ServiceCard key={card.title} index={index} {...card} />
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ index, title, icon }: { index: number; title: string; icon: string }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full green-pink-gradient p-px rounded-[20px] shadow-card"
    >
      <div className=" rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  );
};

const serviceCards = [
  {
    title: 'React Developer',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    title: 'TypeScript Expert',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    title: 'NextJS Specialist',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
];

export default SectionWrapper(About, 'about');