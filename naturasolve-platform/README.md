# NaturaSolve Platform

A modern ecommerce platform for NaturaSolve's drone reseller program, featuring product inventory, fleet configuration services, and role-based access control.

## Features

- **Product Catalog**: Browse and search drones, sensors, accessories, and services
- **Reseller Program**: Dedicated landing page with tier-based partnership information
- **Fleet Configuration Tool**: Interactive tool to help customers select drones for specific scientific applications
- **Authentication**: Role-based access (Customer, Reseller, Admin)
- **Shopping Cart**: Add products and manage cart
- **Order Management**: Complete checkout flow with Stripe integration
- **Responsive Design**: Mobile-first design with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **UI Components**: Custom components built with Radix UI primitives

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Stripe account (for payments)

### Installation

1. Clone the repository

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and configure:
- `DATABASE_URL`: Your PostgreSQL connection string
- `NEXTAUTH_URL`: Your app URL (http://localhost:3000 for local)
- `NEXTAUTH_SECRET`: Generate with `openssl rand -base64 32`
- Stripe keys from your Stripe dashboard

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. (Optional) Seed the database with sample products:
```bash
npm run seed
```

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

The platform uses the following main models:

- **User**: Authentication and profile information
- **ResellerProfile**: Additional information for reseller accounts
- **Product**: Drone products and accessories
- **Cart / CartItem**: Shopping cart functionality
- **Order / OrderItem**: Order management
- **FleetConfiguration**: Saved fleet configurations

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── products/          # Product listing and detail pages
│   ├── reseller-program/  # Reseller program landing page
│   ├── fleet-services/    # Fleet configuration tool
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── layout/           # Header, footer, etc.
└── lib/                   # Utility functions and configurations
    ├── prisma.ts         # Prisma client
    ├── auth.ts           # NextAuth configuration
    └── utils.ts          # Helper functions
```

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma generate` - Generate Prisma Client
- `npx prisma db push` - Push schema changes to database

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Railway
- Render
- DigitalOcean App Platform
- AWS Amplify

## Environment Variables

See `.env.example` for all required environment variables.

## License

Proprietary - NaturaSolve
