import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  role: varchar({ length: 255 }).notNull().$type<'admin'>(),
  description: varchar({ length: 255 }).notNull(),
  description1: varchar({ length: 255 }).notNull(),
  description2: varchar({ length: 255 }).notNull(),
  test1: varchar({ length: 255 }).notNull(),
});
