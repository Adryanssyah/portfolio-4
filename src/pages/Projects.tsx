import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github } from 'lucide-react';

function ProjectsPage() {
     const n: number = 4;
     return (
          <div className="w-full col-span-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 lg:px-10 ">
               {[...Array(n)].map((i: number) => (
                    <Card key={i}>
                         <CardContent>
                              <img className="rounded-lg" src="https://adryansportfolio.vercel.app/images/projects/hueease.webp" alt="" />
                         </CardContent>
                         <CardHeader>
                              <CardTitle>HueEase</CardTitle>
                              <div className="flex items-center gap-1">
                                   <Button variant="link">
                                        <Github className="w-4 h-4" />
                                   </Button>
                                   <Badge variant="secondary">Archived</Badge>
                              </div>
                         </CardHeader>
                         <CardDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum temporibus quisquam vel.</CardDescription>
                         <CardFooter>
                              <Badge variant="outline">React</Badge>
                              <Badge variant="outline">Tailwind</Badge>
                         </CardFooter>
                    </Card>
               ))}
          </div>
     );
}

export default ProjectsPage;
