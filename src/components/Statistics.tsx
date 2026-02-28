const CYAN = "hsl(180,66%,49%)";
const VIOLET = "hsl(257,27%,26%)";

export default function Statistics() {
  return (
    <>
      {/* ── Stats bar ── */}
      <section className="border-t border-b border-gray-100 py-10">
        <dl className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
          {[
            { value: "10M+", label: "Links shortened" },
            { value: "500M+", label: "Clicks tracked" },
            { value: "120K+", label: "Active users" },
            { value: "99.9%", label: "Uptime" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <dt className="text-3xl font-black tracking-tight" style={{ color: CYAN }}>
                {s.value}
              </dt>
              <dd className="text-sm text-gray-500">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-24 scroll-mt-20">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: CYAN }}>
            Features
          </p>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 md:text-4xl">
            Everything you need,<br />nothing you don't
          </h2>
        </div>

        <div className="grid gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Instant short links",
              body: "Paste any URL and get a clean short link in under a second. No friction, no waiting.",
            },
            {
              title: "Click analytics",
              body: "See how many times each link was clicked, with timestamps and totals in your dashboard.",
            },
            {
              title: "Custom short codes",
              body: "Choose your own code instead of a random string. Make your links easy to remember and share.",
            },
            {
              title: "Link expiry",
              body: "Set an expiry date on any link. After that date the link stops working automatically.",
            },
            {
              title: "Secure by default",
              body: "Every account is protected with JWT authentication. Your links and data are private.",
            },
            {
              title: "Full link history",
              body: "Every link you've ever created is stored in your account. Search, sort, and delete at any time.",
            },
          ].map((f) => (
            <div key={f.title} className="bg-white px-7 py-8">
              <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="py-24 scroll-mt-20 border-t border-gray-100">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: CYAN }}>
            How it works
          </p>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 md:text-4xl">
            Three steps to a shorter link
          </h2>
        </div>

        <ol className="space-y-0 divide-y divide-gray-100 border-y border-gray-100">
          {[
            {
              n: "01",
              title: "Paste your long URL",
              body: "Drop any URL — however long — into the box on this page. No account required for a quick link.",
            },
            {
              n: "02",
              title: "Get your short link instantly",
              body: "We generate a clean short link in milliseconds. Copy it, or optionally pick your own custom code.",
            },
            {
              n: "03",
              title: "Share and track",
              body: "Share the link anywhere. Log in to your dashboard to see total clicks and manage all your links.",
            },
          ].map((step) => (
            <li key={step.n} className="flex items-start gap-8 py-8">
              <span
                className="text-4xl font-black leading-none tabular-nums select-none"
                style={{ color: VIOLET, opacity: 0.15 }}
              >
                {step.n}
              </span>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-lg">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

