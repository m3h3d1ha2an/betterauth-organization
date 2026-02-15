import { defineConfig } from "prisma/config";
import { env } from "./src/env";

const prismaConfig = defineConfig({
  schema: "prisma",
  migrations: { path: "prisma/migrations" },
  datasource: { url: env.DATABASE_URL },
});

export default prismaConfig;
