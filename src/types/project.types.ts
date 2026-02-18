export interface Project {
  id: string;
  title: string;
  type: string;
  subType: string;
  description: string;
  info: string;
  stack: string[];
  thumbnail: string;
  image: string[];
  liveUrl?: string;
  repoUrl?: string;
  tags: string[];
  isFeatured: boolean;
  status: string;
  startDate?: string;
  endDate?: string;
}