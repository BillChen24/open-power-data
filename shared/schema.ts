import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
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

export const dataRequests = pgTable("data_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  organization: text("organization").notNull(),
  purpose: text("purpose").notNull(),
  datasetId: text("dataset_id").notNull(),
  datasetName: text("dataset_name").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
});

export const insertDataRequestSchema = createInsertSchema(dataRequests).omit({
  id: true,
  submittedAt: true,
});

export type InsertDataRequest = z.infer<typeof insertDataRequestSchema>;
export type StoredDataRequest = typeof dataRequests.$inferSelect;
export const dataRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  organization: z.string().min(1, "Organization is required"),
  purpose: z.string().min(10, "Please provide more details about your purpose"),
  datasetId: z.string(),
  datasetName: z.string(),
});

export type DataRequest = z.infer<typeof dataRequestSchema>;
export const contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  submittedAt: true,
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type StoredContactMessage = typeof contactMessages.$inferSelect;
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
  methodologyUrl?: string;
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
  modelImplementations?: { model_id: string, name: string; url?: string; description?: string }[];
  relevantReports?: { report_id: string, title: string; url?: string; description?: string }[];
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
