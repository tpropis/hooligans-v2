import Link from "next/link";

const dayStyles: Record<
  string,
  { ring: string; bar: string; chip: string; time: string }
> = {
  Wednesday: {
    ring: "hover:border-emerald-400/30",
    bar: "bg-emerald-400/70",
    chip: "bg-emerald-400/10 text-emerald-200 border-emerald-400/20",
    time: "bg-emerald-400/10 text-emerald-200 border-emerald-400/20",
  },
  Thursday: {
    ring: "hover:border-sky-400/30",
    bar: "bg-sky-400/70",
    chip: "bg-sky-400/10 text-sky-200 border-sky-400/20",
    time: "bg-sky-400/10 text-sky-200 border-sky-400/20",
  },
  Weekend: {
    ring: "hover:border-amber-300/30",
    bar: "bg-amber-300/70",
    chip: "bg-amber-300/10 text-amber-200 border-amber-300/20",
    time: "bg-amber-300/10 text-amber-200 border-amber-300/20",
  },
};

function EventCard({
  day,
  time,
  title,
  description,
  badge,
}: {
  day: keyof typeof dayStyles;
  time: string;
  title: string;
  description: string;
  badge?: string;
}) {
  const s = dayStyles[day];

  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50",
        "p-7 transition",
        "hover:bg-neutral-900/70",
        s.ring,
      ].join(" ")}
    >
      {/* Left accent bar */}
      <div className={`absolute left-0 top-0 h-full w-2 ${s.bar}`} />

      {/* DAY (BIG + CLEAR) */}
      <div className="pl-3">
        <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          Event Night
        </div>

        <div className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
          {day}
        </div>

        <div
          className={[
            "mt-2 inline-block rounded-full border px-3 py-1 text-xs font-semibold",
            s.time,
          ].join(" ")}
        >
          {time}
        </div>

        {badge && (
          <span className="ml-3 inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-neutral-200">
            {badge}
          </span>
        )}

        <div className="mt-5 text-xl font-semibold tracking-tight">
          {title}
        </div>

        <p className="mt-2 text-sm text-neutral-200/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}


function MiniCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-5">
      <div className="text-sm text-neutral-400">{label}</div>
      <div className="mt-2 font-semibold text-neutral-100">{value}</div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Events & Specials
            </h1>
            <p className="mt-2 max-w-2xl text-neutral-300 leading-relaxed">
              Weekly events plus game-day energy — same info as the current site,
              but clearer and easier to scan.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
            >
              View Menu
            </Link>
            <Link
              href="/location"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold hover:border-white/40 transition"
            >
              Location & Hours
            </Link>
          </div>
        </div>

        {/* Weekly Highlights */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <EventCard
            day="Wednesday"
            time="7:00 PM"
            title="Sound Check Music Bingo"
            description="Music Bingo night — fast rounds, great prizes, and a packed room when it hits."
            badge="Weekly"
          />
          <EventCard
            day="Thursday"
            time="8:00 PM"
            title="Team Trivia"
            description="Bring a crew, grab a table, and run it back every week. Competitive but fun."
            badge="Weekly"
          />
        </div>

        {/* Weekend / Game Day */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-neutral-900/30 p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
              Weekends
            </span>
            <span className="text-xs text-neutral-400">
              When the big games are on, it feels like a different place.
            </span>
          </div>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
            Game-day mode.
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-300 leading-relaxed">
            Wall-to-wall games, big screens, and beer bucket specials during the
            busiest sports windows.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <MiniCard label="Sports" value="All the big games" />
            <MiniCard label="Specials" value="Beer buckets" />
            <MiniCard label="Vibe" value="Packed + loud" />
          </div>
        </div>

        <div className="mt-10">
          <Link href="/" className="text-sm text-neutral-300 hover:text-white">
            ← Back home
          </Link>
        </div>
      </section>
    </main>
  );
}
