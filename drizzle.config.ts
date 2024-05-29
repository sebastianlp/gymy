import env from '@/env';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
  out: './src/db/migrations',
  schema: './src/db/schema/index.ts',
  strict: true,
  verbose: true,
});
