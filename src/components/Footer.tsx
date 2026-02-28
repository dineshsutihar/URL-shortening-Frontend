import { LuZap, LuGithub, LuTwitter, LuLinkedin } from "react-icons/lu";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(260,8%,14%)] text-gray-400">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-20 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(180,66%,49%)]">
                <LuZap className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-extrabold text-white">Shortly</span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs">
              A fast, reliable URL shortener with powerful analytics. Built for creators,
              developers, and businesses who care about their links.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { icon: <LuGithub className="h-5 w-5" />, href: "#", label: "GitHub" },
                { icon: <LuTwitter className="h-5 w-5" />, href: "#", label: "Twitter" },
                { icon: <LuLinkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all hover:border-[hsl(180,66%,49%)] hover:text-[hsl(180,66%,49%)]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm">
              {["Features", "Pricing", "Changelog", "Roadmap"].map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Cookie Policy", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-8 md:flex-row md:justify-between">
          <p className="text-sm">
            &copy; {year} Shortly. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Made with ❤️ using Spring Boot + React
          </p>
        </div>
      </div>
    </footer>
  );
}

