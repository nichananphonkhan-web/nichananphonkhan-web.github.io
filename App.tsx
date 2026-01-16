import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FoodPage from './pages/FoodPage';
import ArticlesPage from './pages/ArticlesPage';
import SosPage from './pages/SosPage';
import QuizPage from './pages/QuizPage';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const App: React.FC = () => {
    return (
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/food" element={<FoodPage />} />
                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/sos" element={<SosPage />} />
                <Route path="/test" element={<QuizPage />} />
            </Routes>
        </HashRouter>
    );
};

export default App;