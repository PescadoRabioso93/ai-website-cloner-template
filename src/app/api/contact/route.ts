import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactBody {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.CONTACT_EMAIL_TO ?? "dr.paruzzo@gmail.com";

  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: "Servicio de email no configurado" },
      { status: 503 },
    );
  }

  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Datos inválidos" },
      { status: 400 },
    );
  }

  const { name, email, phone, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { success: false, error: "Nombre, email y mensaje son obligatorios" },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, error: "Email inválido" },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Dr. Paruzzo Site <onboarding@resend.dev>",
      to: emailTo,
      replyTo: email,
      subject: `Nuevo mensaje de ${name.trim()}`,
      text: [
        `Nombre: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Teléfono: ${phone?.trim() || "No proporcionado"}`,
        "",
        "Mensaje:",
        message.trim(),
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Error al enviar el mensaje. Intentá de nuevo." },
      { status: 500 },
    );
  }
}
