import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import MainLayout from './components/layouts/MainLayout';
import MobileNavigation from './components/fragments/nav/MobileNav';
import DesktopNavigation from './components/fragments/nav/DesktopNav';
import { lazy, Suspense } from 'react';
import Loader from './components/fragments/Loader';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/404Page'));
function App() {
     return (
          <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
               <MobileNavigation />
               <MainLayout>
                    <DesktopNavigation>
                         <DesktopNavigation.Left />
                         <Suspense fallback={<Loader />}>
                              <Routes>
                                   <Route index path="/" element={<Home />} />
                                   <Route path="/projects" element={<Projects />} />
                                   <Route path="/contact" element={<Contact />} />
                                   <Route path="*" element={<NotFound />} />
                              </Routes>
                         </Suspense>
                         <DesktopNavigation.Right />
                    </DesktopNavigation>
               </MainLayout>
          </ThemeProvider>
     );
}

export default App;
