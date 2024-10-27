export default function Statistics() {
    return (
        <section className="md:h-[65vh]">
            <div className=" py-10 px-5 mb-16">
                <h2 className="text-3xl text-center font-extrabold">Advanced Statistics</h2>
                <p className="text-center mt-5 w-4/6 mx-auto">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            {/* Container with relative positioning */}
            <div className="flex flex-col md:flex-row justify-center items-center md:space-y-0 md:space-x-5 py-10 px-5 text-center relative">
                {/* Horizontal connecting line for desktop */}
                <div className="hidden md:block absolute top-[45%] left-1/4 right-1/4 h-2 bg-cyan-400 -z-10" />

                {/* Vertical connecting line for mobile */}
                <div className="md:hidden absolute top-5 bottom-10 left-1/2 w-2 bg-cyan-400 -z-10 transform -translate-x-1/2" />

                <div className="bg-white text-black py-10 px-5 rounded-lg w-full md:w-1/3 border relative md:-top-12 mb-24">
                    <div className="bg-[hsl(257,27%,26%)] rounded-full w-16 h-16 m-auto content-center absolute -top-8 left-1/2 -translate-x-1/2 md:left-14" >
                        <img className="mx-auto w-8 h-8" src="./public/images/icon-brand-recognition.svg" alt="recognition" />
                    </div>
                    <h3 className="text-2xl font-bold">Brand Recognition</h3>
                    <p className="mt-5">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className="bg-white text-black py-10 px-5 rounded-lg w-full md:w-1/3 border relative mb-24">
                    <div className="bg-[hsl(257,27%,26%)] rounded-full w-16 h-16 m-auto content-center absolute -top-8 left-1/2 -translate-x-1/2 md:left-14" >
                        <img className="mx-auto w-8 h-8" src="./public/images/icon-detailed-records.svg" alt="Records" />
                    </div>
                    <h3 className="text-2xl font-bold">Detailed Records</h3>
                    <p className="mt-5">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <div className="bg-white text-black py-10 px-5 rounded-lg w-full md:w-1/3 border relative md:top-12">
                    <div className="bg-[hsl(257,27%,26%)] rounded-full w-16 h-16 m-auto content-center absolute -top-8 left-1/2 -translate-x-1/2 md:left-14" >
                        <img className="mx-auto w-8 h-8" src="./public/images/icon-fully-customizable.svg" alt="Customizable" />
                    </div>
                    <h3 className="text-2xl font-bold">Fully Customizable</h3>
                    <p className="mt-5">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>
        </section>
    )
}