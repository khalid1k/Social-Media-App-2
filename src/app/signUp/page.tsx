"use client";
import { useMutation } from "@apollo/client";
import React from "react";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CREATE_NEW_USER } from "../graphqlFiles/mutation";
import Loader from "../components/Loader";

function Sigin() {
    const name1 = useRef<HTMLInputElement | null>(null);
    const age1 = useRef<HTMLInputElement | null>(null);
    const email1 = useRef<HTMLInputElement | null>(null);
    const password1 = useRef<HTMLInputElement | null>(null);
    const [gender, setGender] = useState<string>("");
    const [createNewUser,{data,loading,error}]=useMutation(CREATE_NEW_USER);
    if(loading){
        return <Loader/>;
    }
    if(error){
        return `Error! ${error}`;
    }
    
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = name1.current?.value;
        const email = email1.current?.value;
        const password = password1.current?.value;

        const age2 = age1.current?.value;
          const age=Number(age2);
        const dataObject = { name, email, password, age, gender };
       const result= await createNewUser({
            variables:{userNew:dataObject}
        });
        
        
        
      
       
        if (result.data.signUp._id) {
            alert("Signin Successfully!....")
            toast.success("Successfully Sigin")
            
        } else {
            toast.error("Error!....while signUp");
            alert("Error!")
        }
    };
    
    return (
        <div className="Login-main bg-slate-900 grid place-content-center place-items-center md:w-100% lg:w-full md:h-full lg:h-full xl:h-full">
            <ToastContainer/>
            <div className="loginContent grid place-content-center place-items-center ">
            
                <div className="longImg  w-80 grid place-content-center place-items-center mt-6 mb-4">
                    <img
                        className="w-auto"
                        src="signUp.svg"
                        alt="sigin image"
                    ></img>
                </div>

                <div className="todoForm   space-y-4 bg-gray-600 p-5 shadow  shadow-slate-300/80  rounded   mt-5 mb-11  md:w-96 ">
                    <h1 className="text-lg font-bold text-center">
                        SignUp Here
                    </h1>
                    <div className="todoFormElement ">
                        <form className="space-y-4" onSubmit={submitHandler}>
                            <div className="flex flex-col">
                                <label
                                    className="text-sm font-bold"
                                    htmlFor="name"
                                >
                                    User Name:
                                </label>
                                <input
                                    className="text-gray-500 text-sm font-bold p-2 rounded-md shadow-xl"
                                    type="text"
                                    id="name"
                                    placeholder="Enter User Name"
                                    ref={name1}
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    className="text-sm font-bold"
                                    htmlFor="age"
                                >
                                    Age:
                                </label>
                                <input
                                    className="text-gray-500 text-sm font-bold p-2 rounded-md shadow-xl"
                                    type="number"
                                    id="age"
                                    ref={age1}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    className="text-sm font-bold"
                                    htmlFor="email"
                                >
                                    Email:
                                </label>
                                <input
                                    className="text-gray-500 text-sm font-bold p-2 rounded-md  shadow-xl"
                                    type="email"
                                    id="email"
                                    ref={email1}
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    className="text-sm font-bold"
                                    htmlFor="password"
                                >
                                    Password:
                                </label>
                                <input
                                    className="text-gray-500 text-sm font-bold p-2 rounded-md  shadow-xl"
                                    type="password"
                                    id="Password"
                                    ref={password1}
                                    required
                                />
                            </div>
                            <div className="flex flex-col ">
                                <span className="text-medium font-semibold">
                                    Gender
                                </span>
                                <div className="radio space-x-2">
                                    <label htmlFor="male">
                                        <input
                                            type="radio"
                                            value="male"
                                            name="gender"
                                            id="male"
                                            onChange={(e) =>
                                                setGender(e.target.value)
                                            }
                                        />
                                        <span className="ml-2">Male</span>
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input
                                            type="radio"
                                            value="female"
                                            onChange={(e) =>
                                                setGender(e.target.value)
                                            }
                                            name="gender"
                                        />
                                        <span className="ml-2">Female</span>
                                    </label>
                                </div>
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

          
        </div>
    );
}

export default Sigin;
