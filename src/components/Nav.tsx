import { useState } from "react";
import { LuMenu } from "react-icons/lu";
export default function Nav() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="mt-5">
      <nav id="lg-nav" className="hidden md:flex justify-between">
        <div className="flex gap-10 flex-nowrap items-center">
          <img src="./public/images/logo.svg " alt="Shortly" />
          <ul className="flex gap-5 font-semibold cursor-pointer ">
            <li className="hover:text-dcyanPrimary">Features</li>
            <li className="hover:text-dcyanPrimary">Pricing</li>
            <li className="hover:text-dcyanPrimary">Resources</li>
          </ul>
        </div>
        <div className="flex font-semibold items-center gap-5">
          <a href="/auth/login" id="login">
            Log in
          </a>
          <a
            href="/auth/register"
            id="signup"
            className="rounded-3xl px-5 py-2 text-white bg-[hsl(180,66%,49%)]"
          >
            Sign up
          </a>
        </div>
      </nav>
      {/* Mobile Devices */}
      <nav className="md:hidden flex justify-between relative">
        <img src="./public/images/logo.svg " alt="Shortly" className="w-2/6" />
        <button id="menu" className="text-3xl">
          <LuMenu onClick={handleMenu} />
        </button>
        {menu && (
          <div className="absolute backdrop-blur-md top-16 border w-full text-center p-10 text-2xl text-black rounded-xl font-extrabold leading-normal">
            <ul className="font-semibold">
              <li className="hover:bg-[hsl(180,66%,49%)] p-2 my-1 rounded-3xl">
                Features
              </li>
              <li className="hover:bg-[hsl(180,66%,49%)] p-2 my-1 rounded-3xl">
                Pricing
              </li>
              <li className="hover:bg-[hsl(180,66%,49%)]  p-2 my-1 mb-5 rounded-3xl">
                Resources
              </li>
            </ul>
            <hr />
            <div className="flex flex-col font-semibold items-center gap-3 mt-4">
              <a href="/auth/login" id="login" className="px-4 py-2">
                Log in
              </a>
              <a
                href="/auth/register"
                id="signup"
                className="rounded-3xl w-full px-5 py-2 text-white bg-[hsl(180,66%,49%)] text-center"
              >
                Sign up
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
