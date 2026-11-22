import { services } from "@/data/services";

export const serviceOptions = [...services.map((s) => s.title), "Not sure yet"] as const;

export const budgetOptions = ["Under $5k", "$5k – $15k", "$15k – $50k", "$50k+", "Not sure yet"] as const;

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  website?: string;
};

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const limits = { name: 100, email: 200, company: 120, message: 5000 };

export function validateContact(input: Partial<ContactPayload>): ContactErrors {
  const errors: ContactErrors = {};
  const name = input.name?.trim() ?? "";
  const email = input.email?.trim() ?? "";
  const message = input.message?.trim() ?? "";

  if (name.length < 2) errors.name = "Please enter your full name.";
  else if (name.length > limits.name) errors.name = "Name is too long.";

  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL.test(email) || email.length > limits.email) errors.email = "Please enter a valid email address.";

  if ((input.company?.trim().length ?? 0) > limits.company) errors.company = "Company name is too long.";

  if (!input.service || !(serviceOptions as readonly string[]).includes(input.service))
    errors.service = "Please choose a service.";

  if (input.budget && !(budgetOptions as readonly string[]).includes(input.budget))
    errors.budget = "Please choose a valid budget range.";

  if (message.length < 20) errors.message = "Tell us a little more about your project (at least 20 characters).";
  else if (message.length > limits.message) errors.message = `Please keep your description under ${limits.message} characters.`;

  return errors;
}
