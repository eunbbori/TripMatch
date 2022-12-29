import { createApi } from "@reduxjs/toolkit/query/react";
import { authAxiosBaseQuery, axiosBaseQuery } from "./axiosBaseQuery";
import type { MatchPostType } from "./../type/matchPost";
import type { FreePostType } from "../type/freePost";

export const searchPostApi = createApi({
  reducerPath: "searchPostApi",
  tagTypes: ["SearchPost", "MatchPost", "FreePost"],
  baseQuery: authAxiosBaseQuery({
    baseUrl: "http://34.64.156.80:3003/api/",
  }),
  endpoints: (builder) => ({
    getSearchPost: builder.query<
      { posts: MatchPostType[]; communities: FreePostType[] },
      { keyword: string; email?: string }
    >({
      query: ({ keyword, email }) => ({
        url: `/main/search?keyword=${keyword}${email ? `&email=${email}` : ""}`,
        method: "get",
      }),
      providesTags: (result, error, arg) =>
        result
          ? [
              "SearchPost",
              ...result.posts.map((post) => ({
                type: "SearchPost" as const,
                id: post.postId,
              })),
            ]
          : ["SearchPost"],
    }),
    addLikeSearch: builder.mutation<string, string>({
      query: (postId) => ({
        url: `main/likes/like`,
        method: "post",
        data: {
          postId: postId,
        },
      }),
      invalidatesTags: ["SearchPost"],
    }),
    deleteLikeSearch: builder.mutation<string, string>({
      query: (postId) => ({
        url: `main/likes/like?postId=${postId}`,
        method: "delete",
      }),
      invalidatesTags: ["SearchPost"],
    }),
  }),
});

export const {
  useGetSearchPostQuery,
  useAddLikeSearchMutation,
  useDeleteLikeSearchMutation,
} = searchPostApi;
