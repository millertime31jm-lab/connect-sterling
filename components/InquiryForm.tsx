"use client";

import { FormEvent, useMemo, useState } from "react";

type FieldType = "text" | "email" | "tel" | "select" | "textarea";

type InquiryField = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
};

type InquiryFormProps = {
  title: string;
  description?: string;
  fields: InquiryField[];
};

const CONNECT_STERLING_EMAIL = "hello@connectsterling.com";

export default function InquiryForm({
  title,
  description,
  fields,
}: InquiryFormProps) {
  const initialValues = useMemo(() => {
    return fields.reduce<Record<string, string>>((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {});
  }, [fields]);

  const [values, setValues] = useState<Record<string, string>>(initialValues);

  function updateValue(name: string, value: string) {
    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Connect Sterling Inquiry: ${title}`);

    const body = encodeURIComponent(
      fields
        .map((field) => `${field.label}: ${values[field.name] || ""}`)
        .join("\n\n")
    );

    window.location.href = `mailto:${CONNECT_STERLING_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-stone-200"
    >
      <div>
        <h3 className="text-2xl font-bold tracking-tight text-slate-950">
          {title}
        </h3>
        {description ? (
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {description}
          </p>
        ) : null}
      </div>

      <div className="mt-6 grid gap-5">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2">
            <span className="text-sm font-semibold text-slate-800">
              {field.label}
              {field.required ? (
                <span className="text-amber-700"> *</span>
              ) : null}
            </span>

            {field.type === "textarea" ? (
              <textarea
                required={field.required}
                value={values[field.name] || ""}
                onChange={(event) => updateValue(field.name, event.target.value)}
                rows={5}
                className="rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
              />
            ) : field.type === "select" ? (
              <select
                required={field.required}
                value={values[field.name] || ""}
                onChange={(event) => updateValue(field.name, event.target.value)}
                className="rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
              >
                <option value="">Select one</option>
                {(field.options || []).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                required={field.required}
                type={field.type}
                value={values[field.name] || ""}
                onChange={(event) => updateValue(field.name, event.target.value)}
                className="rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
              />
            )}
          </label>
        ))}
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-900"
      >
        Open Email to Send Inquiry
      </button>

      <p className="mt-4 text-xs leading-5 text-slate-500">
        This opens your email app with the message filled in so you can review and send it.
      </p>
    </form>
  );
}