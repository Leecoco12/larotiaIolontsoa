import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24">
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-primary-500 dark:text-primary-400 mb-4">404</h1>
          <h2 className="text-4xl font-display font-bold mb-4">
            {t('notFound.title')}
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto">
            {t('notFound.description')}
          </p>
          <Link to="/" className="btn-primary">
            <ArrowLeft size={16} className="mr-2" />
            {t('notFound.button')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;