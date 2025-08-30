import { post } from "../../../infra/rest"

export const authorizeUser = async (
  serverRoute: string,
  formData: { email: string, password: string, fullname?: string }
) => {
  return post(
    serverRoute,
    false,
    formData,
    false,
  );
};
