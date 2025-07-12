import { useGetCommentsQuery } from "../../application/services/apiCommet"
import type { CommentResponse } from "../../application/types/Comment"
import CommentCard from "../components/comment/CommentCard"

const CommentsSection = ()=>{
    const {data:comments, error, isLoading} = useGetCommentsQuery()

    if (isLoading) return <p className="text-white">Cargando países...</p>
    if (error) return <p className="text-white">Error al llamar la Api...</p>

    return (
        <div className="w-full h-full flex flex-col items-center">                       
            <h1 className="font-bold text-xl text-sky-950 pt-10">COMENTARIOS</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4 m-6">
                {comments && comments.map((c : CommentResponse, index:number) =>(
                    <CommentCard key={index} {...c}/>
                ))
                }
            </div>
        </div>
    )
}

export default CommentsSection