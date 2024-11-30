export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
  duration: string;
  team: string;
  features: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}

export interface Translation {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    downloadCV: string;
  };
  about: {
    title: string;
    description: string;
    skills: string;
  };
  experience: {
    title: string;
    education: string;
  };
  projects: {
    title: string;
    viewProject: string;
    viewCode: string;
  };
  contact: {
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
  };
}