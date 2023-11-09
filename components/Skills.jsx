import Image from "next/image";
import MySkills from "../utils/my-skills";

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen min-w-full flex justify-center items-center pt-20 sm:pt-10"
    >
      <div className="flex flex-col-reverse md:flex-row">
        <div className="mt-6 sm:mt-8 md:mt-0 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {!!MySkills?.length &&
            MySkills?.map((skill) => (
              <div
                key={skill?.id}
                className="card aspect-square w-24 bg-back-color shadow-card rounded flex flex-col gap-2 justify-center items-center"
              >
                <div className="w-1/2">
                  <Image
                    src={`/skill-icons/${skill?.icon}`}
                    alt={skill?.title}
                    priority={true}
                    layout="responsive"
                    width={0}
                    height={0}
                    objectFit="contain"
                    quality={100}
                    // style={{width: '20%', height: 'auto'}}
                  />
                </div>
                <p className="leading-none">{skill?.title}</p>
              </div>
            ))}
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold stroke text-transparent md:ml-12 lg:ml-20">
          Skills
        </h1>
      </div>
    </div>
  );
};

export default Skills;
