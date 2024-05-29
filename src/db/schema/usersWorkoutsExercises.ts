import { relations } from 'drizzle-orm';
import { integer, pgTable, serial } from 'drizzle-orm/pg-core';
import users from './users';
import workoutsExercises from './workoutsExercises';
import usersWorkoutsExercisesSets from './usersWorkoutsExercisesSets';

const usersWorkoutsExercises = pgTable('users_workouts_exercises', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  workoutExerciseId: integer('workout_exercise_id')
    .notNull()
    .references(() => workoutsExercises.id),
});

export const usersWorkoutsExercisesRelations = relations(
  usersWorkoutsExercises,
  ({ many, one }) => ({
    user: one(users, {
      fields: [usersWorkoutsExercises.userId],
      references: [users.id],
    }),
    workoutExercise: one(workoutsExercises, {
      fields: [usersWorkoutsExercises.workoutExerciseId],
      references: [workoutsExercises.id],
    }),
    usersWorkoutsExercisesSets: many(usersWorkoutsExercisesSets),
  })
);

export default usersWorkoutsExercises;