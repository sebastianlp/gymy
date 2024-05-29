import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, unique, varchar } from 'drizzle-orm/pg-core';
import routines from './routines';

const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    email: varchar('email', { length: 256 }).notNull(),
    routineId: integer('routine_id'),
  },
  (table) => ({
    unq: unique().on(table.email),
  })
);

export const usersRelations = relations(users, ({ one }) => ({
  workout: one(routines, {
    fields: [users.routineId],
    references: [routines.id],
  }),
}));

export default users;