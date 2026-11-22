import { NextResponse } from "next/server";
import { validateContact, type ContactPayload } from "@/lib/contact";
import { siteConfig } from "@/lib/site";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

class NotConfiguredError extends Error {}

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

async function deliver(data: ContactPayload) {
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (resendKey && to && from) {
    const rows = [
      ["Name", data.name],
      ["Email", data.email],
      ["Company", data.company || "—"],
      ["Service", data.service],
      ["Budget", data.budget || "—"],
    ]
      .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0"><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
      .join("");
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()),
        reply_to: data.email,
        subject: `New project inquiry from ${data.name}`,
        html: `<h2>New project inquiry</h2><table>${rows}</table><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`,
      }),
    });
    if (!res.ok) throw new Error(`Email provider responded with ${res.status}`);
    return;
  }

  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, source: siteConfig.url, submittedAt: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(`Webhook responded with ${res.status}`);
    return;
  }

  throw new NotConfiguredError();
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: false, message: "Submission rejected." }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, message: "Too many submissions. Please try again in a few minutes." }, { status: 429 });
  }

  const errors = validateContact(body);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, message: "Please correct the highlighted fields.", errors }, { status: 422 });
  }

  const data: ContactPayload = {
    name: body.name!.trim(),
    email: body.email!.trim(),
    company: body.company?.trim() ?? "",
    service: body.service!,
    budget: body.budget ?? "",
    message: body.message!.trim(),
  };

  try {
    await deliver(data);
    return NextResponse.json({ ok: true, message: "Thank you — your inquiry has been sent. We'll be in touch soon." });
  } catch (error) {
    if (error instanceof NotConfiguredError) {
      return NextResponse.json(
        {
          ok: false,
          message: `Our online form isn't connected yet. Please email us directly at ${siteConfig.contact.email}.`,
        },
        { status: 503 },
      );
    }
    console.error("[contact] delivery failed", error);
    return NextResponse.json(
      { ok: false, message: `We couldn't send your message right now. Please try again or email ${siteConfig.contact.email}.` },
      { status: 502 },
    );
  }
}
