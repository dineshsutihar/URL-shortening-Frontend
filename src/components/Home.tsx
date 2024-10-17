export default function Home() {

    return (
        <div id="landing" className="flex flex-nowrap flex-col-reverse justify-end mt-10 md:flex-row md:justify-between md:items-center md:mt-25">
            <div id="left-landing" className="mt-14 text-center md:text-left">
                <h1 className="text-5xl xl:text-8xl md:text-4xl font-bold ">More than just shorter links</h1>
                <p className="mt-5 text-xl md:text-2xl md:w-4/6">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className="rounded-3xl w-1/2 px-5 md:w-1/3 py-3 mt-10 text-xl font-semibold text-white bg-[hsl(180,66%,49%)] md:mt-10 md:px-10">Get Started</button>
            </div>
            <div id="right-landing" className="mt-14 object-cover  md:w-4/5">
                <img src="./public/images/illustration-working.svg" alt="Working Illustration" />
            </div>
        </div>
    )
}