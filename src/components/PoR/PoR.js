import React from 'react';
import { poRList } from "../Assests/PoRList/PoRList";
import { BsAwardFill } from "react-icons/bs";
function PoR() {
    return (
        <>
            <section id="por" className="bg-black text-[#ff0000]">
                <div className="container px-5 py-10 mx-auto text-center">
                    <BsAwardFill className="w-10 h-20 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                        Position of Responsibilty
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

export default PoR;