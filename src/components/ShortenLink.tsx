export default function ShortenLink() {

    return (
        <div className="relative h-max bg-gray-900 border border-amber-400 rounded-xl overflow-hidden">
            <picture>
                <source media="(min-width: 768px)" srcSet="/images/bg-shorten-desktop.svg" />
                <img
                    className="w-full object-cover absolute inset-0"
                    src="/images/bg-shorten-mobile.svg"
                    alt="URL shortener background"
                />
            </picture>
            <div className="relative z-10 p-6 flex flex-col md:flex-row justify-center md:py-12 items-center space-y-4 md:space-y-0 md:space-x-4">
                <input
                    type="text"
                    name="longlink"
                    placeholder="Shorten a link here..."
                    className="w-full px-4 py-3 rounded md:w-3/4"
                />
                <button className="w-full md:w-1/5 px-5 py-3 text-xl font-semibold text-white bg-[hsl(180,66%,49%)] rounded hover:bg-opacity-80 transition-colors">
                    Shorten It!
                </button>
            </div>
        </div>
    )
}