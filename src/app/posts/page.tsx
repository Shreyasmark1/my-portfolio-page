import PageHeader from "@/components/page-header";
import PostCard from "@/components/post-card";

const Posts = () => {
    return (
        <section className="relative z-20 max-w-2xl mx-auto my-12 px-7 lg:px-0">
            <PageHeader
                title="My Writing"
                description="Dive into my musings on life and tech in my latest posts; a blend of introspection and innovation.
                 Keep an eye out for fresh insights and updates!"
            />
            <div className="z-50 flex flex-col items-stretch w-full gap-5 my-8">
                {postList.map((post, index) => (
                    <PostCard 
                    key={index}
                    link={post.link} 
                    title={post.title} 
                    description={post.description} 
                    dateFormatted={post.dateFormatted} />
                ))}
            </div>
        </section>
    );
}

export default Posts;

const postList = [{
    link: "",
    title: "Title",
    description: "Description",
    dateFormatted: "14-06-24",
}]