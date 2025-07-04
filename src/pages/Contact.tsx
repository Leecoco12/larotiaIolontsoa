import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();

  // Form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Loading and feedback states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Animation intersection observers
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    console.log('Form data:', formState); // Debug: Log form data

    try {
      await emailjs.send(
        'service_t7c7pse', // EmailJS Service ID
        'template_s3jlf0b', // EmailJS Template ID
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }
      );
      console.log('Email sent successfully'); // Debug: Confirm success
      setSuccess(t('contact.form.success'));
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      console.error('EmailJS error:', {
        message: err.message,
        text: err.text || 'No additional error info',
        status: err.status,
      });
      setError(t('contact.form.error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-24">
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h1
              variants={itemVariants}
              className="section-heading mb-3"
            >
              {t('contact.title')}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="section-subheading mx-auto"
            >
              {t('contact.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          >
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-8"
            >
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                    >
                      {t('contact.form.name')} *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                    >
                      {t('contact.form.email')} *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder={t('contact.form.emailPlaceholder')}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    {t('contact.form.subject')} *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder={t('contact.form.subjectPlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-y"
                  />
                </div>

                {error && <p className="text-red-500 mb-4">{error}</p>}
                {success && <p className="text-green-500 mb-4">{success}</p>}

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`btn-primary w-full md:w-auto flex items-center justify-center ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? t('contact.form.sending') : t('contact.form.send')}
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </form>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="lg:col-span-1"
            >
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-semibold mb-6">
                  {t('contact.info.title')}
                </h3>

                <ul className="space-y-6">
                  <li className="flex items-start">
                    <Mail size={20} className="text-primary-500 dark:text-primary-400 mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">
                        {t('contact.info.email')}
                      </h4>
                      <a
                        href="mailto:larotiaiolontsoa@gmail.com"
                        className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      >
                        larotiaiolontsoa@gmail.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <Phone size={20} className="text-primary-500 dark:text-primary-400 mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">
                        {t('contact.info.phone')}
                      </h4>
                      <a
                        href="tel:+33123456789"
                        className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      >
                        +261 34 32 915 26
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <MapPin size={20} className="text-primary-500 dark:text-primary-400 mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">
                        {t('contact.info.location')}
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Anosy Avaratra, Antananarivo
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3975.0!2d47.5333!3d-18.8333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDUwJzQ5LjAiTiA0N8KwMzMnMzMnNg!5e0!3m2!1sen!2smg!4v0000000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;