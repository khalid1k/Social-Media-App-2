// api/route.jsx
import { NextRequest, NextResponse } from "next/server";
import PostsModel from "@/models/PostsSchema";
import { ConnectDb } from "@/dbConfig/dbConfig";
export const revalidate = 0;
const express = require("express");
const app = express();
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));
export async function POST(req: Request) {
    await ConnectDb();
    try {
        const { userId, title, content, postImage } = await req.json();
        const post = new PostsModel({
            userId: userId,
            title: title,
            content: content,
            postImage: postImage.myFile,
        });
        const createPost = await post.save();
        return NextResponse.json(createPost, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            error
            //     {
            //       status: "an error is occured while storing the new record",
            //   }
        );
    }
}
export async function GET(request: NextRequest) {
    await ConnectDb();
    try {
        // const id = request.nextUrl.searchParams;
        // console.log(id);
        const res = await PostsModel.find({});
        return NextResponse.json(res);
    } catch (error) {
        return NextResponse.json(error);
    }
}
