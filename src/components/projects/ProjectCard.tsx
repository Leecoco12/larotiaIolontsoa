import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.article 
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="card h-full group"
    >
      <Link to={`/projects/${project.id}`} className="block h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={project.mainImage} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <span className="text-white font-medium px-6 py-4 flex items-center">
              {t('projects.viewProject')}
              <ArrowRight size={16} className="ml-2" />
            </span>
          </div>
        </div>
        <div className="p-6">
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2 block">
            {t(`projects.filters.${project.category}`)}
          </span>
          <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 line-clamp-2">
            {project.excerpt}
          </p>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProjectCard;