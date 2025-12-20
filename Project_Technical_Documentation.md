# MISRISAAB Website - Technical Documentation

## 1. Project Overview
**Project Name**: MISRISAAB Website
**Description**: A high-performance, futuristic website for an IT firm. It features a modern design, user authentication, a contact form with database storage, and an admin dashboard.
**Live URL**: (User's Vercel Deployment URL)

## 2. Technology Stack

### Core Framework
- **Next.js 16 (App Router)**: The React framework used for building the full-stack application. It handles routing, API endpoints, and server-side rendering.
- **React 19**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that adds static types, improving code quality and developer experience.

### Styling & UI
- **Tailwind CSS v4**: A utility-first CSS framework for rapid UI development. Used for all styling including layouts, colors, and typography.
- **Framer Motion**: A production-ready motion library for React. Used for the futuristic animations and transitions.
- **Lucide React**: A clean and consistent icon set.

### Backend & Database
- **Prisma ORM (v6)**: A next-generation ORM (Object-Relational Mapping) used to interact with the database.
- **PostgreSQL (Vercel Postgres)**: The relational database used to store User and Contact Request data.
- **NextAuth.js (v4)**: A complete open-source authentication solution for Next.js applications.

### Deployment & Tools
- **Vercel**: Platform for frontend framework deployment and serverless functions.
- **Git**: Version control system.
- **VS Code**: The integrated development environment.

## 3. Implementation Steps

### Phase 1: Setup & Configuration
1.  **Project Initialization**: Created a new Next.js project with TypeScript and Tailwind CSS.
2.  **Environment Setup**: Configured `.env` files for database connection strings and authentication secrets.

### Phase 2: Database Design
1.  **Schema Definition**: Defined the data model in `prisma/schema.prisma`.
    -   `User` model: Handles user accounts (email, password, role).
    -   `ContactRequest` model: Stores inquiries from the contact form.
2.  **Database Migration**: Ran `prisma generate` and `prisma db push` to synchronize the schema with the Vercel Postgres database.

### Phase 3: Authentication System
1.  **NextAuth Config**: Implemented authentication logic in `app/api/auth/[...nextauth]/route.ts`.
2.  **Sign Up Flow**: Created a custom API route `app/api/auth/signup/route.ts` to handle new user registration and password hashing (using `bcryptjs`).
3.  **UI Components**: Built `Login` and `Signup` pages with futuristic forms.

### Phase 4: Core Features
1.  **Contact Form**: Developed a form that sends data to `app/api/contact/route.ts`, which saves the inquiry to the database.
2.  **Admin Dashboard**: Created a protected route `/admin` to view submitted contact requests.
3.  **Design Implementation**: Applied "glassmorphism" effects, gradients, and animations using Tailwind CSS and Framer Motion.

### Phase 5: Deployment & Fixes
1.  **Vercel Deployment**: Connected the GitHub repository to Vercel.
2.  **Prisma Build Fix**:
    -   *Issue*: Vercel build failed because `prisma generate` wasn't running.
    -   *Fix*: Updated `package.json` build script to `"prisma generate && next build"`.
3.  **Config Conflict Resolution**:
    -   *Issue*: Prisma 7 introduced a breaking change and a conflicting `prisma.config.ts`.
    -   *Fix*: Downgraded Prisma to v6 and removed `prisma.config.ts` to restore compatibility with Vercel Postgres.

## 4. Key Files & Directories
-   `app/`: Main application source code (App Router).
    -   `api/`: Backend API routes (Auth, Contact, Admin).
    -   `globals.css`: Global styles and Tailwind directives.
-   `lib/prisma.ts`: Singleton instance of Prisma Client to prevent connection exhaustion.
-   `prisma/schema.prisma`: The database schema definition.
-   `package.json`: Project dependencies and scripts.

## 5. How to Run Locally
1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Generate Prisma Client**:
    ```bash
    npx prisma generate
    ```
3.  **Start Development Server**:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) in your browser.
