"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SIGNUP_URL } from "@/lib/site";

const PLANS = [
  {
    name: "Starter",
    priceMonthly: "₹4,999",
    priceAnnually: "₹3,999",
    blurb: "For solo founders testing AI calling capabilities.",
    features: ["1 active AI agent", "500 included call-minutes", "Speed-to-lead under 30s", "Integrated CRM & pipeline", "Email support"],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Growth",
    priceMonthly: "₹14,999",
    priceAnnually: "₹11,999",
    blurb: "For growing teams scaling inbound + outbound pipelines.",
    features: ["5 active AI agents", "2,500 included minutes", "Meta & Google Ads connection", "WhatsApp, SMS, & email nurture", "Lead scoring & routing rules", "Priority SDR support"],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Scale",
    priceMonthly: "Custom",
    priceAnnually: "Custom",
    blurb: "For lead agencies and high-volume organizations.",
    features: ["Unlimited active agents", "Flexible volume call-minutes", "Multi-client / agency dashboard", "Global languages support", "Advanced API & webhooks", "Dedicated success manager"],
    cta: "Talk to sales",
    highlight: false,
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");

  return (
    <div className="relative w-full overflow-hidden min-h-screen">
      {/* Header section */}
      <section className="relative mx-auto max-w-4xl px-6 pt-16 pb-12 text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
        >
          Simple, usage-based <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent">pricing</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-5 max-w-xl text-lg text-slate-300"
        >
          Start free. Scale dynamically based on call minutes and qualified leads your business actually uses.
        </motion.p>

        {/* Toggle switch */}
        <div className="mt-10 flex justify-center items-center">
          <div className="relative flex rounded-full border border-white/10 bg-white/[0.03] p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`relative z-10 px-5 py-2.5 text-xs font-bold transition-colors rounded-full ${
                billingCycle === "monthly" ? "text-background bg-white" : "text-slate-400 hover:text-white"
              }`}
            >
              Billed Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annually")}
              className={`relative z-10 px-5 py-2.5 text-xs font-bold transition-colors rounded-full ${
                billingCycle === "annually" ? "text-background bg-white" : "text-slate-400 hover:text-white"
              }`}
            >
              Billed Annually (Save 20%)
            </button>
          </div>
        </div>
      </section>

      {/* Pricing list grid */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24 z-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
          {PLANS.map((p, idx) => {
            const price = billingCycle === "monthly" ? p.priceMonthly : p.priceAnnually;
            const isGrowth = p.highlight;

            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex"
              >
                <div 
                  className={`flex flex-col w-full rounded-3xl border p-8 transition-all relative ${
                    isGrowth 
                      ? "border-accent-blue bg-white/[0.05] shadow-2xl shadow-accent-blue/5 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-b before:from-accent-blue/10 before:to-transparent before:pointer-events-none" 
                      : "border-white/5 bg-white/[0.02]"
                  }`}
                >
                  {isGrowth && (
                    <span className="absolute top-0 right-8 -translate-y-1/2 rounded-full bg-gradient-to-r from-neutral-300 to-neutral-700 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}

                  <div className="mb-6">
                    <h3 className="font-heading text-xl font-bold text-white">{p.name}</h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed min-h-[32px]">{p.blurb}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 flex items-baseline gap-1.5 border-b border-white/5 pb-6">
                    <span className="font-heading text-4xl font-extrabold text-white">{price}</span>
                    {price !== "Custom" && (
                      <span className="text-sm text-slate-500 font-medium">/mo</span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="flex-1 space-y-4 text-sm text-slate-300 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                          <Check className="h-3.5 w-3.5" />
                        </span> 
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link */}
                  <motion.a
                    href={SIGNUP_URL}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`block w-full py-3.5 rounded-xl text-center text-sm font-semibold transition-all ${
                      isGrowth
                        ? "bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-lg shadow-accent-blue/20"
                        : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    {p.cta}
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-12 text-center text-xs text-slate-500">
          All subscription tiers offer a risk-free 14-day evaluation trial. Pricing details exclude local tax regulations. Billed monthly. Cancel anytime.
        </p>
      </section>
    </div>
  );
}
