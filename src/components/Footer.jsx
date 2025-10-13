import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="glass-effect border-t border-border/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="text-center text-muted-foreground">
          <p className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 text-sm sm:text-base">
            <span className="font-semibold">{t('footer.copyright')}</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center space-x-2">
              <span>{t('footer.madeWith').split('❤️')[0]}</span>
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-primary animate-glow" />
              <span className="gradient-text font-semibold">{t('footer.madeWith').split('❤️')[1]}</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
