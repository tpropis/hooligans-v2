import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Hooligans Tavern — Roswell",
  description: "Food, Drinks, Sports & Good Times.",
};

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm font-semibold text-neutral-200/80 hover:text-white transition"
    >
      {label}
    </Link>
  );
}

const PHONE = "678-367-2841";
const ADDRESS_1 = "8440 Holcomb Bridge Rd, Suite 500";
const ADDRESS_2 = "Roswell, GA 30022";
const MENU_PDF = "/assets/Hooligansmenu.pdf";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body className="min-h-screen text-neutral-100 antialiased bg-glow">
        {/* Top Nav */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/assets/logo_transparent.png"
                alt="Hooligans"
                width={180}
                height={56}
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="/" label="Home" />
              <NavLink href="/menu" label="Menu" />
              <NavLink href="/events" label="Events" />
              <NavLink href="/location" label="Location" />
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${PHONE}`}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/10 transition"
              >
                Call
              </a>
              <a
                href={MENU_PDF}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[var(--brand-red)] hover:opacity-90 transition"
              >
                Order
              </a>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <Link
                href="/menu"
                className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/10 transition"
              >
                Menu
              </Link>
            </div>
          </div>
        </header>

        {/* Page */}
        <div className="relative">{children}</div>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/50">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <div className="text-sm text-neutral-400">Hooligans Tavern</div>
                <div className="mt-2 text-sm text-neutral-200/80 leading-relaxed">
                  Food, Drinks, Sports & Good Times.
                </div>
              </div>

              <div>
                <div className="text-sm text-neutral-400">Explore</div>
                <div className="mt-3 flex flex-col gap-2">
                  <Link className="text-sm text-neutral-200/80 hover:text-white" href="/menu">
                    Menu
                  </Link>
                  <Link className="text-sm text-neutral-200/80 hover:text-white" href="/events">
                    Events
                  </Link>
                  <Link className="text-sm text-neutral-200/80 hover:text-white" href="/location">
                    Location
                  </Link>
                </div>
              </div>

              <div>
                <div className="text-sm text-neutral-400">Contact</div>
                <div className="mt-3 text-sm text-neutral-200/80">
                  <span className="text-neutral-500">Phone:</span>{" "}
                  <a className="hover:text-white transition" href={`tel:${PHONE}`}>
                    {PHONE}
                  </a>
                </div>
                <div className="mt-1 text-sm text-neutral-200/80">
                  <span className="text-neutral-500">Address:</span> {ADDRESS_1}
                </div>
                <div className="text-sm text-neutral-200/80">{ADDRESS_2}</div>
              </div>
            </div>

            <div className="mt-10 text-xs text-neutral-500">
              © {new Date().getFullYear()} Hooligans Tavern. All rights reserved.
            </div>
          </div>
        </footer>

        {/* Mobile Sticky Bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/75 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 grid grid-cols-3 gap-2">
            <Link
              href="/menu"
              className="rounded-xl border border-white/15 bg-white/5 py-3 text-center text-sm font-semibold text-white hover:border-white/30 hover:bg-white/10 transition"
            >
              Menu
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="rounded-xl border border-white/15 bg-white/5 py-3 text-center text-sm font-semibold text-white hover:border-white/30 hover:bg-white/10 transition"
            >
              Call
            </a>
            <a
              href={MENU_PDF}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-[var(--brand-red)] py-3 text-center text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Order
            </a>
          </div>
        </div>

        <div className="md:hidden h-20" />
      </body>
    </html>
  );
}
