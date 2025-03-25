# Creating a monorepo with prisma+postgres
Initialized a turborepo project.
Created prisma inside packages and initialized a package.json in it.
Added a tsconfig.json inside prisma by using npx tsc --init.
Make sure that tsconfig.json is extended from the base.json.
make sure @repo/typescript-config is added  as a dependency inside the package.json.
pnpm add prisma. 
npx prisma init to initialize prisma.
Add db url and run "npx prisma migrate dev" to migrate the database.
Run "npx prisma generate" to generate prisma client.









