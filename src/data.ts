import { Project, Exhibition, Testimonial } from './types';

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Echoes of Silence',
    category: 'Film',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop',
    link: '#',
    featured: true
  },
  {
    id: 'p2',
    title: 'Minimalist Curves',
    category: 'Architecture',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    link: '#',
    featured: true
  },
  {
    id: 'p3',
    title: 'Golden Flora',
    category: 'Visual Poetry',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop',
    link: '#',
    featured: true
  },
  {
    id: 'p4',
    title: 'Retro Motion',
    category: 'Experimental',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
    link: '#',
    featured: false
  },
  {
    id: 'p5',
    title: 'Tokyo Rainscape',
    category: 'Street',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop',
    link: '#',
    featured: false
  },
  {
    id: 'p6',
    title: 'Abstract Balance',
    category: 'Fine Art',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    link: '#',
    featured: false
  }
];

export const exhibitions: Exhibition[] = [
  {
    id: 'e1',
    title: 'Sala Canal Show',
    location: 'Madrid, Spain',
    date: '22 Nov 2023',
    ticketsAvailable: true,
    ticketLink: '#'
  },
  {
    id: 'e2',
    title: 'Madrid Gallery exhibition',
    location: 'Madrid Gallery, Spain',
    date: '21 Nov 2023',
    ticketsAvailable: true,
    ticketLink: '#'
  },
  {
    id: 'e3',
    title: 'Manchester Museum display',
    location: 'Manchester Museum, UK',
    date: '20 Nov 2023',
    ticketsAvailable: true,
    ticketLink: '#'
  },
  {
    id: 'e4',
    title: 'Pompidou Modern Showcase',
    location: 'Centre Pompidou, Paris, France',
    date: '15 Dec 2023',
    ticketsAvailable: true,
    ticketLink: '#'
  },
  {
    id: 'e5',
    title: 'Tate Modern Videography',
    location: 'Tate Modern, London, UK',
    date: '10 Jan 2024',
    ticketsAvailable: false,
    ticketLink: '#'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    text: 'Working with this director transformed our brand perception. Truly a visual poet who captures emotions.',
    author: 'Elena Rostova',
    role: 'Creative Director, VOGUE',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't2',
    text: 'A flawless eye for lighting, geometries, and timing. The exhibitions are immersive and memorable.',
    author: 'Marcus Vance',
    role: 'Curator, Tate Modern',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  }
];
