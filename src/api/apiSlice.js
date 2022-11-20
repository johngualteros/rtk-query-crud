import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/tasks" }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/", // GET http://localhost:3001/tasks/
      providesTags: ["Tasks"],
      transformResponse: (response) => response.sort((a, b) => b.id - a.id),
    }),

    addTask: builder.mutation({
      query: (task) => ({
        url: "/",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),
    
    updateTask: builder.mutation({
        query: (task) => ({
            url: `/${task.id}`,
            method: "PUT",
            body: task,
        }),
        invalidatesTags: ["Tasks"],
    }),

    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),

  }),
});

export const { useGetTasksQuery, useAddTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation } =
  apiSlice;
