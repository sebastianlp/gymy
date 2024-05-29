import { DB } from '@/db';
import { exercises } from '@/db/schema';

const exercisesValues = [
  { name: 'Squat', },
  { name: 'Bench Press' },
  { name: 'Barbell Row' },
  { name: 'Overhead Press' },
  { name: 'Deadlift' },
  { name: 'Romanian Deadlift' },
];

export default async function seedExercises(db: DB) {
  return db
    .insert(exercises)
    .values(exercisesValues);
};
