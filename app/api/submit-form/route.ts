import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

export async function POST(req: NextRequest) {
  let sheetSuccess = false;
  let emailSuccess = false;
  let sheetError = null;
  let emailError = null;

  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, address, help } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !address || !help) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    // --- Google Sheets Logic ---
    try {
      const credsPath = path.join(process.cwd(), "google-service-account.json");
      const creds = JSON.parse(fs.readFileSync(credsPath, "utf8"));
      const sheetId = process.env.GOOGLE_SHEET_ID;
      const tabName = process.env.GOOGLE_SHEET_TAB;
      const auth = new google.auth.GoogleAuth({
        credentials: creds,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });
      const sheets = google.sheets({ version: "v4", auth });
      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: `${tabName}!A:G`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[firstName, lastName, email, phone, address, help, new Date().toISOString()]],
        },
      });
      sheetSuccess = true;
    } catch (err) {
      sheetError = err instanceof Error ? err.message : String(err);
      console.error("Google Sheets error:", err);
    }

    // --- Email Logic ---
    try {
      if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
          },
        });
        await transporter.sendMail({
          from: `Hammy's Landing <${process.env.GMAIL_USER}>`,
          to: "thomas.g.hamilton@gmail.com",
          subject: "New Hammy's Form Submission",
          text: `New signup:\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nHow can we help: ${help}`,
        });
        emailSuccess = true;
      } else {
        emailError = "GMAIL_USER or GMAIL_PASS not set in environment.";
      }
    } catch (err) {
      emailError = err instanceof Error ? err.message : String(err);
      console.error("Email error:", err);
    }

    // --- Response ---
    if (sheetSuccess && emailSuccess) {
      return NextResponse.json({ success: true }, {
        headers: { "Access-Control-Allow-Origin": "*" }
      });
    } else {
      return NextResponse.json({
        success: false,
        sheetSuccess,
        emailSuccess,
        sheetError,
        emailError,
      }, { status: 500 });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Submission failed." }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "GET is working!" });
}