<div align="center">

<img src="https://img.shields.io/badge/ShopForge-E-commerce-6c63ff?style=for-the-badge&logo=shopify&logoColor=white" alt="ShopForge" />

<h1>ShopForge</h1>
<p>A modern, full-stack e-commerce store built with Next.js 14, PostgreSQL, Prisma, and NextAuth.js</p>

<p>
  <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=nextdotjs" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat-square&logo=prisma" />
  <img src="https://img.shields.io/badge/NextAuth.js-v5-purple?style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" />
</p>

</div>

---

## ✨ Features

| Area | What's included |
|------|----------------|
| 🛒 **Shop** | Product catalog with category filters, search, and featured highlights |
| 🔍 **Products** | Detail pages with image gallery, stock badge, and add-to-cart |
| 🛍️ **Cart** | Persistent cart via Zustand + localStorage, quantity controls |
| 💳 **Checkout** | Shipping address form, order summary, simulated payment |
| 📦 **Orders** | Full order history per customer with status tracking |
| 🔐 **Auth** | Email/password register & login, JWT sessions via NextAuth.js |
| 🛠️ **Admin** | Dashboard with revenue/orders/customers stats, product & order management |
| 🌱 **Seed** | Demo data — 8 products, 5 categories, admin + user accounts |

## 🧱 Tech Stack

```
Next.js 14 (App Router) · TypeScript · PostgreSQL · Prisma ORM
NextAuth.js v5 · Zustand · CSS Modules
```

## 📸 Pages Overview

```
/                  → Product catalog (homepage)
/product/[slug]    → Product detail
/cart              → Shopping cart
/checkout          → Checkout form
/orders            → Order history (auth required)
/login             → Sign in
/register          → Create account
/admin             → Dashboard (admin only)
/admin/products    → Manage products
/admin/orders      → Manage & update order statuses
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (local or hosted)

### 1. Clone & install

```bash
git clone https://github.com/yourusername/shopforge.git
cd shopforge
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/shopforge"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-here"   # openssl rand -base64 32
```

### 3. Set up the database

```bash
npm run db:push     # Apply schema to your database
npm run db:seed     # Load demo categories, products & users
```

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## 🔑 Demo Accounts

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@shopforge.com | admin123 |
| Customer | user@shopforge.com | user1234 |

> The admin account unlocks `/admin` — dashboard, product editor, and order management.

## 📁 Project Structure

```
shopforge/
├── app/
│   ├── (auth)/              # Login & Register pages
│   ├── (shop)/              # Homepage — product listing
│   ├── admin/               # Admin dashboard, products, orders
│   │   ├── page.tsx         # Stats dashboard
│   │   ├── products/        # Product list + new/edit forms
│   │   └── orders/          # Order management with status updates
│   ├── api/
│   │   ├── auth/            # NextAuth handlers + /register
│   │   ├── products/        # Public product API
│   │   ├── orders/          # Customer order API
│   │   ├── categories/      # Categories API
│   │   └── admin/           # Admin-protected APIs
│   ├── cart/                # Cart page
│   ├── checkout/            # Checkout page
│   ├── orders/              # Order history
│   └── product/[slug]/      # Product detail
├── components/
│   ├── layout/              # Navbar, SessionProviders
│   └── shop/                # ProductCard, AddToCartButton
├── lib/
│   ├── auth.ts              # NextAuth config
│   ├── prisma.ts            # Prisma singleton
│   ├── cart-store.ts        # Zustand cart store
│   └── utils.ts             # formatPrice, slugify, cn
└── prisma/
    ├── schema.prisma        # DB schema
    └── seed.ts              # Demo data seeder
```

## 🗄️ Database Schema

```
User ──< Order ──< OrderItem >── Product >── Category
```

- **User** — `id, name, email, password (hashed), role (USER|ADMIN)`
- **Product** — `id, name, slug, description, price, images[], stock, featured`
- **Category** — `id, name, slug`
- **Order** — `id, userId, total, status, address, city, country, postalCode`
- **OrderItem** — `id, orderId, productId, quantity, price`

## 🚢 Deployment

### Vercel + Neon (recommended — both free tiers)

1. Create a free PostgreSQL database at [neon.tech](https://neon.tech)
2. Push your code to GitHub
3. Import the repo on [vercel.com](https://vercel.com)
4. Add environment variables in the Vercel dashboard:
   - `DATABASE_URL` — your Neon connection string
   - `NEXTAUTH_URL` — your Vercel deployment URL
   - `NEXTAUTH_SECRET` — a random secret string
5. Deploy, then run the seed via Vercel CLI or a one-time function

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run db:push      # Sync Prisma schema → database
npm run db:seed      # Seed demo data
npm run db:studio    # Open Prisma Studio (visual DB browser)
npm run db:generate  # Regenerate Prisma client
```

## 🔮 What to Build Next

- [ ] **Stripe payments** — replace simulated checkout with real payments
- [ ] **Image uploads** — Cloudinary or S3 for admin product images
- [ ] **Product reviews** — star ratings + comments
- [ ] **Email notifications** — order confirmation via Resend or Nodemailer
- [ ] **Wishlist** — save products for later
- [ ] **Discount codes** — promo/coupon system
- [ ] **Inventory alerts** — low stock notifications for admins

## 📜 License

MIT — use it, fork it, ship it.
