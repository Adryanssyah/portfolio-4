import { Button } from '@/components/ui/button';
import { GanttChart, Home, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function MenuList({ isMobile = false }: { isMobile: boolean }) {
     return (
          <>
               <NavLink to="/">
                    {({ isActive }) => (
                         <Button size={isMobile ? 'lg' : 'sm'} variant={isActive ? 'secondary' : 'ghost'}>
                              <Home className="w-4 h-4 mr-2" /> Home
                         </Button>
                    )}
               </NavLink>
               <NavLink to="/projects">
                    {({ isActive }) => (
                         <Button size={isMobile ? 'lg' : 'sm'} variant={isActive ? 'secondary' : 'ghost'}>
                              <GanttChart className="w-4 h-4 mr-2" /> Projects
                         </Button>
                    )}
               </NavLink>

               <NavLink to="/contact">
                    {({ isActive }) => (
                         <Button size={isMobile ? 'lg' : 'sm'} variant={isActive ? 'secondary' : 'ghost'}>
                              <Mail className="w-4 h-4 mr-2" /> Contacts
                         </Button>
                    )}
               </NavLink>
          </>
     );
}
