import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.mijndomein.nl",
  port: 587,
  secure: false,
  auth: {
    user: "contact@dynafy.nl",
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Vul alle velden in." }, { status: 400 });
    }

    // 1) Notification to Dynafy
    await transporter.sendMail({
      from: '"Dynafy Contact" <contact@dynafy.nl>',
      to: "contact@dynafy.nl",
      replyTo: email,
      subject: `[Contact] ${subject}`,
      html: `
        <div style="font-family:Inter,sans-serif;background:#070c1a;color:#e2e8f0;padding:32px;border-radius:12px;max-width:600px">
          <h2 style="color:#a855f7;margin-top:0">Nieuw contactbericht</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#94a3b8;width:120px">Naam</td><td style="padding:8px 0">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#94a3b8">E-mail</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#4f8ef7">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#94a3b8">Onderwerp</td><td style="padding:8px 0">${subject}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #1e293b;margin:16px 0"/>
          <p style="white-space:pre-wrap;line-height:1.7">${message}</p>
        </div>
      `,
    });

    // 2) Confirmation to customer
    await transporter.sendMail({
      from: '"Dynafy" <contact@dynafy.nl>',
      to: email,
      subject: "We hebben je bericht ontvangen — Dynafy",
      html: `
        <div style="font-family:Inter,sans-serif;background:#070c1a;color:#e2e8f0;padding:40px;border-radius:12px;max-width:600px">
          <div style="text-align:center;margin-bottom:32px">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="44" height="44" rx="12" fill="#070c1a"/>
              <path d="M5,30 C10,30 10,18 16,18 C22,18 22,26 27,24 C32,22 34,15 39,14 L39,36 L5,36 Z" fill="#a855f720"/>
              <path d="M5,30 C10,30 10,18 16,18 C22,18 22,26 27,24 C32,22 34,15 39,14" fill="none" stroke="#a855f7" stroke-width="2.5" stroke-linecap="round"/>
              <circle cx="39" cy="14" r="3" fill="#a855f7"/>
            </svg>
          </div>
          <h2 style="color:#a855f7;text-align:center;margin-top:0">Bericht ontvangen!</h2>
          <p style="text-align:center;color:#94a3b8;margin-bottom:32px">Hoi ${name}, bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.</p>
          <div style="background:#0f172a;border-radius:8px;padding:20px;margin-bottom:32px">
            <p style="margin:0 0 8px 0;color:#94a3b8;font-size:13px">Je bericht over:</p>
            <p style="margin:0;font-weight:600">${subject}</p>
          </div>
          <p style="color:#64748b;font-size:13px;text-align:center">
            Heb je een dringende vraag? Stuur een e-mail naar
            <a href="mailto:contact@dynafy.nl" style="color:#4f8ef7">contact@dynafy.nl</a>
          </p>
          <hr style="border:none;border-top:1px solid #1e293b;margin:24px 0"/>
          <p style="color:#475569;font-size:12px;text-align:center;margin:0">
            © ${new Date().getFullYear()} Dynafy · <a href="https://dynafy.nl" style="color:#4f8ef7;text-decoration:none">dynafy.nl</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact mail error:", err);
    return NextResponse.json({ error: "Verzenden mislukt. Probeer het later opnieuw." }, { status: 500 });
  }
}
