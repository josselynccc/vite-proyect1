import {z} from 'zod'

export const schemaCommentForm = z.object({ 
    postId: z.number().min(1),
    name: z.string()
            .min(1, "El nombre es requerido"),
    email: z.email("Correo Invalido").trim()
            .min(1, "El email es requerido"),
    body: z.string()
            .min(1, "El comentario es requerido")
            .refine(valor => valor.length<=500,"Máximo 500 caracteres")
})