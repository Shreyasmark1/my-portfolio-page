import Experience from "@/components/experience";
import PageHeader from "@/components/page-header";
import Link from "next/link";

const About = () => {
    return (
        <section className="relative z-20 max-w-2xl mx-auto my-12 7 lg:px-0">
            <PageHeader
                title="About Me"
                description="Hello 👋 I&apos;m an adventurous software engineer from Mangalore, India. 
                I&apos;m passionate about building new products and learning new technology."
            />

            {/* <img src="/assets/images/about.jpg" className="relative z-30 w-full my-10 rounded-xl" /> */}

            <h2 className="mb-2 text-2xl font-bold dark:text-neutral-200">Short Bio</h2>
            <p className="text-sm leading-6 text-gray-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
                I enjoy going on adventures and hiking with my friends.
                I also love all things vintage and retro.
                I have a passion for artisanal coffee, vinyl records, and indie films.
                You can often find me exploring thrift stores and attending local music festivals.
            </p>

            <h2 className="mt-5 mb-2 text-2xl font-bold lg:mt-10 sm:mt-6 dark:text-neutral-200">Career</h2>
            <p className="text-sm leading-6 text-gray-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
                After graduating college I landed an excellent job with Adobe.
                A few years later I worked for Google as a team lead on the design team.
                I am currently working for DevDojo and building some cool developer and designer tools.
            </p>

            <h2 className="mt-5 mb-2 text-2xl font-bold lg:mt-10 sm:mt-6 dark:text-neutral-200">Experience</h2>
            <Experience />
            <h2 className="mt-5 mb-2 text-2xl font-bold lg:mt-10 sm:mt-6">
                Let&apos;s Connect
            </h2>
            <p className="text-sm leading-6 text-gray-600 dark:text-neutral-400 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
                If you want to stay up to date with my work be sure to{" "}
                {/* <a href="https://twitter.com/" target="_blank" className="text-indigo-600 underline">
                    follow me on twitter
                </a>, or you can */}
                send me an { }
                <Link href="#_" className="text-indigo-600 underline">
                    email
                </Link> and I&apos;ll be sure to get back to you.
            </p>

        </section >
    );
}

export default About;