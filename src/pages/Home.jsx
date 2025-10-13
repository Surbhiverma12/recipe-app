import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PlusCircle, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Home = () => {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-10 sm:mb-12"
          >
            <h1 className="mb-6 gradient-text leading-tight">
              {t('home.welcome')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {t('home.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/add" className="btn-primary flex items-center space-x-2">
              <PlusCircle className="w-5 h-5" />
              <span>{t('home.addRecipeBtn')}</span>
            </Link>
            <Link to="/recipes" className="btn-secondary flex items-center space-x-2">
              <Eye className="w-5 h-5" />
              <span>{t('home.viewRecipesBtn')}</span>
            </Link>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto"
          >
            {['🍝', '🍛', '🍕', '🥘'].map((emoji, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="card-recipe text-center aspect-square flex items-center justify-center"
              >
                <span className="text-4xl sm:text-5xl md:text-6xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>{emoji}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
