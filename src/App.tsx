import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import HomePage from './pages/Home';
import MainLayout from './components/layouts/MainLayout';
import MobileNavigation from './components/fragments/nav/MobileNav';
import DesktopNavigation from './components/fragments/nav/DesktopNav';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';

function App() {
     return (
          <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
               <MobileNavigation />
               <MainLayout>
                    <DesktopNavigation>
                         <DesktopNavigation.Left />
                         <Routes>
                              <Route index path="/" element={<HomePage />} />
                              <Route path="/projects" element={<ProjectsPage />} />
                              <Route path="/contact" element={<ContactPage />} />
                         </Routes>
                         <DesktopNavigation.Right />
                    </DesktopNavigation>
               </MainLayout>
          </ThemeProvider>
     );
}

export default App;
