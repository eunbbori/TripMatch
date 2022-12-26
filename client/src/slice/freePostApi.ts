import { createApi } from "@reduxjs/toolkit/query/react";
import type { FreePostType } from "../type/freePost";
import { axiosBaseQuery } from "./axiosBaseQuery";
import { CommentType } from "./../type/comment";

export const freePostApi = createApi({
  reducerPath: "freePostApi",
  tagTypes: ["FreePost"],
  baseQuery: axiosBaseQuery({
    baseUrl: "http://34.64.156.80:3003/api/",
  }),
  endpoints: (builder) => ({
    // 전체 자유게시글을 불러옴
    // query params 로 page, region을 보냄
    // 예시 : useGetAllFreePostQuery({page: 0, region: "서울"})
    // get 요청 이외에는 토큰이 필요해서 인터셉터를 먼저 구현해봐야 테스트할 수 있습니다!
    getAllFreePost: builder.query<
      { totalPage: number; communities: FreePostType[] },
      { page: number; region?: string }
    >({
      query: ({ page, region }) => {
        return {
          url: "main/communities",
          method: "get",
          params: { page, region },
        };
      },
      providesTags: (result, error, arg) =>
        result
          ? [
              "FreePost",
              ...result.communities.map((post) => ({
                type: "FreePost" as const,
                id: post.communityId,
              })),
            ]
          : ["FreePost"],
    }),
    // id에 해당하는 게시글을 불러옴
    getFreePost: builder.query<
      { comments: CommentType[]; community: FreePostType },
      string | undefined
    >({
      query: (communityId) => ({
        url: `main/communities/${communityId}`,
        method: "get",
      }),
      providesTags: (result, error, arg) => [{ type: "FreePost", id: arg }],
    }),
    // id에 해당하는 게시글을 업데이트 {communityId, title, content, region, category}
    updateFreePost: builder.mutation<null, FreePostType>({
      query: (updatedPost) => ({
        url: `main/communities/${updatedPost.communityId}`,
        method: "PUT",
        data: updatedPost,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "FreePost", id: arg.communityId },
      ],
    }),
    // 게시글 추가 {title,content,region,category}
    createFreePost: builder.mutation<null, any>({
      query: (newPost) => ({
        url: "main/communities/community",
        method: "POST",
        data: newPost,
      }),
      invalidatesTags: ["FreePost"],
    }),
    // id에 해당하는 게시글 삭제 useDeleteFreePost(id)
    deleteFreePost: builder.mutation<null, string | undefined>({
      query: (communityId) => ({
        url: `main/communities/${communityId}`,
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
