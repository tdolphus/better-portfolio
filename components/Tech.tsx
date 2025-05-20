import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc/SectionWrapper';

export const Tech = () => {
  return (
    <div className="section-padding">
      <motion.div variants={textVariant()}>
        <p className="text-accent sm:text-[18px] text-[14px] uppercase tracking-wider">My toolkit</p>
        <h2 className="section-heading text-white">Technologies.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="section-subheading mt-4"
      >
        I work with a wide range of tools and technologies to build modern, 
        responsive web applications. Here are some of the key technologies I specialize in:
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-8 justify-center">
        {technologies.map((technology, index) => (
          <motion.div 
            key={technology.name}
            variants={fadeIn('up', 'spring', index * 0.08, 0.5)}
            className="w-24 h-24 flex flex-col items-center justify-center group"
          >
            <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-2 group-hover:bg-black-100 transition-colors p-2">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-10 h-10 object-contain"
              />
            </div>
            <p className="text-sm group-hover:text-accent transition-colors">{technology.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const technologies = [
  {
    name: 'HTML 5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS 3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'React JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Next JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  },
  {
    name: 'Redux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  {
    name: 'Node JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    name: 'Three JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
  },
];

export default SectionWrapper(Tech, 'tech');