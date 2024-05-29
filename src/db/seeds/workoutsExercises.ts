import { DB } from '@/db';
import { exercises, workouts, workoutsExercises } from '@/db/schema';
import { eq } from 'drizzle-orm';

const workoutsExercisesValues = [
  { exerciseName: 'Squat', workoutName: 'Workout A' },
  { exerciseName: 'Bench Press', workoutName: 'Workout A' },
  { exerciseName: 'Barbell Row', workoutName: 'Workout A' },
  { exerciseName: 'Squat', workoutName: 'Workout B' },
  { exerciseName: 'Overhead Press', workoutName: 'Workout B' },
  { exerciseName: 'Deadlift', workoutName: 'Workout B' },
];

export default async function seedWorkoutsExercises(db: DB) {
  for (let val of workoutsExercisesValues) {
    const exercise = await db.query.exercises.findFirst({
      where: eq(exercises.name, val.exerciseName),
    });

    const workout = await db.query.workouts.findFirst({
      where: eq(workouts.name, val.workoutName),
    });

    if (!exercise) {
      throw new Error(`No exercise with name: ${val.exerciseName} found`);
    }

    if (!workout) {
      throw new Error(`No workout with name: ${val.workoutName} found`);
    }

    await db
      .insert(workoutsExercises)
      .values({ exerciseId: exercise.id, workoutId: workout.id });
  }
}
