// components/ProjectList.tsx
'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

const projects = [
  {
    title: 'Synthetic Theatre',
    description: 'Creative Direction/Visual/Motion/Storytelling',
    category: 'Website',
  },
  {
    title: 'Headspace',
    description: 'UX/Visual/Motion/Design System',
    category: 'Website Design',
  },
  {
    title: 'Insider',
    description: 'UX/Visual/Motion/Design System',
    category: 'Mobile App',
  },
];

const ProjectList = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Variants for the hover animations
  const itemVariants = {
    initial: { opacity: 1 },
    hover: { opacity: 1 }, // Keep main text static on hover
    fade: { opacity: 0.5 },
  };

  const borderVariants = {
    initial: { scaleY: 1, originY: 1 },
    hover: { scaleY: 3, originY: 1 },
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 },
  };

  const rightColumnVariants = {
    initial: { x: 0 },
    hover: { x: -20 }, // Move only the right column left when hovered
  };

  return (
    <div className='p-6'>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className='relative overflow-hidden py-4'
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          initial='initial'
          animate={
            hoveredIndex === index
              ? 'hover'
              : hoveredIndex !== null
                ? 'fade'
                : 'initial'
          }
          variants={itemVariants}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className='absolute bottom-0 left-0 w-full border-b border-black'
            initial='initial'
            animate={hoveredIndex === index ? 'hover' : 'initial'}
            variants={borderVariants}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
          <div className='flex items-center justify-between'>
            <motion.h3
              className={`text-2xl font-bold transition-all duration-300 ${
                hoveredIndex === index ? 'italic' : ''
              }`}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>
            {/* Right column containing the category and arrow */}
            <motion.div
              className='flex items-center space-x-4'
              initial='initial'
              animate={hoveredIndex === index ? 'hover' : 'initial'}
              variants={rightColumnVariants}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className='text-lg transition-all duration-300'
                transition={{ duration: 0.3 }}
              >
                {project.category}
              </motion.span>
              <motion.div
                className='text-4xl' // Increase the size of the arrow
                initial='hidden'
                animate={hoveredIndex === index ? 'visible' : 'hidden'}
                variants={arrowVariants}
                transition={{ duration: 0.3 }}
              >
                ➔
              </motion.div>
            </motion.div>
          </div>
          <motion.p
            className='text-base text-gray-600 transition-all duration-300'
            transition={{ duration: 0.3 }}
          >
            {project.description}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectList;
