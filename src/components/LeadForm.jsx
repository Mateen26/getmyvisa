'use client';

import { useMemo, useState } from 'react';

const visaOptions = [
  { value: 'investor', label: 'Investor Visa' },
  { value: 'tourist', label: 'Tourist Visa' },
];

const initialState = (defaultVisaType) => ({
  fullName: '',
  email: '',
  whatsapp: '',
  visaType: defaultVisaType ?? 'investor',
  message: '',
});

export default function LeadForm({ defaultVisaType = 'investor', smtpReady = true }) {
  const [form, setForm] = useState(() => initialState(defaultVisaType));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle' });
  const [submitting, setSubmitting] = useState(false);

  const validationRules = useMemo(
    () => ({
      fullName: {
        required: true,
        message: 'Full name is required.',
      },
      email: {
        required: true,
        pattern: /.+@.+\..+/, // basic email check
        message: 'Enter a valid email address.',
      },
      whatsapp: {
        required: true,
        message: 'WhatsApp number is required.',
      },
    }),
    []
  );

  const validate = () => {
    const nextErrors = {};
    Object.entries(validationRules).forEach(([field, rule]) => {
      const value = form[field]?.trim();
      if (rule.required && !value) {
        nextErrors[field] = rule.message;
        return;
      }
      if (rule.pattern && value && !rule.pattern.test(value)) {
        nextErrors[field] = rule.message;
      }
    });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setStatus({ state: 'submitting' });

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Failed to submit lead.');
      }

      setForm(initialState(defaultVisaType));
      setStatus({ state: 'success', message: 'Thanks! Our Dubai visa team will reach out shortly.' });
    } catch (error) {
      setStatus({ state: 'error', message: error.message || 'Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full rounded-3xl border border-red-100 bg-white p-6 shadow-xl lg:p-8">
      {!smtpReady && (
        <div className="mb-4 rounded-lg border border-yellow-400 bg-yellow-50 p-4 text-sm text-red-900" role="alert">
          Email delivery is not configured yet. Add SMTP environment variables to enable form submissions.
        </div>
      )}

      {status.state === 'success' && (
        <div
          className="mb-4 rounded-lg border border-green-500 bg-green-50 p-4 text-sm text-green-800"
          role="status"
        >
          {status.message}
        </div>
      )}

      {status.state === 'error' && (
        <div className="mb-4 rounded-lg border border-red-500 bg-red-50 p-4 text-sm text-red-800" role="alert">
          {status.message}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="block text-sm font-semibold text-red-900" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-red-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-yellow-500"
            required
            autoComplete="name"
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-red-900" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-red-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-yellow-500"
            required
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-red-900" htmlFor="whatsapp">
            WhatsApp Number
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            value={form.whatsapp}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-red-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-yellow-500"
            required
            autoComplete="tel"
            placeholder="e.g. +92 325 958 72"
          />
          {errors.whatsapp && <p className="mt-1 text-xs text-red-600">{errors.whatsapp}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-red-900" htmlFor="visaType">
            Visa Type
          </label>
          <select
            id="visaType"
            name="visaType"
            value={form.visaType}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-red-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-yellow-500"
          >
            {visaOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-red-900" htmlFor="message">
            Message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-red-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-yellow-500"
            placeholder="Share any details, timelines, or questions."
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-black shadow-md transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={submitting}
        >
          {submitting ? 'Sending…' : 'Apply Now'}
        </button>
      </form>
    </div>
  );
}

