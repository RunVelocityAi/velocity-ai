"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo - Modern tech focused */}
        <a href="#top" className="flex items-center gap-4 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 ring-1 ring-inset ring-slate-800 transition-all duration-200 group-hover:ring-[#6366f1]/60 group-hover:scale-[1.02]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] opacity-[0.08] group-hover:opacity-[0.15] transition-opacity" />
            <span className="relative font-mono text-[28px] font-semibold tracking-[-2.5px] bg-gradient-to-br from-white via-slate-100 to-white bg-clip-text text-transparent drop-shadow-sm">V</span>
            {/* Subtle tech accent dot */}
            <div className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-[#6366f1] opacity-50 blur-[1px]" />
          </div>
          <div className="flex flex-col -space-y-px">
            <div className="font-semibold text-[21px] tracking-[-1.6px] text-slate-900 transition-colors group-hover:text-[#4f46e5]">
              VelocityAI
            </div>
            <div className="text-[9px] font-medium tracking-[2.5px] text-slate-500">SACRAMENTO</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-secondary px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2"
          >
            Book a Call
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-primary px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-700"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 bg-white mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-base font-medium">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left py-2 text-slate-700 active:text-slate-900"
                >
                  {link.label}
                </button>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-primary w-full py-3.5 rounded-2xl font-semibold text-base flex items-center justify-center gap-2"
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
