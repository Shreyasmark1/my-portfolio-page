import Logo from "@/components/logo";

const Footer = () => {
    return (
        <section className="text-gray-700 bg-white border-t sm:mt-20 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800">
            <div className="container flex flex-col items-center py-8 mx-auto px-7 max-w-7xl sm:flex-row">
                <Logo />
                <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-100 sm:ml-4 sm:pl-4 sm:border-l sm:border-neutral-300 dark:sm:border-neutral-700 sm:mt-0">
                    © 2024 Shreyas - Portfolio website
                </p>
                <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                    <a href="https://facebook.com/" target="_blank" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                        <span className="sr-only">Facebook</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd">
                            </path>
                        </svg>
                    </a>

                    <a href="https://instagram.com/" target="_blank" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                        <span className="sr-only">Instagram</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd">
                            </path>
                        </svg>
                    </a>

                    <a href="https://twitter.com/" target="_blank" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                        <span className="sr-only">𝕏</span>
                        <svg className="w-6 h-6 dark:stroke-black stroke-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M95 50c0 24.853-20.147 45-45 45S5 74.853 5 50 25.147 5 50 5s45 20.147 45 45Zm-51.21 2.688-21.51-28.76h16.578l14.1 18.855 17.453-18.855h4.872L55.135 45.694l22.72 30.377H61.279L45.967 55.598l-18.95 20.473h-4.873L43.79 52.688Zm-6.73-25.172h-7.616l33.63 44.967h7.616L37.06 27.516Z" fill="currentColor" />
                            <path d="M22.28 23.928v-.5h-.998l.597.8.4-.3Zm21.51 28.76.366.34.283-.306-.25-.334-.4.3Zm-4.932-28.76.4-.3-.15-.2h-.25v.5Zm14.1 18.855-.4.3.36.48.408-.44-.367-.34Zm17.453-18.855v-.5h-.219l-.148.16.367.34Zm4.872 0 .367.34.777-.84h-1.144v.5ZM55.135 45.694l-.367-.34-.282.306.249.333.4-.3Zm22.72 30.377v.5h.999l-.598-.8-.4.3Zm-16.577 0-.4.3.15.2h.25v-.5ZM45.967 55.598l.4-.3-.36-.48-.407.44.367.34Zm-18.95 20.473v.5h.218l.148-.16-.367-.34Zm-4.873 0-.367-.34-.777.84h1.144v-.5Zm7.3-48.554v-.5h-.998l.598.799.4-.3Zm7.616 0 .4-.3-.15-.2h-.25v.5Zm26.015 44.966-.4.3.15.2h.25v-.5Zm7.615 0v.5h.999l-.598-.8-.4.3ZM50 95.5c25.129 0 45.5-20.371 45.5-45.5h-1c0 24.577-19.923 44.5-44.5 44.5v1ZM4.5 50c0 25.129 20.371 45.5 45.5 45.5v-1C25.423 94.5 5.5 74.577 5.5 50h-1ZM50 4.5C24.871 4.5 4.5 24.871 4.5 50h1C5.5 25.423 25.423 5.5 50 5.5v-1ZM95.5 50C95.5 24.871 75.129 4.5 50 4.5v1c24.577 0 44.5 19.923 44.5 44.5h1ZM21.88 24.228l21.509 28.76.8-.6-21.509-28.76-.8.6Zm16.978-.8H22.28v1h16.578v-1Zm14.501 19.055L39.258 23.63l-.8.599 14.1 18.854.801-.599ZM70.044 23.59 52.592 42.443l.734.68 17.452-18.855-.734-.68Zm5.239-.16H70.41v1h4.872v-1Zm-19.78 22.605L75.65 24.268l-.734-.68-20.148 21.766.734.68Zm22.753 29.738-22.72-30.378-.801.6 22.72 30.377.8-.6Zm-16.978.799h16.578v-1H61.278v1ZM45.566 55.898 60.877 76.37l.801-.599L46.368 55.3l-.802.599ZM27.383 76.41l18.95-20.473-.733-.68-18.95 20.473.733.68Zm-5.239.16h4.872v-1h-4.872v1Zm21.278-24.223L21.777 75.731l.734.68 21.645-23.383-.734-.68ZM29.444 28.017h7.616v-1h-7.616v1Zm34.031 44.166-33.63-44.966-.801.599 33.63 44.966.801-.599Zm7.215-.2h-7.615v1h7.615v-1ZM36.66 27.816l33.63 44.966.8-.599-33.63-44.966-.8.599Z" fill="currentStroke" />
                        </svg>
                    </a>

                    <a href="https://github.com/" target="_blank" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                        <span className="sr-only">GitHub</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd">
                            </path>
                        </svg>
                    </a>

                    <a href="https://dribbble.com/" target="_blank" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                        <span className="sr-only">Dribbble</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd">
                            </path>
                        </svg>
                    </a>
                </span>
            </div>
        </section>
    );
}

export default Footer;