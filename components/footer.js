import Link from "next/link";

const Footer = () => {
    return (
        <footer class="bg-[#050619] text-gray-100 py-12 mt-20 md:mt-28 lg:mt-32 px-20">
            <div class="container mx-auto flex justify-between flex-wrap">
                <div class="w-full flex-none md:w-auto text-center md:text-left mb-4 md:mb-0">
                    <span class="font-bold text-xl tracking-wider">Chokbulls</span>
                </div>
                <div class="w-full mt-16 md:mt-0 flex justify-between h-[120px] md:h-0 flex-col md:flex-row text-gray-400 text-base font-semibold md:w-auto text-center md:text-right">
                    <Link class="mr-4 hover:text-white transition-all duration-400" href="/">Home</Link>
                    <Link class="mr-4 hover:text-white transition-all duration-400" href="/">Gallery</Link>
                    <Link class="mr-4 hover:text-white transition-all duration-400" href="/">Contact</Link>
                </div>
            </div>
            <hr className="mt-20" />
            <h1 className="text-sm text-gray-400 font-semibold mt-10 text-center md:text-right">&copy; Chokbulls Inc. All rights reserved</h1>
        </footer>
    )
}

export default Footer;