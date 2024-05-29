import { relations } from 'drizzle-orm';
import { pgTable, serial, unique, varchar } from 'drizzle-orm/pg-core';
import workoutsExercises from './workoutsExercises';

const exercises = pgTable(
  'exercises',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
  },
  (table) => ({
    unq: unique().on(table.name),
  })
);

export const exercisesRelations = relations(exercises, ({ many }) => ({
  workouts: many(workoutsExercises),
}));

export default exercises;