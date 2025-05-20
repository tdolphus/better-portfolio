import { useState, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc/SectionWrapper';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({
        name: '',
        email: '',
        message: '',
      });

      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="section-padding">
      <motion.div variants={textVariant()}>
        <p className="text-accent sm:text-[18px] text-[14px] uppercase tracking-wider">Get in touch</p>
        <h2 className="section-heading text-white">Contact.</h2>
      </motion.div>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-10 mt-16">
        {/* Contact Info */}
        <motion.div
          variants={fadeIn('right', 'spring', 0.2, 0.75)}
          className="md:col-span-1 flex flex-col gap-4"
        >
          <div className="flex flex-col items-start gap-2">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full  flex items-center justify-center">
                <MapPin className="text-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">Location</h4>
                <p className="text-secondary">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full  flex items-center justify-center">
                <Mail className="text-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">Email</h4>
                <p className="text-secondary">contact@johndoe.com</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full  flex items-center justify-center">
                <Phone className="text-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">Phone</h4>
                <p className="text-secondary">(123) 456-7890</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={fadeIn('left', 'spring', 0.2, 0.75)}
          className="md:col-span-3 green-pink-gradient p-[1px] rounded-2xl shadow-card"
        >
          <div className=" rounded-2xl p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-white font-medium mb-2 block">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="contact-input w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-white font-medium mb-2 block">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="contact-input w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-white font-medium mb-2 block">Your Message</label>
                <textarea
                  rows={7}
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="contact-input w-full"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`bg-gradient-to-r from-purple-600 to-accent py-3 px-8 rounded-xl w-fit text-white font-bold shadow-md flex items-center gap-2 ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                disabled={loading}
              >
                {loading ? (
                  'Sending...'
                ) : submitted ? (
                  <>Message Sent!</>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      <div className="w-full flex justify-center mt-16 text-sm">
        <p>© 2025 John Doe. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');