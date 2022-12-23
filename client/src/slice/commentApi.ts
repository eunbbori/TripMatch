import { createApi } from "@reduxjs/toolkit/query/react";
import type { CommentType } from "../type/comment";
import { axiosBaseQuery } from "./axiosBaseQuery";

export const commentApi = createApi({
  reducerPath: "commentApi",
  tagTypes: ["Comment"],
  baseQuery: axiosBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    // id에 해당하는 댓글을 업데이트
    updateComment: builder.mutation<CommentType, CommentType>({
      query: (updatedComment) => ({
        url: `api/main/comment/${updatedComment.commentId}`,
        method: "PUT",
        body: updatedComment.content,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Comment", id: arg.commentId },
      ],
    }),
    // 댓글 추가
    createComment: builder.mutation<CommentType, CommentType>({
      query: (newComment) => ({
        url: "api/main/comment",
        method: "POST",
        body: newComment, // body:{content:string,(communityId || postId):string}
      }),
      invalidatesTags: ["Comment"],
    }),
    // id에 해당하는 게시글 삭제
    deleteComment: builder.mutation<CommentType, string>({
      query: (commentId) => ({
        url: `api/main/comment/${commentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Comment"],
    }),
  }),
});

export const {
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = commentApi;
