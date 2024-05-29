import { relations } from 'drizzle-orm';
import { integer, pgTable, serial } from 'drizzle-orm/pg-core';
import usersWorkoutsExercises from './usersWorkoutsExercises';

const usersWorkoutsExercisesSets = pgTable(
  'users_workouts_exercises_sets',
  {
    id: serial('id').primaryKey(),
    userWorkoutExerciseId: integer('user_workout_exercise_id')
      .notNull()
      .references(() => usersWorkoutsExercises.id),
    weight: integer('weight').notNull(),
    reps: integer('reps').notNull(),
  }
);

export const usersWorkoutsExercisesSetsRelations = relations(
  usersWorkoutsExercisesSets,
  ({ one }) => ({
    user: one(usersWorkoutsExercises, {
      fields: [usersWorkoutsExercisesSets.userWorkoutExerciseId],
      references: [usersWorkoutsExercises.id],
    }),
  })
);

export default usersWorkoutsExercisesSets;