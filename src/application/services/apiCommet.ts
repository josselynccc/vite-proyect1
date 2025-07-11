import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Comment, CommentResponse } from "../types/Comment";

export const apiComment = createApi({
    reducerPath: 'apiComment',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints:(builder)=>({
        createComment: builder.mutation<CommentResponse,Comment>({
            query: (newPost : Comment)=>({
                url:'comments',
                method: 'POST',
                body: newPost
            })
        })
    })
})

export const { useCreateCommentMutation } = apiComment