export default function PreFooter() {
    return (
        <section>
            <div className="relative h-max bg-gray-900 overflow-hidden">
                <picture>
                    <source media="(min-width: 768px)" srcSet="/images/bg-boost-desktop.svg" />
                    <img
                        className="w-full object-cover absolute inset-0"
                        src="/images/bg-boost-mobile.svg"
                        alt="URL shortener background"
                    />
                </picture>
                <div className="relative p-6 flex flex-col justify-center py-20 items-center gap-5">
                    <h1 className="text-3xl text-white font-bold">Boost your links today</h1>
                    <button className="md:w-1/5 px-5 py-3 text-xl font-semibold text-white bg-[hsl(180,66%,49%)] rounded-3xl hover:bg-opacity-80 transition-colors">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    )
}