import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, UtensilsCrossed } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Recipes = () => {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-10rem)] px-4 py-8 sm:py-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10 sm:mb-12"
          >
            <div className="flex justify-center mb-6">
              <UtensilsCrossed className="w-16 h-16 sm:w-20 sm:h-20 text-primary animate-float" />
            </div>
            <h1 className="mb-4 gradient-text">{t('recipes.title')}</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="card-recipe text-center py-12 sm:py-16"
          >
            <p className="text-xl sm:text-2xl text-muted-foreground mb-2">
              {t('recipes.noRecipes')}
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              {t('recipes.comingSoon')}
            </p>

            <Link
              to="/"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{t('recipes.backToHome')}</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Recipes;
