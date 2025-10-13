import { useTranslation } from 'react-i18next';
import { Construction, ChefHat, BookOpen, ListOrdered } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const AddRecipe = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: ChefHat,
      text: t('addRecipe.features.addTitle'),
    },
    {
      icon: BookOpen,
      text: t('addRecipe.features.addIngredients'),
    },
    {
      icon: ListOrdered,
      text: t('addRecipe.features.addSteps'),
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-10rem)] px-4 py-8 sm:py-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10 sm:mb-12"
          >
            <h1 className="mb-4 gradient-text">{t('addRecipe.title')}</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="card-recipe text-center py-12 sm:py-16"
          >
            <div className="flex justify-center mb-6">
              <Construction className="w-16 h-16 sm:w-20 sm:h-20 text-primary animate-glow" />
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">
              {t('addRecipe.underConstruction')}
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              {t('addRecipe.features.title')}
            </p>

            <div className="max-w-lg mx-auto space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-5 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10"
                >
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary flex-shrink-0" />
                  <span className="text-left text-sm sm:text-base">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AddRecipe;