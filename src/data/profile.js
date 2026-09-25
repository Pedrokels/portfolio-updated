// Single source of truth for all portfolio content.
// Components render from here — edit copy in this file, not in templates.

import portrait from '../assets/images/peter.jpg'
import portraitCreator from '../assets/images/peter_video.jpg'

import reel01 from '../assets/images/reels/28146508114942420.jpg'
import reel02 from '../assets/images/reels/1005962205537589.jpg'
import reel03 from '../assets/images/reels/28235481439474379.jpg'
import reel04 from '../assets/images/reels/1021135663890266.jpg'
import reel05 from '../assets/images/reels/1611058137110617.jpg'
import reel06 from '../assets/images/reels/2104513353835841.jpg'

import nutritionMain from '../assets/images/projects/nutritiondatainaclick/main_page.jpg'
import nutritionPrediction from '../assets/images/projects/nutritiondatainaclick/prediction_module.jpg'
import bimsLogin from '../assets/images/projects/bims/bimslogin.jpg'
import bimsDashboard from '../assets/images/projects/bims/bims.png'
import dvsLogin from '../assets/images/projects/dvs/dvslogin.png'
import edcsListings from '../assets/images/projects/edcsbiochem/dashboard.png'
import helpdeskRequest from '../assets/images/projects/helpdesk/ithelpdesk.png'
import helpdeskAdmin from '../assets/images/projects/ithelpdesk/itadmin.png'

export const site = {
  name: 'Peter John Gerero',
  alias: 'Pedro Juan',
  url: 'https://peterjohngerero.vercel.app/',
  role: 'Full Stack Developer',
  location: 'Taguig, Metro Manila — Philippines',
  email: 'peterjohngerero@gmail.com',
  // 0995 728 4706 (PH mobile) in international format, as wa.me expects.
  whatsapp: 'https://wa.me/639957284706'
}

export const developer = {
  portrait,
  // Source of truth for this section: public/resume/peter-john-gerero-full-stack-developer.pdf
  resumeUrl: '/resume/peter-john-gerero-full-stack-developer.pdf',
  headline: 'Full stack developer building dependable web systems.',
  intro:
    'Now freelancing remotely for a US-based client, after four years of building information systems for the Philippine government — from Laravel back ends to GIS dashboards and machine-learning APIs.',
  focus: ['Laravel', 'Livewire', 'PHP', 'Python', 'JavaScript'],

  about: [
    'I’m a full stack developer with over four years of professional experience designing, building, and maintaining enterprise web applications for the Philippine government, mostly in Laravel, Livewire, PHP, JavaScript, MySQL, and Python.',
    'My systems supported researchers, nutrition experts, and administrative staff. Along the way I built REST APIs that connected multiple systems, trained and deployed machine-learning models, built dashboards for researchers, and automated repetitive work.',
    'Today I freelance for a US-based client, and I’m open to remote Software Engineer, Backend Developer, or Full Stack Laravel Developer roles.'
  ],

  facts: [
    { label: 'Experience', value: '4+ years' },
    { label: 'Currently', value: 'Freelance · Remote' },
    { label: 'Based in', value: 'Taguig, Metro Manila' },
    { label: 'Education', value: 'BS Information Technology' }
  ],

  stack: [
    { group: 'Languages', items: ['PHP', 'Python', 'JavaScript', 'HTML', 'CSS'] },
    { group: 'Backend', items: ['Laravel', 'Livewire', 'REST APIs', 'FastAPI', 'Flask'] },
    { group: 'Frontend', items: ['Livewire', 'Alpine.js', 'Vue', 'Bootstrap', 'Tailwind CSS'] },
    { group: 'Databases', items: ['MySQL', 'SQLite'] },
    { group: 'Machine learning', items: ['scikit-learn', 'XGBoost', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
    { group: 'GIS & Mapping', items: ['Mapbox GL JS', 'deck.gl', 'PostGIS', 'GeoJSON', 'Spatial visualisation'] },
    { group: 'Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Google Cloud', 'Jupyter', 'PyCharm'] }
  ],

  // Featured projects, in résumé order. Tags are the stacks listed on the résumé.
  projects: [
    {
      slug: 'paligid',
      name: 'PALIGID Mapping System',
      kind: 'GIS & analytics dashboard',
      summary:
        'A web-based GIS and analytics dashboard for visualising the Philippine food supply chain across regions.',
      detail:
        'I developed core features: interactive geospatial layers with Mapbox GL JS and deck.gl, spatial data in PostGIS, and Laravel modules serving map layers, regional analytics, and food-system indicators. The project was still in active development when my employment ended.',
      role: 'Contributor',
      tags: ['Laravel', 'Livewire', 'PHP', 'MySQL', 'Mapbox GL JS', 'deck.gl', 'PostGIS'],
      images: []
    },
    {
      slug: 'dvs',
      name: 'Data Validation System',
      kind: 'Research data platform',
      summary: 'A validation platform for researchers that automates data validation.',
      detail:
        'Integrates multiple nutrition information systems through REST APIs, so data is checked in one place.',
      tags: ['PHP', 'Laravel', 'Livewire', 'JavaScript', 'Bootstrap', 'MySQL'],
      images: [{ src: dvsLogin, alt: 'Data Validation System sign-in screen' }]
    },
    {
      slug: 'enutrition',
      name: 'eNutrition Data Analytics',
      kind: 'Machine learning & analytics',
      summary:
        'An end-to-end machine-learning solution for nutrition data, from raw datasets to prediction APIs.',
      detail:
        'I cleaned the datasets, trained and evaluated multiple classification models, and deployed prediction APIs for integration into web applications.',
      tags: ['Python', 'scikit-learn', 'Flask', 'FastAPI'],
      images: [
        { src: nutritionMain, alt: 'eNutrition Data Analytics home screen listing analytics, assessment, prediction, and dashboard modules' },
        { src: nutritionPrediction, alt: 'eNutrition prediction module screen' }
      ]
    },
    {
      slug: 'helpdesk',
      name: 'IT Help Desk & Support Portal',
      kind: 'Internal service desk',
      summary:
        'An internal ticket management system for technical support requests, issue tracking, and scheduling.',
      detail:
        'Staff submit and follow up on requests in one place; the IT team manages them from an admin view.',
      tags: ['Laravel', 'Livewire', 'MySQL'],
      images: [
        { src: helpdeskRequest, alt: 'IT help desk request form' },
        { src: helpdeskAdmin, alt: 'IT help desk administrator view' }
      ]
    },
    {
      slug: 'edcs',
      name: 'Electronic Data Collection System — Biochemistry',
      kind: 'Data collection module',
      summary:
        'A module that streamlines authentication and data consolidation for biochemistry data.',
      detail:
        'It integrates records from the Anthropometry collection system and consolidates them into the Biochemistry system for analysis and reporting.',
      tags: ['PHP', 'Laravel', 'Livewire', 'JavaScript', 'Tailwind CSS', 'MySQL'],
      images: [{ src: edcsListings, alt: 'EDCS Biochemistry listings table with consolidation, transmit, and backup navigation' }]
    },
    {
      slug: 'bims',
      name: 'Barangay e-Services & ID System',
      kind: 'Local government platform',
      summary:
        'A full-stack application for resident records, official records, blotters, and complaints.',
      detail:
        'Generates certificates and clearances dynamically, and issues digital IDs with camera capture and e-signature support.',
      tags: ['PHP', 'Laravel', 'Livewire', 'JavaScript', 'Bootstrap', 'MySQL'],
      images: [
        { src: bimsDashboard, alt: 'Barangay e-Services dashboard' },
        { src: bimsLogin, alt: 'Barangay e-Services sign-in screen' }
      ]
    }
  ],

  projectsNote: 'Also on the résumé: a Computerized Payroll System (Python, SQLite, PyQt5). Some private projects aren’t included here.',

  experience: [
    {
      period: '2026 — Present',
      role: 'Freelance Full Stack Developer',
      org: 'Freelance · Remote · US-based Client',
      description:
        'Building and maintaining web applications, internal systems, and digital solutions using modern full-stack technologies.'
    },
    {
      period: 'Feb 2022 — Jun 2026',
      role: 'Project Technical Specialist II',
      org: 'DOST – Food and Nutrition Research Institute',
      note: 'Promoted from Project Technical Assistant I, III, and IV.',
      description:
        'Designed, built, and maintained Laravel and Livewire applications for government information systems; built REST APIs connecting anthropometric, biochemical, and dietary systems; trained models with scikit-learn and XGBoost and served them through Flask and FastAPI; and built dashboards that helped researchers interpret project data.'
    },
    {
      period: 'Dec 2019 — Jun 2020',
      role: 'Sales Associate',
      org: 'Sutherland Global Services',
      description: 'Voice customer support, product inquiries, and order processing.'
    },
    {
      period: 'Jan — Mar 2019',
      role: 'Technical Support',
      org: 'Provincial Human Resource Management Office',
      description:
        'Developed a computerized payroll system in Python and maintained the office’s computers, printers, and network devices.'
    }
  ],

  education: {
    period: '2016 — 2019',
    degree: 'BS Information Technology',
    school: 'Sorsogon State College — Bulan Campus'
  }
}

export const creator = {
  portrait: portraitCreator,
  // Video Editor résumé — separate from the developer one above.
  resumeUrl: '/resume/peter-john-gerero-video-editor.pdf',
  role: 'Video Editor & Content Creator',
  headline: 'Nature and adventure stories, cut for short form.',
  intro:
    'I turn travel, landscapes, and the quiet in-between moments into reels and edits that make people feel something.',
  facts: [
    { label: 'Editing', value: '3 years' },
    { label: 'Videos edited', value: '400+' },
    { label: 'Projects', value: '30+' }
  ],
  about: [
    'I’m a nature and adventure content creator based in the Philippines, telling stories through short-form reels and edits. Editing is where I get to be creative and productive at once — it keeps me grounded and lets me share the places and stories that matter to me.',
    'I’m looking for video editing work, especially travel, nature, and short-form storytelling. Open to freelance projects and collaborations.'
  ],
  tools: [
    { group: 'Editing', items: ['CapCut', 'Adobe Premiere Pro', 'DaVinci Resolve', 'Filmora', 'Canva Video'] },
    { group: 'Gear', items: ['DJI Osmo 360', 'DJI Osmo Action 5 Pro', 'DJI Osmo Gimbal', 'DJI Mic Mini 2', 'iPhone 13 Pro', 'HP Victus 15', 'Tripod'] }
  ],
  // From public/resume/peter-john-gerero-video-editor.pdf, plus the current freelance role.
  experience: [
    {
      period: '2026 — Present',
      role: 'Freelance Social Media Video Editor',
      org: 'Freelance · Remote · US-based Client',
      description:
        'Creating short-form video content for social media, from editing and motion graphics to platform-ready content for brand and personal channels.'
    },
    {
      period: 'Ongoing',
      role: 'Travel Video Editor',
      org: 'Personal travel channels & reels',
      description:
        'Short-form reels and YouTube Shorts plus full-length travel vlogs — visual hooks in the first three seconds, dynamic captions, sound design, and clean pacing.'
    },
    {
      period: 'Feb 2022 — Jun 2026',
      role: 'Project Technical Specialist II',
      org: 'DOST – Food and Nutrition Research Institute',
      description:
        'Produced and edited promotional, training, and event videos for official institutional activities, and handled photography and multimedia setup for events.'
    }
  ],
  testimonial: {
    quote: 'Quality content and nice editing skills.',
    author: 'Rovert Joshua',
    source: 'Facebook recommendation'
  },
  reelsUrl: 'https://www.facebook.com/pedrojuanders/reels',
  // `poster` is the reel's own Facebook thumbnail, saved locally (Facebook's CDN links expire).
  // `embeddable: false` — Facebook's plugin refuses these two with "This video can't be embedded
  // because it may contain content owned by someone else" (usually licensed music). They render as
  // a poster that links out. Re-uploading without the claimed audio is the only way to embed them.
  reels: [
    { url: 'https://www.facebook.com/reel/28146508114942420/', poster: reel01, views: '1.2M', reactions: '31K', shares: '2.8K', featured: true },
    { url: 'https://www.facebook.com/reel/1005962205537589/', poster: reel02, views: '171K', reactions: '6.4K', shares: '627' },
    { url: 'https://www.facebook.com/reel/28235481439474379/', poster: reel03, views: '81K', reactions: '1.3K', shares: '290', embeddable: false },
    { url: 'https://www.facebook.com/reel/1021135663890266/', poster: reel04, views: '67K', reactions: '2.2K', shares: '455' },
    { url: 'https://www.facebook.com/reel/1611058137110617/', poster: reel05, views: '30K', reactions: '1.4K', shares: null },
    { url: 'https://www.facebook.com/reel/2104513353835841/', poster: reel06, views: null, reactions: null, shares: null, embeddable: false }
  ],
  youtubeUrl: 'https://www.youtube.com/@pedrojuanders',
  videos: [
    { id: 'HQa13rHWgcQ', title: 'Adventure video — YouTube' },
    { id: 'f6DFGTkRf-M', start: 1010, title: 'Adventure video — YouTube' }
  ]
}

export const socials = {
  developer: [
    { label: 'GitHub', href: 'https://github.com/Pedrokels' },
    { label: 'Facebook', href: 'https://www.facebook.com/ptrpan.PTRPAN/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@zedd.code' }
  ],
  // Travel pages as listed on the video editor résumé.
  creator: [
    { label: 'Facebook', href: 'https://www.facebook.com/pedrojuanders/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@pedrojuanders' },
    { label: 'Instagram', href: 'https://www.instagram.com/pedrojuanders' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@pedrokels_2629' }
  ]
}
