# VelocityAI — Sacramento

Modern one-page professional website for **VelocityAI** — Empowering Modern Businesses to Lead with AI. An AI services company based in Sacramento, California.

**Live site:** https://runvelocityai.com
**Contact:** hello@runvelocityai.com | (916) 555-0192

Built with **Next.js 16 + Tailwind CSS**, fully responsive, fast, and SEO-optimized. Includes a working contact form that sends real emails.

## Features

- Hero with strong call-to-action and custom hero image (Grok Imagine)
- Services section (AI Websites, Intelligent Automation, Strategy & Integration)
- Portfolio with 4 detailed Sacramento case studies + modal lightbox
- About section with local focus and values
- Fully functional contact form with validation (Zod + React Hook Form)
- Real email sending via Resend (with graceful dev-mode fallback)
- Excellent SEO: metadata, Open Graph, Twitter cards, JSON-LD LocalBusiness + services
- Mobile-first responsive design with smooth mobile menu
- Subtle, professional animations (Framer Motion)
- Fast performance (Next.js Image, minimal deps, clean Tailwind)

## Quick Start (Run Locally)

```bash
# 1. Install dependencies (already done if you just cloned)
npm install

# 2. (Recommended) Set up email sending for the contact form
cp .env.example .env.local
# Then edit .env.local with your Resend key + hello@runvelocityai.com
# (see "Email / Contact Form Setup" section below for full instructions including Resend domain verification)

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Email / Contact Form Setup (Important)

The contact form is production-ready and now configured for your real domain.

1. In Google Workspace, make sure `hello@runvelocityai.com` is created.
2. Sign up for a free account at [resend.com](https://resend.com)
3. Copy `.env.example` → `.env.local`
4. Add your values:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
   CONTACT_EMAIL=hello@runvelocityai.com
   ```
5. **Critical**: In the Resend dashboard, add and verify the domain `runvelocityai.com`. Follow the DNS instructions (add the records at your domain registrar). This allows sending from `hello@runvelocityai.com` with a professional "From" name.

**Dev mode fallback**: If `RESEND_API_KEY` is missing, submissions are logged to the terminal instead of sending. Perfect for development.

Once verified in Resend, test the contact form on the site — it will send a nicely formatted email to your Google Workspace inbox.

## Project Structure

```
app/
  layout.tsx          # SEO, fonts, Toaster, JSON-LD
  page.tsx            # The entire one-page site
  api/contact/route.ts # Server action that sends email via Resend
components/
  Navbar.tsx
  ContactForm.tsx
public/images/        # Custom Grok Imagine hero + portfolio visuals
```

## Customization

- **Business name / contact info**: Edit in `app/page.tsx`, `layout.tsx`, and the API route.
- **Colors**: Update CSS variables in `app/globals.css` (primary indigo + teal accent).
- **Portfolio**: Replace images in `public/images/` and update the `portfolio` array in `app/page.tsx`.
- **Domain / OG image**: Update `siteUrl` and metadata in `app/layout.tsx`.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion (light animations)
- React Hook Form + Zod (validation)
- Resend (transactional email)
- Sonner (toasts)
- Lucide icons
- Next.js Image (optimized custom visuals)

## Deployment

Deploy anywhere Next.js is supported (Vercel is easiest).

Remember to add your `RESEND_API_KEY` and `CONTACT_EMAIL` environment variables in your hosting dashboard.

---

Built for modern businesses that want practical AI, not hype.
