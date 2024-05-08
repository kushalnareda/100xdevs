import Image from "next/image";
import axios from "axios";
import { NextRequest, NextResponse, Response } from 'next/server';
import { PrismaClient } from "@prisma/client"
import client from "@/db"

async function getUserdetails() {
  const user = await client.user.findFirst({});
    return NextResponse.json({ name: "kushal" , email: user?.email })
}

export default async function Home() {
  //we cant do this in react 
  const userData = await getUserdetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>
                
                {userData?.email}
            </div>
        </div>
    </div>
  );
}