import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

export const SectionWrapper = <P extends Record<string, unknown>>(Component: React.ComponentType<P>, idName: string) => 
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component {...({} as P)} />
      </motion.section>
    );
  };