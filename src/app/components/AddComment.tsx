import { useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_NEW_COMMENT } from "../graphqlFiles/mutation";
type Props={
    postId:String
}

const AddCommentBox=({postId}:Props)=>{
    
    const commentContent = useRef<HTMLTextAreaElement | null>(null);
    const [createNewComment,{data,loading,error}]=useMutation(CREATE_NEW_COMMENT);
    const handleComment=async()=>{
        const comment=commentContent.current?.value;
        const userId="65c5ff972cdb142e726b0662";
        const dataObject={postId, comment, userId};
        await createNewComment({
            variables:{commentNew:dataObject}
        })
        if(commentContent.current){
            commentContent.current.value="";
        }

        if(loading){
            return <h1>Loading....</h1>
        }
        if(error){
            console.log(error);
            alert("an Error is occured!");
        }
        if(data){
            alert("successfully comment is added!");
        }
        
          
          

    }
    return(
        
        <div className="getComment bg-slate-50 text-slate-500 text-md font-semibold rounded-md p-3">
        <div className="space-y-2">
            <label htmlFor="commentBox">
                Write Comment
            </label>
            <textarea
                
                className="p-6"
                name=""
                id="commentBox"
                cols={80}
                rows={3}
                ref={commentContent}
                
            ></textarea>
        </div>
        <button
            className="a bg-orange-500 text-white rounded-md hover:bg-opacity-6"
            onClick={handleComment}
        >
            Add comment
        </button>
    </div>
    );
}
export default AddCommentBox;