import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

function MobileNavigation() {
     return (
          <div className="fixed top-0 left-0 w-full py-10 px-5 flex lg:hidden justify-between items-center ">
               <h1 className="text-xl font-bold">ADR</h1>
               <div className="flex gap-1">
                    <ModeToggle variant="ghost" />
                    <Button variant="ghost" size={'icon'}>
                         <Menu className="w-4 h-4" />
                    </Button>
               </div>
          </div>
     );
}

export default MobileNavigation;
