"use client";
import { useState, useRef } from "react";
function ViewPost() {
    const comment1 = useRef<HTMLTextAreaElement | null>(null);
    const [postData, setPostData] = useState([]);
    const [commentData, setCommentData] = useState([]);

    const [commentContent, setCommentContent] = useState("");

    //Fetch Post data from the database
    const FetchPostData: any = async () => {
        const res = await fetch("http://localhost:3000/api/PostsApi");
        const result: [] = await res.json();
        setPostData(result);
    };

    //Fetch comment data form the database

    const FetchCommentData: any = async () => {
        const result = await fetch("http://localhost:3000/api/commentsApi");
        const res: [] = await result.json();
        setCommentData(res);
    };

    //handle comment click
    const handleCommentClick = () => {
        FetchPostData();
        FetchCommentData();
    };

    //handle comment Add

    const handleCommentAdd = async (id: String) => {
        const userId = "65c5ff972cdb142e726b0662";
        const postId = id;
        const comment = comment1.current?.value;
        const dataObject = {
            userId,
            postId,
            comment,
        };
        // const res = await fetch("http://localhost:3000/api/commentsApi", {
        //     method: "POST",
        //     body: JSON.stringify(dataObject),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });

        // const result = await res.json();
        // if (result._id) {
        //     alert("commented is added successfully....!");
        //     if (comment1.current) {
        //         comment1.current.value = "";
        //     }
        // } else {
        //     alert("an error is occured..!");
        // }
        console.log(dataObject);
    };

    return (
        <div className="viewPost-main">
            <button
                onClick={handleCommentClick}
                className="a bg-orange-500 text-white rounded-md hover:bg-opacity-6"
            >
                Add comment
            </button>
            {postData ? (
                postData.map((item: any) => (
                    <div className="card  flex flex-col bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 border border-orange-500 mb-2">
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
                            <div className="getComment bg-slate-50 text-slate-500 text-md font-semibold rounded-md p-3">
                                <div className="space-y-2">
                                    <label htmlFor="commentBox">
                                        Write Comment
                                    </label>
                                    <textarea
                                        value={commentContent}
                                        className="p-6"
                                        name=""
                                        id="commentBox"
                                        cols={80}
                                        rows={3}
                                        onChange={(e) =>
                                            setCommentContent(e.target.value)
                                        }
                                    ></textarea>
                                </div>
                                <button
                                    className="a bg-orange-500 text-white rounded-md hover:bg-opacity-6"
                                    onClick={() => handleCommentAdd(item._id)}
                                >
                                    Add comment
                                </button>
                            </div>
                            {commentData
                                ? commentData.map((item: any) => (
                                      <div className="comment bg-slate-300 rounded-md">
                                          <span className="text-sky-500 dark:text-sky-400 text-md font-bold mb-4 mr-1">
                                              Comment:
                                          </span>
                                          <span className="dark:text-slate-500 text-md space-x-2 font-semibold">
                                              {item.comment}
                                          </span>
                                          <br />
                                          <span className="text-sky-500 dark:text-sky-400 text-md font-bold mb-4 mr-1">
                                              Commented By:
                                          </span>
                                          <span className="dark:text-slate-500 text-md space-x-2 font-semibold">
                                              {item._id}
                                          </span>
                                          <br />
                                          <span className="text-sky-500 dark:text-sky-400 text-md font-bold mb-4 mr-1">
                                              Created Date:
                                          </span>
                                          <span className="dark:text-slate-500 text-md space-x-2 font-semibold">
                                              {item.createdAt}
                                          </span>
                                      </div>
                                  ))
                                : null}
                        </div>
                    </div>
                ))
            ) : (
                <div className="card  flex flex-col bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                    <div className="image">
                        <img
                            className="w-24 h-24 md:w-64  md:h-auto lg:w-64 md:rounded-md rounded-full mx-auto"
                            src={
                                "https://media.istockphoto.com/id/1400096665/photo/portrait-of-a-cute-little-asian-boy-wearing-casual-clothes-while-smiling-and-looking-excited.webp?b=1&s=170667a&w=0&k=20&c=YRBHTHKMxICBtkn0b3xoMBq1Urws7bEj_IkINqRYNrk="
                            }
                            alt="image"
                        ></img>
                    </div>
                    <div className="content flex md:flex-col lg:flex-col xl:flex-col pt-6 md:p-8   space-y-6 ">
                        <h1 className="text-sky-500 dark:text-sky-400 text-lg font-bold ">
                            Title:
                        </h1>{" "}
                        <p className="text-lg font-medium text-left">
                            <span className="text-sky-500 dark:text-sky-400 text-lg font-bold mb-4 mr-1">
                                Content
                            </span>{" "}
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Numquam, sit iusto? Fugit totam nemo corrupti
                            harum doloribus incidunt aspernatur numquam!
                        </p>
                        <div className="text-sky-500 dark:text-sky-400">
                            <span className="text-sky-500 dark:text-sky-400 text-lg font-bold mb-4 mr-1">
                                Created By:
                            </span>
                            <span className="dark:text-slate-500 text-md font-semibold">
                                Muhammd Khalid
                            </span>
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            <span className="text-sky-500 dark:text-sky-400 text-lg font-bold mb-4 mr-1">
                                Created Date:
                            </span>
                            <span className="dark:text-slate-500 text-md space-x-2 font-semibold">
                                12-02-2001
                            </span>
                        </div>
                        <div className="getComment w-32 md:w-64 lg:w-80 bg-slate-50 text-slate-500 text-md font-semibold rounded-md p-3">
                            <div className="space-y-2">
                                <label htmlFor="commentBox">
                                    Write Comment
                                </label>
                                <textarea
                                    className="p-6"
                                    name=""
                                    id="commentBox"
                                    cols={100}
                                    rows={4}
                                ></textarea>
                            </div>
                            <button
                                onClick={handleCommentClick}
                                className="a bg-orange-500 text-white rounded-md hover:bg-opacity-6"
                            >
                                Add comment
                            </button>
                        </div>
                        <div className="comment bg-slate-300 rounded-md">
                            <span className="text-sky-500 dark:text-sky-400 text-md font-bold mb-4 mr-1">
                                Comment:
                            </span>
                            <span className="dark:text-slate-500 text-md space-x-2 font-semibold">
                                Lorem ipsum dolor sit amet consectetur.
                            </span>
                            <br />
                            <span className="text-sky-500 dark:text-sky-400 text-md font-bold mb-4 mr-1">
                                Commented By:
                            </span>
                            <span className="dark:text-slate-500 text-md space-x-2 font-semibold">
                                Ali Adil
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ViewPost;
