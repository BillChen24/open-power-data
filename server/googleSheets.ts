import type { StoredDataRequest, StoredContactMessage } from "@shared/schema";

function hasCredentials(): boolean {
  return !!(
    process.env.GOOGLE_SHEET_ID &&
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
    process.env.GOOGLE_PRIVATE_KEY
  );
}

async function getSheetsClient() {
  if (!hasCredentials()) {
    throw new Error("Missing Google Sheets credentials");
  }
  const { getGoogleSheetsClient } = await import("./googleSheetsClient");
  return getGoogleSheetsClient();
}

// Dataset access requests → GOOGLE_SHEET_ID (Sheet1)
// Columns: timestamp | type | name | email | organization | dataset_id | dataset_name | purpose
export async function appendToSheet(record: StoredDataRequest): Promise<void> {
  if (!hasCredentials()) {
    console.warn("[Google Sheets] Missing credentials — skipping data request append");
    return;
  }
  try {
    const sheets = await getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Sheet1!A:H",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          record.submittedAt?.toISOString() ?? new Date().toISOString(),
          "data_request",
          record.name,
          record.email,
          record.organization,
          record.datasetId,
          record.datasetName,
          record.purpose,
        ]],
      },
    });
    console.log("[Google Sheets] Data request row appended successfully");
  } catch (err) {
    console.error("[Google Sheets] Failed to append data request row:", err);
  }
}

// Contact messages → CONTACT_SHEET_ID (separate sheet)
// Columns: timestamp | name | email | subject | message
export async function appendContactToSheet(record: StoredContactMessage): Promise<void> {
  if (!hasCredentials()) {
    console.warn("[Google Sheets] Missing credentials — skipping contact message append");
    return;
  }

  const contactSheetId = process.env.CONTACT_SHEET_ID;
  if (!contactSheetId) {
    console.warn("[Google Sheets] CONTACT_SHEET_ID not set — skipping contact append");
    return;
  }

  try {
    const sheets = await getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: contactSheetId,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          record.submittedAt?.toISOString() ?? new Date().toISOString(),
          record.name,
          record.email,
          record.subject,
          record.message,
        ]],
      },
    });
    console.log("[Google Sheets] Contact message row appended successfully");
  } catch (err) {
    console.error("[Google Sheets] Failed to append contact message row:", err);
  }
}
