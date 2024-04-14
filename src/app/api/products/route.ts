import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(request: Request) {
  const data = await request.json();
  const newProduct = await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      price: parseFloat(data.price),
      image: data.image,
      // authorId: session.user.id,
      // categoryId: data.categoryId,
    },
  });

  return NextResponse.json(newProduct);
}
