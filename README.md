# Monorepo with Prisma & PostgreSQL

This document outlines the steps followed while setting up a monorepo using [Turborepo](https://turbo.build/) with Prisma as an ORM and PostgreSQL as the database.

## 🚀 Steps Followed

### 1. Initialize a Turborepo Project
```sh
npx create-turbo@latest
```

### 2. Create Prisma Package
Inside the `packages/` directory, create a new folder named `prisma` and initialize it with a `package.json` file:
```sh
mkdir packages/prisma
cd packages/prisma
pnpm init -y
```

### 3. Initialize TypeScript Configuration
Inside `packages/prisma`, generate a TypeScript configuration:
```sh
npx tsc --init
```
Make sure that `tsconfig.json` extends from the base configuration:
```json
{
  "extends": "@repo/typescript-config"
}
```

Also, add `@repo/typescript-config` as a dependency inside `packages/prisma/package.json`:
```sh
pnpm add @repo/typescript-config
```

### 4. Install Prisma
Inside the `packages/prisma` directory:
```sh
pnpm add prisma
npx prisma init
```

### 5. Configure the Database
Update the `.env` file in the `packages/prisma` directory with your PostgreSQL database URL:
```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

### 6. Run Database Migrations
```sh
npx prisma migrate dev
```

### 7. Generate Prisma Client
```sh
npx prisma generate
```





