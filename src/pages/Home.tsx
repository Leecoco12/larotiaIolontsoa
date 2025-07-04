import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layers, PenTool, Building } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

import ProjectCard from '../components/projects/ProjectCard';
import { projectData } from '../data/projects';

const Home = () => {
  const { t } = useTranslation();
  
  // Animation intersection observers
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  // Featured projects (first 3)
  const featuredProjects = projectData.slice(0, 3);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    },
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/5 dark:from-primary-500/5 dark:via-transparent dark:to-accent-500/10 z-0" 
          aria-hidden="true"
        />
        
        <motion.div 
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="container-custom relative z-10"
        >
          <motion.span 
            variants={itemVariants} 
            className="inline-block mb-4 text-primary-600 dark:text-primary-400 font-medium"
          >
            {t('hero.greeting')}
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-neutral-900 dark:text-white mb-6"
          >
            <span className="text-primary-600 dark:text-primary-400">{t('hero.name')}</span>
            <br />
            {t('hero.title')}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mb-10"
          >
            {t('hero.description')}
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Link to="/projects" className="btn-primary">
              {t('hero.cta')}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-neutral-800">
        <motion.div 
          ref={skillsRef}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="container-custom"
        >
          <motion.h2 
            variants={itemVariants}
            className="section-heading text-center mb-3"
          >
            {t('skills.title')}
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="section-subheading text-center mx-auto mb-16"
          >
            {t('skills.subtitle')}
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              variants={itemVariants}
              className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-xl border border-neutral-200 dark:border-neutral-700 group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <PenTool size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">
                {t('skills.2d')}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                AutoCAD, ArchiCAD
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-xl border border-neutral-200 dark:border-neutral-700 group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">
                {t('skills.3d')}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Revit, Lumion, RobotBat, Ms Project
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-xl border border-neutral-200 dark:border-neutral-700 group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">
                {t('skills.tools')}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Photoshop, Word, Excel
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-xl border border-neutral-200 dark:border-neutral-700 group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">
                {t('skills.sustainable')}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {t('skills.planning')}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <motion.div 
          ref={projectsRef}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="container-custom"
        >
          <motion.h2 
            variants={itemVariants}
            className="section-heading mb-3"
          >
            {t('projects.title')}
          </motion.h2>
          
          <motion.div variants={itemVariants} className="flex justify-between items-end mb-12">
            <p className="section-subheading">
              {t('projects.subtitle')}
            </p>
            <Link to="/projects" className="hidden md:flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline">
              {t('viewProject')}
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                custom={index}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants} 
            className="mt-12 text-center md:hidden"
          >
            <Link to="/projects" className="btn-secondary">
              {t('viewProject')}
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;