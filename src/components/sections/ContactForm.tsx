"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowUpRight, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { budgetOptions, limits, serviceOptions, validateContact, type ContactErrors, type ContactPayload } from "@/lib/contact";
import { cn } from "@/lib/utils";

type Status = { type: "idle" | "submitting" | "success" | "error"; message?: string };

const empty: ContactPayload = { name: "", email: "", company: "", service: "", budget: "", message: "", website: "" };

const fieldBase =
  "peer w-full rounded-none border-0 border-b bg-transparent px-0 pb-3 pt-7 text-lg text-white outline-none transition-colors placeholder:text-transparent focus:border-lime focus:ring-0";

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {children}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted"
      >
        {label}
        {optional ? (
          <span className="ml-2 normal-case tracking-normal text-white/40">(optional)</span>
        ) : (
          <span aria-hidden="true" className="text-lime">
            {" "}
            *
          </span>
        )}
      </label>
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 flex items-center gap-1.5 text-sm text-[#ff8a8a]"
          >
            <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactPayload, boolean>>>({});
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const formRef = useRef<HTMLFormElement>(null);

  const update =
    (key: keyof ContactPayload) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const next = { ...values, [key]: e.target.value };
      setValues(next);
      if (touched[key]) setErrors(validateContact(next));
    };

  const blur = (key: keyof ContactPayload) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validateContact(values));
  };

  const borderFor = (key: keyof ContactPayload) => (errors[key] && touched[key] ? "border-[#ff8a8a]" : "border-white/20");
  const a11y = (key: keyof ContactPayload) => ({
    "aria-invalid": Boolean(errors[key] && touched[key]) || undefined,
    "aria-describedby": errors[key] && touched[key] ? `${key}-error` : undefined,
  });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    setTouched({ name: true, email: true, company: true, service: true, budget: true, message: true });
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      setStatus({ type: "error", message: "Please correct the highlighted fields." });
      return;
    }

    setStatus({ type: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string; errors?: ContactErrors };
      if (res.ok && data.ok) {
        setStatus({ type: "success", message: data.message });
        setValues(empty);
        setTouched({});
        setErrors({});
      } else {
        if (data.errors) setErrors(data.errors);
        setStatus({ type: "error", message: data.message ?? "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", message: "Network error — please check your connection and try again." });
    }
  }

  const submitting = status.type === "submitting";
  const show = (key: keyof ContactPayload) => (touched[key] ? errors[key] : undefined);

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="relative" aria-describedby="form-status">
      <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
        <Field id="name" label="Full name" error={show("name")}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={limits.name}
            value={values.name}
            onChange={update("name")}
            onBlur={blur("name")}
            placeholder="Full name"
            className={cn(fieldBase, borderFor("name"))}
            {...a11y("name")}
          />
        </Field>
        <Field id="email" label="Email" error={show("email")}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={limits.email}
            value={values.email}
            onChange={update("email")}
            onBlur={blur("email")}
            placeholder="Email"
            className={cn(fieldBase, borderFor("email"))}
            {...a11y("email")}
          />
        </Field>
        <Field id="company" label="Company name" optional error={show("company")}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={limits.company}
            value={values.company}
            onChange={update("company")}
            onBlur={blur("company")}
            placeholder="Company name"
            className={cn(fieldBase, borderFor("company"))}
            {...a11y("company")}
          />
        </Field>
        <Field id="service" label="Service required" error={show("service")}>
          <select
            id="service"
            name="service"
            required
            value={values.service}
            onChange={update("service")}
            onBlur={blur("service")}
            className={cn(fieldBase, "appearance-none pr-8", borderFor("service"), !values.service && "text-white/40")}
            {...a11y("service")}
          >
            <option value="" disabled className="bg-graphite">
              Select a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s} className="bg-graphite text-white">
                {s}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-0 top-8 size-5 text-lime" aria-hidden="true" />
        </Field>

        <fieldset className="md:col-span-2">
          <legend className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
            Budget <span className="ml-2 normal-case tracking-normal text-white/40">(optional)</span>
          </legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {budgetOptions.map((b) => (
              <label key={b} className="cursor-pointer">
                <input
                  type="radio"
                  name="budget"
                  value={b}
                  checked={values.budget === b}
                  onChange={update("budget")}
                  className="peer sr-only"
                />
                <span className="inline-block rounded-full border border-white/20 px-4 py-2.5 text-sm text-white/75 transition-colors peer-checked:border-lime peer-checked:bg-lime peer-checked:text-ink peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-lime hover:border-white/50">
                  {b}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="md:col-span-2">
          <Field id="message" label="Project description" error={show("message")}>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              maxLength={limits.message}
              value={values.message}
              onChange={update("message")}
              onBlur={blur("message")}
              placeholder="Project description"
              className={cn(fieldBase, "resize-y", borderFor("message"))}
              {...a11y("message")}
            />
          </Field>
          <p className="mt-2 text-right font-mono text-xs text-white/40" aria-hidden="true">
            {values.message.length}/{limits.message}
          </p>
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={update("website")}
          />
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={submitting}
          data-cursor="hover"
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-lime px-8 py-5 text-base font-semibold text-ink transition-colors duration-500 hover:bg-white disabled:cursor-wait disabled:opacity-70"
        >
          {submitting ? (
            <>
              <Loader2 className="size-5 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send Project Inquiry
              <ArrowUpRight className="size-5 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
            </>
          )}
        </button>
        <p className="max-w-xs text-xs leading-relaxed text-white/45">
          We only use your details to respond to your inquiry. Fields marked <span className="text-lime">*</span> are required.
        </p>
      </div>

      <div id="form-status" role="status" aria-live="polite" className="mt-6 min-h-[1.5rem]">
        <AnimatePresence mode="wait">
          {status.type === "success" && (
            <motion.p
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-3 rounded-2xl border border-lime/40 bg-lime/10 p-4 text-white"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-lime" aria-hidden="true" />
              {status.message}
            </motion.p>
          )}
          {status.type === "error" && (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-3 rounded-2xl border border-[#ff8a8a]/40 bg-[#ff8a8a]/10 p-4 text-white"
            >
              <AlertCircle className="mt-0.5 size-5 shrink-0 text-[#ff8a8a]" aria-hidden="true" />
              {status.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
