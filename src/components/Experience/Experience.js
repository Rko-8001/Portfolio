import React from 'react';
import { BsAwardFill } from "react-icons/bs";
const Experience = () => {
    
    const poRList = [
        {
            thing: "Teaching Assistant under Dr. Puneet Goyal",
            place: "CSE Dept IIT Ropar",
            about: "I provided guidance and support to students undertaking various web and app-based software projects as part of the devel-opment engineering curriculum."
        },
        {
            thing: "Software Engineering Intern",
            place: "Arista Networks",
            about: "I worked on band-channel combo support for the scan radio feature within the Access Point's packet capture service whileaccess point running in OpenConfig Mode. This enabled more precise and targeted wireless network traffic capture for analysis and troubleshooting purposes."
        },
    ];
    
    return (
        <>
            <section id="experience" className="bg-black text-[#ff0000]">
                <div className="container px-5 py-10 mx-auto text-center">
                    <BsAwardFill className="w-10 h-20 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                        Experience
                    </h1>
                    <div className="flex flex-wrap m-4">
                        {poRList.map((poR) => (
                            <div className="p-4 md:w-1/2 w-full">
                                <div className="h-full bg-zinc-400 bg-opacity-40 p-8 rounded">
                                    <p className="leading-relaxed text-[#ff0000] mb-6">{poR.thing}</p>
                                    <p className="leading-relaxed text-white mb-6">{poR.about}</p>
                                    <div className="inline-flex items-center">
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="text-white text-sm uppercase">
                                                {poR.place}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
export default Experience;
