export default function Home() {

    return (
        <div id="landing" className="flex flex-nowrap flex-col-reverse justify-end px-6 mt-10 md:flex-row md:justify-between md:items-center md:mt-16 lg:h-[80vh] font-poppins">
            <div id="left-landing" className="mt-14 text-center md:text-left md:flex-1 md:pr-8">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">More than just shorter links</h1>
            <p className="mt-5 text-lg text-gray-500 sm:text-xl md:text-2xl md:max-w-[90%]">Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <button className="rounded-full px-10 py-3 mt-8 mb-20 text-lg font-semibold text-white transition-colors duration-300 bg-[hsl(180,66%,49%)] hover:bg-[hsl(180,66%,60%)] md:mt-10">Get Started</button>
            </div>
            <div id="right-landing" className="md:flex-1 lg:flex-none lg:w-1/2">
            <img 
            src="/images/illustration-working.svg" 
            alt="Working Illustration" 
            className="w-full object-cover md:max-w-none md:w-[120%] lg:w-full"
            />
            </div>
        </div>
    )
}