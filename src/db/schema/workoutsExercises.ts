import { relations } from 'drizzle-orm';
import { integer, pgTable, serial } from 'drizzle-orm/pg-core';
import workouts from './workouts';
import exercises from './exercises';
import usersWorkoutsExercises from './usersWorkoutsExercises';

const workoutsExercises = pgTable('workouts_exercises', {
  id: serial('id').primaryKey(),
  workoutId: integer('workout_id')
    .notNull()
    .references(() => workouts.id),
  exerciseId: integer('exercise_id')
    .notNull()
    .references(() => exercises.id),
});

export const workoutsExercisesRelations = relations(
  workoutsExercises,
  ({ many, one }) => ({
    workout: one(workouts, {
      fields: [workoutsExercises.workoutId],
      references: [workouts.id],
    }),
    exercise: one(exercises, {
      fields: [workoutsExercises.exerciseId],
      references: [exercises.id],
    }),
    usersWorkoutsExercises: many(usersWorkoutsExercises),
  })
);

export default workoutsExercises;