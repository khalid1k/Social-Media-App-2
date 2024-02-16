"use client";
import React from "react";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Sigin() {
    const name1 = useRef<HTMLInputElement | null>(null);
    const age1 = useRef<HTMLInputElement | null>(null);
    const email1 = useRef<HTMLInputElement | null>(null);
    const password1 = useRef<HTMLInputElement | null>(null);
    const [gender, setGender] = useState<string>("");
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = name1.current?.value;
        const email = email1.current?.value;
        const password = password1.current?.value;

        const age = age1.current?.value;
        const dataObject = { name, email, password, age, gender };

        const res = await fetch("http://localhost:3000/api/SocialMedia", {
            method: "POST",
            body: JSON.stringify(dataObject),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await res.json();

        if (result) {
            console.log(result._id);
            toast.success("Signin Successfully!....", {
                position: "top-center",
            });
            formReset();
        } else {
            toast.error("Signin Successfully!....", {
                position: "top-center",
            });
        }
    };
    const formReset = () => {
        if (name1.current) {
            name1.current.value = "";
        }
        if (age1.current) {
            age1.current.value = "";
        }
        if (email1.current) {
            email1.current.value = "";
        }
        if (password1.current) {
            password1.current.value = "";
        }
    };
    return (
        <div className="Login-main bg-slate-900 grid place-content-center place-items-center md:w-100% lg:w-full md:h-full lg:h-full xl:h-full">
            <ToastContainer />
            <div className="loginContent grid place-content-center place-items-center ">
                <div className="longImg  w-80 grid place-content-center place-items-center mt-6 mb-4">
                    <img
                        className="w-auto"
                        src="signin.svg"
                        alt="sigin image"
                    ></img>
                </div>

                <div className="todoForm   space-y-4 bg-gray-800 p-5 shadow  shadow-slate-300/80  rounded   mt-5 mb-11  md:w-96 ">
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
                                    placeholder="Enter Task Name"
                                    ref={name1}
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
                                <button
                                    className="bg-orange-500 p-2  px-4 rounded-md hover:opacity-75"
                                    onClick={formReset}
                                >
                                    Reset
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
