import { ProjectCard } from "./ProjectCard";
import { Project } from "./types";

export const ProjectCardList = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid md:grid-cols-2 max-w-4xl w-full mx-auto gap-10 md:gap-14">
      {projects.map((project) => {
        return <ProjectCard key={project.title} {...project} />;
      })}
    </div>
  );
};
