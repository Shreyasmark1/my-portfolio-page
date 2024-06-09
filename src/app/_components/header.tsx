"use client"
import Logo from "@/components/logo";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect } from "react";

declare global {
    interface Window {
        darkMode: boolean;
    }
}

const Header = () => {

    const { resolvedTheme, setTheme } = useTheme()

    const stickyClasses = ['fixed', 'h-14'];
    const unstickyClasses = ['absolute', 'h-20'];
    const stickyClassesContainer = ['border-neutral-300/50', 'bg-white/80', 'dark:border-neutral-600/40', 'dark:bg-neutral-900/60', 'backdrop-blur-2xl'];
    const unstickyClassesContainer = ['border-transparent'];


    function evaluateHeaderPosition() {
        let headerElement = document.getElementById('header');

        if (window.scrollY > 16) {
            headerElement!.firstElementChild!.classList.add(...stickyClassesContainer);
            headerElement!.firstElementChild!.classList.remove(...unstickyClassesContainer);
            headerElement!.classList.add(...stickyClasses);
            headerElement!.classList.remove(...unstickyClasses);
            document.getElementById('menu')!.classList.add('top-[56px]');
            document.getElementById('menu')!.classList.remove('top-[75px]');
        } else {
            headerElement!.firstElementChild!.classList.remove(...stickyClassesContainer);
            headerElement!.firstElementChild!.classList.add(...unstickyClassesContainer);
            headerElement!.classList.add(...unstickyClasses);
            headerElement!.classList.remove(...stickyClasses);
            document.getElementById('menu')!.classList.remove('top-[56px]');
            document.getElementById('menu')!.classList.add('top-[75px]');
        }
    }

    function stickyHeaderFuncionality() {
        window.addEventListener('scroll', function () {
            evaluateHeaderPosition();
        });
    }

    function applyMenuItemClasses() {
        const menuItems = document.querySelectorAll('#menu a');
        for (let i = 0; i < menuItems.length; i++) {
            if ((menuItems[i] as HTMLAnchorElement).pathname == window.location.pathname) {
                menuItems[i].classList.add('text-neutral-900', 'dark:text-white');
            }
        }
    }

    function openMobileMenu() {
        document.getElementById('openMenu')!.classList.add('hidden');
        document.getElementById('closeMenu')!.classList.remove('hidden');
        document.getElementById('menu')!.classList.remove('hidden');
        document.getElementById('mobileMenuBackground')!.classList.add('opacity-0');
        document.getElementById('mobileMenuBackground')!.classList.remove('hidden');

        setTimeout(function () {
            document.getElementById('mobileMenuBackground')!.classList.remove('opacity-0');
        }, 1);
    }

    function closeMobileMenu() {
        document.getElementById('closeMenu')!.classList.add('hidden');
        document.getElementById('openMenu')!.classList.remove('hidden');
        document.getElementById('menu')!.classList.add('hidden');
        document.getElementById('mobileMenuBackground')!.classList.add('hidden');
    }

    function showDay(animate?: boolean) {
        document.getElementById('sun')!.classList.remove('setting');
        document.getElementById('moon')!.classList.remove('rising');

        let timeout = 0;

        if (animate) {
            timeout = 500;

            document.getElementById('moon')!.classList.add('setting');
        }

        setTimeout(function () {

            document.getElementById('moon')!.classList.add('hidden');
            document.getElementById('sun')!.classList.remove('hidden');

            if (animate) {
                document.documentElement.classList.remove('dark');
                document.getElementById('sun')!.classList.add('rising');
            }

            setTheme('light')

        }, timeout);
    }

    function showNight(animate?: boolean) {
        document.getElementById('moon')!.classList.remove('setting');
        document.getElementById('sun')!.classList.remove('rising');

        let timeout = 0;

        if (animate) {
            timeout = 500;
            document.getElementById('sun')!.classList.add('setting');
        }

        setTimeout(function () {

            document.getElementById('sun')!.classList.add('hidden');
            document.getElementById('moon')!.classList.remove('hidden');

            if (animate) {
                document.documentElement.classList.add('dark');
                document.getElementById('moon')!.classList.add('rising');
            }
            setTheme('dark')

        }, timeout);
    }

    function onDarkToggleClick() {
        document.documentElement.classList.add('duration-300');
        if (resolvedTheme === 'dark') {
            showDay(true)
        } else {
            showNight(true)
        }
    };

    // useEffect(() => {
    //     if(resolvedTheme === 'dark'){
    //         showNight(true)
    //     } else {
    //         showDay(true)
    //     }
    // },[resolvedTheme, showDay, showNight])
    const run = () => {
        stickyHeaderFuncionality();
        applyMenuItemClasses();
        evaluateHeaderPosition();
    }
    
    useEffect(() => {
        run()
    }, []);


    return (
        // This is an invisible div with relative position so that it takes up the height of the menu(because menu is absolute / fixed)
        <>
            <div className="relative w-full h-20 opacity-0 pointer-events-none"></div>
            <header id="header" className="absolute top-0 z-50 w-full h-20">
                <div className="flex items-center justify-between h-full max-w-5xl pl-6 pr-4 mx-auto border-b border-l-0 border-r-0 border-transparent select-none lg:border-r lg:border-l lg:rounded-b-xl">
                    <Logo />
                    <div
                        id="mobileMenuBackground"
                        onClick={closeMobileMenu}
                        className="fixed inset-0 z-20 hidden w-screen h-screen duration-300 ease-out bg-white/90 dark:bg-neutral-950/90"
                    >
                    </div>
                    <nav className="relative z-30 flex flex-row-reverse justify-start w-full text-sm sm:justify-end text-neutral-500 dark:text-neutral-400 sm:flex-row">
                        <div id="openMenu" onClick={openMobileMenu} className="flex flex-col items-end justify-center w-6 h-6 ml-4 cursor-pointer sm:hidden">
                            <svg className="w-8 h-8 dark:text-neutral-200" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 8h16M4 16h16"></path>
                            </svg>
                        </div>
                        <div
                            id="closeMenu"
                            onClick={closeMobileMenu}
                            className="flex-col items-end justify-center w-6 h-6 ml-4 -translate-x-1 cursor-pointer hidden">
                            <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-200" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </div>
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
                        <div id="darkToggle" onClick={onDarkToggleClick} className="relative flex items-center pl-6 ml-4 font-medium tracking-wide cursor-pointer text-neutral-800 group dark:text-white">
                            <div className="absolute left-0 flex items-center justify-center w-6 h-6 overflow-hidden border-b border-transparent horizon group-hover:border-neutral-600">
                                <svg className="absolute w-6 h-6 transition duration-700 transform ease" id="sun" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                </svg>
                                <svg className="absolute w-6 h-6 transition duration-700 transform ease hidden" id="moon" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                                </svg>
                            </div>
                            <span className="hidden sm:inline-block">
                                <span className="ml-2 dark:text-white">
                                    {resolvedTheme === 'dark' ? "Night mode" : "Day mode"}
                                </span>
                            </span>
                        </div>
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