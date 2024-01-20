import { ModeToggle } from '@/components/mode-toggle';
import MenuList from './MenuList';

function DesktopNavigation({ children }: { children: React.ReactNode }) {
     return <>{children}</>;
}

function Left() {
     return (
          <div className="relative col-span-1 hidden lg:block">
               <div className="fixed h-full flex flex-col justify-center items-center gap-5">
                    <MenuList isMobile={false} />
               </div>
          </div>
     );
}

function Right() {
     return (
          <div className="relative col-span-1 hidden lg:block">
               <div className="fixed h-full flex flex-col justify-center items-center gap-5">
                    <ModeToggle />
               </div>
          </div>
     );
}

DesktopNavigation.Left = Left;
DesktopNavigation.Right = Right;

export default DesktopNavigation;
