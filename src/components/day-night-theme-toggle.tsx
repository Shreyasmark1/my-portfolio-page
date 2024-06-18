"use client"
import { useTheme } from "next-themes";
import { useEffect } from "react";

const ThemeToggle = () => {

    const { resolvedTheme, setTheme } = useTheme()

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
        if (resolvedTheme === 'dark') showDay(true)
        else showNight(true)
    };

    useEffect(() => {
        if(resolvedTheme == "dark") showDay()
        else showNight()
    },[])

    return (
        <div suppressHydrationWarning={true} id="darkToggle" onClick={onDarkToggleClick} className="relative flex items-center pl-6 ml-4 font-medium tracking-wide cursor-pointer text-neutral-800 group dark:text-white">
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
    );
}

export default ThemeToggle;