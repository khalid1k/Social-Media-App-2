"use client";
import { GetPostsQuery } from "../graphqlFiles/Queries/Queries";
import { useQuery } from "@apollo/client";
import AddCommentBox from "../components/AddComment";
import CommentList from "../components/CommentList";

function ViewPost() {
   
   const { data, loading, error } = useQuery(GetPostsQuery);
   if(loading){
    return <h1>Loading......</h1>
   }
   if(error){
    console.log(error);
   }
    return (
        <div className="viewPost-main">
            
            {data ? (
                data.getPosts.map((item: any) => (
                    <div key={item._id} className="card  flex flex-col bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 border border-orange-500 mb-2">
                        <div className="image">
                            <img
                                className="w-24 h-24 md:w-64  md:h-auto lg:w-96 md:rounded-md rounded-full mx-auto"
                                src={item.postImage}
                                alt="image"
                            ></img>
                        </div>
                        <div className="content flex md:flex-col lg:flex-col xl:flex-col pt-6 md:p-8   space-y-6 ">
                            <h1 className="text-sky-500 dark:text-sky-400 text-lg font-bold ">
                                Title:{item.title}
                            </h1>{" "}
                            <p className="text-lg font-medium text-left">
                                <span className="text-sky-500 dark:text-sky-400 text-lg font-bold mb-4 mr-1">
                                    Content:
                                </span>{" "}
                                {item.content}
                            </p>
                            <div className="text-sky-500 dark:text-sky-400">
                                <span className="text-sky-500 dark:text-sky-400 text-lg font-bold mb-4 mr-1">
                                    Created By:
                                </span>
                                <span className="dark:text-slate-500 text-md font-semibold">
                                    {item.userId}
                                </span>
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                                <span className="text-sky-500 dark:text-sky-400 text-lg font-bold mb-4 mr-1">
                                    Created Date:
                                </span>
                                <span className="dark:text-slate-500 text-md space-x-2 font-semibold">
                                    {item.createdAt}
                                </span>
                            </div>
                           <AddCommentBox key={item._id} postId={item._id}/>
                            <CommentList key={item._id} postId={item._id}/>
                        </div>
                    </div>
                ))
            ) : (
                <h1>Sorry! there is no post</h1>
            )}
        </div>
    );
}

export default ViewPost;
