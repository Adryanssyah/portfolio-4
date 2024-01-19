import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { GanttChart, Home, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function DesktopNavigation({ children }: { children: React.ReactNode }) {
     return <>{children}</>;
}

function Left() {
     return (
          <div className="w-full h-full col-span-1 hidden lg:flex flex-col justify-center items-start gap-5">
               <NavLink to="/">
                    {({ isActive }) => (
                         <Button size={'sm'} variant={isActive ? 'secondary' : 'ghost'}>
                              <Home className="w-4 h-4 mr-2" /> Home
                         </Button>
                    )}
               </NavLink>
               <NavLink to="/projects">
                    {({ isActive }) => (
                         <Button size={'sm'} variant={isActive ? 'secondary' : 'ghost'}>
                              <GanttChart className="w-4 h-4 mr-2" /> Projects
                         </Button>
                    )}
               </NavLink>

               <NavLink to="/contact">
                    {({ isActive }) => (
                         <Button size={'sm'} variant={isActive ? 'secondary' : 'ghost'}>
                              <Mail className="w-4 h-4 mr-2" /> Contacts
                         </Button>
                    )}
               </NavLink>
          </div>
     );
}

function Right() {
     return (
          <div className="w-full h-full col-span-1 hidden lg:flex flex-col justify-center items-end ">
               <ModeToggle />
          </div>
     );
}

DesktopNavigation.Left = Left;
DesktopNavigation.Right = Right;

export default DesktopNavigation;
