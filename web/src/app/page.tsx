import Image from "next/image";
import Link from "next/link";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-100">
      {children}
    </span>
  );
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 hover:border-white/20 hover:bg-white/[0.06] transition">
      <div className="text-xl font-semibold tracking-tight">{title}</div>
      {subtitle && (
        <p className="mt-2 text-sm text-neutral-200/80 leading-relaxed">
          {subtitle}
        </p>
      )}
      {children && <div className="mt-5">{children}</div>}
    </div>
  );
}

const MENU_PDF = "/assets/Hooligansmenu.pdf";

export default function Home() {
  return (
    <main className="bg-[var(--bg)] text-neutral-100">
      {/* Banner */}
      <div className="border-b border-white/10 bg-black/60">
        <div className="mx-auto max-w-6xl px-6 py-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-[var(--brand-gold)]/30 bg-[var(--brand-gold)]/10 px-3 py-1 text-xs font-semibold text-[var(--brand-gold)]">
              Tonight
            </span>
            <div className="text-sm text-neutral-100">
              Sound Check Music Bingo{" "}
              <span className="text-neutral-500">•</span>{" "}
              <span className="text-neutral-200/80">7:00 PM</span>
            </div>
          </div>

          <Link
            href="/events"
            className="text-sm font-semibold text-neutral-100 hover:text-white transition"
          >
            See all events →
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Pill>Sports</Pill>
              <Pill>Wings</Pill>
              <Pill>Beer</Pill>
            </div>

            <h1 className="mt-7 text-6xl md:text-8xl leading-none uppercase">
              Game Day.
              <span className="block text-neutral-200/80">Wings.</span>
              <span className="block text-[var(--brand-gold)]">Cold Beer.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-neutral-200/80 leading-relaxed">
              Big screens, stacked tap wall, and food that actually hits. Built
              for fast info on mobile—menu, events, directions.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={MENU_PDF}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-[var(--brand-red)] px-7 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                View Menu PDF
              </a>
              <Link
                href="/location"
                className="rounded-xl border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/10 transition"
              >
                Directions & Hours
              </Link>
              <Link
                href="/events"
                className="rounded-xl border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/10 transition"
              >
                Events
              </Link>
            </div>

            {/* Stat strip */}
            <div className="mt-10 grid grid-cols-3 rounded-2xl border border-white/10 bg-white/[0.04] text-center text-xs md:text-sm uppercase tracking-wider">
              <div className="py-5">Big Screens</div>
              <div className="py-5 border-x border-white/10">Weekly Events</div>
              <div className="py-5">Drafts + Buckets</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/assets/restaurant.png"
                alt="Hooligans interior"
                width={1200}
                height={900}
                className="h-[420px] w-full object-cover"
                priority
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/assets/burger.png"
                  alt="Burger"
                  width={900}
                  height={600}
                  className="h-[170px] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/assets/wings.png"
                  alt="Wings"
                  width={900}
                  height={600}
                  className="h-[170px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content blocks */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card
            title="Just Tapped"
            subtitle="Rotating drafts—ask what’s new on the wall."
          >
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/assets/beer_taps.png"
                alt="Beer taps"
                width={900}
                height={600}
                className="h-[200px] w-full object-cover"
              />
            </div>
            <div className="mt-5 grid gap-2 text-sm text-neutral-200/80">
              <div className="flex items-center justify-between">
                <span className="text-neutral-100 font-semibold">Featured IPA</span>
                <span className="text-neutral-500">On tap</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-100 font-semibold">Crisp Lager</span>
                <span className="text-neutral-500">On tap</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-100 font-semibold">Seasonal</span>
                <span className="text-neutral-500">Ask bartender</span>
              </div>
            </div>
          </Card>

          <Card
            title="All-Day Specials"
            subtitle="Come early, stay late—deals during peak sports windows."
          >
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/assets/cooler.png"
                alt="Cooler"
                width={900}
                height={600}
                className="h-[200px] w-full object-cover"
              />
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm font-semibold text-neutral-100">
                Buckets + drink specials
              </span>
              <span className="rounded-full border border-[var(--brand-gold)]/25 bg-[var(--brand-gold)]/10 px-3 py-1 text-xs font-semibold text-[var(--brand-gold)]">
                Ask inside
              </span>
            </div>

            <div className="mt-3 text-sm text-neutral-200/80 leading-relaxed">
              Built for game day: quick ordering, easy specials, no clutter.
            </div>
          </Card>

          <Card
            title="Everything, Fast"
            subtitle="No hunting—menu, hours, directions in two taps."
          >
            <div className="grid gap-3">
              <Link
                href="/menu"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/10 transition"
              >
                Menu →
              </Link>
              <Link
                href="/events"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/10 transition"
              >
                Events →
              </Link>
              <Link
                href="/location"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/10 transition"
              >
                Location & Hours →
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
