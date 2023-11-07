import Image from "next/image";
import Projects from "../utils/projects";

const ProjectPreview = () => {
  return (
    <div
      id="project-preview"
      className="z-0 min-w-full min-h-screen flex justify-center items-center pt-20"
    >
      <div className="w-full">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold stroke text-transparent text-center lg:mb-14">
          Projects
        </h1>
        {!!Projects?.length &&
          Projects?.map((project) => (
            <div
              key={project?.id}
              className="card relative z-0 w-full lg:w-[65%] min-h-[270px] my-7 sm:my-10 rounded-lg bg-back-color shadow-card overflow-hidden text-center"
            >
              <div className="m-[6%] z-10 relative">
                <h1 className="text-primary-color text-3xl font-bold mb-6">
                  {project?.title}
                </h1>
                {/* <p className="card-content lg:opacity-0 mt-2 lg:mt-4">
                  {project?.description}
                </p>
                <Link href={project?.github}>
                  <a
                    target="_blank"
                    className="card-content lg:opacity-0 inline-block btn mt-4 lg:mt-5 relative after:absolute after:content-['→'] after:-right-4 hover:after:-right-6 after:top-[6px] after:text-3xl after:font-light"
                  >
                    Read More
                  </a>
                </Link> */}
                <div className="card-content flex gap-4 justify-center items-center lg:opacity-0 mt-5">
                  <a
                    className="flex flex-col gap-1 justify-center items-center group"
                    href={project?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <div className="w-1/5">
                      <svg
                        className="transition duration-1000 ease-in-out group-hover:-translate-y-2 group-hover:scale-125 group-hover:stroke-action-color group-hover:stroke-2 group-hover:transition group-hover:duration-1000 group-hover:ease-in-out feather feather-github"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--secondary-color)"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </div> */}
                    <div className="text-2xl px-5 py-2 rounded transition duration-1000 ease-in-out group-hover:text-primary-color group-hover:bg-[#38BDF8] group-hover:bg-opacity-30 group-hover:transition group-hover:duration-1000 group-hover:ease-in-out">
                      GitHub
                    </div>
                  </a>
                  <a
                    className="flex flex-col gap-1 justify-center items-center group"
                    href={project?.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <div className="w-1/5">
                      <svg
                        className="transition duration-1000 ease-in-out group-hover:-translate-y-2 group-hover:scale-125 group-hover:stroke-action-color group-hover:stroke-2 group-hover:transition group-hover:duration-1000 group-hover:ease-in-out feather feather-external-link"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--secondary-color)"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </div> */}
                    <div className="text-2xl px-5 py-2 rounded transition duration-1000 ease-in-out group-hover:text-primary-color group-hover:bg-[#38BDF8] group-hover:bg-opacity-30 group-hover:transition group-hover:duration-1000 group-hover:ease-in-out">
                      Live
                    </div>
                  </a>
                </div>
              </div>
              <div className="card-image z-[5] w-full h-full absolute top-0 left-0 bg-cover">
                <Image
                  src={`/project-thumbnails/${project?.thumbnail}`}
                  alt={project?.title}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                ></Image>
                <div className="z-[6] min-w-full min-h-full bg-[#0F172A] bg-opacity-80 absolute top-0 left-0"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectPreview;
