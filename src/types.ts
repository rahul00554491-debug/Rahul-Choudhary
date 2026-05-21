export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  link: string;
  featured?: boolean;
}

export interface Exhibition {
  id: string;
  title: string;
  location: string;
  date: string;
  ticketsAvailable: boolean;
  ticketLink: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  avatar: string;
}
