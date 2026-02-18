import Link from "next/link";

export default function MenuPage() {
  const pdfPath = "/assets/Hooligansmenu.pdf";

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Menu
            </h1>
            <p className="mt-2 text-neutral-300">
              View the full menu below or open the PDF in a new tab.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={pdfPath}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold hover:border-white/40 transition"
            >
              Open PDF
            </a>
            <a
              href={pdfPath}
              download
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
            >
              Download
            </a>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40">
          {/* Desktop/Tablet: embed */}
          <div className="hidden md:block">
            <iframe
              src={pdfPath}
              className="h-[900px] w-full"
              title="Hooligans Menu PDF"
            />
          </div>

          {/* Mobile: open button (PDF embeds are annoying on phones) */}
          <div className="block md:hidden p-6">
            <p className="text-neutral-300 leading-relaxed">
              For the best mobile experience, open the menu PDF in a new tab.
            </p>

            <div className="mt-5 grid gap-3">
              <a
                href={pdfPath}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-black hover:opacity-90 transition"
              >
                Open Menu PDF
              </a>
              <a
                href={pdfPath}
                download
                className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-semibold hover:border-white/40 transition"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-sm text-neutral-300 hover:text-white">
            ← Back home
          </Link>
        </div>
      </section>
    </main>
  );
}
