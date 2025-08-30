import { post } from "../../../infra/rest"

export const getAllLatestProjects = async (page: number) => {
  return post(
    `/api/project/getall`,
    false,
    {
      page,
    },
  );
};

export const searchProjectByCategory = async (tag: string, page: number) => {
  return post(
    `/api/project/search`,
    false,
    {
      tag,
      page,
    },
  );
};

export const getTrendingProjects = async () => {
  return post(
    `/api/project/trending`,
    false,
  );
};
