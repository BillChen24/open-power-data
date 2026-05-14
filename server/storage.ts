import {
  type User, type InsertUser,
  type InsertDataRequest, type StoredDataRequest,
  type InsertContactMessage, type StoredContactMessage,
  users, dataRequests, contactMessages,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createDataRequest(request: InsertDataRequest): Promise<StoredDataRequest>;
  getDataRequests(): Promise<StoredDataRequest[]>;
  createContactMessage(msg: InsertContactMessage): Promise<StoredContactMessage>;
  getContactMessages(): Promise<StoredContactMessage[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createDataRequest(request: InsertDataRequest): Promise<StoredDataRequest> {
    const [row] = await db.insert(dataRequests).values(request).returning();
    return row;
  }

  async getDataRequests(): Promise<StoredDataRequest[]> {
    return db.select().from(dataRequests).orderBy(dataRequests.submittedAt);
  }

  async createContactMessage(msg: InsertContactMessage): Promise<StoredContactMessage> {
    const [row] = await db.insert(contactMessages).values(msg).returning();
    return row;
  }

  async getContactMessages(): Promise<StoredContactMessage[]> {
    return db.select().from(contactMessages).orderBy(contactMessages.submittedAt);
  }
}

export const storage = new DatabaseStorage();
