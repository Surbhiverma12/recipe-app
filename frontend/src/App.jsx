import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import AddRecipe from './pages/AddRecipe';
import About from './pages/About';
import NotFound from './pages/NotFound';
import RecipeDetails from "./pages/RecipeDetails";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipes/:id" element={<RecipeDetails />} />
              <Route path="/add" element={<AddRecipe />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </I18nextProvider>
  );
};

export default App;
