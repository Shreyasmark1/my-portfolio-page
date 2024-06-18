import ThemeToggle from "@/components/day-night-theme-toggle";
import Logo from "@/components/logo";
import Link from "next/link";
import { MobileNavBg, MobileNavMenu, closeMobileMenu } from "./mobile-nav-menu";

const Header = () => {

    return (
        // This is an invisible div with relative position so that it takes up the height of the menu(because menu is absolute / fixed)
        <>
            <div className="relative w-full h-20 opacity-0 pointer-events-none"></div>
            <header id="header" className="absolute top-0 z-50 w-full h-20">
                <div className="flex items-center justify-between h-full max-w-5xl pl-6 pr-4 mx-auto border-b border-l-0 border-r-0 border-transparent select-none lg:border-r lg:border-l lg:rounded-b-xl">
                    <Logo />
                    <MobileNavBg />
                    <nav className="relative z-30 flex flex-row-reverse justify-start w-full text-sm sm:justify-end text-neutral-500 dark:text-neutral-400 sm:flex-row">
                        <MobileNavMenu />
                        <div id="menu" className="fixed top-[75px] ease-out duration-300  sm:top-0 w-full left-0 sm:py-0 pt-7 pb-4 dm:mx-0 z-40 flex-col items-end justify-start hidden h-auto text-sm sm:text-base sm:h-auto sm:relative sm:flex-row sm:flex sm:w-auto sm:pr-0 sm:pt-0">
                            <div className="absolute inset-0 top-0 right-0 block w-full h-full px-3 sm:hidden">
                                <div className="relative w-full h-full bg-white border border-dashed border-neutral-300 dark:border-neutral-700 backdrop-blur-sm rounded-xl dark:bg-neutral-950">
                                </div>
                            </div>
                            {
                                menu.map((menu, index) => (
                                    <Link
                                        onClick={closeMobileMenu}
                                        key={index}
                                        href={menu.url}
                                        className="relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-900 dark:hover:text-white">
                                        {menu.name}
                                    </Link>
                                ))
                            }
                        </div>
                        <ThemeToggle />
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;

const menu = [
    {
        "name": "Home",
        "url": "/"
    },
    {
        "name": "Posts",
        "url": "/posts"
    },
    {
        "name": "Projects",
        "url": "/projects"
    },
    {
        "name": "About",
        "url": "/about"
    }
]