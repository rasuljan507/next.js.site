'use client';

import { motion } from 'framer-motion';


const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },     
  enter: { opacity: 1, x: 0, y: 0 },       
  exit: { opacity: 0, scale: 0.95, y: -20 }, 
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit" 
      transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}