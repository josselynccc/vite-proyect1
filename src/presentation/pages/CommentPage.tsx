import CommentForm from "../components/comment/CommentForm"
/* import { WiStars } from "react-icons/wi"; */
const CommentPage = ()=>{
    return(
        <div className="w-full h-[81vh] flex flex-col justify-center bg-sky-950 gap-4 items-center">
            <CommentForm/>
        </div>
        
    )
}

export default CommentPage