import { relations } from 'drizzle-orm';
import { pgTable, serial, unique, varchar } from 'drizzle-orm/pg-core';
import routinesWorkouts from './routinesWorkouts';

const routines = pgTable(
  'routines',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
  },
  (table) => ({
    unq: unique().on(table.name),
  })
);

export const routinesRelations = relations(routines, ({ many }) => ({
  workouts: many(routinesWorkouts),
}));

export default routines;