export type Experience = {
  name: string;
  date: string;
  description: string;
  href: string;
  img?: string;
  icon?: string; // Optional icon class name (for Font Awesome or similar)
}

export const experiences: Experience[] = [
  { 
    name: 'Framatome', 
    date: '2023-2024', 
    description: ``, 
    href: 'https://www.framatome.com/en/',
    img: '',
    icon: '/list-icons/framatome.png'
  },
  { 
    name: 'Fuse', 
    date: '2025', 
    description: ``, 
    href: '',
    img: '',
    icon: ''
  },
  
  
];