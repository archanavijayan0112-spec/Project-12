import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";

async function isAdmin() {
  const session = await auth();
  return (session?.user as any)?.role === "ADMIN";
}

export async function GET() {
  if (!await isAdmin()) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const products = await prisma.product.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  if (!await isAdmin()) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const body = await req.json();
  const { name, description, price, images, stock, categoryId, featured } = body;

  const product = await prisma.product.create({
    data: {
      name,
      slug: slugify(name) + "-" + Date.now(),
      description,
      price: parseFloat(price),
      images: images || [],
      stock: parseInt(stock),
      categoryId,
      featured: featured || false,
    },
    include: { category: true },
  });
  return NextResponse.json(product);
}
