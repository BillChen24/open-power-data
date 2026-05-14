import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDataRequestSchema, insertContactMessageSchema } from "@shared/schema";
import { appendToSheet, appendContactToSheet } from "./googleSheets";
import { sendContactNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // --- Dataset access requests ---
  app.post("/api/data-requests", async (req, res) => {
    const parsed = insertDataRequestSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten() });
    }
    try {
      const record = await storage.createDataRequest(parsed.data);
      appendToSheet(record).catch((err) =>
        console.error("[Google Sheets] Failed to append data request:", err)
      );
      return res.status(201).json(record);
    } catch (err) {
      console.error("[data-requests] DB error:", err);
      return res.status(500).json({ error: "Failed to save request" });
    }
  });

  app.get("/api/data-requests", async (_req, res) => {
    try {
      const records = await storage.getDataRequests();
      return res.json(records);
    } catch (err) {
      console.error("[data-requests] DB error:", err);
      return res.status(500).json({ error: "Failed to fetch requests" });
    }
  });

  // --- Contact messages ---
  app.post("/api/contact", async (req, res) => {
    const parsed = insertContactMessageSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten() });
    }
    try {
      const record = await storage.createContactMessage(parsed.data);

      // Fire both side-effects in parallel, non-blocking
      Promise.all([
        appendContactToSheet(record).catch((err) =>
          console.error("[Google Sheets] Failed to append contact:", err)
        ),
        sendContactNotification(record).catch((err) =>
          console.error("[Email] Failed to send notification:", err)
        ),
      ]);

      return res.status(201).json(record);
    } catch (err) {
      console.error("[contact] DB error:", err);
      return res.status(500).json({ error: "Failed to save message" });
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const records = await storage.getContactMessages();
      return res.json(records);
    } catch (err) {
      console.error("[contact] DB error:", err);
      return res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
