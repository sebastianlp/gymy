import { relations } from 'drizzle-orm';
import { integer, pgTable, serial } from 'drizzle-orm/pg-core';
import routines from './routines';
import workouts from './workouts';

const routinesWorkouts = pgTable('routines_workouts', {
  id: serial('id').primaryKey(),
  routineId: integer('routine_id')
    .notNull()
    .references(() => routines.id),
  workoutId: integer('workout_id')
    .notNull()
    .references(() => workouts.id),
});

export const routinesWorkoutsRelations = relations(
  routinesWorkouts,
  ({ one }) => ({
    routine: one(routines, {
      fields: [routinesWorkouts.routineId],
      references: [routines.id],
    }),
    workout: one(workouts, {
      fields: [routinesWorkouts.workoutId],
      references: [workouts.id],
    })
  })
);

export default routinesWorkouts;