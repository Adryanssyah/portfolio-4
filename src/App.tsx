import { ArrowRight, GanttChart, Home, Mail, Menu } from 'lucide-react';
import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './components/theme-provider';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';

function App() {
     return (
          <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
               <div className='"w-full min-h-screen flex items-center justify-center relative'>
                    <div className="fixed top-0 left-0 w-full py-10 px-5 flex lg:hidden justify-between items-center ">
                         <h1 className="text-xl font-bold">ADR</h1>
                         <div className="flex gap-1">
                              <ModeToggle variant="ghost" />
                              <Button variant="ghost" size={'icon'}>
                                   <Menu className="w-4 h-4" />
                              </Button>
                         </div>
                    </div>
                    <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 p-5 lg:p-12 font-main max-w-[1600px]">
                         <div className="w-full h-full col-span-1 hidden lg:flex flex-col justify-center items-start gap-5">
                              <Button size={'sm'} variant={'secondary'}>
                                   <Home className="w-4 h-4 mr-2" /> Home
                              </Button>
                              <Button size={'sm'} variant={'ghost'}>
                                   <GanttChart className="w-4 h-4 mr-2" /> Projects
                              </Button>
                              <Button size={'sm'} variant={'ghost'}>
                                   <Mail className="w-4 h-4 mr-2" /> Contacts
                              </Button>
                         </div>
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
                         <div className="w-full h-full col-span-1 hidden lg:flex flex-col justify-center items-end ">
                              <ModeToggle />
                         </div>
                    </div>
               </div>
          </ThemeProvider>
     );
}

export default App;
