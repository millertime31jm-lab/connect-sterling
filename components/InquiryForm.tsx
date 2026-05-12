"use client";

import { useState } from "react";

type Field =
  | {
      type: "text" | "email" | "tel";
      name: string;
      label: string;
      required?: boolean;
      placeholder?: string;
    }
  | {
      type: "select";
      name: string;
      label: string;
      options: string[];
      required?: boolean;
    }
  | {
      type: "checkbox";
      name: string;
      label: string;
    }
  | {
      type: "textarea";
      name: string;
      label: string;
      required?: boolean;
      placeholder?: string;
    };

type InquiryFormProps = {
  title: string;
  intro: string;
  subject: string;
  fields: Field[];
  submitLabel?: string;
};

const contactEmail = "hello@connectsterling.com";

export default function InquiryForm({
  title,
  intro,
  subject,
  fields,
  submitLabel = "Send Inquiry",
}: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lines = fields.map((field) => {
      const value =
        field.type === "checkbox"
          ? formData.get(field.name)
            ? "Yes"
            : "No"
          : String(formData.get(field.name) || "").trim();
      return `${field.label}: ${value || "Not provided"}`;
    });

    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    setStatus("ready");
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-slate-950">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">{intro}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => {
          if (field.type === "textarea") {
            return (
              <label key={field.name} className="md:col-span-2">
                <span className="block text-sm font-bold text-slate-800">{field.label}</span>
                <textarea
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-brand-700 focus:ring-2 focus:ring-brand-100"
                />
              </label>
            );
          }

          if (field.type === "select") {
            return (
              <label key={field.name}>
                <span className="block text-sm font-bold text-slate-800">{field.label}</span>
                <select
                  name={field.name}
                  required={field.required}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-brand-700 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="">Choose one</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            );
          }

          if (field.type === "checkbox") {
            return (
              <label key={field.name} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <input
                  type="checkbox"
                  name={field.name}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-700 focus:ring-brand-700"
                />
                <span className="text-sm font-bold leading-6 text-slate-800">{field.label}</span>
              </label>
            );
          }

          return (
            <label key={field.name}>
              <span className="block text-sm font-bold text-slate-800">{field.label}</span>
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-brand-700 focus:ring-2 focus:ring-brand-100"
              />
            </label>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="rounded-lg bg-brand-700 px-6 py-3 text-center font-extrabold text-white shadow-sm transition hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
        >
          {submitLabel}
        </button>
        <p className="text-sm text-slate-500">
          {status === "ready"
            ? "Your email app should open with the details filled in."
            : "Submissions are routed through your email app for now."}
        </p>
      </div>
    </form>
  );
}
