import type { CommentResponse } from "../../../application/types/Comment";
import { CiUser } from "react-icons/ci"
const CommentCard = (
    {
        name,
        email,
        body
    }: CommentResponse) => {
        return (
            <article className=" flex flex-col justify-between bg-white text-black rounded-lg shadow-md overflow-hidden w-auto hover:scale-105 transition-transform duration-300">
                <CiUser className="w-full h-50" />
                <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 text-center">{name}</h3>
                    <p className="text-sm mb-1"><strong>Email:</strong> {email}</p>
                    <p className="text-sm mb-1"><strong>Body:</strong> {body}</p>
                </div>
            </article>
        )
}

export default CommentCard