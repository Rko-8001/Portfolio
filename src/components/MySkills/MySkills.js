import React from 'react';
import { skillsList } from "../Assests/SkillsList/SkillsList";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { HiChip } from "react-icons/hi";
function MySkills() {
    return (
        <>
            <section id="skills" className="bg-white text-[#ff0000]">
                <div className="container px-5 py-10 mx-auto">
                    <div className="text-center mb-9">
                        <HiChip className="w-10  h-20 inline-block mb-4" />
                        <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
                            My Skills &amp; Technologies
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-black mx-auto">
                            I'm passionate coder as well as web developer . Currently I'm brushing up my backend skills and polishing DSA. Until now, I have learned :
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2-mx-2">
                        {skillsList.map((lang) => (
                            <div key={lang} className="p-2 sm:w-1/2 w-full">
                                <div className="bg-zinc-800 rounded flex p-4 h-full items-center">
                                    <BsFillHandThumbsUpFill className="text-zinc-400 w-6 h-6 flex-shrink-0 mr-4" />
                                    <span className="title-font font-medium text-white">
                                        {lang}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default MySkills;