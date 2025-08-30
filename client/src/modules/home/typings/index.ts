export interface Project {
  title: string;
  project_id: string;
  author: {
    personal_info: {
      fullname: string;
      username: string;
      profile_img: string;
    };
  };
  activity: {
    total_likes: number;
  };
  tags: string[];
  des: string;
  banner: string;
  publishedAt: string;
}