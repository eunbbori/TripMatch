import { createApi } from "@reduxjs/toolkit/query/react";
import type { MatchPostType } from "./../type/matchPost";
import { axiosBaseQuery } from "./axiosBaseQuery";

export const matchPostApi = createApi({
  reducerPath: "matchPostApi",
  tagTypes: ["MatchPost"],
  baseQuery: axiosBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    // 전체 자유게시글을 불러옴
    // query params 로 page, region을 보냄
    // 예시 : useGetAllFreePostQuery({page: 1, region: ""})
    getAllMatchPost: builder.query<
      MatchPostType[],
      { page: number; region: string; status: string }
    >({
      query: ({ page, region }) => {
        return {
          url: "api/main/posts",
          method: "get",
          params: { page, region, status },
        };
      },
      providesTags: (result = [], error, arg) =>
        result
          ? [
              "MatchPost",
              ...result.map((post) => ({
                type: "MatchPost" as const,
                id: post.postId,
              })),
            ]
          : ["MatchPost"],
    }),
    // id에 해당하는 게시글을 불러옴
    getMatchPost: builder.query<MatchPostType, string | undefined>({
      query: (postId) => ({
        url: `api/main/posts/${postId}`,
        method: "get",
      }),
      providesTags: (result, error, arg) => [{ type: "MatchPost", id: arg }],
    }),
    // id에 해당하는 게시글을 업데이트
    updateMatchPost: builder.mutation<MatchPostType, MatchPostType>({
      query: (updatedPost) => ({
        url: `api/main/posts/${updatedPost.postId}`,
        method: "PUT",
        body: updatedPost,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "MatchPost", id: arg.postId },
      ],
    }),
    // 게시글 추가
    createMatchPost: builder.mutation<MatchPostType, MatchPostType>({
      query: (newPost) => ({
        url: "api/main/posts/post",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["MatchPost"],
    }),
    // id에 해당하는 게시글 삭제
    deleteMatchPost: builder.mutation<MatchPostType, string | undefined>({
      query: (postId) => ({
        url: `api/main/posts/${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["MatchPost"],
    }),
  }),
});

export const {
  useGetAllMatchPostQuery,
  useGetMatchPostQuery,
  useCreateMatchPostMutation,
  useUpdateMatchPostMutation,
  useDeleteMatchPostMutation,
} = matchPostApi;
