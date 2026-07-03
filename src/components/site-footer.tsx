import Link from "next/link";
import { APP_NAME, TAGLINE, NAV_LINKS, LOGIN_URL, SIGNUP_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border border-white/10 bg-zinc-900/90 relative overflow-hidden m-4 md:m-8 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl">
      {/* Footer background glow */}
      <div className="pointer-events-none absolute bottom-0 right-[15%] h-[250px] w-[250px] rounded-full bg-accent-purple opacity-5 blur-[90px]" />
      
      <div className="mx-auto max-w-6xl px-6 py-14 relative z-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 font-heading font-bold tracking-tight text-white group">
              <span className="relative flex h-9 w-11 items-center justify-center rounded-lg transition-transform group-hover:scale-105">
                <svg viewBox="0 0 44 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerWaveGrad" x1="0" y1="0" x2="44" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="50%" stopColor="#5eead4" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="10" width="2.5" height="8" rx="1.25" fill="url(#footerWaveGrad)" opacity="0.7"/>
                  <rect x="4" y="6" width="2.5" height="16" rx="1.25" fill="url(#footerWaveGrad)" opacity="0.85"/>
                  <rect x="8" y="2" width="2.5" height="24" rx="1.25" fill="url(#footerWaveGrad)"/>
                  <path d="M22 4 L26 14 L22 24 L18 14 Z" fill="url(#footerWaveGrad)" />
                  <rect x="33.5" y="2" width="2.5" height="24" rx="1.25" fill="url(#footerWaveGrad)"/>
                  <rect x="37.5" y="6" width="2.5" height="16" rx="1.25" fill="url(#footerWaveGrad)" opacity="0.85"/>
                  <rect x="41.5" y="10" width="2.5" height="8" rx="1.25" fill="url(#footerWaveGrad)" opacity="0.7"/>
                </svg>
              </span>
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent font-extrabold tracking-tight">
                {APP_NAME}
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              {TAGLINE} — ads, leads, AI voice qualifying, and automatic follow-up nurture in one platform.
            </p>
            {/* Social Links */}
            <div className="mt-5 flex items-center gap-4 text-slate-500">
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="GitHub">
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-white tracking-wider uppercase">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-white tracking-wider uppercase">Get started</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><a href={SIGNUP_URL} className="hover:text-white transition-colors">Create account</a></li>
              <li><a href={LOGIN_URL} className="hover:text-white transition-colors">Dashboard login</a></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Talk to sales</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-white tracking-wider uppercase">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How it works</Link></li>
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-500 sm:flex-row">
          <span>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</span>
          <span>Built on the composable AI Sales OS.</span>
        </div>
      </div>
    </footer>
  );
}
