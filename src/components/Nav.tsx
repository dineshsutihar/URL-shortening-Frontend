import { LuMenu } from "react-icons/lu";
export default function Nav() {
    return (
        <header className="mt-5">
            <nav id="lg-nav" className="hidden md:flex justify-between">
                <div className="flex gap-10 flex-nowrap items-center">
                    <img src="./public/images/logo.svg " alt="Shortly" />
                    <ul className="flex gap-5 font-semibold">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Resourses</li>
                    </ul>
                </div>
                <div className="flex font-semibold items-center  gap-5">
                    <button id="login">Log in</button>
                    <button id="signup" className="rounded-3xl px-5 py-2 text-white bg-[hsl(180,66%,49%)]">Sign up</button>
                </div>
            </nav>
            <nav className="sm:hidden flex justify-between ">
                <img src="./public/images/logo.svg " alt="Shortly" className="w-2/6" />
                <button id="menu" className="text-3xl" >
                    <LuMenu />
                </button>
            </nav>
        </header>
    )
}