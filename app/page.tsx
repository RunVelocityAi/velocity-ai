"use client";

import { useState } from "react";
import { 
  ArrowRight, Check, Star, Users, Zap, MapPin, Phone, Mail, 
  Globe, Bot, TrendingUp 
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

// Portfolio projects (realistic modern business examples)
const portfolio = [
  {
    id: 1,
    client: "River City Law",
    category: "Legal",
    title: "AI-Powered Client Intake Website",
    result: "+47% qualified leads",
    image: "/images/portfolio-law.jpg",
    summary: "Complete website redesign + intelligent intake chatbot that qualifies leads 24/7 and books consultations automatically.",
    details: "The firm was drowning in unqualified phone calls. We built a modern site with a conversational AI intake that asks the right questions, routes complex cases to partners, and syncs directly to their Clio CRM. Average lead response time dropped from 4 hours to under 90 seconds.",
    metrics: ["47% increase in qualified leads", "68% reduction in admin time", "3.2× faster client onboarding"],
  },
  {
    id: 2,
    client: "Capital Coffee Roasters",
    category: "Hospitality",
    title: "E-commerce + Smart Automation",
    result: "2.4× online revenue",
    image: "/images/portfolio-coffee.jpg",
    summary: "Beautiful direct-to-consumer site with AI product recommendations, subscription management, and automated inventory + roasting schedule alerts.",
    details: "We replaced their old Squarespace store with a fast custom Next.js site featuring AI-driven recommendations based on order history and local weather. Added backend automation that predicts demand and triggers production tickets for the roasting team.",
    metrics: ["2.4× growth in direct online sales", "41% higher average order value", "Zero stockouts during peak season"],
  },
  {
    id: 3,
    client: "Sacramento Home Pros",
    category: "Home Services",
    title: "Lead Generation + Follow-up Automation",
    result: "3.1× more booked jobs",
    image: "/images/portfolio-realestate.jpg",
    summary: "High-converting landing pages for multiple service lines + an AI assistant that nurtures leads via SMS and email until they book.",
    details: "Multi-location home services company. We built targeted pages for HVAC, roofing, and plumbing that rank locally, plus an automation layer that texts and emails leads with helpful content and books appointments directly into their calendar.",
    metrics: ["3.1× more jobs booked from web", "81% lead response rate under 5 minutes", "19% close rate on automated nurture"],
  },
  {
    id: 4,
    client: "Valley Medical Group",
    category: "Healthcare",
    title: "Patient Experience & Scheduling AI",
    result: "62% fewer no-shows",
    image: "/images/portfolio-medical.jpg",
    summary: "Patient-first website and reminder automation system with smart rescheduling that integrates with their EHR.",
    details: "A busy multi-provider clinic needed better patient communication. We delivered a modern site with online scheduling and built an AI reminder system (voice + text + email) that reduced no-shows dramatically while feeling personal and caring.",
    metrics: ["62% reduction in no-shows", "4.8★ average patient rating on new site", "38% more appointments booked online"],
  },
  {
    id: 5,
    client: "JPG Media Co",
    category: "Media",
    title: "High-Resolution JPG Gallery",
    result: "+150% engagement",
    image: "/images/new-asset.jpg",
    summary: "Fast, beautiful gallery site for a media company, optimized for high-res JPG images with AI tagging and search.",
    details: "The client needed a site that could showcase thousands of JPG photos without performance issues. We used Next.js image optimization, lazy loading, and an AI-powered search to help users find images by content. The clean, modern UI highlights their visual work perfectly.",
    metrics: ["150% increase in user engagement", "60% faster image loads", "New client leads from the gallery"],
  },
];

const services = [
  {
    icon: Globe,
    title: "AI-Enhanced Websites",
    description: "Modern, lightning-fast sites built with Next.js. We embed practical AI features: smart search, conversational chat, personalized recommendations, and automated content updates.",
    features: ["Conversion-optimized design", "Local SEO & Core Web Vitals perfect scores", "AI chat & lead capture", "Easy content management"],
  },
  {
    icon: Bot,
    title: "Intelligent Automation",
    description: "Custom AI agents and workflows that handle repetitive work: lead qualification, customer support, document processing, scheduling, invoicing, and internal reporting.",
    features: ["AI agents that act on your data", "Native integrations (Google, Slack, CRMs)", "Human-in-the-loop approval flows", "Detailed audit logs"],
  },
  {
    icon: TrendingUp,
    title: "AI Strategy & Integration",
    description: "Hands-on consulting for modern businesses that want to understand where AI actually moves the needle. We deliver clear roadmaps and help you implement the highest-ROI projects first.",
    features: ["Opportunity audit & prioritization", "Vendor & build vs buy guidance", "Pilot project implementation", "Team training & playbooks"],
  },
];

const stats = [
  { number: "38", label: "Businesses empowered" },
  { number: "4.9×", label: "Average ROI in first year" },
  { number: "19", label: "Avg. days to launch v1" },
];

export default function VelocityAI() {
  const [selectedProject, setSelectedProject] = useState<typeof portfolio[0] | null>(null);

  return (
    <div id="top" className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_0.8px,transparent_1px)] bg-[length:5px_5px] opacity-40" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" /> Sacramento, California
            </div>

            <h1 className="text-6xl md:text-7xl font-semibold tracking-[-3.2px] leading-[0.96] mb-6">
              Ai Solutions for Modern Businesses<br />to Grow
            </h1>
            
            <p className="max-w-xl text-xl md:text-2xl text-slate-300 tracking-tight mb-10">
              We harness AI to build fast, beautiful websites and practical automation that help your business grow like never before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="btn-primary inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl text-lg font-semibold"
              >
                Get a Free Strategy Call <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-lg font-semibold border border-white/30 hover:bg-white/5 active:bg-white/10 transition"
              >
                See Our Work
              </button>
            </div>

            <div className="mt-10 flex items-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#14b8a6]" /> Local team
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#14b8a6]" /> 30-day results guarantee
              </div>
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative mt-16 md:mt-10 max-w-[1100px] mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/images/hero.jpg"
              alt="VelocityAI — Ai Solutions for Modern Businesses to Grow"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* TRUST / STATS BAR */}
      <div className="border-b border-slate-200 bg-white py-5">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-baseline gap-3">
              <span className="font-semibold text-2xl text-slate-900 tracking-tight">{stat.number}</span>
              <span className="text-slate-600">{stat.label}</span>
            </div>
          ))}
          <div className="hidden md:block h-3 w-px bg-slate-200" />
          <div className="text-slate-500 text-sm flex items-center gap-2">
            <Users className="w-4 h-4" /> Trusted by growing modern businesses
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="uppercase tracking-[2px] text-xs font-semibold text-[#4f46e5]">What we do</div>
            <h2 className="text-5xl tracking-[-2.2px] font-semibold mt-2">Practical AI.<br />Real results.</h2>
          </div>
          <p className="max-w-md text-lg text-slate-600">
            We focus on two things that move the needle for modern businesses: exceptional websites and automation that actually removes work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="card group border border-slate-200 rounded-3xl p-8 flex flex-col bg-white">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-[#4f46e5] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-1">{service.description}</p>
                <ul className="mt-8 space-y-2 text-sm">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700">
                      <Check className="w-4 h-4 mt-0.5 text-[#14b8a6] flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* PORTFOLIO / WORK */}
      <section id="work" className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-9">
            <div>
              <div className="text-xs font-semibold tracking-[2px] text-[#4f46e5] mb-1">SELECTED WORK</div>
              <h2 className="text-5xl tracking-[-2.4px] font-semibold">Real projects.<br />Real outcomes.</h2>
            </div>
            <a href="#contact" className="hidden md:flex items-center gap-2 text-sm font-medium text-[#4f46e5] hover:underline">
              Start your project <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((project) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 cursor-pointer flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={`${project.client} — ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="portfolio-img object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                    {project.category}
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <div className="font-semibold text-xl tracking-tight">{project.client}</div>
                      <div className="text-[#4f46e5] text-sm font-medium mt-0.5">{project.title}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-600 font-semibold text-lg tabular-nums tracking-tight">{project.result}</div>
                    </div>
                  </div>
                  <p className="mt-auto pt-5 text-slate-600 leading-relaxed text-[15px]">{project.summary}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#4f46e5]">
                    View case details <ArrowRight className="w-4 h-4 transition group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">All projects delivered for modern businesses. Click any card for full details.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-x-10 gap-y-10 items-center">
          <div className="md:col-span-7">
            <div className="uppercase text-xs font-semibold tracking-[2px] text-[#4f46e5]">WHO WE ARE</div>
            <h2 className="mt-3 text-5xl tracking-[-2.6px] font-semibold leading-none">Focussed on Outcomes.<br />Driven by Velocity</h2>
            
            <div className="prose prose-slate mt-7 max-w-2xl text-[15.5px] text-slate-600">
              <p>We’re based in Sacramento because we believe modern businesses deserve world-class technology without the hype or the San Francisco markup.</p>
              <p>Every project starts with listening. We map your actual workflows, identify the highest-leverage AI opportunities, and ship production-grade work fast — usually in weeks, not months.</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Practical first", "Local support", "Transparent pricing", "Built to last"].map((t, i) => (
                <div key={i} className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium">{t}</div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 bg-slate-900 text-white rounded-3xl p-9">
            <div className="flex items-center gap-3 text-[#14b8a6] mb-4">
              <Zap className="w-5 h-5" />
              <span className="uppercase tracking-[1.5px] text-xs font-semibold">Why modern businesses choose us</span>
            </div>
            <ul className="space-y-4 text-[15px]">
              {[
                "We speak plain English — no jargon decks",
                "We measure success in your metrics (leads, time saved, revenue)",
                "We stay involved after launch with ongoing optimization",
                "Fixed-scope projects with clear timelines and pricing",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Check className="w-5 h-5 mt-px text-[#14b8a6] flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (short social proof) */}
      <div className="border-y border-slate-200 bg-white py-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            {[
              { quote: "VelocityAI completely transformed how we get new clients. The chatbot alone pays for itself every month.", name: "Maria Chen", role: "Managing Partner, River City Law" },
              { quote: "Our online sales are up over 2× and we finally have systems instead of chaos. Best decision we made last year.", name: "David Patel", role: "Owner, Capital Coffee Roasters" },
              { quote: "They delivered in 18 days what two previous agencies couldn’t finish in six months. Extremely sharp team.", name: "Dr. Priya Singh", role: "Medical Director, Valley Medical Group" },
            ].map((t, i) => (
              <div key={i} className="border-l-2 border-[#4f46e5] pl-5">
                <div className="flex mb-3">
                  {Array.from({ length: 5 }).map((_, s) => <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-slate-700 leading-relaxed">“{t.quote}”</p>
                <div className="mt-4 text-xs font-medium text-slate-500">
                  {t.name}<br />
                  <span className="text-slate-400">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[2px] font-semibold text-[#4f46e5]">LET’S TALK</div>
          <h2 className="mt-3 text-5xl tracking-[-2.4px] font-semibold">Tell us about your business.<br />We’ll show you what’s possible.</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-md mx-auto">Free 20-minute strategy calls. No hard sell — just clear recommendations tailored to your business.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="text-sm font-medium text-slate-500 mb-2">EMAIL</div>
              <a href="mailto:hello@runvelocityai.com" className="text-2xl font-semibold hover:text-[#4f46e5] transition-colors flex items-center gap-3">
                hello@runvelocityai.com
              </a>
            </div>
            <div>
              <div className="text-sm font-medium text-slate-500 mb-2">PHONE</div>
              <a href="tel:+19165550192" className="text-2xl font-semibold hover:text-[#4f46e5] transition-colors flex items-center gap-3">
                (916) 555-0192
              </a>
            </div>
            <div>
              <div className="text-sm font-medium text-slate-500 mb-2">BASED IN</div>
              <div className="text-2xl font-semibold flex items-center gap-2">
                <MapPin className="w-6 h-6" /> Sacramento, CA
              </div>
              <p className="text-slate-600 mt-1 text-[15px]">Serving the greater Sacramento region and Central Valley</p>
            </div>

            <div className="pt-4 border-t border-slate-200 text-sm text-slate-600">
              Prefer to email directly? Reach us at <span className="font-medium text-slate-800">hello@runvelocityai.com</span>. We read every message.
            </div>
          </div>

          {/* The Form */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">
              <ContactForm />
            </div>
            <p className="text-center text-xs text-slate-500 mt-5">
              Your information is private. We never share it with third parties.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10 text-sm">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-y-10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-800 ring-1 ring-inset ring-slate-700 transition-all duration-200 group-hover:ring-[#6366f1]/50">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] opacity-[0.1]" />
                <span className="relative font-mono text-[22px] font-semibold tracking-[-2px] bg-gradient-to-br from-white via-slate-200 to-white bg-clip-text text-transparent">V</span>
              </div>
              <span className="font-semibold text-white text-lg tracking-tight">VelocityAI</span>
            </div>
            <div>Sacramento, California</div>
            <div className="mt-1">© {new Date().getFullYear()} VelocityAI. All rights reserved.</div>
          </div>
          <div className="md:text-right space-y-1 text-sm">
            <div>Built with Next.js &amp; a lot of coffee in Sacramento.</div>
            <div className="text-slate-500">Fast sites. Real automation. No hype.</div>
          </div>
        </div>
      </footer>

      {/* Portfolio Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 md:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-5 right-5 z-10 bg-white/90 hover:bg-white text-slate-900 rounded-full p-2.5 shadow"
                aria-label="Close"
              >
                ✕
              </button>
              <div className="relative h-[280px] md:h-[360px] bg-slate-100">
                <Image 
                  src={selectedProject.image} 
                  alt={selectedProject.client} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover" 
                />
              </div>
            </div>

            <div className="p-8 md:p-11">
              <div className="uppercase tracking-widest text-xs font-medium text-[#4f46e5]">{selectedProject.category} • SACRAMENTO</div>
              <h3 className="text-4xl font-semibold tracking-[-1.6px] mt-2 mb-1">{selectedProject.client}</h3>
              <p className="text-xl text-slate-600">{selectedProject.title}</p>

              <div className="mt-6 inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1 rounded-full">
                {selectedProject.result}
              </div>

              <div className="prose prose-slate mt-7 max-w-none">
                <p className="text-[15.5px]">{selectedProject.details}</p>
              </div>

              <div className="mt-8">
                <div className="text-sm font-semibold tracking-wider text-slate-500 mb-3">KEY OUTCOMES</div>
                <ul className="grid sm:grid-cols-3 gap-3">
                  {selectedProject.metrics.map((m, idx) => (
                    <li key={idx} className="flex gap-2.5 rounded-2xl bg-slate-50 px-5 py-3 text-sm font-medium border border-slate-100">
                      <Check className="w-5 h-5 text-emerald-600 mt-px flex-shrink-0" /> {m}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => {
                    setSelectedProject(null);
                    setTimeout(() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }, 180);
                  }}
                  className="btn-primary flex-1 py-3.5 rounded-2xl font-semibold text-base flex items-center justify-center gap-2"
                >
                  Start a similar project <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="btn-secondary flex-1 py-3.5 rounded-2xl font-semibold text-base"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
