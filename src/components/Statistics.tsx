export default function Statistics() {
    return (
        <section>
            <div className=" py-10 px-5">
                <h2 className="text-3xl text-center font-bold">Advanced Statistics</h2>
                <p className="text-center mt-5 w-4/6 mx-auto">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-5 py-10 px-5 text-center">
                <div className="bg-white text-black py-10 px-5 rounded-lg w-full md:w-1/3 border">
                    <img src="./public/images/icon-brand-recognition.svg" alt="" />
                    <h3 className="text-2xl font-bold">Brand Recognition</h3>
                    <p className="mt-5">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className="bg-white text-black py-10 px-5 rounded-lg w-full md:w-1/3 border">
                    <img src="./public/images/icon-detailed-records.svg" alt="" />
                    <h3 className="text-2xl font-bold">Detailed Records</h3>
                    <p className="mt-5">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <div className="bg-white text-black py-10 px-5 rounded-lg w-full md:w-1/3 border">
                    <img src="./public/images/icon-fully-customizable.svg" alt="" />
                    <h3 className="text-2xl font-bold">Fully Customizable</h3>
                    <p className="mt-5">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>
        </section>
    )
}