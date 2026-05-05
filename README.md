# Healthcare Medical Recipient Monorepo

Welcome to the Healthcare Medical Recipient Monorepo. This project is built using a modern microservices architecture designed to provide a robust, scalable, and seamless experience for patients managing their medical appointments, prescriptions, and profiles.

## 🏗 Architecture & Tech Stack

This project is organized as a monorepo using **Turborepo** and **pnpm workspaces**.

- **Frontend (`apps/web`)**: Built with **Next.js (App Router)** and styled with **Tailwind CSS**. Provides the user interface for patients to log in, view their dashboard, find doctors, book appointments, and review prescriptions.
- **Backend Services**: Built with **NestJS**, secured with JWT, and utilizing a microservices pattern.
  - `apps/auth-service`: Handles user registration, password hashing (bcrypt), and JWT generation.
  - `apps/user-service`: Manages patient profiles, doctor discovery, and role-based access.
  - `apps/appointment-service`: Handles the core business logic for booking, rescheduling, and cancelling appointments, as well as prescription management.
- **Shared Packages**:
  - `packages/database`: A centralized **Prisma ORM** package connecting to a **PostgreSQL** database. It shares strict TypeScript models across all microservices.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- pnpm (v8+)
- Docker Desktop (for the local PostgreSQL database)

### Installation & Setup

1. **Start the Database**
   Ensure Docker Desktop is running, then start the PostgreSQL instance:
   ```bash
   cd infra/postgres
   docker-compose up -d
   ```

2. **Install Dependencies**
   From the root of the monorepo, install all required packages:
   ```bash
   pnpm install
   ```

3. **Initialize the Database Schema**
   Push the Prisma schema to the database and generate the Prisma Client:
   ```bash
   cd packages/database
   npx prisma db push
   ```

4. **Run the Application**
   Start all microservices and the Next.js frontend concurrently using Turborepo:
   ```bash
   pnpm dev
   ```

The web application will be available at `http://localhost:3000`.


*Developed for the Medical Recipient App initiative.*
