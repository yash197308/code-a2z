import { post } from "../../infra/rest";

interface FilterPaginationDataParams {
  create_new_arr?: boolean;
  state: any;
  data: any;
  page: number;
  countRoute: string;
  data_to_send?: any;
};

export const filterPaginationData = async ({
  create_new_arr = false,
  state,
  data,
  page,
  countRoute,
  data_to_send = {},
}: FilterPaginationDataParams) => {
  let obj;

  if (state !== null && !create_new_arr) {
    obj = { ...state, results: [...state.results, ...data], page: page };
  } else {
    const response = await post(
      countRoute,
      true,
      data_to_send,
    );
    if (response.status === 200) {
      const data = await response.json();
      obj = { results: data, page: 1, totalDocs: data.totalDocs };
    } else {
      console.error(response);
    }
  }

  return obj;
};
