import { useState } from "react";
import { Facebook, MapPin, Mail, MessageCircle, X } from "lucide-react";

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "Find a branch", href: "https://maps.google.com/?q=MOENCO+Addis+Ababa", Icon: MapPin },
  { label: "Email us", href: "mailto:info@moenco.com", Icon: Mail },
  { label: "WhatsApp", href: "https://wa.me/251115503366", Icon: MessageCircle },
];

export function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 left-0 z-40 hidden flex-col overflow-hidden rounded-r-2xl border border-l-0 border-silver/20 bg-[#3a1417]/95 backdrop-blur-md sm:flex">
        {SOCIALS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="grid h-11 w-11 place-items-center text-foreground/80 transition-all duration-300 hover:bg-[#4d1a1e] hover:text-foreground"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {chatOpen && (
          <div className="w-72 rounded-2xl border border-silver/25 bg-card p-4 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.95)]">
            <p className="font-display text-sm font-bold text-foreground">Chat with MOENCO</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Our sales and service team replies on WhatsApp within working hours,
              Monday to Saturday.
            </p>
            <a
              href="https://wa.me/251115503366"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[oklch(0.62_0.16_150)] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-foreground"
            >
              Start a conversation
            </a>
          </div>
        )}
        <button
          aria-label={chatOpen ? "Close chat" : "Open chat"}
          onClick={() => setChatOpen((v) => !v)}
          className={`grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.62_0.16_150)] text-foreground transition-transform duration-300 hover:scale-105 ${
            chatOpen ? "" : "chat-pulse"
          }`}
        >
          {chatOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>
    </>
  );
}
