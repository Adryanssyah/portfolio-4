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
          description: 'Jelajahi dan buat gradasi dengan berbagai kombinasi warna untuk kode Tailwind CSS dan CSS-mu.',
          img: 'hueease',
          link: { live: 'https://hueease.vercel.app', code: 'https://github.com/Adryanssyah/HueEase' },
          tools: ['React', 'Tailwind'],
          archived: false,
     },
     {
          id: 9,
          title: 'TryOutKu',
          description: 'Kumpulan tryout untuk ujian masuk universitas, ujian CPNS, dan seleksi penerimaan ASN.',
          img: 'tryout',
          link: { live: '', code: '' },
          tools: ['Vue', 'Tailwind'],
          archived: true,
     },
     {
          id: 8,
          title: 'Skedumate',
          description: 'Berkolaborasi untuk mengatur jadwal kelompok di berbagai kelas atau angkatan.',
          img: 'skedumate',
          link: { live: 'https://skedumate.vercel.app', code: '' },
          tools: ['Vue', 'Tailwind', 'Express', 'MongoDB'],
          archived: false,
     },
     {
          id: 7,
          title: 'Pertofolio Proyek Kuliah',
          description: 'Portofolio saya selama masa kuliah, dikerjakan secara kolaboratif dengan tim.',
          img: 'team-project',
          link: { live: 'https://bit.ly/project-kami', code: 'https://github.com/Adryanssyah/team-project' },
          tools: ['Vue', 'Tailwind'],
          archived: false,
     },
     {
          id: 6,
          title: 'Match Generator',
          description: 'Temukan kombinasi tim dalam mode 1v1 atau 2v2 untuk semua game yang Anda mainkan.',
          img: 'match-generator',
          link: { live: 'https://bit.ly/Match-Generator', code: 'https://github.com/Adryanssyah/match-generator' },
          tools: ['Vue', 'Tailwind'],
          archived: false,
     },
     {
          id: 5,
          title: 'SIBAMIRA',
          description: 'Aplikasi inventarisasi Barang Milik Negara di Universitas Jambi.',
          img: 'sibamira',
          link: { live: 'https://sibamira.unja.ac.id', code: '' },
          tools: ['Bootstrap', 'jQuery'],
          archived: false,
     },
     {
          id: 4,
          title: 'Positiv Landing Page',
          description: 'Landing page untuk pengunjung pojok statistik di Badan Pusat Statistik Provinsi Jambi.',
          img: 'positiv-landing',
          link: { live: 'https://bpsjambi.id/positiv_jambi/public', code: '' },
          tools: ['HTML', 'CSS'],
          archived: false,
     },
     {
          id: 3,
          title: 'SiPHP',
          description: 'Aplikasi pelaporan harian pegawai di Badan Pusat Statistik Provinsi Jambi.',
          img: 'siphp',
          link: { live: 'https://bpsjambi.id/siphp', code: '' },
          tools: ['Bootstrap', 'jQuery'],
          archived: false,
     },
     {
          id: 2,
          title: 'SIPBetul',
          description: 'Aplikasi pengelolaan berita di Badan Pusat Statistik Provinsi Jambi.',
          img: 'sipbetul',
          link: { live: '', code: '' },
          tools: ['Bootstrap', 'jQuery'],
          archived: true,
     },
     {
          id: 1,
          title: 'BPS Landing Page',
          description: 'Portal aplikasi web yang ada di Badan Pusat Statistik Provinsi Jambi.',
          img: 'bps-landing',
          link: { live: 'https://bpsjambi.id/home', code: '' },
          tools: ['Bootstrap'],
          archived: false,
     },
];
