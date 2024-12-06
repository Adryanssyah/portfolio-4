import { Button } from '@/components/ui/button';
import { GanttChart, Home, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function MenuList({ isMobile = false, onClick = () => {} }: { isMobile: boolean; onClick?: () => void }) {
     return (
          <>
               <NavLink to="/" onClick={onClick}>
                    {({ isActive }) => (
                         <Button size={isMobile ? 'lg' : 'sm'} variant={isActive ? 'secondary' : 'ghost'}>
                              <Home className="w-4 h-4 mr-2" /> Home
                         </Button>
                    )}
               </NavLink>
               <NavLink to="/projects" onClick={onClick}>
                    {({ isActive }) => (
                         <Button size={isMobile ? 'lg' : 'sm'} variant={isActive ? 'secondary' : 'ghost'}>
                              <GanttChart className="w-4 h-4 mr-2" /> Projek
                         </Button>
                    )}
               </NavLink>

               <NavLink to="/contact" onClick={onClick}>
                    {({ isActive }) => (
                         <Button size={isMobile ? 'lg' : 'sm'} variant={isActive ? 'secondary' : 'ghost'}>
                              <Mail className="w-4 h-4 mr-2" /> Kontak
                         </Button>
                    )}
               </NavLink>
          </>
     );
}
