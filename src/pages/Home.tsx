import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import OtherPageLayout from '@/components/layouts/OtherPageLayout';
import { Helmet } from 'react-helmet-async';
function HomePage() {
     return (
          <>
               <Helmet>
                    <title>Adryan - Frontend Web Developer</title>
                    <meta name="description" content="As a Junior Front-End Developer, I wield an impressive array of skills in HTML, CSS, JavaScript, Vue, React, Tailwind." />
                    <link rel="canonical" href={`${import.meta.env.VITE_BASE_URL}`} />
               </Helmet>
               <OtherPageLayout>
                    <Badge variant="secondary" className="mb-6">
                         🟢 Available to work
                    </Badge>
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Hi, I'm Adryan</h1>
                    <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center bg-gradient-to-br text-transparent bg-clip-text from-orange-600 to-yellow-400 ">Frontend Web Developer.</h2>
                    <p className="leading-7 [&:not(:first-child)]:mt-6 lg:w-1/2 text-center">As a Junior Front-End Developer, I wield an impressive array of skills in HTML, CSS, JavaScript, Vue, React, Tailwind.</p>
                    <div className="flex gap-4 py-6">
                         <Button variant={'secondary'} asChild>
                              <Link to={'/projects'}>Projects</Link>
                         </Button>
                         <Button asChild>
                              <Link to={'/contact'}>
                                   Contact Me <ArrowRight className="h-5 w-5 ml-2" />
                              </Link>
                         </Button>
                    </div>
               </OtherPageLayout>
          </>
     );
}

export default HomePage;
