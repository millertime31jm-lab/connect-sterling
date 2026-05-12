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

type SubmitState = "idle" | "submitting" | "success" | "error";

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
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  function updateValue(name: string, value: string) {
    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          fields: fields.map((field) => ({
            name: field.name,
            label: field.label,
            value: values[field.name] || "",
          })),
        }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.message || "Inquiry could not be sent.");
      }

      setSubmitState("success");
      setMessage("Thanks. Your inquiry has been sent to Connect Sterling.");
      setValues(initialValues);
    } catch {
      setSubmitState("error");
      setMessage(
        "Sorry, something went wrong. Please email hello@connectsterling.com directly."
      );
    }
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
              {field.required ? <span className="text-amber-700"> *</span> : null}
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
        disabled={submitState === "submitting"}
        className="mt-7 w-full rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitState === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>

      {message ? (
        <p
          className={`mt-4 rounded-2xl p-4 text-sm leading-6 ${
            submitState === "success"
              ? "bg-emerald-50 text-emerald-900 ring-1 ring-emerald-100"
              : "bg-red-50 text-red-900 ring-1 ring-red-100"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}