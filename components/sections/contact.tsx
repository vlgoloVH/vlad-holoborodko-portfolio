"use client";
import { ArrowUpRight, ArrowRight, Download, X } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SITE } from "@/lib/site";
import { useState } from "react";

function ContactModal({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch("https://formspree.io/f/mvznjbod", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      setStatus("done");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-line bg-bg p-8 md:p-10">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <X size={14} />
        </button>

        {status === "done" ? (
          <div className="flex flex-col gap-4 py-8 text-center">
            <p className="font-display text-2xl text-ink">Message sent!</p>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">I'll get back to you soon.</p>
          </div>
        ) : (
          <>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">— Get in touch</p>
            <h3 className="mb-8 font-display text-2xl font-semibold uppercase text-ink md:text-3xl">
              Let&apos;s talk
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs uppercase tracking-widest text-muted">Name</label>
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="rounded-lg border border-line bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-muted hover:border-accent focus:border-accent transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs uppercase tracking-widest text-muted">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="rounded-lg border border-line bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-muted hover:border-accent focus:border-accent transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs uppercase tracking-widest text-muted">Company</label>
                <input
                  name="company"
                  placeholder="Your company"
                  className="rounded-lg border border-line bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-muted hover:border-accent focus:border-accent transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs uppercase tracking-widest text-muted">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Enter your message here"
                  className="rounded-lg border border-line bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-muted hover:border-accent focus:border-accent transition-colors resize-none"
                />
              </div>
              {status === "error" && (
                <p className="font-mono text-xs text-red-500">Something went wrong. Please try again.</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="group mt-2 inline-flex w-fit items-center gap-3 rounded-full border border-line px-5 py-4 font-mono text-xs uppercase tracking-widest text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-ink disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send message"}
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
      <section id="contact" className="section-invert px-6 py-20 md:px-10 md:py-28 lg:scroll-mt-24">
        <div className="mx-auto max-w-content">
          <div className="flex flex-col gap-0 md:grid md:grid-cols-[1fr_auto] md:grid-rows-[auto_auto] md:items-center">
            <Reveal>
              <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted text-center md:text-left">
                — Get in touch
              </p>
              <h2 className="font-display text-display-lg font-semibold uppercase leading-[1.02] text-ink text-center md:text-left">
                Let&apos;s create
                <br />
                something
                <br />
                meaningful{" "}
                <ArrowUpRight className="inline-block h-[0.7em] w-[0.7em] text-accent" />
              </h2>
            </Reveal>
            <a
              href="/resume.pdf"
              download
              data-cursor="Download"
              className="group relative hidden md:flex h-44 w-44 items-center justify-center md:h-56 md:w-56 md:row-span-2 md:self-center"
            >
              <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-[spin_24s_linear_infinite] text-muted">
                <defs>
                  <path id="contact-circle" d="M 100,100 m -88,0 a 88,88 0 1,1 176,0 a 88,88 0 1,1 -176,0" fill="none" />
                </defs>
                <text fill="currentColor" className="font-mono text-[12px] uppercase tracking-[0.25em]">
                  <textPath href="#contact-circle">Download resume • Download resume • Download resume •</textPath>
                </text>
              </svg>
              <span className="glass-bg flex h-16 w-16 items-center justify-center rounded-full border border-line text-ink backdrop-blur-md transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
                <Download size={20} strokeWidth={1.5} />
              </span>
            </a>
            <Reveal delay={0.1} className="mt-6">
              <p className="max-w-lg text-sm leading-relaxed text-muted md:text-base text-center md:text-left">
                Open to senior product design roles and select freelance
                engagements — research, UX, UI or design-systems work. If you&apos;re
                solving a hard problem and need someone to make it feel obvious,
                I&apos;d like to hear about it.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mt-10 flex flex-col gap-6 border-t border-line pt-8 items-center md:flex-row md:items-center md:justify-between">
            <a
              href={`mailto:${SITE.email}`}
              data-cursor="Email"
              className="font-display text-xl text-ink transition-colors duration-300 hover:text-accent md:text-2xl"
            >
              {SITE.email}
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-line px-5 py-4 font-mono text-xs uppercase tracking-widest text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-ink"
            >
              Contact me
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
