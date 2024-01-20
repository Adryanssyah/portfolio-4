import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { SheetContent, Sheet, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import MenuList from './MenuList';
import { Link } from 'react-router-dom';

function MobileNavigation() {
     return (
          <div className="fixed top-0 left-0 w-full py-4 px-5 flex lg:hidden justify-between items-center z-50 bg-background">
               <Link to="/">
                    <img src="signature.png" alt="logo" className="invert w-10 h-auto" />
               </Link>
               <div className="flex gap-1">
                    <ModeToggle variant="ghost" />
                    <Sheet>
                         <SheetTrigger asChild>
                              <Button variant="ghost" size={'icon'}>
                                   <Menu className="w-4 h-4" />
                              </Button>
                         </SheetTrigger>
                         <SheetContent side="left">
                              <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
                                   <MenuList isMobile={true} />
                              </div>
                         </SheetContent>
                    </Sheet>
               </div>
          </div>
     );
}

export default MobileNavigation;
