import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';

function SocialIcon({ children, to = '', title = 'Social Media', blank = false }: { children: React.ReactNode; to: string; title: string; blank: boolean }) {
     return (
          <TooltipProvider>
               <Tooltip>
                    <TooltipTrigger asChild>
                         <a href={to} target={blank ? '_blank' : '_self'} className="p-3 bg-accent rounded cursor-pointer hover:bg-opacity-25">
                              {children}
                         </a>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                         <p>{title}</p>
                    </TooltipContent>
               </Tooltip>
          </TooltipProvider>
     );
}

export default SocialIcon;
