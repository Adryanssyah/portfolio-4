import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
function HomePage() {
     return (
          <div className="w-full h-full col-span-10 flex flex-col justify-center items-center">
               <Badge variant="secondary">🟢 Available</Badge>
               <h1 className="mb-4 font-semibold text-center text-4xl lg:text-5xl mt-10">Hi, I'm Adryan</h1>
               <h2 className="mb-4 font-semibold text-center text-4xl lg:text-5xl bg-gradient-to-br text-transparent bg-clip-text from-orange-600 to-yellow-400 ">Frontend Web Developer.</h2>
               <p className="py-4 opacity-80 font-medium lg:w-1/2 text-sm lg:text-base text-center">As a Junior Front-End Developer, I wield an impressive array of skills in HTML, CSS, JavaScript, Vue, React, Tailwind.</p>
               <div className="flex gap-4 py-6">
                    <Button variant={'secondary'}>Projects</Button>
                    <Button>
                         Contact Me <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
               </div>
          </div>
     );
}

export default HomePage;
