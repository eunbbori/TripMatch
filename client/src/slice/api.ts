import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { FreePostType } from "../type/freePost";

export const freePostApi = createApi({
  reducerPath: "freePostApi",
  tagTypes: ["FreePost"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500/",
  }),
  endpoints: (builder) => ({
    // 전체 자유게시글을 불러옴
    getAllFreePost: builder.query<FreePostType[], void>({
      query: () => "freePosts",
      providesTags: (result = [], error, arg) =>
        result
          ? [
              "FreePost",
              ...result.map((post) => ({
                type: "FreePost" as const,
                id: post.communityId,
              })),
            ]
          : ["FreePost"],
    }),
    // id에 해당하는 게시글을 불러옴
    getFreePost: builder.query<FreePostType, string | undefined>({
      query: (id) => `freePosts/${id}`,
      providesTags: (result, error, arg) => [{ type: "FreePost", id: arg }],
    }),
    // id에 해당하는 게시글을 업데이트
    updateFreePost: builder.mutation<FreePostType, FreePostType>({
      query: (updatedPost) => ({
        url: `freePosts/${updatedPost.communityId}`,
        method: "PUT",
        body: updatedPost,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "FreePost", id: arg.communityId },
      ],
    }),
    // 게시글 추가
    createFreePost: builder.mutation<FreePostType, FreePostType>({
      query: (newPost) => ({
        url: "freePosts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["FreePost"],
    }),
    // id에 해당하는 게시글 삭제
    deleteFreePost: builder.mutation<FreePostType, string | undefined>({
      query: (id) => ({
        url: `freePosts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FreePost"],
    }),
  }),
});

export const {
  useGetAllFreePostQuery,
  useGetFreePostQuery,
  useCreateFreePostMutation,
  useUpdateFreePostMutation,
  useDeleteFreePostMutation,
} = freePostApi;
