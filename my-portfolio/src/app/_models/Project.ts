import { Tag } from './Tag';

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: Tag[];
  githubLink: string;
}
