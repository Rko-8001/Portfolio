import React from 'react';
import me from "../Assests/Resources/me.png";
import resume from "../Assests/Resources/Resume.pdf";
function About() {

    return (
        <>
            <section id="about" className="bg-white">
                <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <div className="title-font sm:text-4xl text-3xl mb-1 font-medium text-black">
                            <h2 className="sm:text-xl ">Hey !!! My Name is</h2>
                            <h1 className='text-[#ff0000]  '>{"Yadwinder"}</h1>
                            <br className="hidden lg:inline-block" />
                            <p className="text-2xl mt-10 mb-4">
                                Web Developer | Competitive Programmer | Basketball Athlete
                            </p>
                        </div>
                        <p className="mb-8 leading-relaxed text-black">
                            Pre-final Year at IIT Ropar pursuing BTech in Computer Science and Engineering. I always have zeal to manage backbreaking events a handful of times. I take great pleasure in helping others! Eager to gain a more detailed understanding of my field by contributing to some big projects where I can utilize my problem-solving skills to solve real-life problems.
                        </p>
                        <div className="flex justify-center mt-12">
                            <a
                                href={resume}
                                download
                                className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src={me}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
export default About;