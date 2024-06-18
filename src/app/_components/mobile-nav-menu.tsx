"use client"
import { useEffect } from "react";

declare global {
    interface Window {
        darkMode: boolean;
    }
}

export const MobileNavMenu = () => {

    useEffect(() => {
        stickyHeaderFuncionality();
        applyMenuItemClasses();
        evaluateHeaderPosition();
    },[])

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

    return (
        <>
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
        </>
    );
}

export const MobileNavBg = () => {


    return (
        <div
            id="mobileMenuBackground"
            onClick={closeMobileMenu}
            className="fixed inset-0 z-20 hidden w-screen h-screen duration-300 ease-out bg-white/90 dark:bg-neutral-950/90"
        >
        </div>
    )
}

export function closeMobileMenu() {
    document.getElementById('closeMenu')!.classList.add('hidden');
    document.getElementById('openMenu')!.classList.remove('hidden');
    document.getElementById('menu')!.classList.add('hidden');
    document.getElementById('mobileMenuBackground')!.classList.add('hidden');
}

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