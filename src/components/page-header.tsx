type Props = {
    title: string,
    description: string
}

const PageHeader = ({ title, description }: Props) => {
    return (

        <div className="relative z-20 w-full mx-auto lg:mx-0">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
                {title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:mt-4 lg:mt-6 sm:leading-7 lg:leading-8 sm:text-base lg:text-lg">
                {description}
            </p>
        </div>
    );
}

export default PageHeader;