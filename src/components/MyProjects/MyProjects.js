import React from 'react';
import { projectList } from "../Assests/ProjectsList/ProjectsList";
import { HiCode } from "react-icons/hi";
function MyProjects() {
    return (

        <>
            <section id="projects" className="text-[#ff0000] bg-black body-font">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-20">
                        <HiCode className="mx-auto inline-block h-20 w-10 mb-4" />
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                            Projects I've Contributed To
                        </h1>

                    </div>
                    <div className="flex flex-wrap -m-4">
                        {projectList.map((project) => (
                            <a
                                href={project.link}
                                key={project.subtitle}
                                className="sm:w-1/2 w-100 p-2 ">
                                <div className="flex relative">
                                    <div className="px-8 py-10 relative z-10 w-full rounded bg-zinc-700 ">
                                        <h1 className="title-font text-lg font-medium text-[#ff0000]mb">
                                            {project.title}
                                        </h1>
                                        <h2 className="tracking-widest text-sm title-font font-medium text-white mb-4">
                                            {project.subtitle}
                                        </h2>
                                        <p className="leading-relaxed text-white">{project.description}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default MyProjects;