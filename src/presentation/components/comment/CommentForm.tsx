import { useForm } from "react-hook-form"
import { useCreateCommentMutation } from "../../../application/services/apiCommet"
import type { Comment } from "../../../application/types/Comment"

import { zodResolver } from "@hookform/resolvers/zod"

import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2"

import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react"
import { schemaCommentForm } from "./schemaCommentForm"

const CommentForm = ()=>{
    // funcion para llamar a la peticion
    const [createComment, {isLoading, isSuccess, isError}] = useCreateCommentMutation()
    const {register, handleSubmit, reset, formState: { errors }}= useForm<Comment>({
        resolver: zodResolver(schemaCommentForm),
        mode: 'onChange',
        defaultValues: {
            postId: 1
        }
    })

    const onSubmit = async (data: Comment) =>{
        try {
            const response = await createComment(data).unwrap(); //trabajar directamente con la data
            console.log((JSON.stringify(response,null,2)) + 'Resultado Exitoso Se creo ID')
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
        if (isSuccess) {
            toast.success('Comentario enviado con éxito!');
            reset()
        }
        if (isError) {
            toast.error('Error al enviar el comentario');
        }
    }, [reset,isSuccess, isError]);


    return(
        <>
        <h1 className="text-amber-400 font-bold w-auto p-2">¡NOS INTERESA TU OPINIÓN SOBRE CADA PAÍS!</h1>
        <div className="flex w-auto flex-col md:flex-row md:w-max h-auto justify-center bg-amber-50 gap-4 text-black items-center rounded shadow-amber-100">
            <HiOutlineClipboardDocumentCheck className="bg-black text-white w-full md:w-30 h-20 md:h-100 rounded" />
            <form className="flex flex-col h-auto gap-4 m-1.5" onSubmit={handleSubmit(onSubmit)} method="post">
                <div className="flex flex-col">
                    <label className="font-bold">Nombre:</label>
                    <input className="border-b-2 w-60 text-black" {...register('name')} type="text" name="name"  />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                </div>
                <div className="flex flex-col">
                    <label className="font-bold">Email:</label>
                    <input className="border-b-2 w-60 text-black" {...register('email')} type="email" name="email" />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
                <div className="flex flex-col">
                    <textarea className="bg-amber-50 w-auto md:w-100 text-black border-2 rounded" rows={5} {...register('body')} placeholder="Escriba un comentario..."/>
                    {errors.body && <p className="text-red-500 text-xs">{errors.body.message}</p>}
                </div>
                <input className="bg-amber-400 w-max p-2 rounded" type="submit" disabled={isLoading} value={ isLoading ? "Enviando" : "Enviar"}/>
                <Toaster />
            </form>
        </div>
        </>
    )
}

export default CommentForm