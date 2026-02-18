import Link from "next/link";

export default function LocationPage() {
  const name = "Hooligans Tavern";
  const phone = "678-367-2841";
  const address1 = "8440 Holcomb Bridge Rd";
  const address2 = "Suite 500, Roswell, GA 30022";

  const mapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5436.304598543047!2d-84.27310202526316!3d33.98467802129656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50a82af523bbd%3A0xe54c382c01858a5f!2sHooligans%20Tavern!5e1!3m2!1sen!2sus!4v1771433147819!5m2!1sen!2sus";

  const hours = [
    { day: "Sun", open: "11:30 AM", close: "11:00 PM" },
    { day: "Mon", open: "11:30 AM", close: "11:00 PM" },
    { day: "Tue", open: "11:30 AM", close: "11:00 PM" },
    { day: "Wed", open: "11:30 AM", close: "11:00 PM" },
    { day: "Thu", open: "11:30 AM", close: "12:30 AM" },
    { day: "Fri", open: "11:30 AM", close: "12:30 AM" },
    { day: "Sat", open: "11:30 AM", close: "12:30 AM" },
  ];

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Location & Hours
            </h1>
            <p className="mt-2 text-neutral-300">
              {address1} • {address2}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${phone}`}
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
            >
              Call
            </a>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${address1} ${address2}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold hover:border-white/40 transition"
            >
              Directions
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-6">
            <div className="text-sm text-neutral-400">Hours of Operation</div>

            <div className="mt-4 space-y-3">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                >
                  <div className="text-neutral-200 font-medium">{h.day}</div>
                  <div className="text-neutral-300">
                    {h.open} – {h.close}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm text-neutral-400">Phone</div>
            <a
              className="mt-1 inline-block text-neutral-200 hover:text-white transition"
              href={`tel:${phone}`}
            >
              {phone}
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 overflow-hidden bg-neutral-900/40">
            <div className="relative w-full" style={{ paddingBottom: "62%" }}>
              <iframe
                src={mapsEmbedUrl}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Google Map"
              />
            </div>
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
