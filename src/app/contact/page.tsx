"use client";

import { motion } from "framer-motion";
import { Mail, HelpCircle, ArrowRight, Sparkles, Send } from "lucide-react";
import { SIGNUP_URL } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#020507] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.08),_transparent_30%)]" />
      <div className="absolute inset-0 network-bg opacity-70" />
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-[#0b1721] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-20">
        <div className="mb-12 flex flex-col gap-5 sm:items-start">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300 shadow-[0_0_0_1px_rgba(56,189,248,0.08)]"
          >
            <Sparkles className="h-4 w-4 text-cyan-300" />
            Get in touch
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="font-heading text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Talk to <span className="text-cyan-400">sales</span>
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 leading-relaxed">
              Questions about custom voice pricing, agency scaling, developer APIs, or CRM integrations? We&apos;d love to connect.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="space-y-8">
            <div className="space-y-5">
              {[
                {
                  title: "Sales Inquiries",
                  email: "sales@callbox.ai",
                  href: "mailto:sales@callbox.ai",
                  icon: <Mail className="h-5 w-5 text-cyan-300" />,
                },
                {
                  title: "Developer Support",
                  email: "support@callbox.ai",
                  href: "mailto:support@callbox.ai",
                  icon: <HelpCircle className="h-5 w-5 text-cyan-300" />,
                },
              ].map((item, idx) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 + idx * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-5 text-left transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-cyan-300 shadow-[0_15px_30px_-18px_rgba(56,189,248,0.45)]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{item.email}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-cyan-300 transition group-hover:translate-x-1" />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="rounded-3xl border border-cyan-400/20 bg-cyan-500/10/20 p-5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Prefer a fast self-serve demo?</p>
                  <p className="mt-2 text-sm text-slate-300">Create a free account and start qualifying leads instantly.</p>
                </div>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
                >
                  Create free account
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-[#061017]/95 shadow-[0_40px_120px_-40px_rgba(14,116,144,0.55)]"
          >
            <div className="pointer-events-none absolute -right-10 top-10 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-10 bottom-10 h-56 w-56 rounded-full bg-cyan-300/5 blur-3xl" />
            <div className="rounded-[1.75rem] border border-cyan-400/20 bg-slate-950/30 p-8 backdrop-blur-xl">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 shadow-[0_20px_60px_-44px_rgba(56,189,248,0.5)]">
                  <Send className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Send Message</h3>
                  <p className="mt-2 text-sm text-slate-400">Let us know how we can support your pipeline goals.</p>
                </div>
              </div>

              <form className="space-y-5" action={SIGNUP_URL} method="get">
                <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Sarah Connor"
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-300 mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="sarah@cyberdyne.com"
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your lead qualification process and volume..."
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex w-full items-center justify-center gap-3 rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 via-slate-900/40 to-cyan-400/20 px-6 py-4 text-sm font-semibold text-cyan-100 shadow-[0_20px_70px_-30px_rgba(56,189,248,0.85)] transition hover:border-cyan-300 hover:text-white"
                >
                  <Send className="h-5 w-5" />
                  Send Form Inquiry
                </motion.button>

                <p className="text-center text-[11px] text-slate-500 leading-relaxed">
                  Submitting this form redirects to signup registration. Real-time webhook delivery.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
