import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code } from 'lucide-react';

const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  { id: 'tech', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

export const Header = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? 'bg-primary/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="#hero"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <Code className="h-9 w-9 text-accent" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            John &nbsp;
            <span className="text-accent">Doe</span>
          </p>
        </a>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="w-10 h-10 rounded-full flex justify-center items-center text-white"
          >
            {toggle ? <X size={24} /> : <Menu size={24} />}
          </button>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: toggle ? 1 : 0,
              x: toggle ? 0 : 50,
              transition: { duration: 0.25 },
            }}
            className={`${
              toggle ? 'flex' : 'hidden'
            } p-6 bg-black-100/90 backdrop-blur-md absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === link.title ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};