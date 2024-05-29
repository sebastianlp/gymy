import { config } from 'dotenv';
import { expand } from 'dotenv-expand';
import { z } from 'zod';

expand(config({
  path: './.env.local',
}));


const EnvSchema = z.object({
  NODE_ENV: z.string().default('development'),
  POSTGRES_HOST: z.string(),
  POSTGRES_USER: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DB: z.string(),
  POSTGRES_PORT: z.coerce.number(),
  POSTGRES_URL: z.string(),
  SEED: z.coerce.string().transform((val) => val === 'true').default('false'),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

export default EnvSchema.parse(process.env);
