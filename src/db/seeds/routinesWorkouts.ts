import { DB } from '@/db';
import { routines, routinesWorkouts, workouts } from '@/db/schema';
import { eq } from 'drizzle-orm';

const routinesWorkoutsValues = [
  { routineName: 'Stronglift 5x5', workoutName: 'Workout A' },
  { routineName: 'Stronglift 5x5', workoutName: 'Workout B' },
];

export default async function seedRoutinesWorkouts(db: DB) {
  for (let val of routinesWorkoutsValues) {
    const routine = await db.query.routines.findFirst({
      where: eq(routines.name, val.routineName),
    });

    const workout = await db.query.workouts.findFirst({
      where: eq(workouts.name, val.workoutName),
    });

    if (!routine) {
      throw new Error(`No routine with name: ${val.routineName} found`);
    }

    if (!workout) {
      throw new Error(`No workout with name: ${val.workoutName} found`);
    }

    await db
      .insert(routinesWorkouts)
      .values({ routineId: routine.id, workoutId: workout.id });
  }
}
