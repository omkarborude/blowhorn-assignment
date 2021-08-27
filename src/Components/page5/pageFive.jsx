import { BlogsRow } from "./BlogsRow";
import "./pagefive.css";
import { ProjectCard } from "./ProjectCard";

export const PageFive = () => {
  return (
    <div className="project-page-main-div">
      <div className="project-page-tag">
        <h1>The Project Blog</h1>
        <p>Design and layouts to help you with your app.</p>
      </div>
      <ProjectCard />
      <BlogsRow />
    </div>
  );
};
