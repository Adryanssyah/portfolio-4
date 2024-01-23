import { Laptop2, Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useTheme } from '@/components/theme-provider';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

export function ModeToggle({ variant = 'secondary' }: any) {
     const { theme, setTheme } = useTheme();

     return (
          <DropdownMenu>
               <TooltipProvider>
                    <Tooltip delayDuration={0}>
                         <TooltipTrigger asChild>
                              <DropdownMenuTrigger asChild>
                                   <Button variant={variant} size="icon">
                                        {theme === 'dark' ? <Moon className="h-4 w-4" /> : theme === 'light' ? <Sun className="h-4 w-4" /> : <Laptop2 className="h-4 w-4" />}
                                        <span className="sr-only">Toggle theme</span>
                                   </Button>
                              </DropdownMenuTrigger>
                         </TooltipTrigger>
                         <TooltipContent side="bottom">
                              <p>Toggle theme</p>
                         </TooltipContent>
                    </Tooltip>
               </TooltipProvider>

               <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme('light')}>
                         <Sun className="h-4 w-4 mr-2" />
                         Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')}>
                         <Moon className="h-4 w-4 mr-2" />
                         Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('system')}>
                         <Laptop2 className="h-4 w-4 mr-2" />
                         System
                    </DropdownMenuItem>
               </DropdownMenuContent>
          </DropdownMenu>
     );
}
