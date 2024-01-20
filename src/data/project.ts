export interface Project {
     id: number;
     title: string;
     description: string;
     img: string;
     link: { live: string; code: string };
     tools: string[];
     archived: boolean;
}

export const projectList: Project[] = [
     {
          id: 10,
          title: 'HueEase',
          description: 'Explore and create gradients with various color combinations for your Tailwind CSS and CSS code.',
          img: 'hueease',
          link: { live: 'https://hueease.vercel.app', code: 'https://github.com/Adryanssyah/HueEase' },
          tools: ['React', 'Tailwind'],
          archived: false,
     },
     {
          id: 9,
          title: 'TryOutKu',
          description: 'A collection of tryouts for university entrance exams, civil service exams, and civil servant recruitment.',
          img: 'tryout',
          link: { live: '', code: '' },
          tools: ['Vue', 'Tailwind'],
          archived: true,
     },
     {
          id: 8,
          title: 'Skedumate',
          description: 'Collaborating to organize schedules for entire groups across multiple classes or cohorts.',
          img: 'skedumate',
          link: { live: 'https://skedumate.vercel.app', code: '' },
          tools: ['Vue', 'Tailwind', 'Express', 'MongoDB'],
          archived: false,
     },
     {
          id: 7,
          title: 'Team Project Portfolio',
          description: 'My portfolio during the university period, worked on collaboratively with a team.',
          img: 'team-project',
          link: { live: 'https://bit.ly/project-kami', code: 'https://github.com/Adryanssyah/team-project' },
          tools: ['Vue', 'Tailwind'],
          archived: false,
     },
     {
          id: 6,
          title: 'Match Generator',
          description: 'Discover team combinations in 1v1 or 2v2 for all games you play.',
          img: 'match-generator',
          link: { live: 'https://bit.ly/Match-Generator', code: 'https://github.com/Adryanssyah/match-generator' },
          tools: ['Vue', 'Tailwind'],
          archived: false,
     },
     {
          id: 5,
          title: 'SIBAMIRA',
          description: 'State-owned inventory application at the University of Jambi.',
          img: 'sibamira',
          link: { live: 'https://sibamira.unja.ac.id', code: '' },
          tools: ['Bootstrap', 'jQuery'],
          archived: false,
     },
     {
          id: 4,
          title: 'Positiv Landing Page',
          description: 'Landing page for visitors to the statistical corner of the Central Statistics Agency of Jambi Province.',
          img: 'positiv-landing',
          link: { live: 'https://bpsjambi.id/positiv_jambi/public', code: '' },
          tools: ['HTML', 'CSS'],
          archived: false,
     },
     {
          id: 3,
          title: 'SiPHP',
          description: 'Daily employee reporting application at the Central Statistics Agency of Jambi Province.',
          img: 'siphp',
          link: { live: 'https://bpsjambi.id/siphp', code: '' },
          tools: ['Bootstrap', 'jQuery'],
          archived: false,
     },
     {
          id: 2,
          title: 'SIPBetul',
          description: 'News management application at the Central Statistics Agency of Jambi Province.',
          img: 'sipbetul',
          link: { live: '', code: '' },
          tools: ['Bootstrap', 'jQuery'],
          archived: true,
     },
     {
          id: 1,
          title: 'BPS Landing Page',
          description: 'Portal of web applications existing at the Central Statistics Agency of Jambi Province.',
          img: 'bps-landing',
          link: { live: 'https://bpsjambi.id/home', code: '' },
          tools: ['Bootstrap'],
          archived: false,
     },
];
