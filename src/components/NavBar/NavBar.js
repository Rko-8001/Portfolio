/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
function NavBar() {
    return (
        <>
            <header className="bg-black md:sticky top-0 z-10 ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="title-font font-medium mb-4 md:mb-0">
                        <a href="#about" className="ml-3 text-3xl">
                            <span className="text-white">Portfo</span>
                            <span className="text-[#ff0000]">lio</span>
                        </a>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l text-white md:border-white flex flex-wrap items-center text-base justify-center">
                        <a href="#projects" className="mr-5 hover:text-[#ff0000] ">
                            Projects
                        </a>
                        <a href="#experience" className="mr-5 hover:text-[#ff0000] ">
                            Experience
                        </a>
                        <a href="#skills" className="mr-5 hover:text-[#ff0000]">
                            Skills
                        </a>
                        <a href="#por" className="mr-5 hover:text-[#ff0000] ">
                            PoR
                        </a>
                    </nav>
                        <a
                            href="#contact"
                            className="inline-flex items-center font-bold bg-white border-0 py-1 px-3 focus:outline-none hover:bg-zinc-700 hover:text-white rounded text-base mt-4 md:mt-0">
                            Contact Me
                        </a>
                </div>
            </header>
        </>
    );
}
export default NavBar;