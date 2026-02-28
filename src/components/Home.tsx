export default function Home() {
  return (
    <section className="pt-16 pb-10 md:pt-24 md:pb-16">
      <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(180,66%,49%)] mb-4">
            URL Shortener & Link Manager
          </p>
          <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            More than just
            <br />
            <span className="text-[hsl(180,66%,49%)]">shorter</span> links
          </h1>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0">
            Build your brand's recognition and get detailed insights on how your
            links are performing across the web.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <a
              href="#shorten"
              className="rounded-lg bg-[hsl(180,66%,49%)] px-6 py-3 text-sm font-semibold text-white hover:bg-[hsl(180,66%,42%)] transition-colors"
            >
              Get Started — It's Free
            </a>
            <a
              href="/auth/login"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-gray-400 transition-colors"
            >
              Sign in
            </a>
          </div>
          <p className="mt-5 text-xs text-gray-400">
            No credit card required &nbsp;·&nbsp; Free forever plan
          </p>
        </div>

        {/* Illustration */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/images/illustration-working.svg"
            alt="Working"
            className="w-full max-w-sm md:max-w-none md:w-[110%]"
          />
        </div>
      </div>
    </section>
  );
}


