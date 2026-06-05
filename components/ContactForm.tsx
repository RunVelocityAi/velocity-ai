"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(2, "Company is required"),
  phone: z.string().optional(),
  service: z.enum(["Website", "Automation", "Consulting", "Other"]),
  message: z.string().min(20, "Please tell us a bit more (at least 20 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "Website",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSubmitted(true);
        toast.success(result.message || "Thank you! We'll be in touch within 24 hours.", {
          duration: 6000,
        });
        reset();
        
        // Reset success state after a few seconds
        setTimeout(() => setSubmitted(false), 4500);
      } else {
        toast.error(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Network error. Please try again or call us at (916) 555-0192.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-10 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
          <CheckCircle className="w-9 h-9 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-semibold text-slate-900 mb-3">Thank you!</h3>
        <p className="text-slate-600 max-w-sm mx-auto">
          Your message has been sent. A member of our team will reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
          <input
            {...register("name")}
            type="text"
            placeholder="Alex Rivera"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base placeholder:text-slate-400 focus:border-[#4f46e5]"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1.5">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Business Email</label>
          <input
            {...register("email")}
            type="email"
            placeholder="you@company.com"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base placeholder:text-slate-400 focus:border-[#4f46e5]"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1.5">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Company / Organization</label>
          <input
            {...register("company")}
            type="text"
            placeholder="Your Business Name"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base placeholder:text-slate-400 focus:border-[#4f46e5]"
          />
          {errors.company && <p className="text-red-500 text-sm mt-1.5">{errors.company.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone (optional)</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="(916) 555-0192"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base placeholder:text-slate-400 focus:border-[#4f46e5]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">I'm interested in</label>
        <select
          {...register("service")}
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base focus:border-[#4f46e5]"
        >
          <option value="Website">AI-Powered Website Development</option>
          <option value="Automation">Intelligent Automation &amp; AI Agents</option>
          <option value="Consulting">AI Strategy &amp; Consulting</option>
          <option value="Other">Something else / Not sure yet</option>
        </select>
        {errors.service && <p className="text-red-500 text-sm mt-1.5">{errors.service.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Tell us about your project or goals</label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="We're a 12-person accounting firm in Midtown looking to modernize our client intake and add automated follow-ups..."
          className="w-full resize-y min-h-[120px] rounded-3xl border border-slate-300 bg-white px-4 py-3 text-base placeholder:text-slate-400 focus:border-[#4f46e5]"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1.5">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full py-4 rounded-2xl text-base font-semibold flex items-center justify-center gap-2 disabled:opacity-80 disabled:cursor-not-allowed mt-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message & Request Consultation"
        )}
      </button>

      <p className="text-center text-xs text-slate-500 pt-1">
        We typically respond within 24 hours. Or call us directly at <a href="tel:+19165550192" className="underline hover:text-slate-700">(916) 555-0192</a>.
      </p>
    </form>
  );
}
