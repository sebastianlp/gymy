import { sql } from 'drizzle-orm';
import { connection, db, DB } from '@/db';
import * as seeds from './seeds';

async function truncateTables(db: DB) {
  const query = sql<string>`SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
        AND table_type = 'BASE TABLE';
    `;

  const tables = await db.execute(query);

  for (let table of tables) {
    const query = sql.raw(
      `TRUNCATE TABLE ${table.table_name} RESTART IDENTITY CASCADE;`
    );
    await db.execute(query);
  }
}

(async () => {
  await truncateTables(db);
  await seeds.exercises(db);
  await seeds.routines(db);
  await seeds.workouts(db);
  await seeds.users(db);
  await seeds.routinesWorkouts(db);
  await seeds.workoutsExercises(db);
  connection.end();
})();
