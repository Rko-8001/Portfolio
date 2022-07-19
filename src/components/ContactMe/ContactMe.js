/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FiInstagram } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import emailjs from "emailjs-com";
import InputField from './InputField';
import TextareaField from './TextareaField';
import mssg from "../Assests/Resources/message.webp";
function ContactMe() {

    const [values, setValues] = useState({
        fullName: '',
        email: '',
        role: '',
        message: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('rko', 'portfoliotemp', values, 'BYU6hNUZq-q5O0Y9s')
            .then(response => {
                console.log('SUCCESS!', response);
                setValues({
                    fullName: '',
                    email: '',
                    role: '',
                    message: ''
                });
            }, error => {
                console.log('FAILED...', error);
            });
    }
    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <>

            <section className='h-screen' id='contact'>
                <div className="px-6 h-full text-gray-800">
                    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div
                            className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                            <img
                                src={mssg}
                                className="w-full"
                                alt="Drop a Message"
                            />
                        </div>


                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <div className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="text-lg font-semibold text-black mb-0 mr-14 ml-2">Connect With Me </p>
                                <a
                                    href="https://www.instagram.com/yad_winder__/"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block p-3 bg-[#ff0000] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-zinc-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                >
                                    <FiInstagram className="w-5 h-5" />
                                </a>

                                <a
                                    href="https://github.com/Rko-8001"
                                    data-mdb-ripple="true"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-mdb-ripple-color="light"
                                    className="inline-block p-3 bg-[#ff0000] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-zinc-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                >
                                    <BsGithub className="w-5 h-5" />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/yadwinder-singh-0183421b8/"
                                    target="_blank"
                                    rel="noreferrer"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block p-3 bg-[#ff0000] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-zinc-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                >
                                    <BsLinkedin className="w-5 h-5" />
                                </a>

                            </div>
                            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                <p className="text-center font-semibold mx-4 mb-0">Email Me</p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <InputField value={values.fullName} handleChange={handleChange} label="Full Name" name="fullName" type="text" placeholder="John Doe" />
                                <InputField value={values.email} handleChange={handleChange} label="E-Mail" name="email" type="email" placeholder="jphn@example.com" />
                                <TextareaField value={values.message} handleChange={handleChange} label="Your message here" name="message" />
                                <button type="submit" className="mt-4 bg-gray-900 text-gray-200 rounded hover:bg-gray-700 px-4 py-2 focus:outline-none">
                                    Send 
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactMe;