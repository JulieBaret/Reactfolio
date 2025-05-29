import Badge from "./Badge";
import UnfilledButton from "./Buttons/UnfilledButton";

const ProjectDetails = ({ project }) => {
  return (
    <div className="mt-8 text-dark-grey text-center md:text-left md:mb-4">
      <div className="flex flex-wrap items-center">
        <div className="grow-0 shrink-0 basis-auto block lg:flex w-full md:w-4/12">
          <img
            src={project.picture}
            className="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg -mb-8 md:-mb-0"
            alt={project.name}
          />
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full md:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <div className="text-3xl 2xl:text-4xl md:text-2xl font-bold mb-3 flex flex-col lg:flex-wrap lg:flex-row">
              <span className="text-red mr-2">“{project.title}”</span>
              <span className="md:text-middle-pink text-pink uppercase font-semibold text-lg md:text-2xl 2xl:text-3xl md:font-light">
                {project.type}
              </span>
            </div>
            {/* Project brief */}
            <p className="font-medium text-very-dark-grey leading-5 md:leading-6 md:mb-0 mb-3 text-base 2xl:text-xl md:text-lg">
              {project.brief}
            </p>
            <p className="text-sm md:text-base 2xl:text-lg text-dark-grey mb-6">
              {project.description}
            </p>
            {project.stack && (
              <ul className="gap-3 md:mb-3 flex flex-wrap md:justify-start justify-center mb-7">
                {project.stack.map((technology, index) => (
                  <Badge key={index} technology={technology} />
                ))}
              </ul>
            )}
            <ul className="flex flex-row gap-2 w-full md:justify-start justify-center items-center">
              {project.repo && (
                <li>
                  <UnfilledButton
                    title="Repo"
                    url={project.repo}
                    color="black"
                    filledLogo={true}
                  />
                </li>
              )}
              {project.demo ? (
                project.demo === "FIX" ? (
                  <p className="font-light p-2">Site en maintenance</p>
                ) : (
                  <li>
                    <UnfilledButton
                      title="Demo"
                      url={project.demo}
                      color="red"
                      transitionColor="middle-pink"
                      gradient={true}
                    />
                  </li>
                )
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
