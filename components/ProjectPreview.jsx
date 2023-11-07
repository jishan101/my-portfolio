import Image from "next/image";
import { Projects } from "../utils/projects";

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
              className="card flex justify-center items-center relative z-0 w-full lg:w-[65%] min-h-[270px] my-7 sm:my-10 rounded-lg bg-back-color shadow-card overflow-hidden text-center"
            >
              <div className="m-[6%] z-10 relative">
                <h1 className="text-primary-color text-3xl font-bold mb-6">
                  {project?.title}
                </h1>
                <div className="card-content flex gap-4 justify-center items-center lg:opacity-0 mt-5">
                  <a
                    className="flex flex-col gap-1 justify-center items-center group"
                    href={project?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  priority={true}
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
