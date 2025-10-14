import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
<footer className="bg-gray-900 text-gray-300 border-t border-gray-700 shadow-inner mt-auto">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="text-center">
      <p className="text-sm sm:text-base font-medium">
        <span className="block sm:inline text-white font-semibold">
          {t('footer.copyright')}
        </span>
        <span className="hidden sm:inline mx-2 text-gray-500">|</span>
        <span className="inline-flex items-center space-x-1">
          <span>{t('footer.madeWith').split('❤️')[0]}</span>
          <Heart className="w-5 h-5 text-rose-500 animate-pulse fill-rose-500" />
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
            {t('footer.madeWith').split('❤️')[1]}
          </span>
        </span>
      </p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
