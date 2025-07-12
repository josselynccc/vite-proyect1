import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Comment, CommentResponse } from "../types/Comment";

export const apiComment = createApi({
    reducerPath: 'apiComment',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints:(builder)=>({
        //crear comentario
        createComment: builder.mutation<CommentResponse,Comment>({
            query: (newPost : Comment)=>({
                url:'comments',
                method: 'POST',
                body: newPost
            })
        }),
        //listar comentario
        getComments: builder.query<CommentResponse[], void>({
            query: ()=> 'posts/100/comments'
        })
    })
})

export const { useCreateCommentMutation, useGetCommentsQuery } = apiComment