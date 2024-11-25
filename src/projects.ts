export interface Project {
  name: string;
  date: string;
  description: string;
  category: 'Hardware' | 'Software';
  href: string;
}

export const projects: Project[] = [
  { name: 'NeuroFlex', date: '2024', description: 'A modular, easy-to-produce, electromyographic prosthetic arm', category: 'Hardware', href: 'https://www.google.com' },
  { name: 'Isotope Retrofit', date: '2023', description: 'Retrofitting a CANDU isotope production sytem to a interface with a PWR', category: 'Hardware' , href: 'https://www.google.com'},
  { name: 'SketchMate', date: '2023', description: 'A drawing robot', category: 'Hardware' , href: 'https://www.google.com'},
  { name: 'Bruce Power Refurb', date: '2024', description: 'Bruce Power Unit 3 item replacement', category: 'Hardware' , href: 'https://www.google.com'},
  { name: 'EMG Sensor', date: '2024', description: 'Low-cost custom electromyographic sensor', category: 'Hardware' , href: 'https://www.google.com'},
  { name: 'Inventory', date: '2023', description: 'Inventory management system for spare nuclear materials', category: 'Software' ,href: 'https://www.google.com'},
  { name: 'Target Counting', date: '2023', description: 'Automated Ytterbium-176 capsule counting algorithm.', category: 'Software', href: 'https://www.google.com' },
  { name: 'GlobalReach', date: '2024', description: 'Real-time targeted ad overlay. Allowing for targeted ad placement from establishements.', category: 'Software',href: 'https://www.google.com' },
  { name: 'Biolerts Medical Search Engine', date: '2023', description: 'Webapp that allows a user to enter a medical query and receive a set of results', category: 'Software' , href: 'https://www.google.com'},
  { name: 'Terminal', date: '2023', description: 'Small webapp to mimic a linux terminal', category: 'Software' , href: 'https://www.google.com'},
  { name: 'Site++', date: '2024', description: 'This website!', category: 'Software', href: 'https://www.google.com' },
  {name: 'Bottom Mounted ARB', date: '2023', description: 'R&D for a bottom-mounted Anti-Roll Bar', category: 'Hardware', href: 'https://www.google.com'},
  {name: 'Cadillac Lyriq Jig', date: '2023', description: 'Subframe jig to assemble a custom front subframe for the 2024 Cadillac Lyriq', category: 'Hardware', href: 'https://www.google.com'},
  {name: 'Lidar Mount', date: '2023', description: 'Ouster OS2 lidar mount for a 2024 Cadillac Lyriq', category: 'Hardware', href: 'https://www.google.com'},
];