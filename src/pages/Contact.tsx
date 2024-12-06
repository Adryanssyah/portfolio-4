import OtherPageLayout from '@/components/layouts/OtherPageLayout';
import { Badge } from '@/components/ui/badge';
import SocialIcon from '@/components/ui/social-icon';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

function ContactPage() {
     return (
          <>
               <Helmet>
                    <title>Kontak</title>
                    <meta name="description" content="Get in touch with me in social media or send me an email" />
                    <link rel="canonical" href={`${import.meta.env.VITE_BASE_URL}/contact`} />
               </Helmet>
               <OtherPageLayout>
                    <Badge variant="secondary" className="mb-6">
                         🟢 Tersedia untuk Bekerja
                    </Badge>
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Hubungi Saya</h1>
                    <div className="grid grid-cols-4 gap-4 py-5 place-items-center">
                         <SocialIcon title="Mail" to="mailto:adryansyah434@gmail.com" blank={false}>
                              <Mail className="lg:w-6 lg:h-6 w-4 h-4" />
                         </SocialIcon>
                         <SocialIcon title="LinkedIn" to="https://www.linkedin.com/in/adryansyah24/" blank={true}>
                              <Linkedin className="lg:w-6 lg:h-6 w-4 h-4" />
                         </SocialIcon>
                         <SocialIcon title="Github" to="https://github.com/Adryanssyah" blank={true}>
                              <Github className="lg:w-6 lg:h-6 w-4 h-4" />
                         </SocialIcon>
                         <SocialIcon title="Instagram" to="https://www.instagram.com/_adryans/" blank={true}>
                              <Instagram className="lg:w-6 lg:h-6 w-4 h-4" />
                         </SocialIcon>
                    </div>
               </OtherPageLayout>
          </>
     );
}

export default ContactPage;
