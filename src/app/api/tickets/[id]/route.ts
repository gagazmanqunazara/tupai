import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PATCH(req:Request, {params: {id} } : {params : {id : string}}){
    const body = await req.json();
    const ticket = await prisma.ticket.update({data : body , where:{id : Number(id)}});
    return NextResponse.json( {data:ticket}, {status:200})
}