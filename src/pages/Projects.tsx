import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ProjectCard from '../components/projects/ProjectCard';
import { projectData } from '../data/projects';

const Projects = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Animation intersection observers
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    },
  };
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projectData 
    : projectData.filter(project => project.category === activeFilter);
  
  // Filter categories
  const filters = [
    { id: 'all', label: t('projects.filters.all') },
    { id: 'residential', label: t('projects.filters.residential') },
    { id: 'commercial', label: t('projects.filters.commercial') },
    { id: 'interior', label: t('projects.filters.interior') },
    //{ id: 'urban', label: t('projects.filters.urban') },
  ];

  return (
    <div className="pt-24">
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            ref={titleRef}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h1 
              variants={itemVariants}
              className="section-heading mb-3"
            >
              {t('projects.title')}
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="section-subheading mx-auto"
            >
              {t('projects.subtitle')}
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
          
          <motion.div
            ref={projectsRef}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  variants={itemVariants}
                  custom={index}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                variants={itemVariants}
                className="col-span-full text-center py-12"
              >
                <p className="text-neutral-600 dark:text-neutral-400">
                  {t('projects.noProjects')}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;