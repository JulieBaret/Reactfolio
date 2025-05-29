/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ProjectDetails from "../components/ProjectDetails";
import { projects } from "../info";

const Projects = () => {
  if (!projects.length) return null;

  const projectContainerStyle = css`
    display: flex;
    flex-direction: column;
    width: 90vw;
    align-self: center;
    margin-top: 10em;
  `;

  return (
    <section id="projects" className="mb-0" css={projectContainerStyle}>
      <div className="text-4xl font-extrabold text-red lg:text-5xl 2xl:text-6xl">
        Personal work
      </div>

      <div>
        {projects.map((project, index) => (
          <ProjectDetails key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
