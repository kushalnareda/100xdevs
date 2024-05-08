import { NextRequest, NextResponse, Response } from 'next/server';
import { PrismaClient } from "@prisma/client"
import client from "@/db"

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body);
    try{
        await client.user.create({
            data: {
                email: body.email,
                password: body.password
            }
        });
        return NextResponse.json({ 
            message: "you are logged in"
        })
    }
    catch(e){
        return NextResponse.json({
            message : "Error while signing up"
        },{
            status : 411
        })
    }
}

export async function GET(req : NextRequest) {
    const user = await client.user.findFirst({});
    return NextResponse.json({ name: "kushal" , email: user?.email })
}
