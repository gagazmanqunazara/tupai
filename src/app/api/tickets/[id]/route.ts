import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PATCH(req:Request, {params: {id} } : {params : {id : number}}){
    const body = req.json();
    const ticket = prisma.ticket.update({data : body , where:{id}});
    return NextResponse.json( {data:ticket}, {status:200})
}