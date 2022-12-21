import { createSlice } from "@reduxjs/toolkit";
import { FreePostType } from "./../type/freePost";

const initialState: FreePostType[] = [
  {
    communityId: "1",
    author: {
      nickname: "nick",
      profileImg: "",
      email: "111@aaa.com",
    },
    region: "경상도",
    category: "맛집",
    title: "경상도 맛집 추천해주세요",
    content: "<p>맛집</p><p>추천해주세요</p>",
    comments: [
      {
        id: 2,
        user: {
          email: "111@aaa.com",
          nickname: "nick",
          profileImg: "",
        },
        comment: "반가워요?",
        createdAt: "2022-12-11 16:10:02",
      },
      {
        id: 3,
        user: {
          email: "111@aaa.com",
          nickname: "nick",
          profileImg: "",
        },
        comment: "안녕하세요?",
        createdAt: "2022-12-11 16:10:02",
      },
      {
        id: 4,
        user: {
          email: "111@aaa.com",
          nickname: "nick",
          profileImg: "",
        },
        comment: "밀면?",
        createdAt: "2022-12-11 16:10:02",
      },
      {
        id: 5,
        user: {
          email: "111@aaa.com",
          nickname: "nick",
          profileImg: "",
        },
        comment: "돼지국밥?",
        createdAt: "2022-12-11 16:10:02",
      },
    ],
    createdAt: "2022-12-11 16:10:02",
  },
];

export const freePostSlice = createSlice({
  name: "freePost",
  initialState: initialState,
  reducers: {
    addFreePost: (state, action) => {
      const newPost = action.payload;
      state.unshift(newPost);
    },
    removeFreePost: (state, action) =>
      state.filter((post: FreePostType) => post.communityId !== action.payload),
    updateFreePost: (state, action) =>
      state.map((post) =>
        post.communityId === action.payload.communityId
          ? { ...post, ...action.payload }
          : state,
      ),
  },
});

export const { addFreePost, removeFreePost, updateFreePost } =
  freePostSlice.actions;
