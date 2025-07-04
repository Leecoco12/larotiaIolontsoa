import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold text-primary-600 dark:text-primary-400">
                Larotia
              </span>
            </Link>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              Architecture & BTP
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
              {t('navigation.home')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  {t('navigation.projects')}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
              {t('contact.info.title')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="text-primary-500 dark:text-primary-400 mr-3 mt-0.5" />
                <a
                  href="mailto:contact@larotia.com"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  contact@larotia.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-primary-500 dark:text-primary-400 mr-3 mt-0.5" />
                <a
                  href="tel:0343291526"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  034 32 915 26
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-500 dark:text-primary-400 mr-3 mt-0.5" />
                <span className="text-neutral-600 dark:text-neutral-400">
                  Antananarivo, Madagascar
                </span>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
              {t('skills.title')}
            </h3>
            <ul className="space-y-3">
              <li className="text-neutral-600 dark:text-neutral-400">
                {t('skills.2d')}
              </li>
              <li className="text-neutral-600 dark:text-neutral-400">
                {t('skills.3d')}
              </li>
              <li className="text-neutral-600 dark:text-neutral-400">
                {t('software.archicad')}
              </li>
              <li className="text-neutral-600 dark:text-neutral-400">
                {t('software.revit')}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-600 dark:text-neutral-400 text-sm">
            {t('footer.copyright')}
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm">
            <Link
              to="/"
              className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              {t('footer.privacy')}
            </Link>
            <Link
              to="/"
              className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              {t('footer.terms')}
            </Link>
            <button
              onClick={scrollToTop}
              className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center"
            >
              {t('footer.backToTop')}
              <ArrowUp size={14} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;