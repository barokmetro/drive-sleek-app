import { useState } from "react";
import { Facebook, MapPin, Mail, MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com/MOENCOEthiopiaOffical", Icon: Facebook },
  { label: "Telegram", href: "https://t.me/MOENCO_Ethiopia", Icon: Send },
  { label: "Find a branch", href: "https://maps.google.com/?q=MOENCO+Addis+Ababa", Icon: MapPin },
  { label: "Email us", href: "mailto:info@moenco.com", Icon: Mail },
  { label: "WhatsApp", href: "https://wa.me/251115503366", Icon: MessageCircle },
];

type ChatMessage = { from: "bot" | "user"; text: string };

const GREETING: ChatMessage = {
  from: "bot",
  text: "Hello! How can I help you with your Toyota or BYD today?",
};

export function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [draft, setDraft] = useState("");

  const send = (event: React.FormEvent) => {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setDraft("");
    setMessages((prev) => [
      ...prev,
      { from: "user", text },
      {
        from: "bot",
        text: "Thanks for reaching out. A MOENCO advisor will follow up shortly — you can also continue on WhatsApp for a faster reply.",
      },
    ]);
  };

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
        <div
          role="dialog"
          aria-label="MOENCO chat"
          aria-hidden={!chatOpen}
          className={`w-[min(22rem,calc(100vw-3rem))] origin-bottom-right overflow-hidden rounded-2xl border border-silver/25 bg-card shadow-2xl transition-all duration-300 ease-out ${
            chatOpen
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-3 scale-95 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div>
              <p className="font-display text-sm font-bold text-foreground">MOENCO Assist</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-silver">Team online</p>
            </div>
            <Button type="button" variant="ghost" size="icon" aria-label="Close chat" onClick={() => setChatOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="max-h-64 space-y-3 overflow-y-auto p-5">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                  message.from === "bot"
                    ? "bg-muted text-muted-foreground"
                    : "ml-auto bg-[oklch(0.62_0.16_150)] text-foreground"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <form onSubmit={send} className="flex items-center gap-2 border-t border-border p-3">
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Type your message…"
              aria-label="Chat message"
              className="w-full rounded-full border border-border bg-background px-4 py-2 text-xs text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-silver/50"
            />
            <Button
              type="submit"
              size="icon"
              aria-label="Send message"
              className="h-9 w-9 shrink-0 rounded-full bg-[oklch(0.62_0.16_150)] text-foreground hover:bg-[oklch(0.62_0.16_150)]"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>

          <a
            href="https://wa.me/251115503366"
            target="_blank"
            rel="noreferrer"
            className="block border-t border-border px-5 py-3 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-silver transition-colors hover:text-foreground"
          >
            Continue on WhatsApp
          </a>
        </div>

        <Button
          type="button"
          size="icon"
          aria-label={chatOpen ? "Close chat" : "Open chat"}
          onClick={() => setChatOpen((v) => !v)}
          className={`h-14 w-14 rounded-full bg-[oklch(0.62_0.16_150)] text-foreground transition-transform duration-300 hover:scale-105 hover:bg-[oklch(0.62_0.16_150)] ${
            chatOpen ? "" : "chat-pulse"
          }`}
        >
          {chatOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>
    </>
  );
}
