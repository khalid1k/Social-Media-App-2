"use client";
import { useState } from "react";
import { resolve } from "path";
import React from "react";
import { useRef } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_NEW_POST } from "../graphqlFiles/mutation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
function PostUi() {
    interface IFile {
        myFile: string;
    }
    // const [data, setData] = useState([]);
    const [postImage, setPostImage] = useState<IFile>({
        myFile: "",
    });
    const [CreateNewPost,{data,loading,error}]=useMutation(CREATE_NEW_POST);
    

    const title1 = useRef<HTMLInputElement | null>(null);
    const content1 = useRef<HTMLTextAreaElement | null>(null);
    //conver image to base64
    const convertToBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    //upload the image and store into a varaiable
    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files![0];
        const base64: any = await convertToBase64(file);
        setPostImage({ ...postImage, myFile: base64 });
    };
    
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userId = "65c5ff972cdb142e726b0662";
        const title = title1.current?.value;
        const content = content1.current?.value;
        const dataObject = { userId, title, content, postImage };
        try {
          const result=  await CreateNewPost({
              variables: { postNew: dataObject },
            });
                
            if (result.data.createNewPost._id) {
                alert("Post is Uploaded Successfully!.....")
              toast.success("Post is Uploaded Successfully!.....");
            } else {
              toast.error("An error occurred while Uploading");
            }
          } catch (error) {
            console.error(error);
            toast.error("An error occurred while Uploading");
          }
        };
      
        if (loading) {
          return <Loader/>;
        }
      
        if (error) {
            return `Error! ${error}`;
        }
      
    
    
    return (
        <div className="Login-main bg-slate-900 grid place-content-center place-items-center md:w-100% lg:w-full md:h-full lg:h-full xl:h-full">
            <ToastContainer/>
            <div className="loginContent grid place-content-center place-items-center ">
                <div className="longImg  w-80 grid place-content-center place-items-center mt-6 mb-4">
                    <img
                        className="w-auto"
                        src="createPost.svg"
                        alt="sigin image"
                    ></img>
                </div>

                <div className="todoForm   space-y-4 bg-gray-800 p-5 shadow  shadow-slate-300/80  rounded   mt-5 mb-11  md:w-96 ">
                    <h1 className="text-lg font-bold text-center">
                        Create Post
                    </h1>
                    <div className="todoFormElement ">
                        <form className="space-y-4" onSubmit={submitHandler}>
                            <div className="flex flex-col">
                                <label
                                    className="text-sm font-bold"
                                    htmlFor="name"
                                >
                                    Post Title:
                                </label>
                                <input
                                    className="text-gray-500 text-sm font-bold p-2 rounded-md shadow-xl"
                                    type="text"
                                    id="name"
                                    placeholder="Enter The Post Title"
                                    ref={title1}
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label
                                    className="text-sm font-bold"
                                    htmlFor="content"
                                >
                                    Content:
                                </label>
                                <textarea
                                    className="text-gray-500 text-sm font-bold p-2 rounded-md  shadow-xl rows-4"
                                    id="content"
                                    ref={content1}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    className="text-sm font-bold"
                                    htmlFor="file"
                                >
                                    Content:
                                </label>
                                <input
                                    className="text-gray-500 text-sm font-bold p-2 rounded-md  shadow-xl rows-4"
                                    type="file"
                                    id="file"
                                    accept=".jpeg, .png, .jpg"
                                    onChange={(e) => handleFileUpload(e)}
                                    required
                                />
                            </div>

                            <div className="formB space-x-5">
                                <button
                                    className="bg-blue-500 p-2  px-4 rounded-md hover:opacity-75"
                                    type="submit"
                                >
                                    Add
                                </button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
    }

export default PostUi;
