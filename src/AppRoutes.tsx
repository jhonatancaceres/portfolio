import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import LabPage from './pages/LabPage';
import DocsPage from './pages/DocsPage';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/docs" element={<DocsPage />} />
      <Route path="/lab" element={<LabPage />} />
    </Routes>
  );
};

export default AppRoutes;