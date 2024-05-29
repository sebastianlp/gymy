import { relations } from 'drizzle-orm';
import { pgTable, serial, unique, varchar } from 'drizzle-orm/pg-core';
import workoutsExercises from './workoutsExercises';
import routinesWorkouts from './routinesWorkouts';

const workouts = pgTable(
  'workouts',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
  },
  (table) => ({
    unq: unique().on(table.name),
  })
);

export const workoutsRelations = relations(workouts, ({ many }) => ({
  exercises: many(workoutsExercises),
  routines: many(routinesWorkouts),
}));

export default workouts;