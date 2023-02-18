export interface INavLink {
  link: string;
  name: string;
}

export type NewsData = {
  id: number;
  title: string;
  short_description: string;
  description: string;
  picture: string;
  thumbnail: string;
  created_at: string;
};

export type Contract = {
  id: number;
  type: string;
  price: string;
};

export type Job = {
  id: number;
  job: string;
  department: number;
};

export type Representative = {
  id: number;
  name: string;
  job: Job;
  time: string;
  picture: string;
  phone: string;
  email: string;
  telegram: string;
};

export type FacultyData = {
  id: number;
  type: string;
  title: string;
  slug: string;
  code: number;
  description: string;
  short_description: string;
  thumbnail: string;
  contract: Contract[];
  representative: Representative[];
  is_active: boolean;
};

export type Media = {
  id: number;
  title: string;
  images: string[];
  date_of_publication: string;
};
