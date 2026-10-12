# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains the NaturaSolve reseller program platform - a full-stack ecommerce application built with Next.js, TypeScript, and PostgreSQL. The platform includes product management, reseller program features, fleet configuration services, and integrated payments.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Styling**: Tailwind CSS

## Project Structure

The main application is in the `naturasolve-platform/` directory:

- `src/app/` - Next.js App Router pages and API routes
- `src/components/` - React components (ui/ for reusable, layout/ for structural)
- `src/lib/` - Utilities and configurations
- `prisma/schema.prisma` - Database schema

## Common Development Commands

### Running the Development Server
```bash
cd naturasolve-platform
npm run dev
```

### Database Operations
```bash
npx prisma studio          # Open database GUI
npx prisma generate        # Regenerate Prisma Client after schema changes
npx prisma db push         # Push schema changes to database
npx prisma migrate dev     # Create and apply migrations
```

### Build and Production
```bash
npm run build              # Build for production
npm start                  # Start production server
npm run lint               # Run ESLint
```

## Database Schema Overview

Key models:
- **User**: Stores user accounts with role-based access (CUSTOMER, RESELLER, ADMIN)
- **ResellerProfile**: Extended information for reseller accounts
- **Product**: Drone products with categories (DRONE, SENSOR, ACCESSORY, SOFTWARE, SERVICE)
- **Cart/CartItem**: Shopping cart system
- **Order/OrderItem**: Order management with shipping and payment details
- **FleetConfiguration**: Saved configurations from fleet services tool

## Architecture Notes

- **Authentication**: NextAuth.js with credentials provider; session stored in JWT
- **API Routes**: Located in `src/app/api/` using Next.js route handlers
- **Server Components**: Most pages are React Server Components for better performance
- **Client Components**: Marked with "use client" directive for interactivity
- **Type Safety**: Full TypeScript coverage; Prisma generates types from schema

## Environment Variables

Required variables (see `.env.example`):
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_URL` - Application URL
- `NEXTAUTH_SECRET` - Secret for JWT signing
- `STRIPE_SECRET_KEY` / `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe integration

## Key Features

1. **Product Catalog** (`/products`) - Filterable product listing with category navigation
2. **Reseller Program** (`/reseller-program`) - Landing page with tier information and benefits
3. **Fleet Services** (`/fleet-services`) - Interactive configuration tool for scientific use cases
4. **Authentication** (`/auth/*`) - Sign in/up flows with role selection

## Deployment

The app is optimized for Vercel deployment but can run on any Node.js host. Ensure environment variables are configured and database is accessible from the deployment environment.
