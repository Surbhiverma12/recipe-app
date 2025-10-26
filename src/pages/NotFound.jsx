import { Link } from 'react-router-dom';
import { Home, Frown } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <Frown className="w-20 h-20 sm:w-24 sm:h-24 text-primary mx-auto mb-6 animate-float" />
        <h1 className="mb-6 gradient-text">404</h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8">Oops! Page not found</p>
        <Link to="/" className="btn-primary inline-flex items-center space-x-2">
          <Home className="w-5 h-5" />
          <span>Return to Home</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
