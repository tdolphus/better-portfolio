import { motion } from 'framer-motion';
import { ComputerCanvas } from './canvas/Computer';

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen bg-hero-pattern bg-cover bg-center mx-auto overflow-hidden">
      <div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-accent" />
          <div className="w-1 sm:h-80 h-40 purple-gradient" />
        </div>

        <div>
          <h1 className="font-bold text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm <span className="text-accent">John</span>
          </h1>
          <p className="text-white font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            Front-end Developer specializing in<br className="sm:block hidden" />
            React, NextJS, and TypeScript
          </p>
          
          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white py-3 px-8 rounded-full font-medium shadow-button hover:bg-accent-light transition-colors"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </motion.button>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-9 h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      {/* Computer model canvas */}
      <div className="absolute bottom-0 right-0 lg:w-1/2 w-full h-[60%] z-10">
        <ComputerCanvas />
      </div>
    </section>
  );
};