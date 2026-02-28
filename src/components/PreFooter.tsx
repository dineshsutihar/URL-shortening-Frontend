import { ArrowRight } from "lucide-react";

export default function PreFooter() {
  return (
    <section>
      {/* CTA Banner */}
      <div className="relative overflow-hidden bg-[hsl(257,27%,26%)]">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[hsl(180,66%,49%)] blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[hsl(180,66%,49%)] blur-3xl" />
        </div>
        <div className="relative z-10 px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Boost your links today
          </h2>
          <p className="text-gray-300 mb-8 max-w-md mx-auto text-lg">
            Join thousands of creators and businesses that trust Shortly for their link management.
          </p>
          <a
            href="/auth/register"
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(180,66%,49%)] px-10 py-4 text-base font-bold text-white shadow-xl shadow-[hsl(180,66%,49%)]/40 transition-all hover:bg-[hsl(180,66%,42%)] hover:shadow-2xl"
          >
            Get Started Free
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-4 text-sm text-gray-400">No credit card required</p>
        </div>
      </div>
    </section>
  );
}


