import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import env from '@/env';

export const connection = postgres(env.POSTGRES_URL, { max: env.SEED ? 1 : undefined });
export const db = drizzle(connection, { schema, logger: env.NODE_ENV === 'development' });

export type DB = typeof db;