export default function Footer() {
    return (
        <footer className="text-white bg-[hsl(255,11%,22%)] p-10 flex flex-col md:flex-row items-center md:items-start md:justify-center gap-8 md:gap-20 text-center">
            {/* Logo Section */}
            <div>
                <img src="./public/images/logo-white.svg" alt="Logo White" />
            </div>

            {/* Link Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <h2 className="font-semibold">Features</h2>
                    <a href="#" className="text-gray-400 hover:text-white">Link Shortening</a>
                    <a href="#" className="text-gray-400 hover:text-white">Branded Links</a>
                    <a href="#" className="text-gray-400 hover:text-white">Analytics</a>
                </div>

                <div className="flex flex-col items-center md:items-start space-y-2">
                    <h2 className="font-semibold">Resources</h2>
                    <a href="#" className="text-gray-400 hover:text-white">Blog</a>
                    <a href="#" className="text-gray-400 hover:text-white">Developers</a>
                    <a href="#" className="text-gray-400 hover:text-white">Support</a>
                </div>

                <div className="flex flex-col items-center md:items-start space-y-2">
                    <h2 className="font-semibold">Company</h2>
                    <a href="#" className="text-gray-400 hover:text-white">About</a>
                    <a href="#" className="text-gray-400 hover:text-white">Our Team</a>
                    <a href="#" className="text-gray-400 hover:text-white">Careers</a>
                    <a href="#" className="text-gray-400 hover:text-white">Contact</a>
                </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6 mt-8 md:mt-0">
                <a href="#"><img src="./public/images/icon-facebook.svg" alt="Facebook" className="w-6 h-6" /></a>
                <a href="#"><img src="./public/images/icon-twitter.svg" alt="Twitter" className="w-6 h-6" /></a>
                <a href="#"><img src="./public/images/icon-pinterest.svg" alt="Pinterest" className="w-6 h-6" /></a>
                <a href="#"><img src="./public/images/icon-instagram.svg" alt="Instagram" className="w-6 h-6" /></a>
            </div>
        </footer>
    )
}
