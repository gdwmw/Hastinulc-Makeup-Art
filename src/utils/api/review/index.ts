import type { IReviewPayload, IReviewResponse } from "@/src/types";

import { getApi, postApi } from "../base";

const label = "Review";

export const GETReview = async (query?: string): Promise<IReviewResponse[]> => {
  const params = query ? Object.fromEntries(new URLSearchParams(query).entries()) : undefined;
  const response = await getApi<{ data: IReviewResponse[] }>({
    endpoint: "/api/reviews",
    label: label,
    params: params,
  });
  return response.data;
};

export const POSTReview = async (payload: IReviewPayload): Promise<IReviewResponse> => {
  const response = await postApi<{ data: IReviewResponse }>({
    data: { data: payload },
    endpoint: "/api/reviews",
    label: label,
  });
  return response.data;
};
