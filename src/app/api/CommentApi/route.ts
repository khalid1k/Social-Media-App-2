import { ConnectDb } from "@/dbConfig/dbConfig";
import CommentModel from "@/models/commentSchema";
import { NextResponse, NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
export async function POST(req: Request) {
    await ConnectDb();
    try {
        const { userId, postId, comment } = await req.json();
        const resComment = new CommentModel({
            userId: userId,
            postId: postId,
            comment: comment,
        });
        const createComment = await resComment.save();
        return NextResponse.json(createComment, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            error
            //     {
            //       status: "an error is occured while storing the new record",
            //   }
        );
    }
}
export async function GET(request: NextApiRequest, response: NextResponse) {
    await ConnectDb();
    try {
        const result = await CommentModel.find();
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({
            status: "an error occured while fetching the records",
        });
    }
}
