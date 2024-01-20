import ProjectPageLayout from '@/components/layouts/ProjectPageLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, Github } from 'lucide-react';
import { projectList } from '@/data/project';

function ProjectsPage() {
     return (
          <ProjectPageLayout title="My Projects">
               {projectList.map((item) => (
                    <Card key={item.id}>
                         <CardContent>
                              <div className="w-full aspect-video overflow-hidden rounded-lg bg-muted">
                                   <img className="w-full" src={`images/${item.img}.webp`} alt={item.title} />
                              </div>
                         </CardContent>
                         <CardHeader>
                              <CardTitle>{item.title}</CardTitle>
                              <div className="flex items-center justify-end gap-1">
                                   {item.link.code && (
                                        <Button variant="link" className="p-1.5" asChild>
                                             <a href={item.link.code} target="_blank" aria-label="Github code">
                                                  <Github className="w-4 h-4" />
                                             </a>
                                        </Button>
                                   )}
                                   {item.link.live && (
                                        <Button variant="link" className="p-1.5" asChild>
                                             <a href={item.link.live} target="_blank" aria-label="Live preview">
                                                  <ArrowUpRight className="w-4 h-4" />
                                             </a>
                                        </Button>
                                   )}
                                   {item.archived && (
                                        <Badge className="my-1.5" variant="secondary">
                                             Archived
                                        </Badge>
                                   )}
                              </div>
                         </CardHeader>
                         <CardDescription>{item.description}</CardDescription>
                         <CardFooter>
                              {item.tools.map((tool) => (
                                   <Badge key={tool} variant="outline">
                                        {tool}
                                   </Badge>
                              ))}
                         </CardFooter>
                    </Card>
               ))}
          </ProjectPageLayout>
     );
}

export default ProjectsPage;
