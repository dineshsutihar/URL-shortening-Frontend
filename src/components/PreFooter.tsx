export default function PreFooter() {
  return (
    <section>
      <div className="relative h-max bg-[hsl(257,27%,26%)] overflow-hidden">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/images/bg-boost-desktop.svg"
          />
          <img
            className="w-full h-full object-cover absolute inset-0"
            src="/images/bg-boost-mobile.svg"
            alt="URL shortener background"
          />
        </picture>
        <div className="relative p-6 flex flex-col justify-center py-20 items-center gap-5">
          <h1 className="text-3xl text-white text-center font-bold">
            Boost your links today
          </h1>
          <a href="#shorten">
            <button className="rounded-full px-10 py-3 mt-8 mb-20 text-lg font-semibold text-white transition-colors duration-300 bg-[hsl(180,66%,49%)] hover:bg-[hsl(180,66%,60%)] md:mt-10">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
