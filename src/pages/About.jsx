import { useTranslation } from 'react-i18next';
import { Globe, Users, BookOpen, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Globe,
      title: 'Global Recipes',
      description: 'Discover culinary traditions from around the world',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Share and explore recipes with food lovers everywhere',
    },
    {
      icon: BookOpen,
      title: 'Multi-Language',
      description: 'Access recipes in English, Hindi, and Spanish',
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-10rem)] px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10 sm:mb-12"
          >
            <h1 className="mb-6 gradient-text">{t('about.title')}</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('about.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card-recipe text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10">
                    <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="card-recipe text-center py-8 sm:py-10 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"
          >
            <div className="flex justify-center mb-4">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-primary fill-primary animate-glow" />
            </div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{t('about.credit')}</p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
