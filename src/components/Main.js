import React from 'react';
// import Typed from 'react-typed';
import myImage from './../assets/header-img.svg';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Typewriter from './Typewriter';

function Main() {

    return (
        <div id="main" className="flex flex-col sm:min-h-0 min-h-[calc(100vh-6.4rem)] pl-[3rem] lg:mt-2 lg:m-16 lg:pt-0 pr-[1rem] py-[0rem] md:mt-0 md:pt-0 tm:flex-col sm:flex-row sm:px-[1.5rem] sm:mt-0">
            <div className="flex flex-col sm:flex-row sm:items-center pt-0 justify-center w-full min-h-[58vh] tm:min-h-min tm:w-full sm:min-h-min sm:w-full sm:pt-0 tm:pt-0">
                <div className="flex flex-col justify-center sm:w-[70%] w-full sm:mr-5">
                    <h1 className="font-[400] text-[2rem] md:text-[1.7rem] tm:text-[2rem] sm:text-[1.6rem]">
                        Hi,
                    </h1>
                    <blockquote className="font-[800] text-[2rem] text-[#5a4bb0;] mt-[-10px] lg:text-[2.4rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1rem]">
                        I'm
                        <span className="before:block mx-4 mb-6 mt-4 before:absolute before:-inset-2 before:-skew-y-[3deg] before:bg-[#5a4bb0;] relative inline-block">
                            <span className="relative text-[#fffffff0] dark:text-[#20262E]">Farrell Liko T.</span>
                        </span>
                    </blockquote>
                    <div className="h-10 mt-4">
                        <Typewriter />
                    </div>
                    <p className="dark:text-[#ccc] text-justify leading-loose pt-5 font-[400] mt-[-.8rem] text-custom-18 sm:text-[1rem] w-[90%] md:w-[95%] tm:w-full sm:w-full sm:mt-0">
                        I am a recent Informatics graduate from Krida Wacana Christian University, with a strong foundation in Flutter, Kotlin, Python, and React. My academic experience, including participation in the Android Path program at Bangkit 2023, has fueled my passion for front-end development in both web and mobile platforms. I am now eager to apply my skills professionally, delivering intuitive and user-friendly solutions.
                        <br/>
                        <br/>
                        If you're looking for a dedicated front-end developer, I would love to connect and explore potential opportunities.
                    </p>

                </div>
                <div className="flex py-[10px] tm:mt-[40px] items-start mt-[10px] tm:pr-0 sm:pr-0 sm:justify-between sm:flex-col">
                    <div className="box" >
                        <div className="h-full justify-end flex items-center sm:justify-center">
                            <img
                                src={myImage}
                                alt="main"
                                className="h-[80%] min-h-[100px] min-w-[100px] tm:h-[36px] tm:mt-[200px] sm:min-h-[100px] sm:min-w-[100px] sm:ml-[30px] animate-float" 
                            />
                        </div>


                    </div>


                </div>
                <div className="flex place-content-center mt-7 ">
                    <div className="flex flex-row sm:flex-col gap-4">
                        <a rel="noreferrer" href="https://www.linkedin.com/in/farrelllikotanlimhuijaya/" target="_blank">
                            <AiFillLinkedin size={40} className="cursor-pointer" />
                        </a>
                        <a rel="noreferrer" href="https://github.com/DelloMellow" target="_blank">
                            <AiFillGithub size={40} className="cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Main;
