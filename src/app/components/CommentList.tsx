import { GETCOMMETNS } from "../graphqlFiles/Queries/Queries";
import { useQuery } from "@apollo/client";
import {  useState } from "react";

type Props={
    postId:String
}
// ... (other imports)

const CommentList = ({ postId }: Props) => {
    const { data, loading, error } = useQuery(GETCOMMETNS);
    
  
    if (loading) {
      return <h1>Loading......</h1>;
    }
    if (error) {
      return `Error! ${error}`;
    }
  
    
  
    const formattedDate = (rawDate: string) => {
        const date = new Date(rawDate);
    
        const options: Intl.DateTimeFormatOptions = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
        };
    
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const formatted = formatter.format(date);
    
        return formatted;
      };
      const postComments = data.getComments.filter((item: any) => item.postId === postId);
    
  
    return (
      <div>
        {postComments ? (
          postComments.map((item: any) => (
            <div className="comment bg-slate-300 rounded-md" key={item.commentId}>
             <span className="text-sky-500 dark:text-sky-400 text-md font-bold mb-4 mr-1">
                Comment By:
              </span>
              <span className="dark:text-slate-500 text-md space-x-2 font-semibold">
              {item.userId}
              </span>
              <br />
             <span className="text-sky-500 dark:text-sky-400 text-md font-bold mb-4 mr-1">
                Comment Content:
              </span>
              <span className="dark:text-slate-500 text-md space-x-2 font-semibold">
              {item.comment}
              </span>
              <br />
              <span className="text-sky-500 dark:text-sky-400 text-md font-bold mb-4 mr-1">
                Created Date:
              </span>
              <span className="dark:text-slate-500 text-md space-x-2 font-semibold">
              {formattedDate(item.createdAt)}
              </span>
            </div>
          ))
        ) : (
          <h4>No Comments</h4>
        )}
      </div>
    );
  };
  
  export default CommentList;
  