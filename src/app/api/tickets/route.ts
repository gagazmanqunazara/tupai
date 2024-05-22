import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const tickets = await prisma.ticket.findMany({
 
  });

  return Response.json({ tickets });
}

export async function POST(req: Request) {
  const body = await req.json();

  const ticket = await prisma.ticket.create({
    data: body,
  });

  return NextResponse.json({ data: ticket }, { status: 200 });
}

