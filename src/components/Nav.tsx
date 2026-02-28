import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { useAuth } from "@/lib/auth-context";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="relative z-50">
      {/* Desktop */}
      <nav className="hidden md:flex items-center justify-between py-5">
        <div className="flex items-center gap-10">
          <a href="/" className="flex items-center gap-2">
            <img src="/images/logo.svg" alt="Shortly" className="h-5" />
          </a>
          <ul className="flex items-center gap-8 text-sm text-gray-600">
            <li>
              <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How it works</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <>
              <a href="/dashboard" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Dashboard
              </a>
              <button
                onClick={logout}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <a href="/auth/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Log in
              </a>
              <a
                href="/auth/register"
                className="rounded-full bg-[hsl(257,27%,26%)] px-5 py-2 text-sm font-semibold text-white hover:bg-[hsl(257,27%,20%)] transition-colors"
              >
                Sign Up
              </a>
            </>
          )}
        </div>
      </nav>

      {/* Mobile */}
      <nav className="md:hidden flex items-center justify-between py-5">
        <a href="/">
          <img src="/images/logo.svg" alt="Shortly" className="h-5" />
        </a>
        <button
          className="p-1 text-gray-600"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
        >
          {menu ? <LuX className="h-5 w-5" /> : <LuMenu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menu && (
        <div className="md:hidden absolute inset-x-0 top-full bg-[hsl(257,27%,26%)] rounded-xl text-white text-center p-8 z-50 mx-[-1.5rem]">
          <ul className="space-y-4 text-base font-semibold border-b border-white/20 pb-6 mb-6">
            <li><a href="#features" onClick={() => setMenu(false)} className="block py-1 hover:text-[hsl(180,66%,49%)] transition-colors">Features</a></li>
            <li><a href="#how-it-works" onClick={() => setMenu(false)} className="block py-1 hover:text-[hsl(180,66%,49%)] transition-colors">How it works</a></li>
          </ul>
          <div className="space-y-3">
            {isAuthenticated ? (
              <>
                <a href="/dashboard" className="block py-2 font-semibold hover:text-[hsl(180,66%,49%)] transition-colors">Dashboard</a>
                <button onClick={() => { logout(); setMenu(false); }} className="w-full rounded-full bg-[hsl(180,66%,49%)] py-3 font-semibold text-white">Log out</button>
              </>
            ) : (
              <>
                <a href="/auth/login" className="block py-2 font-semibold hover:text-[hsl(180,66%,49%)] transition-colors">Log in</a>
                <a href="/auth/register" className="block rounded-full bg-[hsl(180,66%,49%)] py-3 font-semibold text-white">Sign Up</a>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
