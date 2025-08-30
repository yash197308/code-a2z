export interface User {
  access_token: string | null;
  username?: string;
  name?: string;
  email?: string;
  profile_img?: string;
  fullname?: string;
  role?: number;
  new_notification_available?: boolean;
};

export interface Project {
  activity: {
    total_likes: number;
    total_comments: number;
    total_reads: number;
    total_parent_comments: number;
  };
  project_id: string;
  title: string;
  banner: string;
  des: string;
  tags: string[];
  author: {
    personal_info: {
      fullname: string;
      username: string;
      profile_img: string;
    };
  };
  publishedAt: string;
};

export interface TrendingProject {
  project_id: string;
  title: string;
  author: {
    personal_info: {
      fullname: string;
      username: string;
      profile_img: string;
    };
  };
  publishedAt: string;
};

export interface AllProjectsData {
  results: Project[];
};

export interface Profile {
  personal_info: {
    fullname: string;
    username: string;
    profile_img: string;
    bio: string;
    email?: string;
  };
  account_info: {
    total_posts: number;
    total_reads: number;
  };
  social_links: {
    youtube?: string;
    facebook?: string;
    twitter?: string;
    github?: string;
    instagram?: string;
    website?: string;
  };
  joinedAt: string;
  role?: number;
  _id?: string;
};
