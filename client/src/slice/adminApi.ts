import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";

interface AdminUser {
  email: string;
  nickname: string;
  createdAt: string;
  role: string;
}

// export const adminApi = createApi({
//   reducerPath: "adminApi",
//   tagTypes: ["Admin"],
//   baseQuery: axiosBaseQuery({
//     baseUrl: "http://localhost:5000/api/admin/",
//   }),
//   endpoints: (builder) => ({
//     getAllUser: builder.query<AdminUser, string>({
//       query: (users) => {
//         url: 'users',
//         method: 'get'
//       }
//     })
//   })
// });
