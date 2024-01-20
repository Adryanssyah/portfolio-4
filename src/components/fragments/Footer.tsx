import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
function Footer() {
     return (
          <div className="w-full absolute bottom-0 left-0 text-center text-sm text-muted-foreground py-10 flex items-center justify-center gap-2">
               <p>2024 © Adryansyah • </p>
               <div className="flex items-center justify-center space-x-2 h-3 my-2.5">
                    <Button variant="link" className="p-0" size={'sm'} asChild>
                         <a href="https://v1.adryanssyah.vercel.app/" className="text-muted-foreground">
                              v1 <ArrowUpRight className="w-3 h-3" />
                         </a>
                    </Button>
                    <Button variant="link" className="p-0" size={'sm'} asChild>
                         <a href="https://v2.adryanssyah.vercel.app/" className="text-muted-foreground">
                              v2 <ArrowUpRight className="w-3 h-3" />
                         </a>
                    </Button>
               </div>
          </div>
     );
}
export default Footer;
