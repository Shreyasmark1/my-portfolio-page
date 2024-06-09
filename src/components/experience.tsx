import Image from "next/image";

const Experience = () => {

    const experiences = [
        {
            "dates": "September 2022 · Present",
            "role": "Full-stack Developer",
            "company": "Devappsys",
            "description": "Developed application with react and springboot",
            "logo": "https://www.devappsys.com/images/logo.png"
        },
    ]

    return (
        <div className="px-5 py-10">
            {experiences.map((experience) => (
                /* <ForEach collection="experiences" as="experience">
                
                <If condition="loop == 1 || loop == 2">
                    <div className="pb-10 border-l border-gray-200 dark:border-neutral-700">
                </If>

                

                <If condition="loop == 1 || loop == 2">
                    </div>
                </If>
            
            </ForEach> */
                <div className="relative flex flex-col justify-start pl-12">

                    <div
                        className="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                        <Image
                            src={experience.logo}
                            alt={experience.company}
                            className="w-8 h-8"
                            width={100}
                            height={100}
                        />
                    </div>

                    <p className="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest">{experience.dates}</p>
                    <h3 className="my-1 text-lg font-bold dark:text-neutral-100">{experience.role}</h3>
                    <p className="mb-1 text-sm font-medium dark:text-neutral-300">{experience.company}</p>
                    <p className="text-sm font-light text-neutral-600 dark:text-neutral-400">{experience.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Experience;