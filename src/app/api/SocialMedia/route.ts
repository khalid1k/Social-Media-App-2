import { ConnectDb } from "@/dbConfig/dbConfig";
import { User } from "@/models/userSchema";
import { NextResponse } from "next/server";
export async function POST(request: Request, response: NextResponse) {
    await ConnectDb();
    try {
        const { name, email, password, gender, age } = await request.json();
        const user = new User({ name, email, password, gender, age });
        const creatUser = await user.save();
        return NextResponse.json(creatUser, { status: 201 });
    } catch (error) {
        return NextResponse.json({
            status: "an error is occured while storing the new record",
        });
    }
}
