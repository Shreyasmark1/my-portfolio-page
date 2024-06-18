import Link from "next/link";

type Post = {
    link: string,
    title: string,
    description: string,
    dateFormatted: string
}

const PostCard = ({ link, title, description, dateFormatted }: Post) => {
    return (
        <Link href={link} className="relative border border-transparent border-dashed cursor-pointer p-7 group rounded-2xl">
            <div className="absolute inset-0 z-20 w-full h-full duration-300 ease-out bg-white border border-dashed dark:bg-neutral-950 rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
            <div className="absolute inset-0 z-10 w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div className="relative z-30 duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
                <h2 className="flex items-center mb-3">
                    <Link href={link} className="text-xl font-bold leading-tight tracking-tight sm:text-2xl dark:text-neutral-100">
                        {title}
                    </Link>
                    <svg className="group-hover:translate-x-0 flex-shrink-0 translate-y-0.5 -translate-x-1 w-2.5 h-2.5 stroke-current ml-1 transition-all ease-in-out duration-200  transform" viewBox="0 0 13 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                            <g id="svg" transform="translate(0.666667, 2.333333)" stroke="currentColor" stroke-width="2.4"><g>
                                <polyline className="transition-all duration-200 ease-out opacity-0 delay-0 group-hover:opacity-100" points="5.33333333 0 10.8333333 5.5 5.33333333 11">
                                </polyline>
                                <line className="transition-all duration-200 ease-out transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:ml-0" x1="10.8333333" y1="5.5" x2="0.833333333" y2="5.16666667"></line>
                            </g>
                            </g>
                        </g>
                    </svg>
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    <span>{description}</span>
                </p>
                <div className="mt-2.5 text-xs font-medium text-neutral-800 dark:text-neutral-300">
                    Posted on {dateFormatted}
                </div>
            </div>
        </Link>
    );
}

export default PostCard;