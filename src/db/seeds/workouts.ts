import { DB } from '@/db';
import { workouts } from '@/db/schema';

const workoutsValues = [{ name: 'Workout A' }, { name: 'Workout B' }];

export default async function seedWorkouts(db: DB) {
  return db
    .insert(workouts)
    .values(workoutsValues);
}
