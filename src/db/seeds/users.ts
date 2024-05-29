import { DB } from "@/db";
import { users } from "@/db/schema";

const usersValues = [{ name: 'Sebastian', email: 'sebastianl.poliak@gmail.com' }];

export default async function seedUsers(db: DB) {
  return db.insert(users).values(usersValues);
}
