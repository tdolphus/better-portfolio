import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc/SectionWrapper';
import { CircleIcon, Calendar, Building } from 'lucide-react';

export const Experience = () => {
  return (
    <div className="section-padding">
      <motion.div variants={textVariant()}>
        <p className="text-accent sm:text-[18px] text-[14px] uppercase tracking-wider">What I have done so far</p>
        <h2 className="section-heading text-white">Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <div className="border-l-2 border-accent ml-2 pl-8 space-y-10">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
      className="relative"
    >
      <div className="absolute -left-[48px] -top-2 rounded-full w-6 h-6 bg-tertiary border-2 border-accent flex items-center justify-center">
        <CircleIcon className="w-3 h-3 text-accent" />
      </div>
      
      <div className="bg-tertiary p-6 rounded-2xl shadow-card">
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center ${experience.iconBg}`}>
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-10 h-10 object-contain"
            />
          </div>
          <div>
            <h3 className="text-white text-[22px] font-bold">{experience.title}</h3>
            <div className="flex items-center text-secondary gap-1">
              <Building size={16} />
              <p className="text-[16px]">{experience.company_name}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-1 mb-4 text-accent">
          <Calendar size={16} />
          <p className="text-[14px] italic">{experience.date}</p>
        </div>

        <ul className="mt-5 list-disc space-y-2 pl-5">
          {experience.points.map((point, pointIndex) => (
            <li
              key={`experience-point-${pointIndex}`}
              className="text-secondary text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const experiences = [
  {
    title: "Senior Frontend Developer",
    company_name: "TechGiant Inc.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    iconBg: "bg-black-100",
    date: "January 2022 - Present",
    points: [
      "Developed and maintained large-scale React and Next.js applications for enterprise clients.",
      "Implemented TypeScript across multiple projects, reducing type errors by 85%.",
      "Collaborated with UX/UI designers to implement responsive designs for web applications.",
      "Mentored junior developers through code reviews and pair programming sessions.",
      "Optimized application performance, resulting in a 40% decrease in load times."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "WebSolutions Corp",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    iconBg: "bg-black-100",
    date: "March 2019 - December 2021",
    points: [
      "Built and maintained modern web applications using React.js and Redux.",
      "Collaborated with cross-functional teams to design and implement new features.",
      "Participated in code reviews to maintain high code quality standards.",
      "Migrated legacy applications from JavaScript to TypeScript.",
      "Implemented CI/CD pipelines to streamline deployment processes."
    ],
  },
  {
    title: "Junior Web Developer",
    company_name: "StartupHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    iconBg: "bg-black-100",
    date: "June 2017 - February 2019",
    points: [
      "Developed responsive web applications using HTML, CSS, and JavaScript.",
      "Assisted in the implementation of front-end frameworks like React.",
      "Collaborated with designers to ensure pixel-perfect implementation of designs.",
      "Participated in Agile development processes including daily stand-ups and sprint planning.",
      "Gained experience in version control using Git and GitHub."
    ],
  },
];

export default SectionWrapper(Experience, 'experience');