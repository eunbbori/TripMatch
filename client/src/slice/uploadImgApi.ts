import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";

interface ImageUploadResponse {
  url: string;
}

export const updateImgApi = createApi({
  reducerPath: "updateImgApi",
  tagTypes: ["updateImgApi"],
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.cloudinary.com/v1_1/dk9scwone/image/",
  }),
  endpoints: (builder) => ({
    updateImg: builder.mutation<ImageUploadResponse, FormData>({
      query: (formData) => {
        formData.append("upload_preset", "tripMatch");
        formData.append("cloud_name", "dk9scwone");
        return {
          url: "upload",
          method: "POST",
          data: formData,
        };
      },
    }),
  }),
});

export const { useUpdateImgMutation } = updateImgApi;
