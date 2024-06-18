import PageHeader from "@/components/page-header";
import ProjectsCard from "@/components/project-card";

const Projects = () => {
    return (
        <section className="relative z-20 max-w-2xl mx-auto my-12 px-7 lg:px-0">
            <PageHeader
                title="My Projects"
                description="Here are some of the current projects I've been working on. I really enjoy creating new 
                projects and coming up with new ideas. I'm always working on something new, so check back often!"
            />
            <div className="z-50 grid items-stretch w-full grid-cols-1 my-8 gap-7 sm:gap-5 sm:grid-cols-2">
                {
                    projectList.map((project, index) => (
                        <ProjectsCard
                            key={index}
                            url={project.url}
                            name={project.name}
                            image={project.image}
                            description={project.description}
                        />
                    ))
                }
            </div>
        </section>
    );
}

export default Projects;

const projectList = [
    {
        "name": "",
        "description": "",
        "image": "/projects/photo.png",
        "url": ""
    },
] 