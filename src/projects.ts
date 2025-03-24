export type Project = {
  name: string;
  date: string;
  description: string;
  category: 'Hardware' | 'Software';
  href: string;
  img?: string;
  icon?: string; // Optional icon class name (for Font Awesome or similar)
}

export const projects: Project[] = [
  {
    name:'VDOT probe',
    date: '2025',
    description: '',
    category: 'Hardware',
    href: '',
    img: '',
    icon: ''
  },
  {
    name:'HFSSTC',
    date: '2025',
    description: '',
    category: 'Hardware',
    href: '',
    img: '',
    icon: ''
  },
  {
    name:'Mini Marx Generator',
    date: '2025',
    description: '',
    category: 'Hardware',
    href: '',
    img: '',
    icon: ''
  },
  { 
    name: 'NeuroFlex', 
    date: '2024 - 2025', 
    description: `The cost of prosthetics is kinda insane, could we possibly reduce it using a modular design?


    The product of a redeye flight to banff. A fully modular EMG prosthetic arm`, 
    category: 'Hardware', 
    href: 'https://github.com/J-992/neuroflex',
    img: ''
  },
  {
    name: 'EMG chip',
    date: '2024',
    description: `A custom myoelectric chip for NeuroFlex, endless uses. 
    From mouse-less computer control to controlling a prosthetic arm, the sky's the limit!`,
    category: 'Hardware',
    href: 'https://www.google.com',
    img: '/images/.gif'
  },
  { 
    name: 'Isotope Retrofit', 
    date: '2023', 
    description: `Feasibility study to retrofit CANDU isotope production systems into PWRs. Market reach expansion. Pretty cool, but I can't really legally show many visuals`, 
    category: 'Hardware', 
    href: 'https://www.google.com' ,
    img: '',
    icon: '/list-icons/framatome.png'
  },
  { 
    name: 'SketchMate', 
    date: '2023', 
    description: 'Honestly just a fun project to make a drawing robot.', 
    category: 'Hardware', 
    href: 'https://github.com/J-992/drawing-robot' ,
    img: ''
  },
  { 
    name: 'Bruce Power Refurb', 
    date: '2024', 
    description: 'The next few lines are a whole lotta nuclear jargon. Conducted two permits for Bruce A Unit 3 refurb. Completed an IEE and CIC.', 
    category: 'Hardware', 
    href: 'https://www.google.com' ,
    img: '',
    icon: '/list-icons/brucepower.png'
  },
  { 
    name: 'Inventory Management System', 
    date: '2023', 
    description: 'An inventory software I made during my time at Framatome.', 
    category: 'Software', 
    href: 'https://www.google.com' ,
    icon: '/list-icons/framatome.png'
  },
  { 
    name: 'Target Counting', 
    date: '2023', 
    description: "Yb-177 target counting python algorithms used within Bruce Power's Isotope Production System",
    category: 'Software', 
    href: 'https://www.google.com' ,
    icon: '/list-icons/framatome.png'
  },
  { 
    name: 'GlobalReach', 
    date: '2024', 
    description: 'A failed startup', 
    category: 'Software', 
    href: 'https://www.google.com' ,
    img: ''
  },
  { 
    name: 'Biolerts Medical Search Engine', 
    date: '2023', 
    description: '', 
    category: 'Software', 
    href: 'https://www.google.com' ,
    img: ''
  },
  { 
    name: 'Terminal', 
    date: '2023', 
    description: "Just a cool lil online terminal I made about me. Not really going to update any further than what's on it", 
    category: 'Software', 
    href: 'https://j-992.github.io/terminal/' ,
    img: 'images/terminal.png'
  },
  { 
    name: 'Site++', 
    date: '2024', 
    description: 'This site. React, Typescript, and Tailwind', 
    category: 'Software', 
    href: 'https://www.google.com' ,
    img: ''
  },
  { 
    name: 'Bottom Mounted ARB', 
    date: '2023', 
    description: 'Bottom Mounted Anti-roll bar for the 2024 cadillac lyriq', 
    category: 'Hardware', 
    href: 'https://www.google.com' ,
    img: ''
  },
  { 
    name: 'Cadillac Lyriq Jig', 
    date: '2023', 
    description: 'Rear rubframe jig', 
    category: 'Hardware', 
    href: 'https://www.google.com' ,
    img: ''
  },
  { 
    name: 'Lidar Mount', 
    date: '2023', 
    description: 'Ouster OS2 lidar mount', 
    category: 'Hardware', 
    href: 'https://www.google.com' ,
    img: ''
  }
];