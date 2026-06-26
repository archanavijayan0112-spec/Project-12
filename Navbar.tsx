import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Admin user
  const adminPassword = await bcrypt.hash("admin123", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@shopforge.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@shopforge.com",
      password: adminPassword,
      role: "ADMIN",
    },
  });

  // Test user
  const userPassword = await bcrypt.hash("user1234", 12);
  await prisma.user.upsert({
    where: { email: "user@shopforge.com" },
    update: {},
    create: {
      name: "Jane Smith",
      email: "user@shopforge.com",
      password: userPassword,
      role: "USER",
    },
  });

  // Categories
  const categoryData = [
    { name: "Electronics", slug: "electronics" },
    { name: "Clothing", slug: "clothing" },
    { name: "Home & Garden", slug: "home-garden" },
    { name: "Sports", slug: "sports" },
    { name: "Books", slug: "books" },
  ];

  const categories: Record<string, any> = {};
  for (const cat of categoryData) {
    categories[cat.slug] = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }

  // Products
  const products = [
    {
      name: "Wireless Noise-Cancelling Headphones",
      slug: "wireless-noise-cancelling-headphones",
      description: "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and crystal-clear audio. Perfect for travel, work, or just enjoying your favorite music.",
      price: 249.99,
      images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"],
      stock: 45,
      categoryId: categories["electronics"].id,
      featured: true,
    },
    {
      name: "Mechanical Keyboard",
      slug: "mechanical-keyboard",
      description: "Tactile and responsive mechanical keyboard with RGB backlighting, hot-swappable switches, and aluminum build. Built for gamers and programmers alike.",
      price: 149.99,
      images: ["https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80"],
      stock: 30,
      categoryId: categories["electronics"].id,
      featured: true,
    },
    {
      name: "Smart Watch Series X",
      slug: "smart-watch-series-x",
      description: "Track your fitness, receive notifications, and monitor your health with this sleek smartwatch. Features GPS, heart rate monitoring, and 7-day battery.",
      price: 299.99,
      images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80"],
      stock: 20,
      categoryId: categories["electronics"].id,
      featured: true,
    },
    {
      name: "Classic White Tee",
      slug: "classic-white-tee",
      description: "Timeless 100% organic cotton t-shirt with a relaxed fit. Pre-shrunk and built to last season after season.",
      price: 34.99,
      images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80"],
      stock: 200,
      categoryId: categories["clothing"].id,
      featured: false,
    },
    {
      name: "Minimalist Sneakers",
      slug: "minimalist-sneakers",
      description: "Clean, versatile sneakers with cushioned insoles and durable rubber soles. Goes with everything.",
      price: 89.99,
      images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"],
      stock: 60,
      categoryId: categories["clothing"].id,
      featured: false,
    },
    {
      name: "Ceramic Pour-Over Coffee Set",
      slug: "ceramic-pour-over-coffee-set",
      description: "Handcrafted ceramic pour-over dripper with matching carafe. Brew a perfect cup every morning.",
      price: 68.00,
      images: ["https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80"],
      stock: 35,
      categoryId: categories["home-garden"].id,
      featured: false,
    },
    {
      name: "Yoga Mat Pro",
      slug: "yoga-mat-pro",
      description: "Extra-thick non-slip yoga mat with alignment lines. Made from eco-friendly TPE material for comfort and durability.",
      price: 59.99,
      images: ["https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&q=80"],
      stock: 80,
      categoryId: categories["sports"].id,
      featured: false,
    },
    {
      name: "The Art of Clean Code",
      slug: "the-art-of-clean-code",
      description: "A comprehensive guide to writing maintainable, readable, and efficient code. Essential reading for every software developer.",
      price: 39.99,
      images: ["https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&q=80"],
      stock: 100,
      categoryId: categories["books"].id,
      featured: false,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    });
  }

  console.log("✅ Seed complete!");
  console.log("📧 Admin: admin@shopforge.com / admin123");
  console.log("📧 User:  user@shopforge.com / user1234");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
