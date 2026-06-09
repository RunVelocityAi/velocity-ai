import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://velocity-ai-seven.vercel.app";

export const metadata: Metadata = {
  title: "Velocity AI | AI That Accelerates Modern Business",
  description: "Practical AI solutions that deliver real results. We build high-performing websites, intelligent automation, and AI strategies for modern businesses in Sacramento and beyond.",
  keywords: [
    "AI services Sacramento",
    "AI website development Sacramento",
    "business automation Sacramento",
    "custom AI solutions California",
    "Sacramento AI consulting",
    "intelligent automation",
    "Next.js websites",
    "AI chatbots for business",
    "AI strategy",
  ],
  authors: [{ name: "VelocityAI" }],
  creator: "VelocityAI",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Velocity AI | AI That Accelerates Modern Business",
    description: "Practical AI websites, automation, and strategy that deliver real results — fast.",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velocity AI | AI That Accelerates Modern Business",
    description: "Practical AI solutions that deliver real results for modern businesses.",
    images: ["/images/hero.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
        <Toaster position="top-center" richColors closeButton />

        {/* Velocity AI 24/7 Chatbot */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const html = \`
                  <div id="velocity-chatbot" style="position:fixed; top:20px; right:20px; z-index:9999;">
                    <div id="chat-minimized" onclick="toggleVelocityChat()" style="padding:14px 22px; background:#0a0a0a; border:2px solid #00d4ff; border-radius:9999px; cursor:pointer; display:flex; align-items:center; gap:12px; box-shadow:0 10px 30px rgba(0,0,0,0.5);">
                      <span style="font-size:1.5rem;">🤖</span>
                      <strong>I am your 24/7 Personal Ai Assistant</strong>
                    </div>
                    <div id="chat-full" style="display:none; width:380px; background:#112233; border:2px solid #00d4ff; border-radius:20px; box-shadow:0 15px 40px rgba(0,0,0,0.6); overflow:hidden;">
                      <div style="background:#0a1625; padding:14px 20px; display:flex; align-items:center; justify-content:space-between;">
                        <div style="display:flex; align-items:center; gap:12px;">
                          <div style="background:#00d4ff; color:#000; width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold;">AI</div>
                          <div><strong>Velocity AI</strong><br><span style="color:#88ccff;">24/7 Personal Assistant</span></div>
                        </div>
                        <button onclick="toggleVelocityChat()" style="background:none; border:none; color:#aaa; font-size:1.6rem; cursor:pointer;">−</button>
                      </div>
                      <div id="chat-messages" style="height:320px; overflow-y:auto; padding:20px; background:#1e2a44;"></div>
                      <div style="padding:15px; background:#0a1625; display:flex; gap:10px;">
                        <input type="text" id="chat-input" placeholder="Type your message..." style="flex:1; padding:12px; border:none; border-radius:30px; background:#334455; color:white;" onkeypress="if(event.key==='Enter') sendVelocityMessage()">
                        <button onclick="sendVelocityMessage()" style="background:#00d4ff; color:#000; border:none; padding:12px 20px; border-radius:30px;">Send</button>
                      </div>
                    </div>
                  </div>
                \`;
                document.body.insertAdjacentHTML('beforeend', html);
              });

              window.toggleVelocityChat = function() {
                const min = document.getElementById('chat-minimized');
                const full = document.getElementById('chat-full');
                if (full.style.display === 'none') {
                  min.style.display = 'none';
                  full.style.display = 'block';
                } else {
                  min.style.display = 'flex';
                  full.style.display = 'none';
                }
              };

              window.sendVelocityMessage = function() {
                const input = document.getElementById('chat-input');
                const messages = document.getElementById('chat-messages');
                const text = input.value.trim();
                if (!text) return;
                messages.innerHTML += \`<div style="text-align:right; margin:12px 0;"><span style="background:#00d4ff; color:#000; padding:10px 16px; border-radius:20px;">\${text}</span></div>\`;
                messages.scrollTop = messages.scrollHeight;
                input.value = '';
                setTimeout(() => {
                  let reply = "Hi! How can I help you with Velocity AI today?";
                  if (text.toLowerCase().includes("price") || text.toLowerCase().includes("cost")) reply = "Our packages start at $1,800.";
                  if (text.toLowerCase().includes("how long")) reply = "Most sites are live in 7-14 days.";
                  messages.innerHTML += \`<div style="margin:12px 0;"><span style="background:#1e2a44; padding:10px 16px; border-radius:20px;">\${reply}</span></div>\`;
                  messages.scrollTop = messages.scrollHeight;
                }, 700);
              };
            `,
          }}
        />
      </body>
    </html>
  );
}