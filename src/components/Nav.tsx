import { useState } from "react";
import { LuMenu } from "react-icons/lu";
export default function Nav() {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <header className="mt-5">
            <nav id="lg-nav" className="hidden md:flex justify-between">
                <div className="flex gap-10 flex-nowrap items-center">
                    <img src="./public/images/logo.svg " alt="Shortly" />
                    <ul className="flex gap-5 font-semibold">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>
                </div>
                <div className="flex font-semibold items-center  gap-5">
                    <button id="login">Log in</button>
                    <button id="signup" className="rounded-3xl px-5 py-2 text-white bg-[hsl(180,66%,49%)]">Sign up</button>
                </div>
            </nav>
            {/* Mobile Devices */}
            <nav className="md:hidden flex justify-between relative">
                <img src="./public/images/logo.svg " alt="Shortly" className="w-2/6" />
                <button id="menu" className="text-3xl" >
                    <LuMenu onClick={handleMenu} />
                </button>
                {menu &&
                    <div className="absolute bg-dvioletPrimary top-16 border w-full text-center p-10 text-2xl text-white rounded-xl font-extrabold leading-normal">
                        <ul className="font-semibold">
                            <li className="hover:bg-dgrayNeutral p-2 my-1 rounded-xl">Features</li>
                            <li className="hover:bg-dgrayNeutral p-2 my-1 rounded-xl">Pricing</li>
                            <li className="hover:bg-dgrayNeutral p-2 my-1 mb-5 rounded-xl">Resources</li>
                        </ul>
                        <hr />
                        <div className="flex flex-col font-semibold items-center gap-3 mt-4">
                            <button id="login">Log in</button>
                            <button id="signup" className="rounded-3xl w-full px-5 py-2 text-white bg-[hsl(180,66%,49%)]">Sign up</button>
                        </div>
                    </div>
                }

            </nav>
        </header>
    )
}