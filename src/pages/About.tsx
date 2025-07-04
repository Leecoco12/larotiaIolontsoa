import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { t } = useTranslation();
  
  // Animation intersection observers
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [bioRef, bioInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [educationRef, educationInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [philosophyRef, philosophyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
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

  //const profileImage = "https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div className="pt-24">
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h1 
              variants={itemVariants}
              className="section-heading mb-3"
            >
              {t('about.title')}
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="section-subheading mx-auto"
            >
              {t('about.subtitle')}
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              ref={bioRef}
              initial="hidden"
              animate={bioInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl font-display font-semibold mb-6"
              >
                {t('about.bio.title')}
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-neutral-700 dark:text-neutral-300 mb-4"
              >
                {t('about.bio.p1')}
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-neutral-700 dark:text-neutral-300 mb-4"
              >
                {t('about.bio.p2')}
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-neutral-700 dark:text-neutral-300"
              >
                {t('about.bio.p3')}
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Larotia" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-8 right-8 bg-white dark:bg-neutral-800 px-8 py-6 rounded-xl shadow-xl">
                <h3 className="font-display font-bold text-2xl mb-1">Larotia</h3>
                <p className="text-primary-600 dark:text-primary-400">
                  {t('hero.title')}
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              ref={educationRef}
              initial="hidden"
              animate={educationInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="bg-neutral-50 dark:bg-neutral-800 p-10 rounded-xl"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl font-display font-semibold mb-8"
              >
                {t('about.education.title')}
              </motion.h2>
              
              <div className="space-y-8">
                <motion.div 
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-primary-500 dark:border-primary-400"
                >
                  <span className="absolute left-[-8px] top-0 w-4 h-4 bg-primary-500 dark:bg-primary-400 rounded-full"></span>
                  <h3 className="font-semibold text-xl mb-1">
                    {t('about.education.current')}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Institut Superieur Polytechnique de Madagascar
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-neutral-300 dark:border-neutral-600"
                >
                  <span className="absolute left-[-8px] top-0 w-4 h-4 bg-neutral-300 dark:bg-neutral-600 rounded-full"></span>
                  <h3 className="font-semibold text-xl mb-1">
                    {t('about.education.master1')}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Institut Superieur Polytechnique de Madagascar
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-neutral-300 dark:border-neutral-600"
                >
                  <span className="absolute left-[-8px] top-0 w-4 h-4 bg-neutral-300 dark:bg-neutral-600 rounded-full"></span>
                  <h3 className="font-semibold text-xl mb-1">
                    {t('about.education.bachelor')}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Institut Superieur Polytechnique de Madagascar
                  </p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              ref={philosophyRef}
              initial="hidden"
              animate={philosophyInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-3xl font-display font-semibold mb-6"
              >
                {t('about.philosophy.title')}
              </motion.h2>
              
              <motion.div 
                variants={itemVariants}
                className="relative"
              >
                <blockquote className="text-xl text-neutral-700 dark:text-neutral-300 italic pl-6 border-l-4 border-primary-500 dark:border-primary-400">
                  {t('about.philosophy.text')}
                </blockquote>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                {/* <div className="aspect-video rounded-xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/8092507/pexels-photo-8092507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Architecture sketch" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6035529/pexels-photo-6035529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Building model" 
                    className="w-full h-full object-cover"
                  />
                </div> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;