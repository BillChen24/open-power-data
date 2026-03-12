import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const dataRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  organization: z.string().min(1, "Organization is required"),
  purpose: z.string().min(10, "Please provide more details about your purpose"),
  datasetId: z.string(),
});

export type DataRequest = z.infer<typeof dataRequestSchema>;

export interface Dataset {
  id: string;
  country: string;
  category: string;
  name: string;
  format: string;
  size: string;
  updated: string;
  license: string;
  downloadUrl: string;
  methodology: string;
  about: string;
  preview?: any[];
  citation?: string;
  regionLevel?: string;
  frequency?: string;
  dataCoverage?: string;
  featured: boolean;
  downloadable: boolean;
  figureLink?: string;
  inPreparation?: boolean;
  modelImplementations?: { name: string; url: string; description: string }[];
  relevantReports?: { title: string; url: string; description: string }[];
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  datasetCount: number;
  categories: DataCategory[];
}

export interface DataCategory {
  id: string;
  name: string;
  icon: string;
  datasets: Dataset[];
}
