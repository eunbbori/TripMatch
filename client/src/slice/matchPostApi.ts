import { createApi } from "@reduxjs/toolkit/query/react";
import type { MatchPostType } from "./../type/matchPost";
import { authAxiosBaseQuery, axiosBaseQuery } from "./axiosBaseQuery";
import { CommentType } from "./../type/comment";
import { FreePostType } from "../type/freePost";

export const matchPostApi = createApi({
  reducerPath: "matchPostApi",
  tagTypes: ["MatchPost", "SearchPost"],
  baseQuery: authAxiosBaseQuery({
    baseUrl: "http://34.64.156.80:3003/api/",
  }),
  endpoints: (builder) => ({
    // 전체 동행게시글을 불러옴
    // query params 로 page, region, status를 보냄
    // 예시 : useGetAllFreePostQuery({page: 0})
    // get 요청 이외에는 토큰이 필요해서 인터셉터를 먼저 구현해봐야 테스트할 수 있습니다!
    getAllMatchPost: builder.query<
      { totalCount: number; posts: MatchPostType[] },
      { page: number; region?: string; status?: boolean; email?: string }
    >({
      query: ({ page, region, status, email }) => {
        return {
          url: "main/posts",
          method: "get",
          params: { page, region, status, email },
        };
      },
      providesTags: (result, error, arg) =>
        result
          ? [
              "MatchPost",
              ...result.posts.map((post) => ({
                type: "MatchPost" as const,
                id: post.postId,
              })),
            ]
          : ["MatchPost"],
    }),
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
    // id에 해당하는 게시글을 불러옴
    getMatchPost: builder.query<
      { post: MatchPostType; comments: CommentType[] },
      string | undefined
    >({
      query: (postId) => ({
        url: `main/posts/${postId}`,
        method: "get",
      }),
      providesTags: (result, error, arg) => [{ type: "MatchPost", id: arg }],
    }),
    // id에 해당하는 게시글을 업데이트
    updateMatchPost: builder.mutation<MatchPostType, MatchPostType>({
      query: (updatedPost) => ({
        url: `main/posts/${updatedPost.postId}`,
        method: "put",
        data: updatedPost,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "MatchPost", id: arg.postId },
      ],
    }),
    // 게시글 추가
    createMatchPost: builder.mutation<MatchPostType, MatchPostType>({
      query: (newPost) => ({
        url: "main/posts/post",
        method: "post",
        data: newPost,
      }),
      invalidatesTags: ["MatchPost"],
    }),
    // id에 해당하는 게시글 삭제
    deleteMatchPost: builder.mutation<MatchPostType, string | undefined>({
      query: (postId) => ({
        url: `main/posts/${postId}`,
        method: "delete",
      }),
      invalidatesTags: ["MatchPost"],
    }),
    applyMatch: builder.mutation<null, string>({
      query: (postId) => ({
        url: "main/matches/match",
        method: "POST",
        data: { postId },
      }),
    }),
    cancelMatch: builder.mutation<null, string>({
      query: (matchId) => ({
        url: `main/matches/${matchId}`,
        method: "delete",
      }),
    }),
    addLike: builder.mutation<string, string>({
      query: (postId) => ({
        url: `main/likes/like`,
        method: "post",
        data: {
          postId: postId,
        },
      }),
      invalidatesTags: ["MatchPost", "SearchPost"],
    }),
    deleteLike: builder.mutation<string, string>({
      query: (postId) => ({
        url: `main/likes/like?postId=${postId}`,
        method: "delete",
      }),
      invalidatesTags: ["MatchPost", "SearchPost"],
    }),
  }),
});

export const {
  useGetAllMatchPostQuery,
  useGetMatchPostQuery,
  useGetSearchPostQuery,
  useCreateMatchPostMutation,
  useUpdateMatchPostMutation,
  useDeleteMatchPostMutation,
  useApplyMatchMutation,
  useCancelMatchMutation,
  useAddLikeMutation,
  useDeleteLikeMutation,
} = matchPostApi;
