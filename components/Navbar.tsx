"use client";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
        
        {/* New Tech Logo */}
        <a href="#top" className="flex items-center gap-3 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <Image
            src="/velocity-ai-logo.png"
            alt="Velocity AI"
            width={200}
            height={60}
            className="h-12 w-auto transition-transform group-hover:scale-[1.02]"
            priority
          />
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