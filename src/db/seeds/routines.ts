import { DB } from '@/db';
import { routines } from '@/db/schema';

const routinesValues = [{ name: 'Stronglift 5x5' }];

export default async function seedRoutines(db: DB) {
  return db.insert(routines).values(routinesValues);
}
