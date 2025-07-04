import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, User, MapPin, Layers, PenTool as Tool } from 'lucide-react';

import { projectData, Project } from '../data/projects';

const ProjectDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [project, setProject] = useState<Project | null>(null);
  const [nextProject, setNextProject] = useState<Project | null>(null);
  const [prevProject, setPrevProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  useEffect(() => {
    // Find the current project
    const projectIndex = projectData.findIndex(p => p.id === id);
    
    if (projectIndex === -1) {
      navigate('/projects');
      return;
    }
    
    const currentProject = projectData[projectIndex];
    setProject(currentProject);
    
    // Set the main image as the selected one
    setSelectedImage(currentProject.mainImage);
    
    // Find next and previous projects
    const nextIndex = (projectIndex + 1) % projectData.length;
    const prevIndex = projectIndex === 0 ? projectData.length - 1 : projectIndex - 1;
    
    setNextProject(projectData[nextIndex]);
    setPrevProject(projectData[prevIndex]);
  }, [id, navigate]);
  
  if (!project) {
    return null; // or a loading spinner
  }
  
  return (
    <div className="pt-24">
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="mb-10">
            <Link 
              to="/projects" 
              className="inline-flex items-center text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 mb-6"
            >
              <ArrowLeft size={16} className="mr-2" />
              {t('projects.title')}
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              {project.title}
            </motion.h1>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
              <div className="md:col-span-3">
                <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                  {project.excerpt}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <User size={18} className="text-primary-500 dark:text-primary-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                      {t('projects.details.client')}
                    </h4>
                    <p className="text-neutral-800 dark:text-neutral-200">
                      {project.client}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={18} className="text-primary-500 dark:text-primary-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                      {t('projects.details.date')}
                    </h4>
                    <p className="text-neutral-800 dark:text-neutral-200">
                      {project.date}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin size={18} className="text-primary-500 dark:text-primary-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                      {t('projects.details.location')}
                    </h4>
                    <p className="text-neutral-800 dark:text-neutral-200">
                      {project.location}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Layers size={18} className="text-primary-500 dark:text-primary-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                      {t('projects.details.category')}
                    </h4>
                    <p className="text-neutral-800 dark:text-neutral-200">
                      {t(`projects.filters.${project.category}`)}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Tool size={18} className="text-primary-500 dark:text-primary-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                      {t('projects.details.tools')}
                    </h4>
                    <p className="text-neutral-800 dark:text-neutral-200">
                      {project.tools.map(tool => t(`software.${tool.toLowerCase()}`)).join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-video rounded-xl overflow-hidden mb-4"
            >
              <img 
                src={selectedImage || project.mainImage} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <div className="grid grid-cols-4 gap-4">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`aspect-video rounded-md overflow-hidden border-2 transition-all ${
                    selectedImage === image
                      ? 'border-primary-500 dark:border-primary-400'
                      : 'border-transparent hover:border-neutral-300 dark:hover:border-neutral-700'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-semibold mb-4">
                {t('projects.details.description')}
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                  {project.description}
                </p>
              </div>
              
              <h2 className="text-2xl font-display font-semibold mb-4 mt-10">
                {t('projects.details.challenge')}
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                {project.challenge}
              </p>
              
              <h2 className="text-2xl font-display font-semibold mb-4 mt-10">
                {t('projects.details.solution')}
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300">
                {project.solution}
              </p>
            </div>
            
            <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl">
              <h3 className="text-xl font-display font-semibold mb-6">
                {t('projects.details.gallery')}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {project.images.slice(0, 4).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className="aspect-square rounded-md overflow-hidden"
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} ${index + 1}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-10 border-t border-neutral-200 dark:border-neutral-700">
            {prevProject && (
              <Link 
                to={`/projects/${prevProject.id}`} 
                className="flex items-center group mb-4 sm:mb-0"
              >
                <ArrowLeft size={20} className="mr-2 text-neutral-500 dark:text-neutral-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" />
                <div>
                  <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                    {t('projects.details.previousProject')}
                  </span>
                  <span className="font-medium group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                    {prevProject.title}
                  </span>
                </div>
              </Link>
            )}
            
            {nextProject && (
              <Link 
                to={`/projects/${nextProject.id}`} 
                className="flex items-center group ml-auto"
              >
                <div className="text-right">
                  <span className="block text-sm text-neutral-500 dark:text-neutral-400">
                    {t('projects.details.nextProject')}
                  </span>
                  <span className="font-medium group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                    {nextProject.title}
                  </span>
                </div>
                <ArrowRight size={20} className="ml-2 text-neutral-500 dark:text-neutral-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" />
              </Link>
            )}
          </div>
        </div>
      </section>
      
      {/* Lightbox for images */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </button>
            <img 
              src={selectedImage} 
              alt={project.title} 
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Import the X icon
import { X } from 'lucide-react';

export default ProjectDetail;